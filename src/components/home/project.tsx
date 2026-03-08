import Link from "next/link";
import { type ProjectLink } from "@/content/links";

export default function Project({ link }: { link: ProjectLink }) {
	const className =
		"flex flex-col gap-1 w-full py-3 px-4 rounded-xl bg-black text-white hover:bg-black/75 transition-colors";
	const content = (
		<>
			<span className="text-sm font-medium">{link.label}</span>
			<span className="text-sm text-white/50">{link.shortDescription}</span>
		</>
	);

	if (link.external) {
		return (
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				{content}
			</a>
		);
	}
	return (
		<Link href={link.href} className={className}>
			{content}
		</Link>
	);
}
