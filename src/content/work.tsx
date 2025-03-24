import Image from "next/image";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Card, CardHeader, CardImage, CardContent } from "@/components/card";

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
			className={`flex-grow p-4 md:px-10 flex flex-col gap-8 justify-start pt-24 ${className}`}
		>
			<h1 className="text-5xl font-medium pl-2 w-fit mx-auto my-8">
				My latest work
			</h1>

			<Card>
				<CardHeader
					title="Backboard"
					description="An NBA statistics hub for fantasy managers"
					icon={
						<Image
							src="/images/projects/backboard/icon.svg"
							alt="Backboard logo"
							height={120}
							width={120}
						/>
					}
				/>
				<CardImage src="/images/projects/backboard/roster-page.png" />
			</Card>

			<div className="flex flex-col gap-2">
				<p className="px-4 text-lg font-medium">
					Data fetching, manipulation and visualisation are the
					primary axes for most of my development pursuits.
				</p>
				<p className="px-4 text-lg font-medium text-muted-foreground">
					Backboard utilises Python, NextJS, Supabase and Vercel to
					bring this application to users.
				</p>
			</div>
		</div>
	);
}
