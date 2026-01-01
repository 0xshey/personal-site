import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tile, BaseTileProps } from "./index";
import { Play } from "lucide-react";

interface MusicTileProps extends BaseTileProps {
	artist: string;
	song: string;
	coverArt: string;
	spotifyUrl?: string;
	appleMusicUrl?: string;
	youtubeUrl?: string;
}

export function MusicTile({
	artist,
	song,
	coverArt,
	spotifyUrl,
	appleMusicUrl,
	youtubeUrl,
	className,
	href,
}: MusicTileProps) {
	const marqueeVariants = {
		animate: {
			x: [0, -1000],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop" as const,
					duration: 20,
					ease: "linear" as const,
				},
			},
		},
	};

	return (
		<Tile href={href} className={cn("group h-full", className)}>
			<div className="relative h-full w-full flex flex-col justify-between overflow-hidden">
				{/* Background Image */}
				<Image
					src={coverArt}
					alt={song}
					fill
					className="object-cover rounded-lg overflow-hidden group-hover:translate-y-10 transition-transform duration-200 ease-out"
				/>

				{/* Links */}
				<div className="h-8 px-4 py-2">
					<div className="text-sm text-muted-foreground/60 flex items-center gap-4">
						{spotifyUrl && (
							<Link
								href={spotifyUrl}
								className="hover:text-muted-foreground text-sm decoration-white/30 transition-all cursor-pointer"
							>
								Spotify
							</Link>
						)}
						{appleMusicUrl && (
							<Link
								href={appleMusicUrl}
								className="hover:text-muted-foreground text-sm decoration-white/30 transition-all cursor-pointer"
							>
								Apple Music
							</Link>
						)}
						{youtubeUrl && (
							<Link
								href={youtubeUrl}
								className="hover:text-muted-foreground text-sm decoration-white/30 transition-all cursor-pointer"
							>
								YouTube
							</Link>
						)}
					</div>
				</div>

				{/* Content Container */}
				<div className="relative z-10 w-full">
					{/* Default State: Marquee */}
					<div className="group-hover:opacity-0 transition-opacity duration-300 pb-2 pt-14 bg-gradient-to-t from-muted to-transparent">
						<motion.div
							className="whitespace-nowrap flex items-center gap-8"
							variants={marqueeVariants}
							animate="animate"
						>
							{[...Array(10)].map((_, i) => (
								<span
									key={i}
									className="text-4xl font-serif text-foreground"
								>
									{song} — {artist}
								</span>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</Tile>
	);
}
