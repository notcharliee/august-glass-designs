/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				"scroll": "scroll 20s linear infinite"
			},
			colors: {
				"background": "#FEF6E6",
				"primary": "#141413",
				"secondary": "#4E4E4B",
			},
			fontFamily: {
				"serif": ["DM Serif Text", "serif"],
				"display": ["DM Serif Display", "serif"],
			},
			keyframes: {
				"scroll": {
					"0%": { "transform": "translateY(0%);" },
					"100%": { "transform": "translateY(calc(216px * -6));" }
				}
			},
		},
	},
	plugins: [],
}
