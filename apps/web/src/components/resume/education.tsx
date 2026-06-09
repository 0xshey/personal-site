import { type Education } from "@/content/resume";

export default function ResumeEducation({ edu }: { edu: Education }) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex gap-6">
				<p className="text-sm text-foreground/40 shrink-0 w-24">{edu.period}</p>
				<p className="text-sm">{edu.degree}</p>
			</div>
			<p className="text-sm text-foreground/40 pl-30">
				{edu.institution}, {edu.location}
			</p>
		</div>
	);
}
