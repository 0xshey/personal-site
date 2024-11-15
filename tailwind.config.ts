import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: 'class',
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
		"./src/mdx-components.tsx"
	],
	theme: {
		
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
				headline: ["var(--font-headline)"],
				prose: ["var(--font-serif)"],
				handwritten: ["var(--font-handwritten)"],
			},
			colors: {
				background: {
					DEFAULT: "#fafafa",
				},
				foreground: {
					DEFAULT: "#0e0e0e",
				},
			},
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
