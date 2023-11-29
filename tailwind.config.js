/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					desaturatedRed: "hsl(0, 36%, 70%)",
					softRed: "hsl(0, 93%, 68%)",
				},
				neutral: {
					darkGrayishRed: "hsl(0, 6%, 24%)",
				},
				gradients: {
					linear:
						"linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
					linear2:
						"linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
				},
			},
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
