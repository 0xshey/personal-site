export default function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-3">
			<p className="text-sm font-medium">{title}</p>
			{children}
		</div>
	);
}
