import {
	Geist,
	Instrument_Serif,
	JetBrains_Mono,
	Domine,
} from "next/font/google";
import localFont from "next/font/local";

// const geist = localFont({
// 	src: '/local-fonts/Geist-VariableFont_wght.ttf',
// 	variable: '--font-sans'
// })

// const fontMono = localFont({
// 	src: './DepartureMono/DepartureMono-Regular.woff2',
// 	variable: '--font-mono'
// })

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontSerif = Instrument_Serif({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-mono",
});

const fontProse = Domine({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-prose",
});

export { fontSans, fontSerif, fontMono, fontProse };
