import { type Project } from "@/content/resume";

export default function ResumeProject({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex gap-6">
				<p className="text-sm text-foreground/40 shrink-0 w-10">{project.year}</p>
				<p className="text-sm">{project.title}</p>
			</div>
			<p className="text-sm leading-relaxed text-foreground/60 pl-16">
				{project.description}
			</p>
			<ul className="flex flex-col gap-1 pl-16">
				{project.bullets.map((bullet) => (
					<li key={bullet} className="text-sm text-foreground/40">
						— {bullet}
					</li>
				))}
			</ul>
			{project.links && (
				<div className="flex gap-4 pl-16">
					{project.links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm hover:opacity-50 transition-opacity"
						>
							{link.label} →
						</a>
					))}
				</div>
			)}
		</div>
	);
}
