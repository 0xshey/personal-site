export type Project = {
	title: string;
	year: string;
	description: string;
	bullets: string[];
	links?: { label: string; href: string }[];
};

export type Education = {
	degree: string;
	institution: string;
	location: string;
	period: string;
};

export const about: string[] = [
	"Australian full-stack developer living in San Francisco. Experienced with Python for data manipulation and API applications, and React for building interfaces.",
	"Recently graduated from a BSc. Computer Science in Perth, Australia. Looking to join a team where I can apply my technical, interpersonal, and creative skills.",
	"Also looking for connections or pickup runs around the city — get in touch.",
];

export const projects: Project[] = [
	{
		title: "Backboard — NBA Fantasy Dashboard",
		year: "2024",
		description:
			"An NBA dashboard for viewing live and historical daily summaries of NBA performances from a Fantasy Points perspective.",
		bullets: [
			"Built with React on the Next.js framework",
			"PostgreSQL backend hosted on Supabase",
			"Deployed to Vercel",
		],
		links: [
			{ label: "Code", href: "https://github.com/0xshey/backboard" },
			{ label: "Live", href: "https://backboard.dev/" },
		],
	},
	{
		title: "Shopping Assistant Web-App",
		year: "2023",
		description:
			"A full-stack Django web-application for browsing grocery products from multiple retailers.",
		bullets: [
			"Selenium-based web scraper for catalog data",
			"PostgreSQL database backend",
			"Deployed for a 3-month period",
		],
	},
];

export const education: Education[] = [
	{
		degree: "Bachelor of Computer Science",
		institution: "Curtin University",
		location: "Bentley, Western Australia",
		period: "2020 – 2023",
	},
	{
		degree: "Bachelor of Computer Systems Engineering",
		institution: "Curtin University",
		location: "Bentley, Western Australia",
		period: "2017 – 2018",
	},
];

export const skills: string[] = [
	"Python",
	"TypeScript",
	"React",
	"Next.js",
	"PostgreSQL",
	"Supabase",
	"Tailwind CSS",
];
