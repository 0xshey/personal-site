import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Tile, BaseTileProps } from "./index";

interface ArticleTileProps extends BaseTileProps {
	section: string;
	label: string;
    title: string;
    excerpt: string;
    date: string;
    readTime?: string;
}

export function ArticleTile({ section, label, title, excerpt, date, readTime, className, href }: ArticleTileProps) {
	return (
		<Tile href={href} className={cn("", className)}>
			<div className="group relative h-full w-full">
				<div className="h-full flex flex-col justify-between">
					<div className="h-8 px-4 py-2">
						<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
							<span>{section}</span>
							<ChevronRight className="h-3 w-3" />
							<span>{label}</span>
						</div>
					</div>

					<div className="z-20 flex flex-col justify-start p-4">
						<h3 className="text-4xl font-serif mb-3 leading-tight">{title}</h3>
						<p className="text-muted-foreground line-clamp-3 leading-relaxed">{excerpt}</p>
					</div>
				</div>
			</div>
		</Tile>
	);
}
