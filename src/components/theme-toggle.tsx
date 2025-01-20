"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { setTheme } = useTheme();

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
			className="rounded h-8 w-8 relative flex place-items-center justify-center"
		>
			<SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
