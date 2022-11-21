<script lang="ts" context="module">
	import {configureLogLevel, LogLevel, Logger} from '@feltcoop/util/log.js';

	if (!dev) {
		configureLogLevel(LogLevel.Info);
		if (!browser) {
			Logger.prefixes.unshift(() => format(new Date(), 'M/d H:mm:ss.SSS'));
		}
	}
</script>

<script lang="ts">
	import '@feltcoop/felt/style.css';
	import '@feltcoop/felt-server/ui/style.css';
	import '$lib/style.css';
	import {setDevmode} from '@feltcoop/felt/devmode.js';
	import DevmodeControls from '@feltcoop/felt/DevmodeControls.svelte';
	import {page} from '$app/stores';
	import {browser, dev} from '$app/environment';
	import Dialogs from '@feltcoop/felt/dialog/Dialogs.svelte';
	import {isEditable, swallow} from '@feltcoop/util/dom.js';
	import {format} from 'date-fns';
	import {toSocketStore} from '@feltcoop/felt-server/ui/socket.js';
	import Luggage from '@feltcoop/felt-server/ui/Luggage.svelte';
	import MainNav from '@feltcoop/felt-server/ui/MainNav.svelte';
	import Onboard from '@feltcoop/felt-server/ui/Onboard.svelte';
	import {setUi, toUi} from '@feltcoop/felt-server/ui/ui.js';
	import {syncUiToUrl} from '@feltcoop/felt-server/ui/syncUiToUrl.js';
	import {toDispatch, toDispatchBroadcastMessage} from '@feltcoop/felt-server/app/dispatch.js';
	import {setApp} from '@feltcoop/felt-server/ui/app.js';
	import AccountForm from '@feltcoop/felt-server/ui/AccountForm.svelte';
	import {WEBSOCKET_URL} from '@feltcoop/felt-server/config.js';
	import {toWebsocketApiClient} from '@feltcoop/felt-server/ui/WebsocketApiClient.js';
	import {toHttpApiClient} from '@feltcoop/felt-server/ui/HttpApiClient.js';
	import {findHttpService, findWebsocketService} from '@feltcoop/felt-server/ui/services.js';
	import Contextmenu from '@feltcoop/felt-server/ui/contextmenu/Contextmenu.svelte';
	import {components} from '@feltcoop/felt-server/app/components.js';
	import {mutations} from '@feltcoop/felt-server/app/mutations.js';
	import AppContextmenu from '@feltcoop/felt-server/app/contextmenu/AppContextmenu.svelte';
	import ActingPersonaContextmenu from '@feltcoop/felt-server/app/contextmenu/ActingPersonaContextmenu.svelte';
	import SocketConnection from '@feltcoop/felt-server/ui/SocketConnection.svelte';
	import LinkContextmenu from '@feltcoop/felt-server/app/contextmenu/LinkContextmenu.svelte';
	import ErrorMessage from '@feltcoop/felt-server/ui/ErrorMessage.svelte';
	import {deserialize, deserializers} from '@feltcoop/felt-server/util/deserialize.js';
	import type {ClientSession} from '@feltcoop/felt-server/session/clientSession.js';

	export let data: ClientSession; // TODO should be `LayoutServerLoad`, right? but doesn't typecheck if so

	const log = new Logger('[layout]');

	let initialMobileValue = false; // TODO this hardcoded value causes mobile view to change on load -- detect for SSR via User-Agent?
	const MOBILE_WIDTH = '50rem'; // treats anything less than 800px width as mobile
	if (browser) {
		// TODO to let the user override with their own preferred mobile setting,
		// which I could see wanting to do for various reasons including in `devmode`,
		// we need to either branch logic here, or have a different derived `media` value
		// that only reads this default value when the user has no override.
		const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`);
		initialMobileValue = mediaQuery.matches;
		mediaQuery.onchange = (e) => dispatch.SetMobile(e.matches);
	}

	const devmode = setDevmode();
	const socket = toSocketStore(
		(message) => websocketClient.handle(message.data),
		() => dispatch.Ping(),
	);
	const ui = toUi(data, initialMobileValue, components, (errorMessage) => {
		dispatch.OpenDialog({Component: ErrorMessage, props: {text: errorMessage}});
	});
	setUi(ui);

	const dispatch = toDispatch(ui, mutations, (e) =>
		websocketClient.find(e) ? websocketClient : httpClient.find(e) ? httpClient : null,
	);

	// The websocket client is the one we use as much as possible for efficiency.
	// The downside is it doesn't scale as well because the server holds a connection per client.
	// TODO make websockets optional to improve scalability
	const websocketClient = toWebsocketApiClient(
		findWebsocketService,
		socket.send,
		toDispatchBroadcastMessage(ui, mutations, dispatch),
		async (message) => {
			if (message.status === 401) {
				// this condition occurs when the server fails to parse and validate session cookies
				// TODO maybe display an error on the sign in screen
				if ($session.guest) {
					await dispatch.SignOut();
				} else {
					dispatch.SetSession({session: {guest: true}});
				}
			} else {
				log.error('unhandled status message', message);
			}
		},
		deserialize(deserializers),
	);
	// The http client is needed for cookie-related calls like `SignIn` and `SignOut`.
	const httpClient = toHttpApiClient(findHttpService, deserialize(deserializers));

	const app = setApp({ui, dispatch, devmode, socket});
	if (browser) {
		(window as any).app = app;
		Object.assign(window, app);
		log.trace('app', app);
	}

	const {session} = ui;
	dispatch.SetSession({session: $session});
	$: syncUiToUrl(ui, $page.params, $page.url);

	const {mobile, layout, contextmenu, dialogs, sessionPersonas, personaSelection} = ui;

	$: guest = $session.guest;
	$: onboarding = !guest && !$sessionPersonas.value.length;
	$: selectedPersona = $personaSelection; // this line must be after `syncUiToUrl`

	let clientWidth: number;
	let clientHeight: number;
	$: $layout = {width: clientWidth, height: clientHeight}; // TODO event? `UpdateLayout`?

	// TODO `ShortcutKeys` or `Hotkeys` component with some interface
	const onWindowKeydown = async (e: KeyboardEvent) => {
		if (e.key === '`' && !e.ctrlKey && !isEditable(e.target)) {
			swallow(e);
			dispatch.ToggleMainNav();
		}
	};
