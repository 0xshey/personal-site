"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { differenceInCalendarDays, format } from "date-fns";
import getArticles, { articleTypes } from "@/lib/articles";
import { ArticleContent } from "@/components/article";

export default function Slug() {
	const { slug } = useParams();
	const [article, setArticle] = useState<null | articleTypes>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles(slug).then((data) => {
			setArticle(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!article) {
		return <div>Article not found (???)</div>;
	}

	return (
		<>
			{/* Header */}
			<div className="w-full flex flex-col items-center bg-gradient-to-t from-white/40 to-transparent">
				<div className="max-w-md md:max-w-3xl w-full flex flex-col items-center justify-center gap-4 py-12 md:py-32">
					<div className="flex items-center gap-2 text-sm">
						{differenceInCalendarDays(
							article.publishedAt,
							new Date()
						) < 7 ? (
							<span className="min-h-1.5 min-w-1.5 bg-green-600 rounded-full" />
						) : null}
						<p className="text-sm">
							{format(
								new Date(article.publishedAt),
								"EEEE, do MMMM yyyy"
							)}
						</p>
					</div>
					<h1 className="text-center text-5xl tracking-tighter">
						{article.title}
					</h1>
					<p className="text-center text-balance w-4/5">
						{article.seo.description}
					</p>
				</div>
			</div>

			{/* Article */}
			<div className="max-w-md md:max-w-3xl">
				<ArticleContent article={article} />
			</div>
		</>
	);
}
