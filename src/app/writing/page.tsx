import { getAllPosts } from "@/lib/markdown";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function WritingPage() {
	const posts = getAllPosts(["title", "date", "slug", "excerpt"]);

	return (
		<div className="pt-32 pb-16">
			{/* Re-using the same animation wrapper as other pages but server component so we use a client wrapper or just standard div if not animating everything */}
			<div className="max-w-2xl">
				<h1 className="text-6xl font-medium mb-8 font-serif">
					Writing
				</h1>

				<br />

				<div className="flex flex-col gap-4">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/writing/${post.slug}`}
							className="group block border border-border p-4 rounded-xl bg-muted"
						>
							<div className="flex flex-col gap-2">
								<time className="text-sm text-muted-foreground/60 font-mono">
									{format(
										new Date(post.date),
										"MMMM d, yyyy"
									)}
								</time>
								<h2 className="text-4xl font-serif font-medium group-hover:text-primary transition-colors">
									{post.title}
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									{post.excerpt}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
