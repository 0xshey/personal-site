"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
    { label: "GitHub", href: "https://github.com/0xshey", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/shey", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com/0xshey", icon: Twitter },
    { label: "Email", href: "mailto:hello@example.com", icon: Mail },
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
					<h1 className="text-4xl font-bold mb-8 font-mono">Connect</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-12">
						I'm always open to discussing new opportunities, collaborations, or just chatting about technology.
					</p>

                    <div className="flex flex-col gap-4">
                        {socials.map((social) => (
                            <Link 
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                className="group flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <social.icon className="w-5 h-5" />
                                    <span className="font-mono text-lg">{social.label}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
				</motion.div>
			</div>
	);
}
