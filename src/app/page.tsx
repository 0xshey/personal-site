import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import MainLayout from "@/components/layouts/main-layout";

export default function Home() {
	const contactItems = [
		{
			label: "GitHub",
			abbreviation: "GH",
			href: "https://github.com/0xshey",
			icon: GitHubLogoIcon,
			color: "group-hover:bg-purple-400",
		},
		{
			label: "LinkedIn",
			abbreviation: "IN",
			href: "https://www.linkedin.com/in/0xshey",
			icon: LinkedInLogoIcon,
			color: "group-hover:bg-blue-400",
		},
		{
			label: "Instagram",
			abbreviation: "IG",
			href: "https://www.instagram.com/0xshey",
			icon: InstagramLogoIcon,
			color: "group-hover:bg-orange-400",
		},
	];

	return (
		<>
			<MainLayout>
				<div className="h-full flex flex-col items-center mx-4 justify-start mt-4">
					<div className="leading-tight font-sans font-normal text-2xl md:text-4xl md:font-normal text-left text-balance flex flex-col gap-4">
						<p>Hello, San Francisco! </p>
						<p>
							I&apos;m Shey Laplanche, a full-stack developer from
							Australia now based in The Bay.
						</p>
						<p>
							Things that engage me are basketball, statistics and
							beautiful and functional design - products,
							architecture, codebases, interfaces and experiences.
						</p>
						<p>
							My work mainly involves Python for data analysis and
							backend development, and React frameworks for
							frontend development.
						</p>
						<p>
							Keep an eye out for my articles where I plan to
							share more on the projects I am and have worked on.
						</p>
						<p>
							I'm on{" "}
							<Link
								href="https://github.com/0xshey"
								className="hover:underline"
							>
								GitHub
							</Link>
							,{" "}
							<Link
								href="https://www.linkedin.com/in/0xshey"
								className="hover:underline"
							>
								LinkedIn
							</Link>
							,{" "}
							<Link
								href="https://www.instagram.com/0xshey"
								className="hover:underline"
							>
								Instagram
							</Link>{" "}
							to connect.
						</p>
					</div>
				</div>
			</MainLayout>
		</>
	);
}
