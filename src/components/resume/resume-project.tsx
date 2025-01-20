import Image from "next/image";
import Link from "next/link";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Dialog from "@/components/dialog/dialog";

export default function ResumeProject({
	date,
	title,
	description,
	images,
	links,
}: {
	date: string;
	title: string;
	description: string | React.ReactNode;
	images?: { src: string; title: string }[];
	links?: { title: string; url: string; type: "deployment" | "code" }[];
}) {
	return (
		<div className="grid grid-cols-4 p-2 bg-background/0 hover:bg-background/25 transition-all duration-300">
			<div className="col-span-1">
				<p>{date}</p>
			</div>
			<div className="col-span-3 flex flex-col items-start gap-4 w-full">
				<h3 className="font-medium">{title}</h3>

				<div className="">{description}</div>
				{images && (
					<div className="flex flex-row gap-4 w-full overflow-x-scroll no-scrollbar py-2">
						{images.map(({ src, title }) => (
							<Dialog
								key={title}
								title={title}
								trigger={
									<Image
										src={src}
										alt={title}
										width={160}
										height={160}
										className="border rounded-sm shadow cursor-pointer"
									/>
								}
								content={
									<Image
										src={src}
										alt={title}
										width={1200}
										height={1626}
										className="w-full h-full"
									/>
								}
								type="image"
							/>
						))}
					</div>
				)}
				{links && (
					<div className="flex flex-row gap-8">
						{links.map(({ title, url, type }) => (
							<div key={url} className="flex items-center">
								<Link
									href={url}
									className="hover:underline underline-offset-2 text-sm tracking-wide flex items-center gap-1 font-medium"
								>
									{title}
								</Link>
								{type === "deployment" ? (
									<ArrowTopRightIcon className="w-3 h-3" />
								) : type === "code" ? (
									<ArrowTopRightIcon className="w-3 h-3" /> // potentially a different icon in the future
								) : null}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
