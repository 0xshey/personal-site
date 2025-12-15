"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, smoothScrollTo } from "@/lib/utils";

type NavLink = {
	label: string;
	href: string;
};

export type NavigatorProps = {
	links: NavLink[];
	className?: string;
};

export default function Navigator({ links, className }: NavigatorProps) {
	const [activeSection, setActiveSection] = useState<string>("");

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
				threshold: 0.5,
			}
		);

		links.forEach((link) => {
			const section = document.getElementById(link.href.slice(1));
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, [links]);

	return (
		<nav
			className={cn(
				"fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center",
				className
			)}
		>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
				className="flex items-center gap-1 p-1 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
			>
				{links.map((link) => {
					const isActive = activeSection === link.href.slice(1);
					return (
						<Link
							key={link.href}
							href={link.href}
							scroll={false}
							onClick={(e) => {
								e.preventDefault();
								const section = document.getElementById(link.href.slice(1));
								if (section) {
									smoothScrollTo(section);
								}
							}}
							className={cn(
								"relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
								isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
							)}
						>
							{isActive && (
								<motion.div
									layoutId="active-nav-pill"
									className="absolute inset-0 bg-secondary rounded-full"
									transition={{ type: "spring", stiffness: 300, damping: 30 }}
									style={{ zIndex: -1 }}
								/>
							)}
							{link.label}
						</Link>
					);
				})}
				<div className="pl-2 pr-1 border-l border-border/50 ml-1">
					<ThemeToggle />
				</div>
			</motion.div>
		</nav>
	);
}
