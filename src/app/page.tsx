"use client";
import { useRef, useState, useEffect } from "react";

import BackgroundProvider from "@/components/providers/background-provider";
import Navigator from "@/components/navigator";
import {
	LandingSection,
	WorkSection,
	LifeSection,
	ConnectSection,
} from "@/content";

export default function Home() {
	const [activeSection, setActiveSection] = useState<string>("");
	const navRef = useRef<HTMLDivElement | null>(null);

	const links = [
		{ label: "Hello", href: "#hello" },
		{ label: "Work", href: "#work" },
		{ label: "Life", href: "#life" },
		{ label: "Connect", href: "#connect" },
	];

	// Update position on page
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
				threshold: 0.5, // Adjust sensitivity for intersection detection
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
		<div>
			<div className="w-full flex flex-col gap-40 min-h-screen relative scroll-smooth">
				<Navigator links={links} position="top" />
				<LandingSection id="hello" className="min-h-screen" />
				<WorkSection id="work" className="min-h-screen" />
				<LifeSection id="life" className="min-h-screen" />
				<ConnectSection id="connect" />
			</div>
		</div>
	);
}
