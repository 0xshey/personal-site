import { ContentTile } from "@/components/content-tile";

export default function Home() {
	return (
			<div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex flex-col items-center h-screen min-h-screen relative scroll-smooth">
				<div className="w-full min-h-24" /> {/* Leading Content Buffer */}

				<div className="w-full max-w-7xl h-fit gap-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
					<ContentTile className="col-span-1 md:col-span-2 row-span-2 bg-transparent hover:bg-transparent border-transparent h-full w-full flex items-center">
						<div className="p-4 text-4xl font-semibold font-mono">
							Hey, I'm <em>Shey</em>. A full-stack developer based in San Francisco, CA. Currently building Backboard.
						</div>
					</ContentTile>

					<ContentTile 
						className="relative"
						title="Backboard"
						image="/images/projects/backboard/roster-page.png"
						imageFill
					/>

					{/* Filler Tiles */}
					{
						Array.from({ length: 15 }).map((_, index) => (
							<ContentTile key={index} />
						))
					}
				</div>
			</div>
	);
}
