import MotionProvider from "@/components/providers/motion-provider";
import Section from "@/components/home/section";
import Project from "@/components/home/project";
import IndexLink from "@/components/home/index-link";
import { meta } from "@/content/meta";
import { bio } from "@/content/bio";
import { projectLinks, writingLinks, connectLinks } from "@/content/links";

export default function Home() {
	return (
		<MotionProvider>
			<div className="flex flex-col gap-16 pt-16 md:pt-40">
				<div className="flex flex-col gap-2">
					<p className="text-sm font-medium">{meta.name}</p>
					<p className="text-sm text-black/60">{meta.subtitle}</p>
				</div>

				<div className="flex flex-col gap-4">
					{bio.map((paragraph, i) => (
						<p
							key={i}
							className="text-sm leading-relaxed text-foreground"
						>
							{paragraph}
						</p>
					))}
				</div>

				<div className="flex flex-col gap-16">
					<Section title="Projects">
						<div className="flex flex-col gap-2">
							{projectLinks.map((link) => (
								<Project key={link.label} link={link} />
							))}
						</div>
					</Section>

					<Section title="Writing">
						<div className="flex flex-col">
							{writingLinks.map((link) => (
								<IndexLink key={link.title} link={link} />
							))}
						</div>
					</Section>

					<Section title="Connect">
						<div className="flex flex-col">
							{connectLinks.map((link) => (
								<IndexLink key={link.title} link={link} />
							))}
						</div>
					</Section>
				</div>
			</div>
		</MotionProvider>
	);
}
