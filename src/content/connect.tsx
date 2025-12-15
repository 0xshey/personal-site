"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConnectSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	const contactItems = [
		{
			label: "GitHub",
			href: "https://github.com/0xshey",
			imageSrc: "/images/social/github.svg",
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/0xshey",
			imageSrc: "/images/social/instagram.svg",
		},
	];

	return (
		<section
			id={id}
			className={`flex-grow min-h-[60vh] px-4 md:px-20 py-16 md:py-24 flex flex-col justify-end ${className}`}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="space-y-12 mb-20"
			>
				<h2 className="text-6xl md:text-9xl font-bold tracking-tighter">
					Let&apos;s Connect
				</h2>
				
				<div className="flex flex-col md:flex-row gap-12 md:items-start md:justify-between">
					<p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
						Whether you are looking for a driven developer
						or just want to follow what I&apos;m working on, say hello.
					</p>

					<div className="flex items-center gap-6">
						{contactItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="opacity-70 hover:opacity-100 transition-opacity"
							>
								<div className="relative w-12 h-12">
									<Image
										src={item.imageSrc}
										alt={item.label}
										fill
										className="object-contain invert dark:invert-0"
									/>
								</div>
							</Link>
						))}
					</div>
				</div>

				<Link
					href="mailto:sheylaplanch@gmail.com"
					className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-medium hover:text-muted-foreground transition-colors"
				>
					<span>sheylaplanch@gmail.com</span>
					<ArrowRight className="w-8 h-8 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
				</Link>
			</motion.div>
			
			<div className="border-t border-border pt-8 flex justify-between text-sm text-muted-foreground">
				<p>© {new Date().getFullYear()} Shey</p>
				<p>San Francisco, CA</p>
			</div>
		</section>
	);
}
