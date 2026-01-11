import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Tile, BaseTileProps } from "./index";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ArticleTileProps extends BaseTileProps {
	section: string;
	label: string;
	title: string;
	excerpt: string;
	date: string;
	readTime?: string;
}

export function ArticleTile({
	section,
	label,
	title,
	excerpt,
	date,
	readTime,
	className,
	href,
}: ArticleTileProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Tile href={href} className={cn("", className)}>
			<div
				className="group relative h-full w-full"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="h-full flex flex-col justify-between">
					<div className="h-8 px-4 py-2">
						<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
							<span>{section}</span>
							<ChevronRight className="h-3 w-3" />
							<span>{label}</span>
						</div>
					</div>

					<motion.div
						layout="position"
						className="z-20 flex flex-col justify-start p-4 transition-all duration-300"
						style={{
							transform: isHovered
								? "translateY(-1.5rem)"
								: "translateY(0)",
						}}
					>
						<motion.h3
							layout="position"
							className="text-4xl font-serif mb-3 leading-tight"
						>
							{title}
						</motion.h3>
						<div className="relative overflow-hidden">
							<motion.p
								layout="position"
								initial={false}
								animate={{
									opacity: isHovered ? 1 : 0.7,
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className={cn(
									"text-sm text-muted-foreground leading-relaxed transition-all duration-300",
									isHovered ? "line-clamp-9" : "line-clamp-3"
								)}
							>
								{excerpt}
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
		</Tile>
	);
}
