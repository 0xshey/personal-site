"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { smoothScrollTo } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

type NavLink = {
	label: string;
	href: string;
};

export type NavigatorProps = {
	links: NavLink[];
	className?: string;
	position?: "top" | "bottom";
};

export default function Navigator({
	links,
	className,
	position = "top",
}: NavigatorProps) {
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
			className={`w-full px-8 flex flex-col items-center fixed z-50 ${className} ${
				position == "bottom"
					? "bottom-0 pb-safe"
					: position == "top"
					? "top-0"
					: ""
			}`}
		>
			{/* Backdrop blur gradient */}
			<div
				className={`w-full h-full absolute top-0 left-0 backdrop-blur-md ${
					position == "bottom" ? "mask-to-b" : "mask-to-t"
				}`}
			/>
			<div
				className={`w-full h-full absolute top-0 left-0 backdrop-blur-md ${
					position == "bottom" ? "mask-to-b" : "mask-to-t"
				}`}
			/>
			<div
				className={`w-full h-full absolute top-0 left-0 backdrop-blur-md ${
					position == "bottom" ? "mask-to-b" : "mask-to-t"
				}`}
			/>

			{/* Navigator */}
			<div
				ref={navRef}
				className={`max-w-full p-0.5 gap-2 rounded-full flex justify-center items-center relative bg-foreground text-background shadow-xl my-4 `}
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
						className={`text-lg font-semibold px-3 py-1 rounded-full transition-color duration-300 text-muted-foreground border border-transparent ${
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
