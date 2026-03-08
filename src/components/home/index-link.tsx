import Link from "next/link";
import { type TextLink } from "@/content/links";

export default function IndexLink({ link }: { link: TextLink }) {
	const inner = (
		<div className="flex items-center gap-4 py-2.5 group cursor-pointer transition-colors">
			<span className="text-sm transition-colors  text-muted-foreground group-hover:text-foreground">
				{link.title}
			</span>
			<div className="flex-1 border-b border-muted group-hover:border-border transition-colors" />
			<span className="text-sm text-muted-foreground group-hover:text-foreground">
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
