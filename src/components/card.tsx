import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

// Card Component
export function Card({
	children,
	className = "",
	link,
}: {
	children: React.ReactNode;
	className?: string;
	link?: string;
}) {
	return (
		<div
			className={`relative w-full rounded-3xl border border-muted-foreground/10 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-xl overflow-hidden p-2 group transition-all duration-300 ${className} 
			${link && "cursor-pointer"}`}
		>
			<div className="relative flex flex-col justify-between h-full z-10">
				{children}
			</div>

			{/* Expanding Link Indicator */}
			{link && (
				<div className="absolute bottom-0 left-0 m-4 p-2">
					<ArrowTopRightIcon className="w-4 h-4 group-hover:h-5 group-hover:w-5 group-hover:text-foreground text-muted-foreground transition-all duration-300" />
				</div>
			)}
		</div>
	);
}

// Card Header Component
export function CardHeader({ title, description, icon }: CardHeaderProps) {
	return (
		<div className="flex items-center justify-between p-2 backdrop-blur w-fit rounded-2xl z-10">
			{icon && (
				<div className="w-12 h-12 rounded-xl border border-muted-foreground/20 mr-4 bg-background">
					{icon}
				</div>
			)}
			<div className={icon ? "" : "pl-2"}>
				<h2 className={`text-xl font-semibold`}>{title}</h2>
				{description && (
					<p className="text-sm text-foreground/60">{description}</p>
				)}
			</div>
		</div>
	);
}

// Card Image Component
export function CardImage({ src }: CardImageProps) {
	return (
		<div className="aspect-2/1">
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5/6 -mb-10 shadow-muted-foreground/20 shadow-xs group-hover:shadow-xl border-1 border-foreground/10 overflow-hidden rounded-3xl rotate-5 group-hover:rotate-0 group-hover:-mb-10 transition-all duration-300">
				<div className="w-full aspect-[3/2]">
					<Image
						src={src}
						alt="card image"
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
}

// Card Content Component
export function CardContent({
	children,
	className = "",
}: {
	children?: React.ReactNode;
	className?: string;
}) {
	return <div className={`flex-1 px-6 py-4 ${className}`}>{children}</div>;
}

// Types
export type CardProps = {
	link?: string;
	className?: string;
	children?: React.ReactNode;
};

export type CardHeaderProps = {
	title: string;
	description?: string;
	icon?: React.ReactNode;
};

export type CardImageProps = {
	src: string;
};
