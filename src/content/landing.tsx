import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function LandingSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	return (
		<div
			id={id}
			className={`flex-grow pl-4 md:pl-10 py-4 flex flex-col gap-16 justify-center md:justify-end ${className}`}
		>
			{/* Landing Content */}
			<p className="text-2xl sm:text-4xl pl-4">Hello, World! I am, </p>
			<h1 className="text-[12rem] sm:text-[24rem] tracking-tighter leading-none whitespace-nowrap font-serif">
				Shey
			</h1>
			<p className="text-muted-foreground text-2xl">
				I am a full-stack developer based in San Francisco, CA. I am
				currently building{" "}
				<Link
					href="https://backboard-sepia.vercel.app"
					className="font-medium hover:underline inline-block"
				>
					<div className="flex items-center">
						<p>Backboard</p>
						<ArrowTopRightIcon
							height={20}
							width={20}
							className="mt-1"
						/>
					</div>
				</Link>
			</p>
		</div>
	);
}
