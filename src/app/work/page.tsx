"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
	return (
			
			<div className="pt-32 pb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl"
				>
					<h1 className="text-8xl font-medium mb-8 font-serif">Work</h1>
					<p className="pl-2 text-md tracking-wide text-muted-foreground leading-relaxed mb-12">
						When I build tools and apps, and finally convert them into a tangible product, I will post it here. I hope to inspire and motivate other developers to share their work without feeling like everything has to be perfect. Send me your feedback on anything I am working on!
					</p>
				</motion.div>

				<div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex flex-col items-center min-h-screen relative scroll-smooth pb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="grid grid-cols-1 gap-12"
					>
						{/* Project 1: Backboard */}
						<div className="group relative bg-muted/80 hover:bg-muted p-4 rounded-lg">
							<div className="grid md:grid-cols-2 gap-8 items-start">
								<div>
									<h2 className="text-2xl font-bold mb-4 font-mono group-hover:text-primary transition-colors">Backboard</h2>
									<p className="text-muted-foreground mb-6 leading-relaxed">
										An NBA statistics hub for fantasy managers. Provides detailed visualization and analysis tools to give fantasy players an edge.
									</p>
									<div className="flex gap-2 text-sm text-muted-foreground font-mono">
										<span>Next.js</span>
										<span>•</span>
										<span>Python</span>
										<span>•</span>
										<span>Supabase</span>
									</div>
								</div>
								<div className="relative aspect-video bg-muted rounded-lg overflow-hidden border">
									<Image
										src="/images/projects/backboard/roster-page.png"
										alt="Backboard Interface"
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						{/* Add more projects here as needed */}
					</motion.div>
				</div>

				
			</div>
	);
}
