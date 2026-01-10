"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function LandingText() {
	const { resolvedTheme } = useTheme();

	return (
		<div
			className={cn(
				"w-full max-w-6xl px-4 mx-auto my-16 md:my-32",
				"bg-transparent text-center",
				"font-light font-sans text-balance text-muted-foreground tracking-tighter",
				"text-[1.5rem] md:text-[2.4rem] leading-tight",
				"space-y-4"
			)}
		>
			<p>Hey! I'm Shey 👋 Thank you for visiting my space online.</p>
			<p>
				I built this space to share the products of what I am passionate
				about. I develop statistic centric tools, and do my best to
				bring them to life in tangible applications.{" "}
			</p>
			<p>
				I'm always trying to learn new skills, frameworks and tools. I
				want this to be a space I can share the results and progress of
				my work.
			</p>
			<p>
				I am currently focussed on developing{" "}
				<Link href="https://backboard.dev" className="text-foreground">
					backboard.dev ⛹️‍♂️
				</Link>
				, a continually expanding set of tools and visualisations of NBA
				fantasy metrics and information.
			</p>
			<p>
				I am currently based in the Bay Area, CA{" "}
				{resolvedTheme == "dark" ? "🌉" : "🌁"}, but I was born and grew
				up in the south west of Australia, graduating from Computer
				Science in Perth, WA.
			</p>
		</div>
	);
}
