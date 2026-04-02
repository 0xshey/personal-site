export default function ResumeSkills({ skills }: { skills: string[] }) {
	return <p className="text-sm text-foreground/60">{skills.join(", ")}</p>;
}
