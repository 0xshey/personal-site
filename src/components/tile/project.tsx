import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Tile, BaseTileProps } from "./index";
import { Badge } from "@/components/badge";

interface ProjectTileProps extends BaseTileProps {
	section: string;
	label: string;
	image?: string;
	tags?: string[];
}

export function ProjectTile({
	section,
	label,
	image,
	tags,
	className,
	href,
}: ProjectTileProps) {
	return (
		<Tile href={href} className={cn("", className)}>
			<div className="group relative h-full w-full">
				{image && (
					<div className="absolute mx-auto w-4/5 h-full left-1/2 -translate-x-1/2  translate-y-30">
						<Image
							src={image}
							alt={""}
							fill
							className="object-cover transition-all duration-200 group-hover:scale-108 border shadow-md hover:shadow-xl rounded-md"
						/>
					</div>
				)}
				<div className="h-full flex flex-col justify-between">
					<div className="h-8 px-4 py-2">
						<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
							<span>{section}</span>
							<ChevronRight className="h-3 w-3" />
							<span>{label}</span>
						</div>
					</div>

					<div className="z-20 flex justify-start gap-2 p-4">
						{tags && (
							<div className="flex flex-wrap gap-2 hidden group-hover:flex">
								{tags.map((tag) => (
									<Badge key={tag}>{tag}</Badge>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</Tile>
	);
}
