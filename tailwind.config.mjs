/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#1a1a2e',
				primary: '#714B67',
				accent: '#714B67',
				secondary: '#017E84',
				gray: '#6b7280',
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