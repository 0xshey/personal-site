import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
	// Open state for the carousel
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Reset index when opening
	useEffect(() => {
		if (isOpen) setActiveIndex(0);
	}, [isOpen]);

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				carouselRef.current.scrollLeft / window.innerWidth
			);
			setActiveIndex(index);
		}
	};

	const isSingle = images.length === 1;

	return (
		<>
			<Tile
				className={cn("group cursor-pointer", className)}
				// Clicking the tile opens the carousel on all devices
				onClick={() => setIsOpen(true)}
			>
				<div className="relative h-full w-full flex flex-col justify-between overflow-hidden">
					{/* Header */}
					<div className="z-10 h-8 px-4 py-2">
						<div className="text-sm text-muted-foreground/60 flex items-center gap-1">
							<span>{section}</span>
							<ChevronRight className="h-3 w-3" />
							<span>{label}</span>
						</div>
					</div>

					{/* Photos Area (Grid Preview) */}
					<div className="relative flex-1 flex items-center justify-center p-6 translate-y-8">
						{isSingle ? (
							<div className="absolute inset-0 w-full h-full">
								<motion.div
									className="relative w-full h-full"
									whileHover={{ scale: 1.05 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 20,
									}}
								>
									<Image
										src={images[0]}
										alt={title || ""}
										fill
										className="object-cover"
									/>
								</motion.div>
							</div>
						) : (
							<div className="relative w-full h-full flex items-center justify-center">
								{/* Background Dim on Hover */}
								<div className="absolute inset-0 transition-colors z-0" />

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
					<div className="z-20 flex flex-col justify-start p-4 bg-gradient-to-t from-muted via-muted/80 to-transparent pointer-events-none">
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

			{/* Fullscreen Carousel Overlay */}
			{mounted &&
				createPortal(
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 z-[9999] bg-black/95 flex flex-col"
							>
								{/* Backdrop Tap to Close */}
								<div
									className="absolute inset-0 z-0"
									onClick={() => setIsOpen(false)}
								/>

								{/* Close Button */}
								<button
									onClick={() => setIsOpen(false)}
									className="absolute top-6 left-6 z-[110] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
								>
									<X className="w-6 h-6" />
								</button>

								{/* Carousel (Snap Scroll) */}
								<div
									id="carousel-container"
									ref={carouselRef}
									onScroll={handleScroll}
									className="relative z-10 flex-1 overflow-x-auto snap-x snap-mandatory flex items-center scrollbar-hide no-scrollbar"
									style={{
										scrollbarWidth: "none",
										msOverflowStyle: "none",
									}}
									onClick={(e) => {
										// If clicking the gap between images (container), close it
										if (e.target === e.currentTarget)
											setIsOpen(false);
									}}
								>
									{images.map((img, index) => (
										<div
											key={index}
											className="min-w-full h-[80vh] px-4 snap-center flex items-center justify-center p-4"
											onClick={(e) => {
												if (
													e.target === e.currentTarget
												)
													setIsOpen(false);
											}}
										>
											<div className="relative w-full h-full max-w-5xl group pointer-events-none">
												<Image
													src={img}
													alt=""
													fill
													className="object-contain pointer-events-auto"
													priority
												/>
											</div>
										</div>
									))}
								</div>

								{/* Bottom Info */}
								<div className="relative z-20 p-8 bg-black/50 backdrop-blur-xl border-t border-white/10 pointer-events-none">
									<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
										<div>
											<h3 className="text-3xl font-serif text-white mb-2">
												{title}
											</h3>
											<p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
												{description}
											</p>
										</div>

										{/* Navigation Buttons (Desktop) */}
										{images.length > 1 && (
											<div className="hidden md:flex items-center gap-4 pointer-events-auto">
												<button
													onClick={(e) => {
														e.stopPropagation();
														if (
															carouselRef.current
														) {
															carouselRef.current.scrollBy(
																{
																	left: -window.innerWidth,
																	behavior:
																		"smooth",
																}
															);
														}
													}}
													className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
													disabled={activeIndex === 0}
													style={{
														opacity:
															activeIndex === 0
																? 0.3
																: 1,
													}}
												>
													<ChevronLeft className="w-6 h-6" />
												</button>

												{/* Dots Indicator (Centered between buttons) */}
												<div className="flex justify-center gap-2">
													{images.map((_, i) => (
														<div
															key={i}
															className={cn(
																"w-1.5 h-1.5 rounded-full transition-colors",
																i ===
																	activeIndex
																	? "bg-white"
																	: "bg-white/40"
															)}
														/>
													))}
												</div>

												<button
													onClick={(e) => {
														e.stopPropagation();
														if (
															carouselRef.current
														) {
															carouselRef.current.scrollBy(
																{
																	left: window.innerWidth,
																	behavior:
																		"smooth",
																}
															);
														}
													}}
													className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
													disabled={
														activeIndex ===
														images.length - 1
													}
													style={{
														opacity:
															activeIndex ===
															images.length - 1
																? 0.3
																: 1,
													}}
												>
													<ChevronRight className="w-6 h-6" />
												</button>
											</div>
										)}
									</div>

									{/* Mobile Dots (if screen is small, buttons hidden) */}
									<div className="md:hidden mt-6 flex justify-center gap-2">
										{images.map((_, i) => (
											<div
												key={i}
												className={cn(
													"w-1.5 h-1.5 rounded-full transition-colors",
													i === activeIndex
														? "bg-white"
														: "bg-white/40"
												)}
											/>
										))}
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>,
					document.body
				)}
		</>
	);
}
