export type ProjectLink = {
	label: string;
	shortDescription: string;
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
	{
		label: "Backboard",
		shortDescription: "NBA fantasy analytics dashboard",
		href: "https://backboard.dev",
		external: true,
	},
];


export const connectLinks: TextLink[] = [
	{
		title: "Resume",
		category: "Work",
		href: "/resume",
	},
	{
		title: "GitHub",
		category: "Code",
		href: "https://github.com/0xshey",
		external: true,
	},
	{
		title: "Instagram",
		category: "Social",
		href: "https://www.instagram.com/0xshey/",
		external: true,
	},
	{
		title: "Threads",
		category: "Social",
		href: "https://threads.net/0xshey",
		external: true,
	},
];
