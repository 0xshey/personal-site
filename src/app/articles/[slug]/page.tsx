"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ArticleLayout from "@/components/layouts/article-layout";
import getArticles, { articleTypes } from "@/api/articles";
import { ArticleHeader, ArticleContent } from "@/components/article";

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

	if (!article) {
		return <div>Loading...</div>;
	}

	return (
		<ArticleLayout>
			<ArticleHeader
				title={article.seo.title}
				date={article.publishedAt}
				summary={article.seo.description}
			/>
			<ArticleContent article={article} />
		</ArticleLayout>
	);
}
