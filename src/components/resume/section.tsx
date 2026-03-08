export default function ResumeSection({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-4">
			<p className="text-sm text-black/40">{label}</p>
			{children}
		</section>
	);
}
