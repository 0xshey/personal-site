import { format } from "date-fns";

export default function Footer() {
	const today = new Date();
	return (
		<footer className="text-center mb-8 mt-20 flex flex-col gap-2 md:flex-row  relative items-center justify-between p-4">
			<div className="font-mono text-xs italic text-gray-400 px-4 py-1 border rounded-full backdrop-blur-md bg-white/20">
				{format(today, "EEEE, do MMMM")}
			</div>
			<div className="font-mono text-xs italic text-gray-400 px-4 py-1">
				فلسطين
			</div>
			<div className="font-mono text-xs italic text-gray-400 px-4 py-1 border rounded-full backdrop-blur-md bg-white/20">
				&copy; {format(today, "yyyy")} Shey Laplanche
			</div>
		</footer>
	);
}
