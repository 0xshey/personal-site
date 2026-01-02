import { getPostBySlug } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";

import { CodeBlock } from "@/components/writing/code-block";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug, ["title"]);
	return {
		title: `${post.title} | Shey`,
	};
}

export default async function Post({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug, ["title", "date", "slug", "content"]);

	return (
		<div className="w-full max-w-screen-2xl mx-auto mt-12">
			<Link
				href="/writing"
				className="inline-flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground mb-8 text-sm group px-4 py-2"
			>
				<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-all duration-200" />
				<p className="transition-all duration-200">Back to Writing</p>
			</Link>
			<article className="mt-24 w-full max-w-7xl mx-auto">
				<header className="mt-12">
					<time className="text-muted-foreground">
						{format(new Date(post.date), "MMMM d, yyyy")}
					</time>
				</header>

				<div className="prose prose-neutral text-foreground/80 dark:prose-invert max-w-none">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						components={{
							h1: ({ node, ...props }) => (
								<h1
									className="text-8xl font-medium font-serif mt-12 mb-4 pb-2 text-foreground"
									{...props}
								/>
							),
							h2: ({ node, ...props }) => (
								<h2
									className="text-2xl font-medium mt-8 mb-4 text-foreground"
									{...props}
								/>
							),
							h3: ({ node, ...props }) => (
								<h3
									className="text-xl font-bold mt-6 mb-3 text-foreground"
									{...props}
								/>
							),
							h4: ({ node, ...props }) => (
								<h4
									className="text-lg font-bold mt-6 mb-3 text-foreground"
									{...props}
								/>
							),
							p: ({ node, ...props }) => (
								<p
									className="leading-relaxed mb-6 text-foreground tracking-wide"
									{...props}
								/>
							),
							a: ({ node, ...props }) => {
								const isExternal =
									props.href?.startsWith("http");
								const className =
									"text-primary hover:underline underline-offset-4 decoration-muted-foreground/50 transition-colors";

								if (isExternal) {
									return (
										<a
											target="_blank"
											rel="noopener noreferrer"
											className={className}
											{...props}
										/>
									);
								}
								return (
									<Link
										href={props.href as string}
										className={className}
										{...props}
									/>
								);
							},
							ul: ({ node, ...props }) => (
								<ul
									className="list-disc list-outside ml-6 mb-6 space-y-2"
									{...props}
								/>
							),
							ol: ({ node, ...props }) => (
								<ol
									className="list-decimal list-outside ml-6 mb-6 space-y-2"
									{...props}
								/>
							),
							li: ({ node, ...props }) => (
								<li className="pl-1" {...props} />
							),
							blockquote: ({ node, ...props }) => (
								<blockquote
									className="border-l-4 border-muted pl-4 italic my-6"
									{...props}
								/>
							),
							code: ({ node, className, children, ...props }) => {
								const match = /language-(\w+)/.exec(
									className || ""
								);
								const isInline =
									!match && !String(children).includes("\n");

								return isInline ? (
									<code
										className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground"
										{...props}
									>
										{children}
									</code>
								) : (
									<CodeBlock
										language={match ? match[1] : ""}
										value={String(children).replace(
											/\n$/,
											""
										)}
										className={className}
									/>
								);
							},
							pre: ({ node, ...props }) => (
								<pre
									className="p-0 bg-transparent"
									{...props}
								/>
							),
						}}
					>
						{post.content}
					</ReactMarkdown>
				</div>
			</article>
		</div>
	);
}
