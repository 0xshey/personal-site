import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { meta } from "@/content/meta";
import { bio } from "@/content/bio";
import { projectLinks, writingLinks, connectLinks, type TextLink } from "@/content/links";

function TextLinkRow({ link }: { link: TextLink }) {
	const inner = (
		<div className="flex items-center gap-3 py-2.5 group cursor-pointer">
			<span className="text-sm group-hover:opacity-60 transition-opacity">
				{link.title}
			</span>
			<div className="flex-1 border-b border-black/10 group-hover:border-black/25 transition-colors" />
			<span className="text-sm text-black/40 group-hover:opacity-60 transition-opacity">
				{link.category}
			</span>
		</div>
	);

	if (link.external) {
		return (
			<a href={link.href} target="_blank" rel="noopener noreferrer">
				{inner}
			</a>
		);
	}
	return <Link href={link.href}>{inner}</Link>;
}

export default function Home() {
	return (
		<PageWrapper>
			<div className="flex flex-col gap-16 pt-16 md:pt-40">
				<div className="flex flex-col gap-2">
					<p className="text-sm font-semibold">{meta.name}</p>
					<p className="text-sm text-black/60">{meta.subtitle}</p>
				</div>

				<div className="flex flex-col gap-4">
					{bio.map((paragraph, i) => (
						<p key={i} className="text-sm leading-relaxed text-black/60">
							{paragraph}
						</p>
					))}
				</div>

				<div className="flex flex-col gap-10">
					{/* Projects */}
					<div className="flex flex-col gap-3">
						<p className="text-sm text-black/40">Projects</p>
						<div className="flex flex-col gap-2">
							{projectLinks.map((link) => {
								const className =
									"flex items-center justify-center w-full py-3 px-4 rounded-lg bg-black text-white text-sm hover:bg-black/75 transition-colors";
								if (link.external) {
									return (
										<a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className={className}
										>
											{link.label}
										</a>
									);
								}
								return (
									<Link key={link.label} href={link.href} className={className}>
										{link.label}
									</Link>
								);
							})}
						</div>
					</div>

					{/* Writing */}
					<div className="flex flex-col gap-3">
						<p className="text-sm text-black/40">Writing</p>
						<div className="flex flex-col">
							{writingLinks.map((link) => (
								<TextLinkRow key={link.title} link={link} />
							))}
						</div>
					</div>

					{/* Connect */}
					<div className="flex flex-col gap-3">
						<p className="text-sm text-black/40">Connect</p>
						<div className="flex flex-col">
							{connectLinks.map((link) => (
								<TextLinkRow key={link.title} link={link} />
							))}
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}
