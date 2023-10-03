/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			"space-mono": "Space Mono, monospace",
		},
		fontSize: {
			sm: ["0.8125rem", "1.25rem"], // 13px 20px
			base: ["0.9375rem", "1.5625rem"], // 15px 25px
			lg: ["1rem", "1.5rem"], // 16px 24px
			xl: ["1.375rem", "2.0625rem"], // 22px 33px
			"2xl": ["1.625rem", "2.375rem"], // 26px 38px
		},
		extend: {
			colors: {
				"primary-blue": "#0079ff",
				"secondary-blue": "#60abff",
				"bluish-gray": "#697c9a",
				"grayish-blue": "#4b6a9b",
				"dark-gray": "#2b3442",
				"very-light-blue": "#f6f8ff",
				"off-white": "#fefefe",
				"almost-black": "#141d2f",
				"very-dark-blue": "#1e2a47",
				"error-red": "#f74646",
			},
		},
	},
	plugins: [],
};
