import MotionProvider from "@/components/providers/motion-provider";
import Section from "@/components/home/section";
import Project from "@/components/home/project";
import IndexLink from "@/components/home/index-link";
import Hero from "@/components/hero";
import { meta } from "@/content/meta";
import { bio } from "@/content/bio";
import { projectLinks, connectLinks } from "@/content/links";
import { getAllArticles } from "@/lib/writing";

export default function Home() {
	const articles = getAllArticles();
	return (
		<MotionProvider>
			<div className="flex flex-col pt-12 md:pt-20">
				{/* Hero: full viewport width, behind content */}
				<div className="relative z-0 pb-8 mx-20">
					<Hero
						font="helvetiker_bold"
						palette="blocks"
						height={320}
						ascii={true}
					/>
				</div>

				{/* Content: higher z-index so it sits on top if hero letters overflow */}
				<div className="relative z-10 flex flex-col gap-16 -mt-10 md:mt-0">
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<p className="text-sm font-medium">{meta.name}</p>
							<p className="text-sm text-foreground/60">
								{meta.subtitle}
							</p>
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
								{articles.map((article) => (
									<IndexLink
										key={article.slug}
										link={{
											title: article.title,
											category: article.category,
											href: `/writing/${article.slug}`,
										}}
									/>
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
			</div>
		</MotionProvider>
	);
}
