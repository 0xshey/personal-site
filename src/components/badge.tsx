import { cn } from "@/lib/utils";

export function Badge({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"text-xs bg-background/60 text-muted-foreground px-2 py-1 rounded-md backdrop-blur-sm border border-border tracking-wide",
				className
			)}
		>
			{children}
		</span>
	);
}
