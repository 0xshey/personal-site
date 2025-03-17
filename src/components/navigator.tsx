"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type NavLink = {
	label: string;
	href: string;
};

export default function Navigator({
	links,
	className,
}: {
	links: NavLink[];
	className?: string;
}) {
	return (
		<nav
			className={`w-full px-8 flex flex-col items-center pt-4 sticky top-0 z-50  ${className}`}
		>
			<div className="max-w-full p-2 gap-2 rounded-full flex justify-center relative bg-foreground text-background">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="leading-none px-3 py-2 rounded-full transition-color duration-300 hover:bg-accent/50"
					>
						{link.label}
					</Link>
				))}

				<ThemeToggle />
			</div>
		</nav>
	);
}
