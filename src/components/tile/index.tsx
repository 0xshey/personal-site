import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { ProjectTile } from "./project";
import { ArticleTile } from "./article";
import { SnippetTile } from "./snippet";
import { PhotosTile } from "./photos";
import { MusicTile } from "./music";
import { ExternalLinkTile } from "./external-link";

// --- Types ---
export interface BaseTileProps {
	className?: string;
	children?: React.ReactNode;
	href?: string;
    onClick?: () => void;
}

// --- Base Tile ---
export function Tile({ className, children, href, onClick }: BaseTileProps) {
	const Wrapper = href ? Link : motion.div;
    
    const gridClasses = className?.match(/(col|row)-(span|start|end)-[^\s]+/g)?.join(" ") || "";
    
    const wrapperClassName = cn(
        href ? "block" : "",
        "h-full w-full",
        gridClasses
    );

    const props = href ? { href, className: wrapperClassName } : { className: wrapperClassName, onClick };

	return (
		<Wrapper {...props as any}>
			<motion.div
				transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                    "relative h-full w-full overflow-hidden rounded-xl border border-transparent text-card-foreground transition-colors",
					"bg-muted/75 hover:bg-muted",
                    className
                )}
			>
				{children}	
			</motion.div>
		</Wrapper>
	);
}

Tile.Project = ProjectTile;
Tile.Article = ArticleTile;
Tile.Snippet = SnippetTile;
Tile.Photos = PhotosTile;
Tile.Music = MusicTile;
Tile.ExternalLink = ExternalLinkTile;
