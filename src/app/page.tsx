import BackgroundProvider from "@/components/providers/background-provider";
import Navigator from "@/components/navigator";
import {
	LandingSection,
	WorkSection,
	LifeSection,
	ConnectSection,
} from "@/content";

export default function Home() {
	const links = [
		{ label: "Hello", href: "#hello" },
		{ label: "Work", href: "#work" },
		{ label: "Life", href: "#life" },
		{ label: "Connect", href: "#connect" },
	];

	return (
		<div className="w-full flex flex-col min-h-screen relative scroll-smooth">
			{/* Background Provider will change the gradient based on the section */}
			<BackgroundProvider>
				<Navigator links={links} position="top" />
				<LandingSection id="hello" className="min-h-screen" />
				<WorkSection id="work" className="min-h-screen" />
				<LifeSection id="life" className="min-h-screen" />
				<ConnectSection id="connect" className="min-h-screen" />
			</BackgroundProvider>
		</div>
	);
}
