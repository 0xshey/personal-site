"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	function toggleTheme() {
		setTheme((oldTheme) => {
			if (oldTheme === "light") return "dark";
			if (oldTheme === "dark") return "light";
			return "system";
		});
	}

	if (!mounted) {
		return (
			<div className="h-full w-full relative flex place-items-center justify-center">
				<p className="text-sm text-muted-foreground opacity-0">
					Loading
				</p>
			</div>
		);
	}

	return (
		<button
			onClick={toggleTheme}
			className="h-full w-full relative flex place-items-center justify-center cursor-pointer"
		>
			{resolvedTheme === "dark" ? (
				<p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
					Dark
				</p>
			) : (
				<p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
					Light
				</p>
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
