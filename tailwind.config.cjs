/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				navbar: '#171717',
				primary: {
					1: '#8f8f8f',
					2: '#c0c0c0'
				}
			},
			fontFamily: {
				'noto-serif': ['Noto Serif', 'serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
