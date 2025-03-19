export default function BackgroundProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		// <div className="relative bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
		<div className="relative">
			{/* Gradient bg */}
			<div className="fixed -z-10 w-[100vw] h-[100vh] bg-radial-[at_50%_0%] from-yellow-400 via-yellow-50 to-transparent to-100%" />

			<div>{children}</div>
		</div>
	);
}
