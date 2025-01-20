export default function ResumeBlock({
	title,
	children,
}: {
	title: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex flex-col items-start gap-4 w-full">
			<h2 className="font-medium tracking-wide pl-2">{title}</h2>
			{children}
		</div>
	);
}
