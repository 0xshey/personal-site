export default function BackgroundProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
			{/* Background Glowing Orbs */}
			{/* <div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 top-80 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 top-20 -right-4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 bottom-60 -right-2 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 bottom-10 left-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-6000" /> */}

			<div>{children}</div>
		</div>
	);
}
