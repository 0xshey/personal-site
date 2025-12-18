"use client";

import { Tile } from "@/components/tile";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Home() {
	return (
		<div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex flex-col items-center min-h-screen relative scroll-smooth pb-20">
			<div className="w-full min-h-24 md:min-h-32" /> {/* Leading Content Buffer */}

			<div className="w-full max-w-7xl h-fit gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{/* 1. Intro Tile - Custom transparent tile */}
				<div
					className="col-span-1 md:col-span-2 row-span-2 aspect-[2/1] bg-transparent h-full w-full flex items-center"
				>
					<div className="text-3xl md:text-4xl font-semibold font-mono leading-tight">
						Hey, I'm <em className="text-primary not-italic">Shey</em>. A full-stack developer based in San Francisco, CA. Currently building Backboard.
					</div>
				</div>



				{/* 2. Project Tile */}
				<Tile.Project 
					className="aspect-[2/1] col-span-2"
					href="/work"
					section="Work"
					label="Backboard"
					tags={["Next.js", "Python", "Supabase"]}
					image="/images/projects/backboard/roster-page.png"
				/>

				{/* 3. Article Tile */}
				<Tile.Article
					section="Writing"
					label="Hello World"
					className="col-span-1 aspect-1/1"
					href="/writing/hello-world"
					title="Hello World"
					excerpt="This is my first post on the new site design. I designed this writing page to free myself from wordpress and other blog hosting sites. Using a markdown renderer in react allows me to style my posts and pages without the shackles of third party api's."
					date="Mar 22, 2024"
					readTime="2 min"
				/>

				{/* 5. Music Tile */}
				{/* <Tile.Music 
					className="col-span-1 aspect-square"
					artist="Fred again.."
					song="Delilah (pull me out of this)"
					coverArt="/images/projects/backboard/players-page.png" // Placeholder - would replace with album art
					spotifyUrl="https://open.spotify.com"
					appleMusicUrl="https://music.apple.com"
				/> */}

				{/* 6. Photos Tile */}
				{/* <Tile.Photos 
					className="col-span-1 aspect-square"
					images={[
						"/images/projects/backboard/roster-page.png",
						"/images/projects/backboard/players-page.png",
						"/images/projects/backboard/roster-page.png"
					]}
					title="Recent Shots"
				/> */}

				{/* 7. Snippet Tile (Markdown) */}
					{/* <Tile.Snippet 
					className="col-span-1 md:col-span-2 aspect-[2/1]"
					title="Quick Sort (Python)"
					language="python"
					content={`
						\`\`\`python
						def quicksort(arr):
							if len(arr) <= 1:
								return arr
							pivot = arr[len(arr) // 2]
							left = [x for x in arr if x < pivot]
							middle = [x for x in arr if x == pivot]
							right = [x for x in arr if x > pivot]
							return quicksort(left) + middle + quicksort(right)
						\`\`\`
					`}
				/> */}
			</div>
		</div>
	);
}
