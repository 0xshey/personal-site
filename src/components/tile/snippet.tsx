import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Tile, BaseTileProps } from "./index";
import { Badge } from "@/components/badge";

interface SnippetTileProps extends BaseTileProps {
	section: string;
	label: string;
	title: string;
	description?: string;
	content?: string; // Markdown content
	image?: string;
	tags?: string[];
	language?: string;
}

export function SnippetTile({
	section,
	label,
	title,
	description,
	content,
	image,
	tags,
	language,
	className,
	href,
}: SnippetTileProps) {
	return (
		<Tile href={href} className={cn("group h-full", className)}>
			<div className="relative h-full w-full flex flex-col justify-between overflow-hidden">
				{/* Background Image - Centered 2/3 the way up */}
				{image && (
					<div className="absolute inset-x-0 top-[20%] h-1/2 w-full opacity-40 group-hover:opacity-60 transition-opacity">
						<Image
							src={image}
							alt=""
							fill
							className="object-contain" // Centered and contained
						/>
					</div>
				)}

				{/* Header */}
				<div className="z-20 h-8 px-4 py-2">
					<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
						<span>{section}</span>
						<ChevronRight className="h-3 w-3" />
						<span>{label}</span>
					</div>
				</div>

				{/* Content Area */}
				<div className="z-20 flex flex-col justify-end p-4 bg-gradient-to-t from-muted via-muted/80 to-transparent">
					{/* Tags */}
					<div className="z-20 flex justify-start gap-2 mb-2">
						{tags && (
							<div className="flex flex-wrap gap-2 hidden group-hover:flex">
								{tags.map((tag) => (
									<Badge key={tag}>{tag}</Badge>
								))}
							</div>
						)}
					</div>

					<div className="z-20 flex flex-col justify-start">
						<h3 className="text-4xl font-serif mb-3 leading-tight">
							{title}
						</h3>
						{description && (
							<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
								{description}
							</p>
						)}
					</div>
					{/* Markdown Content (if provided) */}
					{/* {content && (
                        <div className="prose prose-sm dark:prose-invert font-mono text-[10px] overflow-hidden opacity-60 max-h-24 mask-to-b mt-2">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    )} */}
				</div>
			</div>
		</Tile>
	);
}
