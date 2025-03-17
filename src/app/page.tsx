import Link from "next/link";
import Image from "next/image";

import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
	ArrowTopRightIcon,
} from "@radix-ui/react-icons";

import Navigator from "@/components/navigator";

export default function Home() {
	const links = [
		{ label: "Hello", href: "#hello" },
		{ label: "Work", href: "#work" },
		{ label: "Life", href: "#life" },
		{ label: "Connect", href: "#connect" },
	];
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
		<div className="w-[100vw] h-[100vh]">
			<Navigator links={links} />

			<div className="p-2 h-full flex flex-col justify-center">
				<p className="text-4xl pl-4">Hello, World! I am, </p>
				<h1 className="text-[18rem] tracking-tighter">Shey</h1>
				<p className="text-4xl pl-4 text-muted-foreground">
					Full-stack software developer based in San Francisco, CA
				</p>
			</div>
		</div>
	);
}
