/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#000000',
				primary: '#1e3a5f',
				accent: '#1e3a5f',
				secondary: '#4a5568',
				gray: '#718096',
				light: '#ffffff',
			},
			fontFamily: {
				primary: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
		},
	},
	plugins: [],
};