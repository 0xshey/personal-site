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
			<div className="font-sans text-2xl md:text-4xl text-center font-medium text-balance flex flex-col items-center gap-4 md:mt-[20vh] mt-[10vh]">
				<p>
					Hey, I&apos;m Shey Laplanche! I am a full-stack developer
					that loves making random software and projects, but have
					never found a good space to share them with the world.
				</p>
				<p>
					As a big fan of basketball, statistics and beautiful,
					functional design, this site serves as a place for me to
					share these muses and projects I work on – often revolving
					around these things.
				</p>
				<p>
					I typically favour Python for any analytical or backend
					development and React frameworks for making them tangible,
					but love to experiment. Recently I have steered my focus
					towards developing higher quality user interfaces and
					experiences.
				</p>
				<p>
					Check out the{" "}
					<Link
						className="hover:underline text-blue-950"
						href={"/articles"}
					>
						articles
					</Link>{" "}
					where I'll post photo&apos;s, projects and more content
					about what I do.
				</p>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 w-full mt-24 md:flex-row md:gap-16">
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
