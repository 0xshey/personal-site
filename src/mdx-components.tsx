import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import ArticleSection from "@/components/article/section";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className="text-2xl font-medium">{children}</h1>
		),
		li: ({ children }) => (
			<li style={{ fontSize: "16px", lineHeight: "1.5" }}>
				&#8226; {children}
			</li>
		),
		img: (props) => (
			<>
				<Image
					className="block rounded-2xl overflow-hidden"
					{...props}
					layout="responsive"
					width={100}
					height={100}
					alt={props.alt as string}
					src={props.src as string}
				/>
				{props.title && (
					<span className="w-full text-center">{props.title}</span>
				)}
			</>
		),

		code: (props) => (
			<pre>
				<code>{props.children}</code>
			</pre>
		),
		...components,
	};
}
