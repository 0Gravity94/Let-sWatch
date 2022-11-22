/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		fontFamily: {
			nunito: ["Nunito"],
			indie: ["Indie Flower"],
		},
		extend: {
			colors: {
				"Pastel-green-1": "#28DF99",
				"Pastel-green-2": "#99F3BD",
				"Pastel-green-3": "#D2F6C5",
				"Pastel-green-4": "#F6F7D4",
			},
		},
	},
	plugins: [],
};
