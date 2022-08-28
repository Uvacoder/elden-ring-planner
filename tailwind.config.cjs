const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	darkMode: 'class',
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require("@brainandbones/skeleton/tailwind.cjs")
	],
};

module.exports = config;
