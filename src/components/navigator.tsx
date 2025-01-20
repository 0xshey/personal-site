"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigator({ className }: { className?: string }) {
	return (
		<nav
			className={`w-full max-w-full flex flex-col items-center ${className}`}
		>
			<div className="w-full flex justify-center relative">
				<div className="flex justify-between items-center w-full px-4 py-2 max-w-xl mt-8 mb-2 relative">
					<div className="w-full flex gap-8 items-center px-5 py-2 min-h-12">
						{/* Home Link */}
						<Link
							className="font-mono font-medium text-md tracking-tighter"
							href="/"
						>
							0xshey
						</Link>
					</div>
					<div className="flex gap-8 items-center px-5 py-2 min-h-12">
						<Link
							// href="https://read.cv/0xshey"
							href="/resume"
							className="text-sm hover:underline underline-offset-2"
						>
							CV
						</Link>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
}
