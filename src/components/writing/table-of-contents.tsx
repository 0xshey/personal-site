"use client";

import { cn } from "@/lib/utils";
import { useWriting } from "./writing-context";

interface Heading {
	id: string;
	text: string;
	level: number;
}

interface TableOfContentsProps {
	headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
	const { activeId, setIsDimmed } = useWriting();

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		e.preventDefault();
		setIsDimmed(true);
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
