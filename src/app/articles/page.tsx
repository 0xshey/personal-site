"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import getArticles, { articleTypes } from "@/api/articles";
import { ArticleCard } from "@/components/article";
import MainLayout from "@/components/layouts/main-layout";

export default function Page() {
	const [articles, setArticles] = useState<null | articleTypes[]>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles().then((data) => {
			setArticles(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div className="w-full h-full p-8 flex items-center justify-center">
				Loading...
			</div>
		);
	}

	return (
		<MainLayout>
			<div className="flex flex-col items-center justify-center px-4 gap-4 min-h-48">
				<h1 className="text-center font-sans text-4xl">Articles</h1>
				<p className="text-center font-mono text-sm text-balance">
					I call them articles. You can call it a blog or whatever.
					Here I plan to post my thoughts and recordings of my journey
					as a developer and human.
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
			<div className="w-full flex justify-center p-4">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</MainLayout>
	);
}
