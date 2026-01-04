"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
	value: string;
	language?: string;
	className?: string;
}

export function CodeBlock({ value, language, className }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<div className="group relative rounded-xl overflow-hidden my-6 bg-muted/50 border border-border/50">
			<div className="flex items-center justify-between px-4 py-2 bg-muted/80 backdrop-blur-sm border-b border-border/50">
				{language && (
					<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						{language}
					</span>
				)}
				<button
					onClick={copyToClipboard}
					className={cn(
						"p-1.5 rounded-md transition-all duration-200 hover:bg-background/80",
						"opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100",
						copied
							? "text-green-500"
							: "text-muted-foreground hover:text-foreground"
					)}
					title="Copy code"
				>
					{copied ? (
						<Check className="w-3.5 h-3.5" />
					) : (
						<Copy className="w-3.5 h-3.5" />
					)}
				</button>
			</div>
			<div className="p-4 overflow-x-auto">
				<code className={cn("text-sm block font-mono", className)}>
					{value}
				</code>
			</div>
		</div>
	);
}
