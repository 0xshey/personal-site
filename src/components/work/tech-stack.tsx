"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { cn } from "@/lib/utils";

const TECH_ITEMS = [
	{ name: "Python", iconName: "python" },
	{ name: "TypeScript", iconName: "typescript" },
	{ name: "React", iconName: "react" },
	{ name: "Next.js", iconName: "nextjs2" },
	{ name: "PostgreSQL", iconName: "postgresql" },
	{ name: "MySQL", iconName: "mysql" },
	{ name: "Supabase", iconName: "supabase" },
	{ name: "Vercel", iconName: "vercel" },
	{ name: "Tailwind", iconName: "tailwindcss" },
];

export function TechStackSidebar({ className }: { className?: string }) {
	return (
		<div className={cn("w-full p-4 bg-muted rounded-xl", className)}>
			<h3 className="text-sm font-medium text-muted-foreground mb-8">
				Stack
			</h3>
			<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
				{TECH_ITEMS.map((item) => (
					<motion.div
						key={item.name}
						className="group flex flex-col items-center justify-center p-2 transition-colors relative"
						whileHover={{ scale: 1.1 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 20,
						}}
					>
						<div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 opacity-70 group-hover:opacity-100">
							<StackIcon
								name={item.iconName}
								className="w-10 h-10"
							/>
						</div>
						<span className="text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap">
							{item.name}
						</span>
					</motion.div>
				))}
			</div>
		</div>
	);
}
