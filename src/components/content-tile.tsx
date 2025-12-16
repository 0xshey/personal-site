import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContentTileProps {
	children?: React.ReactNode
	className?: string
	image?: string
	imageAlt?: string
	imageFill?: boolean
}

export function ContentTile({ children, className, image, imageAlt="", imageFill=false }: ContentTileProps) {
	return (
		<div className={cn("rounded-lg w-full aspect-square bg-muted/80 hover:bg-muted transition-colors cursor-default duration-200 overflow-hidden", className)}>
			{children}
			{image && (
				<Image 
					src={image} 
					alt={imageAlt} 
					fill={imageFill}
					objectFit="cover"
					className={cn("object-cover", imageFill && "w-full h-full", "hover:scale-[1.2] transition-transform duration-200")}
				/>
			)}
		</div>
	)
}
