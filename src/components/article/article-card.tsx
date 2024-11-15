import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { articleTypes } from "@/api/articles";
import { differenceInCalendarDays } from "date-fns";

export default function ArticleCard({ article }: { article: articleTypes }) {
	const router = useRouter();

	const publishedDate = new Date(article.publishedAt);
	const withinAWeek = differenceInCalendarDays(publishedDate, new Date()) < 7;

	const handleClick = () => {
		router.push(`/articles/${article.slug}`);
	};

	return (
		<div
			className="cursor-pointer flex flex-col backdrop-blur-md rounded overflow-hidden w-full border-1 border-transparent hover:border-gray-800"
			onClick={handleClick}
		>
			<div className="p-4 flex flex-col gap-1">
				<div className="flex items-center gap-2">
					{withinAWeek ? (
						<span className="min-h-1.5 min-w-1.5 bg-green-600 rounded-full" />
					) : null}
					<p className="text-xs uppercase tracking-wider text-gray-800/40">
						{format(new Date(article.publishedAt), "d/MM")}
					</p>
				</div>
				<div className="flex justify-between">
					<h1 className="leading-tight font-sans font-medium text-left text-pretty">
						{article.title}
					</h1>
				</div>
				<p className="text-left text-gray-900/60 text-">
					{article.seo.description}
				</p>
			</div>
		</div>
	);
}
