import { getAllPosts } from "@/lib/markdown";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";

const links = [
	{ label: "Shey", href: "/" },
	{ label: "Work", href: "/work" },
	{ label: "Writing", href: "/writing" },
	{ label: "Life", href: "/life" },
	{ label: "Connect", href: "/connect" },
];

export default function WritingPage() {
    const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

    return (
            
            <div className="pt-32 pb-16">
                 {/* Re-using the same animation wrapper as other pages but server component so we use a client wrapper or just standard div if not animating everything */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-8 font-mono">Writing</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                        Thoughts, tutorials, and notes on software development, design, and more.
                    </p>

                    <div className="flex flex-col gap-8">
                        {posts.map((post) => (
                            <Link 
                                key={post.slug} 
                                href={`/writing/${post.slug}`}
                                className="group block"
                            >
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-mono font-medium group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <time className="text-sm text-muted-foreground font-mono">
                                        {format(new Date(post.date), 'MMMM d, yyyy')}
                                    </time>
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
