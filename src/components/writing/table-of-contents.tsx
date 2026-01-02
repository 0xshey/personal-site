"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
	id: string;
	text: string;
	level: number;
}

interface TableOfContentsProps {
	headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// Find the first entry that is intersecting
				const visibleEntry = entries.find(
					(entry) => entry.isIntersecting
				);
				if (visibleEntry) {
					setActiveId(visibleEntry.target.id);
				}
			},
			{
				rootMargin: "-20% 0% -60% 0%", // Adjust based on the 20% requirements
				threshold: 0.1,
			}
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [headings]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const viewportHeight = window.innerHeight;
			const offset = viewportHeight * 0.2; // 20% from the top
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	if (headings.length === 0) return null;

	return (
		<nav className="flex flex-col gap-3">
			<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-2">
				In this article
			</p>
			<ul className="space-y-3">
				{headings.map((heading) => (
					<li
						key={heading.id}
						style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
					>
						<a
							href={`#${heading.id}`}
							onClick={(e) => handleClick(e, heading.id)}
							className={cn(
								"text-sm transition-all duration-200 hover:text-foreground inline-block",
								activeId === heading.id
									? "text-foreground font-medium"
									: "text-muted-foreground/60"
							)}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
