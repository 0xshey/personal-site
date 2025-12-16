import { getPostBySlug } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from "@/lib/utils";

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

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl font-bold font-mono mt-8 mb-4 border-b pb-2" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-bold font-mono mt-8 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl font-bold font-mono mt-6 mb-3" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-lg font-bold font-mono mt-6 mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="leading-relaxed mb-6 font-sans text-lg text-muted-foreground" {...props} />,
                        a: ({node, ...props}) => {
                            const isExternal = props.href?.startsWith('http');
                            const className = "text-primary hover:underline underline-offset-4 decoration-muted-foreground/50 transition-colors";
                            
                            if (isExternal) {
                                return <a target="_blank" rel="noopener noreferrer" className={className} {...props} />;
                            }
                            return <Link href={props.href as string} className={className} {...props} />;
                        },
                        ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground font-sans" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted-foreground font-sans" {...props} />,
                        li: ({node, ...props}) => <li className="pl-1" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground my-6" {...props} />,
                        code: ({node, className, children, ...props}) => {
                             const match = /language-(\w+)/.exec(className || '')
                             const isInline = !match && !String(children).includes('\n');
                             
                             return isInline ? (
                                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                                    {children}
                                </code>
                             ) : (
                                <div className="rounded-lg overflow-hidden my-6 bg-muted/50">
                                    <div className="flex items-center justify-end px-4 py-2 bg-muted border-b">
                                        {match && <span className="text-xs font-mono text-muted-foreground">{match[1]}</span>}
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <code className={cn("text-sm font-mono block", className)} {...props}>
                                            {children}
                                        </code>
                                    </div>
                                </div>
                             )
                        },
                        pre: ({node, ...props}) => <pre className="p-0 bg-transparent" {...props} />
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
        </article>
  );
}
