"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tile } from "@/components/tile";
import { useTheme } from "next-themes";

export default function Home() {
	const { resolvedTheme } = useTheme();

	return (
		<div
			className={cn(
				"w-full mx-auto flex flex-col items-center min-h-screen relative scroll-smooth pb-20",
				"md:max-w-screen-md lg:max-w-screen-2xl"
			)}
		>
			<div className={cn("w-full min-h-24", "md:min-h-32")} />{" "}
			{/* Leading Content Buffer */}
			<div
				className={cn(
					"w-full h-fit gap-2 flex flex-col md:px-8",
					"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				)}
			>
				{/* 1. Intro Tile - Custom transparent tile */}
				<div
					className={cn(
						"aspect-square bg-transparent h-full w-full flex items-center ",
						"col-span-2 row-span-2"
					)}
				>
					<div
						className={cn(
							"font-medium font-serif",
							"text-3xl sm:text-4xl md:text-[2.8rem]"
						)}
					>
						<p className="text-balance space-y-4 text-muted-foreground">
							<p>Hey! I'm Shey 👋</p>
							<p>
								I'm Shey, a full-stack developer based in San
								Francisco{" "}
								{resolvedTheme == "dark" ? "🌉" : "🌁"}
							</p>
							<p>
								When I'm not spending my time{" "}
								<Link href="/work" className="text-foreground">
									coding
								</Link>
								, I'm behind the bar, playing basketball or
								exploring California
							</p>
							<p>
								Check back here for any updates on my projects —
								I'm currently working on{" "}
								<Link
									href="https://backboard-rankings.vercel.app"
									className="text-foreground"
								>
									Backboard ⛹️‍♂️
								</Link>
							</p>
						</p>
					</div>
				</div>

				{/* 1. Project Tile */}
				<Tile.Project
					className={cn("col-span-1 aspect-1/1")}
					href="https://backboard-rankings.vercel.app"
					section="Work"
					label="Backboard"
					tags={["Next.js", "Python", "Supabase"]}
					image="/images/projects/backboard/1.png"
				/>

				{/* 2. Music Tile */}
				<Tile.Music
					className={cn("col-span-1 aspect-square")}
					artist="Creedence Clearwater Revival"
					song="Green River"
					coverArt="https://concord.com/wp-content/uploads/2014/12/CCR_GREENRIVER_cover_5x5_300_rgb_WEB.jpg" // Placeholder - would replace with album art
					spotifyUrl="https://open.spotify.com/track/11DjZQEZ69EXLo77HVj6yW?si=f443cb8740cc4ac2"
					appleMusicUrl="https://music.apple.com/us/song/green-river/1440952830"
				/>

				{/* 3. Article Tile */}
				<Tile.Article
					section="Writing"
					label="Hello World"
					className={cn("col-span-2 aspect-2/1")}
					href="/writing/hello-world"
					title="Hello World"
					excerpt="This is my first post on the new site design. I designed this writing page to free myself from wordpress and other blog hosting sites. Using a markdown renderer in react allows me to style my posts and pages without the shackles of third party api's."
					date="Mar 22, 2024"
					readTime="2 min"
				/>

				{/* 4. Photos Tile */}
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

				{/* 5. External Link Tile */}
				<Tile.ExternalLink
					className={cn("col-span-1 aspect-square")}
					title="Godly"
					description="Currently my first call for website and UI inspiration. Also fun to just browse."
					href="https://godly.website/"
					imageStyle="cropped"
					image="/images/external-links/godly.png"
				/>
			</div>
		</div>
	);
}
