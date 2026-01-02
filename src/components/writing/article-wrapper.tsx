"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useWriting } from "./writing-context";

interface ArticleWrapperProps {
	children: React.ReactNode;
	headings: { id: string; level: number }[];
}

export function ArticleWrapper({ children, headings }: ArticleWrapperProps) {
	const { activeId, setActiveId, isDimmed, setIsDimmed } = useWriting();
	const [isHovered, setIsHovered] = useState(false);
	const articleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// We want to find the section that is currently most prominent
				// For simplicity, we'll take the first intersecting one
				const visibleEntry = entries.find(
					(entry) => entry.isIntersecting
				);
				if (visibleEntry) {
					setActiveId(visibleEntry.target.id);
				}
			},
			{
				rootMargin: "-20% 0% -60% 0%",
				threshold: 0,
			}
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [headings, setActiveId]);

	// Effect to apply classes to children based on activeId
	useEffect(() => {
		if (!articleRef.current) return;

		const prose = articleRef.current.querySelector(".prose");
		if (!prose) return;

		const childrenElements = Array.from(prose.children);
		let currentSectionId = "";

		childrenElements.forEach((child) => {
			// If child is a heading, update currentSectionId
			if (child.id && headings.some((h) => h.id === child.id)) {
				currentSectionId = child.id;
			}

			// Apply active-section class if it belongs to activeId
			if (currentSectionId === activeId && activeId !== "") {
				child.classList.add("active-section");
			} else {
				child.classList.remove("active-section");
			}
		});
	}, [activeId, headings]);

	return (
		<div
			ref={articleRef}
			onMouseEnter={() => {
				setIsHovered(true);
				setIsDimmed(false);
			}}
			onMouseLeave={() => setIsHovered(false)}
			className={cn(
				"article-container transition-all duration-500",
				isDimmed && !isHovered ? "is-dimmed" : ""
			)}
		>
			{children}
		</div>
	);
}
