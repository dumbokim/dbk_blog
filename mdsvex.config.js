import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		backticks: true,
	},

	layout: {
		post: 'src/routes/post/post.svelte'
	},

	// remarkPlugins: [],
	// rehypePlugins: []
});

export default config;
