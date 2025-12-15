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
		<div>
			<HiringToast />
			<div className="w-full flex flex-col gap-0 min-h-screen relative scroll-smooth">
				<Navigator links={links} />
				<LandingSection id="hello" className="min-h-screen" />
				<WorkSection id="work" />
				<LifeSection id="life" />
				<ConnectSection id="connect" />
			</div>
		</div>
	);
}
