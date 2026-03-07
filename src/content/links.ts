export type ProjectLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type TextLink = {
	title: string;
	category: string;
	href: string;
	external?: boolean;
};

export const projectLinks: ProjectLink[] = [
	{ label: "Backboard", href: "https://backboard.dev", external: true },
	{ label: "Resume", href: "/resume" },
];

export const writingLinks: TextLink[] = [
	{ title: "Why a Website?", category: "Writing", href: "#" },
	{
		title: "A Better Fantasy Projection Metric",
		category: "Writing",
		href: "#",
	},
	{ title: "Crafting the Perfect Navbar", category: "Writing", href: "#" },
];

export const connectLinks: TextLink[] = [
	{
		title: "GitHub",
		category: "Connect",
		href: "https://github.com/0xshey",
		external: true,
	},
	{
		title: "Instagram",
		category: "Connect",
		href: "https://www.instagram.com/0xshey/",
		external: true,
	},
	{
		title: "Threads",
		category: "Connect",
		href: "https://threads.net/0xshey",
		external: true,
	},
];
