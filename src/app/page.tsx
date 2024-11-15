import Link from "next/link";

import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Home() {
	const contactItems = [
		{
			label: "GitHub",
			user: "0xshey",
			href: "https://github.com/0xshey",
			icon: GitHubLogoIcon,
		},
		{
			label: "LinkedIn",
			user: "0xshey",
			href: "https://www.linkedin.com/in/0xshey",
			icon: LinkedInLogoIcon,
		},
		{
			label: "Instagram",
			user: "0xshey",
			href: "https://www.instagram.com/0xshey",
			icon: InstagramLogoIcon,
		},
	];

	return (
		<div className="max-w-md md:max-w-5xl h-[100%] flex-grow">
			<div className="font-sans text-2xl md:text-4xl text-center font-medium text-balance flex flex-col items-center gap-4 md:mt-[20vh] mt-[5vh]">
				<p>
					Hey! I&apos;m Shey Laplanche, a full stack developer from
					Australia based out of San Francisco.
				</p>
				<p>
					Things that engage me are basketball, statistics and
					beautiful and functional design – products, architecture,
					codebases, interfaces and experiences.
				</p>
				<p>
					My work mainly involves Python for data analysis and backend
					development, and React frameworks for frontend development.
				</p>
				<p>
					Keep an eye out for my articles where I plan to share more
					on the projects I am and have worked on.
				</p>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 w-full mt-12 md:mt-24 md:flex-row md:gap-16">
				{
					// Contact
					contactItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="flex items-center gap-1 text-gray-900/60 text-md group"
						>
							<item.icon />/
							<p className="font-mono group-hover:underline underline-offset-4">
								{item.user}
							</p>
						</Link>
					))
				}
			</div>
		</div>
	);
}
