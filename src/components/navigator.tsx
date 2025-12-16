"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, smoothScrollTo } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type NavLink = {
	label: string;
	href: string;
};

export type NavigatorProps = {
	links: NavLink[];
	className?: string;
};

export default function Navigator({ links, className }: NavigatorProps) {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState<string>("");
	const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
			if (link.href.startsWith("#")) {
				const section = document.getElementById(link.href.slice(1));
				if (section) observer.observe(section);
			}
		});

		return () => observer.disconnect();
	}, [links]);

	return (
		<nav
			className={cn(
				"pointer-events-none sticky top-0 isolate z-10 flex justify-center py-4 px-1 md:justify-between",
				className
			)}
		>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
				className="pointer-events-auto relative flex items-center gap-1 p-1 rounded-lg bg-background/80 backdrop-blur-md border border-border shadow-md h-fit"
				onMouseLeave={() => setHoveredPath(null)}
			>
				{links.map((link) => {
					const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) || activeSection === link.href.slice(1);
					return (
						<Link
							key={link.href}
							href={link.href}
							scroll={false}
							onClick={(e) => {
								if (link.href.startsWith("#")) {
									e.preventDefault();
									const section = document.getElementById(link.href.slice(1));
									if (section) {
										smoothScrollTo(section);
									}
								}
							}}
							onMouseEnter={() => setHoveredPath(link.href)}
							className={cn(
								"relative px-3 py-1 rounded-sm text-sm transition-colors duration-200",
								isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
							)}
						>
							{isActive && (
								<motion.div
									layoutId="active-nav-pill"
									className="absolute inset-0 rounded-sm"
									transition={{ type: "spring", stiffness: 300, damping: 30 }}
									style={{ zIndex: -1 }}
								/>
							)}
							{link.href === hoveredPath && (
								<motion.div
									layoutId="hover-nav-pill"
									className="absolute inset-0 bg-muted rounded-sm"
									transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
									style={{ zIndex: -2 }}
								/>
							)}
							<span className="relative z-10">{link.label}</span>
						</Link>
					);
				})}
			</motion.div>

			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
				className="flex items-center gap-1 px-1 hidden md:block"
			>
				<div className="pointer-events-auto flex items-center gap-6">
					<Link
						href="/resume"
						className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-0.5"
					>
						CV
					</Link>
					<ThemeToggle />
					
				</div>
			</motion.div>
		</nav>
	);
}
