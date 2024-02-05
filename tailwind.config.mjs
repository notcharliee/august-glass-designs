/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"background": "#FEF6E6",
				"foreground": "#141413",
				"accent": "#4E4E4B",
			}
		},
	},
	plugins: [],
}
