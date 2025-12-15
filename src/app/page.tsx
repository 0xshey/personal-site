"use client";


import Navigator from "@/components/navigator";
import HiringToast from "@/components/hiring-toast";
import {
	LandingSection,
	WorkSection,
	LifeSection,
	ConnectSection,
} from "@/content";

const links = [
	{ label: "Hello", href: "#hello" },
	{ label: "Work", href: "#work" },
	{ label: "Life", href: "#life" },
	{ label: "Connect", href: "#connect" },
];

export default function Home() {
	return (
		<div className="w-full">
			<HiringToast />
			<div className="w-full grid grid-cols-4 gap-0 min-h-screen relative scroll-smooth">
				<Navigator links={links} />
				<LandingSection />
				<WorkSection />
				<LifeSection />
				<ConnectSection />
			</div>
		</div>
	);
}