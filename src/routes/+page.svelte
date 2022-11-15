<script lang="ts">
	import Message from '@feltcoop/felt/ui/Message.svelte';

	import Mreows from '$lib/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="markup column">
	<section>
		<header class="centered-hz">
			<h1>spiderspace<small><a href="https://github.com/spiderspace">🕸</a></small>org</h1>
		</header>
		<Message
			><span slot="icon"
				>{#if mreows}{mreows[0].icon}{:else}✨{/if}</span
			><span
				>hello, welcome to spiderspace.org <a href="https://github.com/spiderspace/spiderspace.org">
					<span style:font-size="var(--font_size_xl)">🐙😺</span> (source code)</a
				></span
			></Message
		>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
</style>
