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
					<h1 className="text-4xl font-bold mb-8 font-mono">Work</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-12">
						I build things for the web. My focus is on creating tools that help people understand data and make better decisions.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="grid grid-cols-1 gap-12"
				>
					{/* Project 1: Backboard */}
					<div className="group relative border-t pt-12">
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
	);
}
