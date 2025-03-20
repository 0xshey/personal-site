import Image from "next/image";

import {
	PythonIcon,
	TypescriptIcon,
	FigmaIcon,
	PostgreSQLIcon,
	SwiftIcon,
} from "@/components/icons";

export default function WorkSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	return (
		<div
			id={id}
			className={`flex-grow p-4 md:px-10 flex flex-col gap-8 justify-start ${className}`}
		>
			<h1 className="text-3xl font-medium pl-2">Work</h1>

			<Card
				imageSrc="/images/projects/backboard/roster-page.png"
				imagePlacement="cover"
				footerLeftText="My Latest Project"
			/>

			<p className="px-4 text-lg">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
				sequi obcaecati recusandae deleniti non blanditiis, enim
				repellendus dolor voluptatum molestiae perspiciatis tempora vel
				eligendi odio inventore? Quos nesciunt tenetur laborum?
			</p>

			<ul className="px-4 flex flex-col gap-4 text-xl font-semibold">
				<li className="flex items-center gap-4">
					<PythonIcon color="black" size={24} />
					Python
				</li>
				<li className="flex items-center gap-4">
					<TypescriptIcon color="black" size={24} />
					Typescript
				</li>
				<li className="flex items-center gap-4">
					<PostgreSQLIcon color="black" size={24} />
					PostgreSQL
				</li>
				<li className="flex items-center gap-4">
					<FigmaIcon color="black" size={24} />
					Figma
				</li>
				<li className="flex items-center gap-4">
					<SwiftIcon color="black" size={24} />
					Swift
				</li>
			</ul>
		</div>
	);
}

//  Card

import React from "react";

type CardProps = {
	children?: React.ReactNode;
	className?: string;
	imageSrc?: string;
	imagePlacement?: "cover" | "fit";
	headerLeftText?: string;
	headerRightText?: string;
	footerLeftText?: string;
	footerRightText?: string;
};

export function Card({
	children,
	className = "",
	imageSrc,
	imagePlacement = "cover",
	headerLeftText,
	headerRightText,
	footerLeftText,
	footerRightText,
}: CardProps) {
	const imageStyles = imageSrc
		? `absolute inset-0 ${
				imagePlacement === "cover" ? "bg-cover" : "bg-contain"
		  } bg-center`
		: "";

	return (
		<div
			className={`relative w-full rounded-3xl border border-foreground/10 bg-gradient-to-br from-background/40 via-background/25 to-background/40 shadow-background/15 shadow-lg backdrop-blur-xl overflow-hidden ${className} ${
				imageSrc && "aspect-2/1"
			}`}
		>
			{imageSrc && (
				<div
					className={`${imageStyles}`}
					style={{ backgroundImage: `url(${imageSrc})` }}
				/>
			)}

			<div className="relative flex flex-col justify-between h-full py-4 px-6 ">
				{/* Header Section */}
				<div className="flex items-center justify-between font-mono tracking-tight text-md">
					<div>{headerLeftText}</div>
					<div>{headerRightText}</div>
				</div>

				{/* Main Content */}
				<div>{children}</div>

				{/* Footer Section */}
				<div className="flex items-center justify-between font-mono tracking-tighter text-sm">
					<div>{footerLeftText}</div>
					<div>{footerRightText}</div>
				</div>
			</div>
		</div>
	);
}
