"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { differenceInCalendarDays, format } from "date-fns";
import getArticles, { articleTypes } from "@/lib/articles";

export default function Page() {
	const [articles, setArticles] = useState<null | articleTypes[]>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		getArticles().then((data) => {
			setArticles(data);
			setLoading(false);
		});
	}, []);

	function navigateToArticle(slug: string) {
		router.push(`/articles/${slug}`);
	}

	if (loading) {
		return (
			<div className="w-full h-full p-8 flex items-center justify-center">
				Loading...
			</div>
		);
	}

	return (
		<>
			{/* Header */}
			<div className="w-full flex flex-col items-center bg-gradient-to-t from-white/40 to-transparent">
				<div className="max-w-md md:max-w-2xl w-full flex flex-col items-center justify-center gap-4 py-12 md:py-32">
					<h1 className="text-center font-sans text-4xl">Articles</h1>
					<p className="text-center font-mono text-sm text-balance">
						I call them articles. You can call it a blog or
						whatever. Here I plan to post my thoughts and recordings
						of my journey as a developer and human.
						<br />
						You can also follow these on{" "}
						<Link
							href="https://0xshey.hashnode.dev/"
							className="text-blue-800 underline"
						>
							Hashnode
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Article List */}
			<div className="max-w-md md:max-w-2xl w-full flex justify-center p-4">
				<div className="w-full flex flex-col items-center gap-8 justify-center p-4">
					{articles?.length ? (
						articles.map((article) => (
							// Article Card
							<div
								key={article.id}
								onClick={() => navigateToArticle(article.slug)}
								className="cursor-pointer flex flex-col w-full gap-2 p-4 bg-white/40"
							>
								<div className="flex items-center gap-2">
									<p className="text-xs uppercase tracking-wider text-gray-800/40">
										{format(
											new Date(article.publishedAt),
											"d/MM"
										)}
									</p>
									{differenceInCalendarDays(
										new Date(),
										new Date(article.publishedAt)
									) < 7 ? (
										<span className="h-1.5 w-1.5 bg-green-600 rounded-full" />
									) : null}
								</div>
								<h1 className="leading-tight font-medium text-pretty text-lg">
									{article.title}
								</h1>
								<p className="text-pretty text-gray-700">
									{article.seo.description}
								</p>
							</div>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</>
	);
}
