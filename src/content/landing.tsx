"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	return (
		<section
			id={id}
			className={`flex-grow min-h-screen px-8 md:px-20 py-24 flex flex-col justify-center ${className}`}
		>
			<div className="max-w-4xl space-y-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
						Hello, World! I am
					</p>
					<h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-none text-foreground -ml-1">
						Shey
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="max-w-2xl"
				>
					<p className="text-2xl md:text-4xl text-muted-foreground leading-snug">
						A full-stack developer based in San Francisco, CA. Currently building{" "}
						<Link
							href="https://backboard-sepia.vercel.app"
							className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 border-b border-border hover:border-primary"
						>
							Backboard
							<ArrowUpRight className="w-6 h-6" />
						</Link>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
