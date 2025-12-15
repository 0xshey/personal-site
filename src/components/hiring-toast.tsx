"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HiringToast() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 1500); // Delay appearance for 1.5 seconds

		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, x: 20, y: 0 }}
					animate={{ opacity: 1, x: 0, y: 0 }}
					exit={{ opacity: 0, x: 20 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className="fixed top-24 right-4 md:right-8 z-40 hidden md:block"
				>
					<Link
						href="/resume"
						className="flex items-center gap-3 pl-4 pr-3 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
					>
						<div className="flex items-center gap-2">
							<Briefcase className="w-4 h-4 text-foreground" />
							<span className="text-sm font-medium">Are you hiring?</span>
						</div>
						<div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
							<ArrowRight className="w-4 h-4 text-primary" />
						</div>
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
