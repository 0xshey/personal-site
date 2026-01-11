"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tile } from "@/components/tile";
import { useTheme } from "next-themes";
import { Github, Linkedin, Instagram, AtSign } from "lucide-react";

import { LandingText } from "@/components/home/landing-text";

export default function Home() {
	return (
		<div
			className={cn(
				"w-full mx-auto flex flex-col items-center min-h-screen relative scroll-smooth pb-20",
				"md:max-w-screen-md lg:max-w-screen-2xl"
			)}
		>
			<div className={cn("w-full min-h-20")} /> {/* Landing Text */}
			<LandingText />
			<div
				className={cn(
					"w-full h-fit gap-2 flex flex-col md:px-8",
					"grid grid-cols-2 lg:grid-cols-4"
				)}
			>
				{/* 1. Project Tile */}
				<Tile.Project
					className={cn("col-span-1 aspect-1/1")}
					href="https://backboard-rankings.vercel.app"
					section="Work"
					label="Backboard"
					tags={["Next.js", "Python", "Supabase"]}
					image="/images/projects/backboard/1.png"
				/>

				{/* 2. Photos Tile */}
				<Tile.Photos
					className={cn("col-span-1 aspect-square")}
					section="Photos"
					label="Little Lila"
					images={[
						"/images/photos/lila/1.jpeg",
						"/images/photos/lila/2.jpeg",
						"/images/photos/lila/3.jpeg",
						"/images/photos/lila/4.jpeg",
						"/images/photos/lila/5.jpeg",
						"/images/photos/lila/6.jpeg",
					]}
					title="Lila"
					description="The spoiled kitty of the apartment."
				/>

				{/* 3. Article Tile */}
				<Tile.Article
					section="Writing"
					label="Why a Website?"
					className={cn("col-span-2 aspect-2/1")}
					href="/writing/why-a-website"
					title="Why a Website?"
					excerpt="A personal website gives me a flexible, self‑directed space to showcase work, test ideas, and learn by building. It isn’t the end goal—it’s the platform that lets me share what I actually care about, like developing Backboard and exploring better interfaces. Over time, I’ll keep publishing projects and experiments, inviting feedback and making the experience feel intentional and native to the things I create."
					date="Jan 8, 2026"
					readTime="2 min"
				/>

				{/* 4. Music Tile */}
				<Tile.Music
					className={cn("col-span-1 aspect-square")}
					artist="Creedence Clearwater Revival"
					song="Green River"
					coverArt="https://concord.com/wp-content/uploads/2014/12/CCR_GREENRIVER_cover_5x5_300_rgb_WEB.jpg" // Placeholder - would replace with album art
					spotifyUrl="https://open.spotify.com/track/11DjZQEZ69EXLo77HVj6yW?si=f443cb8740cc4ac2"
					appleMusicUrl="https://music.apple.com/us/song/green-river/1440952830"
				/>

				{/* 5. External Link Tile */}
				<Tile.ExternalLink
					className={cn("col-span-1 aspect-square")}
					title="Godly"
					description="Currently my first call for website and UI inspiration. Also fun to just browse."
					href="https://godly.website/"
					imageStyle="cropped"
					image="/images/external-links/godly.png"
				/>

				{/* 6. Social Subgrid Tile */}
				<div className="col-span-2 aspect-[2/1] grid grid-cols-2 grid-rows-2 gap-2">
					<Tile.Social
						href="https://threads.net/0xshey"
						icon={AtSign}
						label="Threads"
						username="@0xshey"
					/>
					<Tile.Social
						href="https://www.instagram.com/0xshey/"
						icon={Instagram}
						label="Instagram"
						username="@0xshey"
					/>
					<Tile.Social
						href="https://github.com/0xshey"
						icon={Github}
						label="GitHub"
						username="@0xshey"
					/>
					<Tile.Social
						href="https://linkedin.com/in/shey"
						icon={Linkedin}
						label="LinkedIn"
						username="@shey"
					/>
				</div>
			</div>
		</div>
	);
}
