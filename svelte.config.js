import {typescript} from 'svelte-preprocess-esbuild';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {immutable: true},
	kit: {
		adapter: adapter(),
		files: {assets: 'src/static'},
	},
};
