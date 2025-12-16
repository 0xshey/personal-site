"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LifePage() {
	return (
			
			<div className="pt-32 pb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl"
				>
					<h1 className="text-4xl font-bold mb-8 font-mono">Life</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-12">
						Beyond code, I enjoy exploring the world, capturing moments, and staying active.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {/* Placeholder gallery - in a real scenario we'd use real images */}
                    <div className="aspect-square bg-muted rounded-lg w-full"></div>
                    <div className="aspect-square bg-muted rounded-lg w-full"></div>
                    <div className="aspect-square bg-muted rounded-lg w-full"></div>
                    <div className="aspect-square bg-muted rounded-lg w-full"></div>
                </div>
			</div>
	);
}
