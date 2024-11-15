"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactPopout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div
				onClick={handleClick}
				className={cn(
					"bg-red-200 border border-black text-nowrap transition-all duration-100 ease-in-out",
					{
						" p-4 top-0 left-0 right-0 z-50": isOpen,
						static: !isOpen,
					}
				)}
			>
				{children} {isOpen ? "open" : "closed"}
			</div>
		</>
	);
}
