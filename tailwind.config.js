/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				gradient: "linear-gradient(0deg, rgba(96, 96, 95, 0.20) 0%, rgba(96, 96, 95, 0.20) 100%)",
				"green-white":
					"radial-gradient(115.27% 77.75% at 79.2% 44.53%, rgba(214, 227, 214, 0.00) 0%, #D6E3D6 100%)",
				heroBg: "url('../src/images/heroImg.png')",
				img: "url('../src/images/weight-loss.png')",
				img5: "url('../src/images/img5.jpeg')",
				accentp: "url('../src/images/accentp.png')",
				accentC: "url('../src/images/contour.png')",
				lipfiller: "url('../src/images/lipfillerHero.png')",
				medical: "url('../src/images/medicalhero.png')",
				contactBg: "url('../src/images/contact-bg.svg')",
				pyscha:"url('../src/images/psychheros.png')",
				dermalfiller:"url('../src/images/dermalheros.png')"
			},

			boxShadow: {
				custom: "0px 5px 15px 0px rgba(0, 0, 0, 0.15)",
			},

			backgroundPosition: {
				"top-mid": "50% 28%",
			},

			colors: {
				primary: "#997755",
				"primary-btn": "#F8976A",
				secondary: "#99775566",
				secondary2: "#FFF5E9",
				"green-200": "#D6E3D6",
				"green-300": "#ACC7AE",
				"green-400": "#83AB85",
				"green-500": "#598F5C",
				"green-600": "#2F7334",
				"green-700": "#06570B",
				lime: "#D6E3D6",
				gray: "#828282",
				gray2: "#333333",
				gray1: "#D9D9D9",
				gray3: "#BFBFBF",
				gray4: "#e9e9e7",
				dark: "#3c3c3b",
				dark1: "#d1d2d1",
				dark2: "#b3b3b3",
				dark3: "#2B2B2A",
				dark4: "#60605F",
				dark5: "#06570B4D",
			},
			fontFamily: {
				quintessential: ["Quintessential", "serif"],
			},
			fontSize: {
				3.5: "0.875rem",
				26: "1.625rem",
				30: "1.875rem",
				32: "2rem",
				40: "2.5rem",
				48: "3rem",
			},
			lineHeight: {
				150: "150%",
				140: "140%",
				133: "133.333%",
				125: "125%",
			},
			padding: {
				38: "9.375rem",
				18: "4.4375rem",
			},
			maxWidth: {
				desktop: "1139px",
			},
			screens: {
				md: "767px",
				lg: "1023px",
				xl: "1279px",
			},
		},
	},
	plugins: [],
};
