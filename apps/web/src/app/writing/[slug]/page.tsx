import Link from "next/link";
import { notFound } from "next/navigation";
import MotionProvider from "@/components/providers/motion-provider";
import Markdown from "@/components/writing/markdown";
import { getArticle, getArticleSlugs } from "@/lib/writing";

export function generateStaticParams() {
	return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = getArticle(slug);
	if (!article) return {};
	return { title: article.title, description: article.description };
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = getArticle(slug);

	if (!article) notFound();

	return (
		<MotionProvider>
			<div className="flex flex-col gap-12">
				<Link
					href="/"
					className="text-sm hover:opacity-50 transition-opacity w-fit"
				>
					← back
				</Link>

				<div className="flex flex-col gap-2">
					<p className="text-sm font-medium">{article.title}</p>
					<p className="text-sm text-foreground/40">{article.date}</p>
				</div>

				<Markdown content={article.content} />
			</div>
		</MotionProvider>
	);
}
