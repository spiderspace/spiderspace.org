// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'spiderspace.org',
	version: '0.0.1',
	description: 'community website with a YouTube channel about building it',
	motto: 'weaving web community',
	glyph: '🕸️',
	logo: 'logo.svg',
	logo_alt: 'a friendly yellow spider facing you',
	license: 'MIT',
	public: true,
	homepage: 'https://www.spiderspace.org/',
	repository: 'https://github.com/spiderspace/spiderspace',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/spiderspace/spiderspace/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.12'},
	devDependencies: {
		'@ryanatkn/belt': '^0.24.1',
		'@ryanatkn/eslint-config': '^0.1.3',
		'@ryanatkn/fuz': '^0.106.1',
		'@ryanatkn/gro': '^0.128.0',
		'@ryanatkn/moss': '^0.6.2',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.17',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@typescript-eslint/eslint-plugin': '^7.13.1',
		'@typescript-eslint/parser': '^7.13.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		svelte: '^5.0.0-next.165',
		'svelte-check': '^3.8.2',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
} satisfies Package_Json;

export const src_json = {name: 'spiderspace.org', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
