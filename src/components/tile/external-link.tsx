import { cn } from "@/lib/utils";
import { Link as LinkIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tile, BaseTileProps } from "./index";

interface ExternalLinkTileProps extends BaseTileProps {
	title: string;
	description?: string;
	image?: string;
	imageStyle?: "cropped" | "full";
}

export function ExternalLinkTile({
	title,
	description,
	href,
	image,
	imageStyle = "cropped",
	className,
}: ExternalLinkTileProps) {
	const baseUrl = href ? new URL(href).hostname.replace("www.", "") : "";

	return (
		<Tile href={href} className={cn("group h-full", className)}>
			<div className="relative h-full w-full flex flex-col justify-between overflow-hidden">
				{image && (
					<div
						className={cn(
							"transition-transform duration-200 group-hover:scale-105",
							imageStyle === "full"
								? "absolute inset-0 z-0 h-full w-full"
								: "absolute mx-auto w-4/5 h-full left-1/2 -translate-x-1/2 translate-y-12 z-0"
						)}
					>
						<Image
							src={image}
							alt={title}
							fill
							className={cn(
								"object-cover",
								imageStyle === "full"
									? "opacity-40 group-hover:opacity-60"
									: "rounded-md border shadow-md hover:shadow-xl"
							)}
						/>
					</div>
				)}

				{/* Header: Link Reveal */}
				<div className="z-20 p-2 flex justify-end">
					<motion.div
						className={cn(
							"flex text-muted-foreground items-center bg-muted backdrop-blur-md rounded-lg overflow-hidden border border-transparent",
							"group-hover:w-fit transition-transform duration-200 group-hover:bg-background group-hover:border-border"
						)}
					>
						<span className="text-xs font-mono group-hover:px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity w-0 group-hover:w-auto transition-transform duration-200">
							{baseUrl}
						</span>
						<div className="relative w-4 h-4 flex items-center justify-center p-3 rounded-lg">
							<LinkIcon className="absolute w-4 h-4 group-hover:opacity-0 transition-opacity" />
							<ArrowUpRight className="absolute w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</motion.div>
				</div>

				{/* Footer Info */}
				<div className="z-20 flex flex-col justify-start p-4 bg-gradient-to-t from-muted via-muted/80 to-transparent">
					<h3 className="text-4xl font-serif leading-tight">
						{title}
					</h3>
					{description && (
						<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
							{description}
						</p>
					)}
				</div>
			</div>
		</Tile>
	);
}
