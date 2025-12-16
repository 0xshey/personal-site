"use client";
import { cn } from "@/lib/utils";

import Navigator from "@/components/navigator";
import HiringToast from "@/components/hiring-toast";
import {
	LandingSection,
	WorkSection,
	LifeSection,
	ConnectSection,
} from "@/content";

import { Card, CardHeader, CardImage } from "@/components/card";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
	{ label: "Shey", href: "/" },
	{ label: "Work", href: "/work" },
	{ label: "Life", href: "/life" },
	{ label: "Connect", href: "/connect" },
];

export default function Home() {
	return (
		<div className="mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
			<Navigator links={links} />
			<div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex flex-col items-center h-screen min-h-screen relative scroll-smooth">
				<div className="w-full min-h-24" /> {/* Leading Content Buffer */}

				<div className="w-full max-w-7xl h-fit grid grid-cols-4 gap-2">
					<ContentTile className="col-span-2 row-span-2 bg-transparent hover:bg-transparent h-full w-full flex items-center">
						<div className="p-4 text-xl font-semibold font-mono">
							Hey, I'm <em>Shey</em>. A full-stack developer based in San Francisco, CA. Currently building Backboard.
						</div>
					</ContentTile>

					<ContentTile 
						className="relative"
						image="/images/projects/backboard/roster-page.png"
						imageFill
					/>

					{
						Array.from({ length: 15 }).map((_, index) => (
							<ContentTile key={index} />
						))
					}
				</div>


				{/* <LandingSection />
				<WorkSection />
				<LifeSection />
				<ConnectSection /> */}
			</div>
		</div>
	);
}

interface ContentTileProps {
	children?: React.ReactNode
	className?: string
	image?: string
	imageAlt?: string
	imageFill?: boolean
}

function ContentTile({ children, className, image, imageAlt="", imageFill=false }: ContentTileProps) {
	return (
		<div className={cn("rounded-lg w-full aspect-square bg-muted/80 hover:bg-muted transition-colors cursor-default duration-200 overflow-hidden", className)}>
			{children}
			{image && (
				<Image 
					src={image} 
					alt={imageAlt} 
					fill={imageFill}
					objectFit="cover"
					className={cn("object-cover", imageFill && "w-full h-full", "hover:scale-[1.2] transition-transform duration-200")}
				/>
			)}
		</div>
	)
}