import { format } from "date-fns";
import { differenceInBusinessDays } from "date-fns";
import { differenceInCalendarDays } from "date-fns/fp";

export default function ArticleHeader({
	title,
	date,
	summary,
}: {
	title: string;
	date: string;
	summary?: string;
}) {
	const publishedDate = new Date(date);
	const withinAWeek = differenceInCalendarDays(publishedDate, new Date()) < 7;

	return (
		<div className="w-full flex flex-col items-center justify-center gap-4 min-h-96 backdrop-blur-md bg-gradient-to-t from-white/40 to-transparent">
			<div className="text-sm flex items-center gap-2">
				{withinAWeek ? (
					<span className="min-h-1.5 min-w-1.5 bg-green-600 rounded-full" />
				) : null}
				<p className="text-sm">
					{format(publishedDate, "EEEE, do MMMM yyyy")}
				</p>
			</div>
			<h1 className="text-5xl tracking-tighter">{title}</h1>
			<p className="text-center text-balance w-4/5">{summary}</p>
		</div>
	);
}
