export default function ResumeProject({
	date,
	course,
	institution,
	location,
}: {
	date: string;
	course: string;
	institution?: string | React.ReactNode;
	location?: string;
}) {
	return (
		<div className="grid grid-cols-4 p-2 bg-background/0 hover:bg-background/25 transition-all duration-300">
			<div className="col-span-1">
				<p>{date}</p>
			</div>
			<div className="col-span-3 flex flex-col items-start gap-1 w-full">
				<h3 className="font-medium">
					{course} {institution && `at ${institution}`}
				</h3>

				{location && <p>{location}</p>}
			</div>
		</div>
	);
}
