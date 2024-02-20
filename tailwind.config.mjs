/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/fonts/*',],
	theme: {
		extend: {
			
		},
		fontFamily: {
			sans: ['Oxygen', 'sans-serif'],
			serif: ['DMSerifDisplay','serif'],
		},
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
	daisyui: {
		themes: ["business", "dracula", "fantasy"]
	}
}