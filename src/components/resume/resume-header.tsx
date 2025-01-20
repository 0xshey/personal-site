import Image from "next/image";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function ResumeHeader({
	profileImage,
	name,
	subtext,
	location,
}: {
	profileImage: string;
	name: string;
	subtext: string;
	location?: string;
}) {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full grid grid-cols-5">
				<div className="col-span-1">
					<Image
						src={profileImage}
						alt={name}
						width={100}
						height={100}
						className="rounded-full overflow-hidden border"
					/>
				</div>
				<div className="col-span-4 flex flex-col">
					<p className="text-2xl mt-2">{name}</p>
					<p className="text-muted-foreground">{subtext}</p>
					{location && (
						<div className="border w-fit pr-4 pl-1.5 py-0.5 my-1 rounded-full bg-muted flex items-center gap-2">
							<GlobeIcon className="text-muted-foreground" />
							<p className="text-muted-foreground text-sm">
								{location}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
