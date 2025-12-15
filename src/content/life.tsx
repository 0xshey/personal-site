"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/card";

export default function LifeSection({
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
				Background
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="md:col-span-8"
				>
					<Card className="border-none shadow-none bg-transparent">
						<CardContent className="p-0">
							<div className="flex flex-col gap-8 text-xl md:text-2xl leading-relaxed text-muted-foreground">
								<p>
									Born and raised in a small Western Australian town,
									far away from the rest of the world in a low-tech
									household, my curiosity of technology and travel has
									had a strong impact on my life.
								</p>

								<p>
									I spent much of my childhood sketching floorplans,
									products and schematics all over spare graphing
									paper from my dad&apos;s construction drawings. When I was
									able to afford a computer for my final years of
									school, I discovered the unlimited potential of
									creativity possible from a computer.
								</p>

								<p className="text-foreground font-medium">
									In late 2024, after graduating from University with
									a Computer Science degree, I took an opportunity to
									move from Perth to California, where I have since
									been working and exploring.
								</p>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
