"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	function toggleTheme() {
		setTheme((oldTheme) => {
			if (oldTheme === "light") return "dark";
			if (oldTheme === "dark") return "light";
			return "system";
		});
	}

	return (
		<button
			onClick={toggleTheme}
			className="h-full w-full relative flex place-items-center justify-center cursor-pointer"
		>
			{resolvedTheme === "dark" ? (
				<p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Dark</p>
			) : (
				<p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Light</p>
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
