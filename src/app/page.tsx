import Link from "next/link";
import Image from "next/image";

import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
	ArrowTopRightIcon,
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
		<div className="max-w-lg md:max-w-4xl lg:max-w-7xl h-[100%] flex-grow flex flex-col gap-16 pt-20 items-center">
			<div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-16 px-8">
				<div className="col-span-3 font-sans text-2xl md:text-4xl text-left font-medium text-balance flex flex-col items-center gap-8 w-full md:max-w-4xl">
					<p>
						Hey, I&apos;m Shey Laplanche! I am a full-stack
						developer based out of San Francisco, CA. I love
						building things and sharing them with the world.
					</p>
					<p>
						I typically favour Python for any analytical or backend
						development and React frameworks for making them
						tangible, but love to experiment.
					</p>
					<p>
						At the moment my free time is spent at the courts,
						playing chess or exploring my new home in the Bay Area.
					</p>
				</div>
				<div className="col-span-3 xl:col-span-2 rounded-xl w-full flex flex-col items-start justify-end gap-4 aspect-[1.2] relative overflow-hidden max-w-xl xl:max-w-none border dark:border-muted shadow-sm mx-auto">
					<Image
						src="/images/projects/backboard/players-page.png"
						alt="Shey Laplanche"
						width={1200}
						height={1366}
						className="absolute inset-0 object-cover h-full w-full -z-10"
					/>
					<Image
						src="/images/backboard-logo.svg"
						alt="Shey Laplanche"
						width={1200}
						height={1366}
						className="absolute inset-0 object-cover -z-10 opacity-20"
					/>

					<div className="relative bg-gradient-to-t from-background to-transparent pt-32 sm:pt-48 lg:pt-64 w-full h-full flex flex-col items-start justify-end gap-2 p-8">
						<Link
							href={"https://backboard-sepia.vercel.app"}
							className="flex items-center gap-1"
						>
							<p className="text-2xl font-medium hover:underline underline-offset-4 ">
								Check out my latest project - Backboard{" "}
								<ArrowTopRightIcon className="h-5 w-5 inline-block mb-0.5" />
							</p>
						</Link>
						<p className="max-w-xl text-lg text-muted-foreground">
							An NBA Statistics Dashboard with a continually
							expanding set of tools for Fantasy NBA and League
							analysis.
						</p>
					</div>
				</div>
			</div>

			<span className="h-0.5 rounded-full w-full max-w-xs bg-black/10" />

			<div className="flex flex-col items-center justify-center gap-8 w-full mt-16 md:flex-row md:gap-16">
				{
					// Contact
					contactItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="flex items-center gap-1 text-gray-900/60 text-md group"
						>
							<item.icon className="h-4 w-4" />/
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
