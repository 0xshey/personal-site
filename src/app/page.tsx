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
		<div className="w-full flex flex-col min-h-screen relative scroll-smooth ease-linear">
			<Navigator links={links} />
			<div
				id="hello"
				className="flex-grow pl-10 py-4 min-h-screen flex flex-col justify-end"
			>
				<p className="text-4xl pl-4">Hello, World! I am, </p>
				<h1 className="text-[16rem] tracking-tighter leading-none whitespace-nowrap">
					Shey
				</h1>
			</div>

			<div
				id="work"
				className="flex-grow pl-10 py-4 h-full min-h-[100vh] bg-red-200 flex flex-col justify-end"
			>
				<h1 className="text-4xl font-medium">Work</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Atque sequi obcaecati recusandae deleniti non blanditiis,
					enim repellendus dolor voluptatum molestiae perspiciatis
					tempora vel eligendi odio inventore? Quos nesciunt tenetur
					laborum?
				</p>
			</div>

			<div
				id="life"
				className="flex-grow pl-10 py-4 h-full min-h-[100vh] bg-blue-200 flex flex-col justify-end"
			>
				<h1 className="text-4xl font-medium">Life</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Atque sequi obcaecati recusandae deleniti non blanditiis,
					enim repellendus dolor voluptatum molestiae perspiciatis
					tempora vel eligendi odio inventore? Quos nesciunt tenetur
					laborum?
				</p>
			</div>

			<div
				id="connect"
				className="flex-grow pl-10 py-4 h-full min-h-[100vh] bg-yellow-200 flex flex-col justify-end"
			>
				<h1 className="text-4xl font-medium">Connect</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Atque sequi obcaecati recusandae deleniti non blanditiis,
					enim repellendus dolor voluptatum molestiae perspiciatis
					tempora vel eligendi odio inventore? Quos nesciunt tenetur
					laborum?
				</p>
			</div>
		</div>
	);
}
