import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { meta } from "@/content/meta";
import { about, projects, education, skills } from "@/content/resume";

export default function ResumePage() {
	return (
		<PageWrapper>
			<div className="flex flex-col gap-12">
				<Link
					href="/"
					className="text-sm hover:opacity-50 transition-opacity w-fit"
				>
					← back
				</Link>

				<div className="flex flex-col gap-1">
					<p className="text-sm">{meta.fullName}</p>
					<p className="text-sm text-black/40">San Francisco, CA</p>
				</div>

				<div className="flex flex-col gap-12">
					{/* About */}
					<section className="flex flex-col gap-4">
						<p className="text-sm text-black/40">About</p>
						<div className="flex flex-col gap-3">
							{about.map((p, i) => (
								<p key={i} className="text-sm leading-relaxed text-black/60">
									{p}
								</p>
							))}
						</div>
					</section>

					{/* Projects */}
					<section className="flex flex-col gap-6">
						<p className="text-sm text-black/40">Projects</p>
						<div className="flex flex-col gap-10">
							{projects.map((project) => (
								<div key={project.title} className="flex flex-col gap-3">
									<div className="flex gap-6">
										<p className="text-sm text-black/40 shrink-0 w-10">
											{project.year}
										</p>
										<p className="text-sm">{project.title}</p>
									</div>
									<p className="text-sm leading-relaxed text-black/60 pl-16">
										{project.description}
									</p>
									<ul className="flex flex-col gap-1 pl-16">
										{project.bullets.map((bullet) => (
											<li key={bullet} className="text-sm text-black/40">
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
							))}
						</div>
					</section>

					{/* Education */}
					<section className="flex flex-col gap-6">
						<p className="text-sm text-black/40">Education</p>
						<div className="flex flex-col gap-5">
							{education.map((edu) => (
								<div key={edu.degree} className="flex flex-col gap-1">
									<div className="flex gap-6">
										<p className="text-sm text-black/40 shrink-0 w-24">
											{edu.period}
										</p>
										<p className="text-sm">{edu.degree}</p>
									</div>
									<p className="text-sm text-black/40 pl-[7.5rem]">
										{edu.institution}, {edu.location}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Skills */}
					<section className="flex flex-col gap-4">
						<p className="text-sm text-black/40">Skills</p>
						<p className="text-sm text-black/60">{skills.join(", ")}</p>
					</section>
				</div>
			</div>
		</PageWrapper>
	);
}
