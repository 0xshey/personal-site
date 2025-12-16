import { Geist, Instrument_Serif, Spline_Sans_Mono  } from 'next/font/google';
import localFont from 'next/font/local'

// const geist = localFont({
// 	src: '/local-fonts/Geist-VariableFont_wght.ttf',
// 	variable: '--font-sans'
// })

const fontMono = localFont({
	src: './DepartureMono/DepartureMono-Regular.woff2',
	variable: '--font-mono'
})

const fontSans = Geist({
	subsets: ['latin'],
	variable: '--font-sans'
})

const fontSerif = Geist({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-serif'
})

// const fontMono = Spline_Sans_Mono({
// 	subsets: ['latin'],
// 	variable: '--font-mono'
// })

export { fontSans, fontSerif, fontMono }