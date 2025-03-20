import { Instrument_Sans, Instrument_Serif, Spline_Sans_Mono  } from 'next/font/google';
// import localFont from 'next/font/local'; // For Geist - not on next/font/google yet

// const geist = localFont({
// 	src: '/local-fonts/Geist-VariableFont_wght.ttf',
// 	variable: '--font-sans'
// })

const fontSans = Instrument_Sans({
	subsets: ['latin'],
	variable: '--font-sans'
})

const fontSerif = Instrument_Serif({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-serif'
})

const fontMono = Spline_Sans_Mono({
	subsets: ['latin'],
	variable: '--font-mono'
})

export { fontSans, fontSerif, fontMono }