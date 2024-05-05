/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#38BDF8',
					secondary: '#221551',
					'base-100': '#345da7',
				},
			},
		],
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
};
