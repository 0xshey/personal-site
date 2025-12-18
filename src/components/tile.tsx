import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Music, Play, Clock, Link as LinkIcon } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import React from "react";

// --- Types ---
interface BaseTileProps {
	className?: string;
	children?: React.ReactNode;
	href?: string;
	
    onClick?: () => void;
}

// --- Base Tile ---
export function Tile({ className, children, href, onClick }: BaseTileProps) {
	const Wrapper = href ? Link : motion.div;
    
    // Extract grid classes to apply to the wrapper (which is the grid item)
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
				// whileHover={{ y: -4, scale: 1.01 }}
				// whileTap={{ scale: 0.98 }}
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







// --- Tile Variants ---

// 1. PROJECT TILE
interface ProjectTileProps extends BaseTileProps {
    section: string;
	label: string;
	image?: string;
    tags?: string[];
}

Tile.Project = function ProjectTile({ section, label, image, tags, className, href }: ProjectTileProps) {
	return (
		<Tile href={href} className={cn("", className)}>
			<div className="group relative h-full w-full">
				{ image &&
					<div className="absolute mx-auto w-4/5 h-full left-1/2 -translate-x-1/2  translate-y-30">
						<Image
							src={image}
							alt={""}
							fill
							className="object-cover transition-all duration-200 group-hover:scale-108 border shadow-md hover:shadow-xl rounded-md"
						/>
					</div>
				}
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
								{tags.map(tag => (
									<span key={tag} className="text-xs bg-foreground/80 text-muted px-2 py-1 rounded-md backdrop-blur-sm">
									{tag}
								</span>
							))}
						</div>
					)}
					</div>
				</div>
			</div>
		</Tile>
	);
};

// 2. ARTICLE TILE
interface ArticleTileProps extends BaseTileProps {
	section: string;
	label: string;
    title: string;
    excerpt: string;
    date: string;
    readTime?: string;
}

Tile.Article = function ArticleTile({ section, label, title, excerpt, date, readTime, className, href }: ArticleTileProps) {
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
};

// 3. SNIPPET TILE (Markdown)
interface SnippetTileProps extends BaseTileProps {
    title: string;
    content: string; // Markdown string
    language?: string;
}

Tile.Snippet = function SnippetTile({ title, content, language, className, href }: SnippetTileProps) {
    return (
        <Tile href={href} className={cn("bg-muted/30 p-6 flex flex-col", className)}>
            <div className="flex items-center justify-between mb-4 border-b pb-2">
                <h3 className="font-mono font-bold text-sm">{title}</h3>
                {language && <span className="text-xs font-mono text-muted-foreground">{language}</span>}
            </div>
            <div className="prose prose-sm dark:prose-invert font-mono text-xs overflow-hidden opacity-80 mask-to-b h-full relative">
                <ReactMarkdown>{content}</ReactMarkdown>
                {/* Fade out effect at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-muted/30 to-transparent" />
            </div>
        </Tile>
    );
};

// 4. PHOTOS TILE (Fan Animation)
interface PhotosTileProps extends BaseTileProps {
    images: string[];
    title?: string;
}

Tile.Photos = function PhotosTile({ images, title, className, href }: PhotosTileProps) {
    // Take up to 3 images for the stack
    const stack = images.slice(0, 3);

    return (
        <Tile href={href} className={cn("bg-background overflow-visible", className)}>
             <div className="relative h-full w-full flex items-center justify-center p-8 group">
                {stack.map((img, index) => {
                    // Reverse index for stacking order (0 is bottom, last is top)
                    const reverseIndex = stack.length - 1 - index;
                    // Rotation logic for fan effect
                    const angle = index === 0 ? -10 : index === 1 ? 0 : 10;
                    
                    return (
                        <motion.div
                            key={`${img}-${index}`}
                            className="absolute w-3/4 aspect-[4/5] rounded-lg border-4 border-white shadow-lg overflow-hidden"
                            initial={{ rotate: angle, y: 0 }}
                            whileHover={{ 
                                rotate: (index - 1) * 15, // Fan out: -15, 0, 15
                                y: -10,
                                scale: 1.05,
                                zIndex: index + 10 // Ensure proper layering on hover
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ 
                                zIndex: index,
                            }}
                        >
                            <Image src={img} alt="Photo" fill className="object-cover" />
                        </motion.div>
                    );
                })}
                {title && (
                    <div className="absolute bottom-4 left-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-2 rounded text-xs font-mono text-center backdrop-blur-md">
                        {title}
                    </div>
                )}
            </div>
        </Tile>
    );
};

// 5. MUSIC TILE
interface MusicTileProps extends BaseTileProps {
    artist: string;
    song: string;
    coverArt: string;
    spotifyUrl?: string;
    appleMusicUrl?: string;
    youtubeUrl?: string;
}

Tile.Music = function MusicTile({ artist, song, coverArt, spotifyUrl, appleMusicUrl, youtubeUrl, className }: MusicTileProps) {
    return (
        <Tile className={cn("bg-black text-white p-0 relative group", className)}>
             <Image src={coverArt} alt={song} fill className="object-cover opacity-60 transition-opacity group-hover:opacity-40" />
             
             <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div className="bg-white/10 backdrop-blur-md w-fit p-2 rounded-full">
                    <Music className="w-5 h-5 text-white" />
                </div>

                <div>
                    <h3 className="font-bold text-xl leading-none mb-1">{song}</h3>
                    <p className="text-white/70 font-mono text-sm">{artist}</p>

                    <div className="flex gap-3 mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {spotifyUrl && (
                            <Link href={spotifyUrl} target="_blank" className="hover:text-green-400 transition-colors">
                                <Play className="w-5 h-5 fill-current" />
                            </Link>
                        )}
                         {youtubeUrl && (
                            <Link href={youtubeUrl} target="_blank" className="hover:text-red-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        )}
                        {/* Apple Music icon substitute */}
                        {appleMusicUrl && (
                            <Link href={appleMusicUrl} target="_blank" className="hover:text-pink-500 transition-colors">
                                <Music className="w-5 h-5" />
                            </Link>
                        )}
                    </div>
                </div>
             </div>
        </Tile>
    );
};

// 6. EXTERNAL LINK TILE
interface ExternalLinkTileProps extends BaseTileProps {
    title: string;
    icon?: React.ElementType;
    description?: string;
}

Tile.ExternalLink = function ExternalLinkTile({ title, icon: Icon, description, href, className }: ExternalLinkTileProps) {
    return (
         <Tile href={href} className={cn("p-6 flex flex-col justify-between hover:bg-muted/50", className)}>
             <div className="flex justify-between items-start">
                <div className="p-2 bg-muted rounded-lg">
                    {Icon ? <Icon className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
             </div>
             
             <div>
                <h3 className="font-bold font-mono text-lg">{title}</h3>
                {description && <p className="text-muted-foreground text-sm mt-1">{description}</p>}
             </div>
         </Tile>
    );
};
