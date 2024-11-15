"use client";

import Link from "next/link";
import Image from "next/image";

import { Drawer } from "vaul";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function ContactDrawer() {
	const contactItems = [
		{
			label: "GitHub",
			href: "https://github.com/0xshey",
			icon: GitHubLogoIcon,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/0xshey",
			icon: LinkedInLogoIcon,
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/0xshey",
			icon: InstagramLogoIcon,
		},
	];

	return (
		<Drawer.Root>
			<Drawer.Trigger>Contact</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 backdrop-blur-md z-30 bg-white/20" />
				<Drawer.Content className="bg-white/20 backdrop-blur-lg flex flex-col mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-40">
					<div className="p-4 flex-1">
						<div
							aria-hidden
							className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-800 mb-8"
						/>
						<div className="max-w-md mx-auto">
							<Drawer.Title className="font-medium mb-4 text-gray-900">
								Connect with me on...
							</Drawer.Title>
							<div className="mb-12 grid grid-cols-3 gap-2 w-full">
								{contactItems.map((item) => (
									<ContactItem
										key={item.label}
										label={item.label}
										href={item.href}
										icon={item.icon}
									/>
								))}
							</div>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

function ContactItem({
	label,
	href,
	icon,
}: {
	label: string;
	href: string;
	icon: React.ElementType;
}) {
	const Icon = icon;

	return (
		<Link
			href={href}
			passHref
			className="flex items-center justify-center min-h-24 rounded-xl shadow-sm bg-white/20"
		>
			<Icon className="w-8 h-8 text-gray-600" />
		</Link>
	);
}
