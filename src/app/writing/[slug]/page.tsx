import { getPostBySlug, markdownToHtml } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title']);
    return {
        title: `${post.title} | Shey`,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content']);
  const content = await markdownToHtml(post.content);

  return (
        <article className="pt-32 pb-16 max-w-2xl">
            <Link 
                href="/writing"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 text-sm font-mono group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Writing
            </Link>

            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">{post.title}</h1>
                <time className="text-muted-foreground font-mono">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
            </header>

            <div 
                className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-mono prose-p:font-sans prose-p:leading-relaxed prose-pre:bg-muted prose-pre:border prose-pre:text-foreground"
                dangerouslySetInnerHTML={{ __html: content }} 
            />
        </article>
  );
}
