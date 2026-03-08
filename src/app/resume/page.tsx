import Link from "next/link";
import MotionProvider from "@/components/providers/motion-provider";
import ResumeSection from "@/components/resume/section";
import ResumeProject from "@/components/resume/project";
import ResumeEducation from "@/components/resume/education";
import ResumeSkills from "@/components/resume/skills";
import { meta } from "@/content/meta";
import { about, projects, education, skills } from "@/content/resume";

export default function ResumePage() {
	return (
		<MotionProvider>
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
					<ResumeSection label="About">
						<div className="flex flex-col gap-3">
							{about.map((p, i) => (
								<p key={i} className="text-sm leading-relaxed text-black/60">
									{p}
								</p>
							))}
						</div>
					</ResumeSection>

					<ResumeSection label="Projects">
						<div className="flex flex-col gap-10">
							{projects.map((project) => (
								<ResumeProject key={project.title} project={project} />
							))}
						</div>
					</ResumeSection>

					<ResumeSection label="Education">
						<div className="flex flex-col gap-5">
							{education.map((edu) => (
								<ResumeEducation key={edu.degree} edu={edu} />
							))}
						</div>
					</ResumeSection>

					<ResumeSection label="Skills">
						<ResumeSkills skills={skills} />
					</ResumeSection>
				</div>
			</div>
		</MotionProvider>
	);
}
