import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
	ChevronRight,
	X,
	ChevronLeft,
	ChevronRight as ChevronRightIcon,
} from "lucide-react";
import React, { useState, useRef } from "react";
import { Tile, BaseTileProps } from "./index";

interface PhotosTileProps extends BaseTileProps {
	section: string;
	label: string;
	images: string[];
	title?: string;
	description?: string;
}

export function PhotosTile({
	section,
	label,
	images,
	title,
	description,
	className,
	href,
}: PhotosTileProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	const isSingle = images.length === 1;

	const toggleExpand = () => {
		if (window.innerWidth < 768) {
			setIsExpanded(true);
		}
	};

	return (
		<>
			<Tile
				href={isExpanded ? undefined : href}
				onClick={
					isExpanded
						? undefined
						: () => {
								if (window.innerWidth < 768) {
									setIsExpanded(true);
								}
						  }
				}
				className={cn("group cursor-pointer", className)}
			>
				<div className="relative h-full w-full flex flex-col justify-between overflow-hidden">
					{/* Header */}
					<div className="z-20 h-8 px-4 py-2">
						<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
							<span>{section}</span>
							<ChevronRight className="h-3 w-3" />
							<span>{label}</span>
						</div>
					</div>

					{/* Photos Area */}
					<div className="relative flex-1 flex items-center justify-center p-6">
						{isSingle ? (
							<div className="absolute inset-0 w-full h-full">
								<Image
									src={images[0]}
									alt={title || ""}
									fill
									className="object-cover"
								/>
							</div>
						) : (
							<div className="relative w-full h-full flex items-center justify-center">
								{/* Background Dim on Hover */}
								<div className="absolute inset-0  transition-colors z-0" />

								{images.map((img, index) => {
									const total = images.length;
									const offset = index - (total - 1) / 2;

									return (
										<motion.div
											key={`${img}-${index}`}
											className="absolute w-1/2 aspect-[4/5] rounded-md border-2 border-white shadow-xl overflow-hidden"
											initial={{
												rotate:
													(index - (total - 1) / 2) *
													5,
												x:
													(index - (total - 1) / 2) *
													10,
												z: -index * 10,
											}}
											whileHover={{
												rotate: offset * 15,
												x: offset * 80,
												scale: 1.1,
												zIndex: 30,
											}}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 20,
											}}
											style={{ zIndex: 10 + index }}
										>
											<Image
												src={img}
												alt="Photo"
												fill
												className="object-cover"
											/>
										</motion.div>
									);
								})}
							</div>
						)}
					</div>

					{/* Footer Info */}
					<div className="z-20 flex flex-col justify-start p-4 bg-gradient-to-t from-muted via-muted/80 to-transparent">
						<h3 className="text-4xl font-serif leading-tight">
							{title}
						</h3>
						{description && (
							<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
								{description}
							</p>
						)}
					</div>
				</div>
			</Tile>

			{/* Mobile / Fullscreen Carousel */}
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
					>
						{/* Back Button */}
						<button
							onClick={() => setIsExpanded(false)}
							className="absolute top-6 left-6 z-[110] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
						>
							<X className="w-6 h-6" />
						</button>

						{/* Carousel */}
						<div
							ref={scrollRef}
							className="flex-1 overflow-x-auto snap-x snap-mandatory flex items-center scrollbar-hide"
						>
							{images.map((img, index) => (
								<div
									key={index}
									className="min-w-full h-[70vh] px-4 snap-center flex items-center justify-center"
								>
									<div className="relative w-full h-full">
										<Image
											src={img}
											alt=""
											fill
											className="object-contain"
										/>
									</div>
								</div>
							))}
						</div>

						{/* Sticky Bottom Info */}
						<div className="p-8 bg-black/50 backdrop-blur-xl border-t border-white/10">
							<h3 className="text-3xl font-serif text-white mb-2">
								{title}
							</h3>
							<p className="text-white/60 text-sm leading-relaxed">
								{description}
							</p>

							<div className="mt-8 flex justify-center gap-1">
								{images.map((_, i) => (
									<div
										key={i}
										className="w-1 h-1 rounded-full bg-white/20"
									/>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
