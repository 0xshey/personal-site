"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

type NavLink = {
	label: string;
	href: string;
};

export type NavigatorProps = {
	links: NavLink[];
	className?: string;
};

function smoothScrollTo(element: HTMLElement): void {
	const start: number = window.scrollY;
	const end: number = element.offsetTop;
	const duration: number = 1500; // Duration of the scroll in milliseconds

	// Easing function type
	const easing = (t: number): number => {
		return t < 0.5
			? 16 * Math.pow(t, 5) // ease in
			: 1 - Math.pow(-2 * t + 2, 5) / 2; // ease out
	};

	let startTime: number | undefined;

	function step(timestamp: number): void {
		if (!startTime) startTime = timestamp;
		const progress: number = (timestamp - startTime) / duration;
		const easedProgress: number = easing(progress);

		window.scrollTo(0, start + (end - start) * easedProgress);

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}

export default function Navigator({
	links,
	className,
}: {
	links: NavLink[];
	className?: string;
}) {
	const [activeSection, setActiveSection] = useState<string>("");
	const navRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.3, // Adjust sensitivity for intersection detection
			}
		);

		// Observe each section using its ID
		links.forEach((link) => {
			const section = document.getElementById(link.href.slice(1));
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, [links]);

	return (
		<nav
			className={`w-full px-8 flex flex-col items-center pt-4 fixed top-0 z-50 ${className}`}
		>
			<div
				ref={navRef}
				className="max-w-full p-0.5 gap-2 rounded-full flex justify-center items-center relative bg-foreground text-background shadow-xl"
			>
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						scroll={false}
						data-link={link.href.slice(1)}
						onClick={(e) => {
							e.preventDefault();
							const section = document.getElementById(
								link.href.slice(1)
							);
							if (section) {
								smoothScrollTo(section); // Use the custom smoothScrollTo function
							}
						}}
						className={`text-lg px-3 py-1 rounded-full transition-color duration-300 text-muted-foreground border border-transparent ${
							activeSection === link.href.slice(1)
								? "bg-orange-400/30 hover:bg-orange-400/40 text-orange-400"
								: "bg-none hover:text-muted "
						}`}
					>
						{link.label}
					</Link>
				))}

				<ThemeToggle />
			</div>
		</nav>
	);
}
