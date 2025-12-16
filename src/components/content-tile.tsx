import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContentTileProps {
	children?: React.ReactNode
	className?: string
	title?: string
	image?: string
	imageAlt?: string
	imageFill?: boolean
}

export function ContentTile({ children, className, title, image, imageAlt="", imageFill=false }: ContentTileProps) {
	return (
		<div className={cn(
			"rounded-lg w-full aspect-square bg-muted/80 hover:bg-muted cursor-default overflow-hidden duration-200 transition-colors",
			"",
			className
		)}>
			{title &&
				<div className="p-4 text-sm text-muted-foreground leading-none">{title}</div>
			}


			{children}
			{image && (
				<Image 
					src={image} 
					alt={imageAlt} 
					fill={imageFill}
					objectFit="cover"
					className={cn(
						"z-10 object-cover transition-transform duration-200 rounded-lg",
						imageFill ? "w-full h-full hover:translate-y-12" : "hover:scale-[1.2] "
					)}
				/>
			)}
		</div>
	)
}
