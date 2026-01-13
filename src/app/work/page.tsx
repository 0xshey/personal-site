"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/badge";
import { TechStackSidebar } from "@/components/work/tech-stack";

export default function WorkPage() {
	return (
		<div className="pt-32 pb-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-2xl px-6 md:px-0 mx-auto md:mx-0"
			>
				<h1 className="text-6xl font-medium mb-8 font-serif">Work</h1>
				<p className="border-l-2 pl-6 text-md tracking-wide text-muted-foreground leading-relaxed mb-12">
					When I build tools and apps, and finally convert them into a
					tangible product, I will post it here. I hope to inspire and
					motivate other developers to share their work without
					feeling like everything has to be perfect. Send me your
					feedback on anything I am working on!
				</p>
			</motion.div>

			<div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl min-h-screen relative pb-20 px-6 md:px-0">
				{/* Main Content - Projects */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="space-y-12 mb-24"
				>
					{/* Project 1: Backboard */}
					<div className="group relative bg-muted/80 hover:bg-muted p-6 rounded-xl transition-colors">
						<div className="grid md:grid-cols-2 gap-8 items-start">
							<div className="h-full flex flex-col justify-between order-2 md:order-1">
								<div>
									<div className="flex items-center justify-between mb-4">
										<h2 className="text-4xl font-medium tracking-tight font-sans group-hover:text-primary transition-colors">
											Backboard
										</h2>
										<ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
									</div>
									<div className="text-muted-foreground mb-6 leading-relaxed space-y-4">
										<p>
											A free, developing fantasy toolkit
											for tracking daily and season
											performances of NBA players. With
											live updating data, keep this page
											open by your game stream's or
											Fantasy management page.{" "}
										</p>
										<p>
											Currently tailored for points
											leagues. I aim to add additional
											categories related data as I
											develop.
										</p>
									</div>
								</div>
								<div className="flex flex-wrap gap-2 text-sm text-muted-foreground font-mono mt-4">
									<Badge>Next.js</Badge>
									<Badge>Python</Badge>
									<Badge>Supabase</Badge>
								</div>
							</div>
							<div className="relative aspect-video bg-muted rounded-lg overflow-hidden border shadow-sm order-1 md:order-2">
								<Image
									src="/images/projects/backboard/2.png"
									alt="Backboard Interface"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						</div>
					</div>

					{/* Add more projects here as needed */}
				</motion.div>

				{/* Footer - Tech Stack */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="w-full"
				>
					<TechStackSidebar />
				</motion.div>
			</div>
		</div>
	);
}
