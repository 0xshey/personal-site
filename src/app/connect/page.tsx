"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Github,
	Linkedin,
	Mail,
	AtSign,
	Instagram,
} from "lucide-react";
import { Tile } from "@/components/tile";

const socials = [
	{ label: "GitHub", href: "https://github.com/0xshey", icon: Github },
	{ label: "LinkedIn", href: "https://linkedin.com/in/shey", icon: Linkedin },
	{ label: "Threads", href: "https://threads.net/0xshey", icon: AtSign },
	{
		label: "Instagram",
		href: "https://www.instagram.com/0xshey/",
		icon: Instagram,
	},
];

export default function ConnectPage() {
	return (
		<div className="pt-32 pb-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-2xl"
			>
				<h1 className="text-6xl font-bold mb-8 font-serif">Connect</h1>
				<p className="text-muted-foreground leading-relaxed mb-12">
					I'm always open to discussing new opportunities,
					collaborations, or just chatting about technology.
				</p>

				<div className="grid grid-cols-2 gap-4">
					{socials.map((social) => (
						<Tile.Social
							key={social.label}
							href={social.href}
							icon={social.icon}
							label={social.label}
							username={
								social.label === "Email"
									? "hello@shey.com" // Placeholder/Example
									: "@0xshey"
							}
							className="aspect-[2/1]"
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
}
