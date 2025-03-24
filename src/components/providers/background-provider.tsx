export default function BackgroundProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		// <div className="relative bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
		<div className="relative">
			{/* Gradient bg */}

			<div>{children}</div>
		</div>
	);
}
