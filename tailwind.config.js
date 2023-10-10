/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				midnight: "#000000ff",
				bg: "#07063dff",
				secondarybg: "#212b48",
				tertiarybg: "#539ed6",
				action: "#724be4ff",
				important: "#87ceebff",
				snow: "#e5e5e5ff",
				darksnow: "#a0a0a0",
			},
		},
	},
	plugins: [],
};
