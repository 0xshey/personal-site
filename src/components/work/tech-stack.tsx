"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const BACKEND_DB = [
	{ name: "Python", iconName: "python" },
	{ name: "PostgreSQL", iconName: "postgresql" },
	{ name: "MySQL", iconName: "mysql" },
	{ name: "Supabase", iconName: "supabase" },
];

const FRONTEND_DEPLOY = [
	{ name: "TypeScript", iconName: "typescript" },
	{ name: "React", iconName: "react" },
	{ name: "Next.js", iconName: "nextjs2" },
	{ name: "Tailwind", iconName: "tailwindcss" },
	{ name: "Vercel", iconName: "vercel" },
];

export function TechStackSidebar({ className }: { className?: string }) {
	const { resolvedTheme } = useTheme();
	const renderItem = (item: { name: string; iconName: string }) => (
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
			<div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300">
				<StackIcon
					name={item.iconName}
					className="w-10 h-10"
					variant={resolvedTheme === "dark" ? "dark" : "light"}
				/>
			</div>
			<span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap">
				{item.name}
			</span>
		</motion.div>
	);

	return (
		<div
			className={cn("w-full max-w-xl mx-auto p-4 rounded-xl", className)}
		>
			<h3 className="text-4xl font-serif text-foreground text-center mb-12">
				My Stack
			</h3>
			<div className="space-y-12">
				<div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
					{BACKEND_DB.map(renderItem)}
				</div>
				<div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
					{FRONTEND_DEPLOY.map(renderItem)}
				</div>
			</div>
		</div>
	);
}
