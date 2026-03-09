import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function Markdown({ content }: { content: string }) {
	return (
		<div className="flex flex-col gap-4">
			<ReactMarkdown
				remarkPlugins={[remarkGfm, remarkMath]}
				rehypePlugins={[rehypeKatex]}
				components={{
					h1: ({ children }) => (
						<p className="text-sm font-medium text-black pt-4 first:pt-0">
							{children}
						</p>
					),
					h2: ({ children }) => (
						<p className="text-sm font-medium text-black pt-2">{children}</p>
					),
					h3: ({ children }) => (
						<p className="text-sm font-medium text-black/60">{children}</p>
					),
					p: ({ children }) => (
						<p className="text-sm leading-relaxed text-black/60">{children}</p>
					),
					a: ({ href, children }) => (
						<a
							href={href}
							className="underline hover:opacity-50 transition-opacity"
							target={href?.startsWith("http") ? "_blank" : undefined}
							rel={
								href?.startsWith("http") ? "noopener noreferrer" : undefined
							}
						>
							{children}
						</a>
					),
					strong: ({ children }) => (
						<strong className="font-medium text-black">{children}</strong>
					),
					em: ({ children }) => <em className="italic">{children}</em>,
					code: ({ children, className }) => {
						const isBlock = Boolean(className);
						if (isBlock) return <code>{children}</code>;
						return (
							<code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
								{children}
							</code>
						);
					},
					pre: ({ children }) => (
						<pre className="text-xs font-mono bg-muted p-4 rounded-xl overflow-x-auto">
							{children}
						</pre>
					),
					ul: ({ children }) => (
						<ul className="flex flex-col gap-1">{children}</ul>
					),
					ol: ({ children }) => (
						<ol className="flex flex-col gap-1">{children}</ol>
					),
					li: ({ children }) => (
						<li className="text-sm text-black/60 flex gap-2">
							<span className="text-black/30 shrink-0">—</span>
							<span>{children}</span>
						</li>
					),
					hr: () => <hr className="border-border" />,
					blockquote: ({ children }) => (
						<blockquote className="border-l-2 border-border pl-4">
							{children}
						</blockquote>
					),
					img: ({ src, alt }) =>
						typeof src === "string" && !src.includes("placeholder") ? (
							<img src={src} alt={alt ?? ""} className="rounded-xl w-full" />
						) : (
							<></>
						),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