</script>

<svelte:body
	use:contextmenu.action={[
		[ActingPersonaContextmenu, selectedPersona ? {persona: selectedPersona} : undefined],
		[AppContextmenu, null],
	]}
/>

<svelte:head>
	<link rel="shortcut icon" href="/favicon.png" />
</svelte:head>

<svelte:window on:keydown|capture={onWindowKeydown} />

<SocketConnection {socket} url={WEBSOCKET_URL} />

<div class="layout" class:mobile={$mobile} bind:clientHeight bind:clientWidth>
	{#if !guest && !onboarding}
		<Luggage />
		<MainNav />
	{/if}
	<main>
		{#if guest}
			<div class="main-content account column markup">
				<AccountForm {guest} />
			</div>
		{:else if onboarding}
			<div class="main-content column">
				<Onboard />
			</div>
		{:else}
			<slot />
		{/if}
	</main>
	<DevmodeControls {devmode} />
	<Dialogs {dialogs} on:close={() => dispatch.CloseDialog()} />
	<Contextmenu {contextmenu} {LinkContextmenu} />
</div>

<style>
	.layout {
		height: 100%;
		width: 100%;
		display: flex;
		position: relative;
	}

	main {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.main-content {
		max-height: 100%; /* fix vertical scrolling */
		padding: var(--spacing_xl);
	}
	.account {
		align-items: center;
	}
</style>
