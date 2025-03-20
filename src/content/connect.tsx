import Link from "next/link";
import Image from "next/image";

import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
	ArrowTopRightIcon,
} from "@radix-ui/react-icons";

export default function ConnectSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
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
		<div
			id={id}
			className={`flex-grow pl-4 md:pl-10 py-4 flex flex-col gap-8 justify-center md:justify-end bg-blue-200 ${className}`}
		>
			<h1 className="text-4xl font-medium">Connect</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
				sequi obcaecati recusandae deleniti non blanditiis, enim
				repellendus dolor voluptatum molestiae perspiciatis tempora vel
				eligendi odio inventore? Quos nesciunt tenetur laborum?
			</p>
		</div>
	);
}
