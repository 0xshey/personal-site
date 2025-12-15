"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardImage } from "@/components/card";

export default function WorkSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	return (
		<section
			id={id}
			className={`flex-grow min-h-0 px-4 md:px-20 py-16 md:py-24 flex flex-col justify-center ${className}`}
		>
			<motion.h2 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-4xl md:text-6xl font-bold mb-12"
			>
				Latest Work
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
				>
					<Card className="h-full hover:scale-[1.02] transition-transform duration-300">
						<CardHeader
							title="Backboard"
							description="An NBA statistics hub for fantasy managers"
							icon={
								<div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
									<Image
										src="/images/projects/backboard/icon.svg"
										alt="Backboard logo"
										fill
										className="object-cover"
									/>
								</div>
							}
						/>
						<CardImage src="/images/projects/backboard/roster-page.png" />
					</Card>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="flex flex-col justify-center gap-6 p-4"
				>
					<p className="text-xl md:text-2xl font-medium leading-relaxed">
						Data fetching, manipulation and visualisation are the
						primary axes for most of my development pursuits.
					</p>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
						Backboard utilises Python, NextJS, Supabase and Vercel to
						bring this application to users.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="flex flex-col justify-center gap-6 p-4"
				>
					<Link 
						href="/resume"
						className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 w-fit"
					>
						View my full resume
						<ArrowRight className="w-4 h-4" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
