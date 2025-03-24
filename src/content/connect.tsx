import Link from "next/link";
import Image from "next/image";

import { ArrowTopRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";

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
			imageSrc: "images/social/github.svg",
		},
		{
			label: "Instagram",
			user: "0xshey",
			href: "https://www.instagram.com/0xshey",
			imageSrc: "images/social/instagram.svg",
		},
	];

	return (
		<div
			id={id}
			className={`flex-grow pl-4 md:pl-10 py-4 flex flex-col gap-8 justify-center md:justify-end ${className}`}
		>
			<h1 className="text-5xl font-medium mx-auto">Let's connect</h1>
			<p className="text-xl font-medium">
				Whether you are looking for a driven and goal driven developer
				or just want to follow what I'm doing and working on, follow me
				on Instagram and GitHub.
			</p>

			<div className="flex flex-col items-center gap-6">
				<Link
					href="mailto:sheylaplanch@gmail.com"
					className="flex items-center gap-3"
				>
					<p className="text-xl font-medium underline underline-offset-3">
						Send me a message
					</p>
					<ArrowRightIcon className="h-6 w-6" />
				</Link>

				<div className="h-0.5 bg-muted-foreground/20 w-1/3"></div>

				<div className="flex gap-8 mx-auto">
					{contactItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="w-20"
						>
							<Image
								src={item.imageSrc}
								alt={item.label}
								width={120}
								height={120}
							/>
						</Link>
					))}
				</div>
			</div>

			<div className="flex justify-between gap-4 mx-8"></div>
		</div>
	);
}
