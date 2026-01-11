import { cn } from "@/lib/utils";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Tile, BaseTileProps } from "./index";

interface SocialTileProps extends BaseTileProps {
	icon: LucideIcon;
	label: string;
	username?: string; // Optional username to show on hover
}

export function SocialTile({
	icon: Icon,
	label,
	username,
	className,
	href,
}: SocialTileProps) {
	return (
		<Tile href={href} className={cn("group h-full", className)}>
			<div className="relative h-full w-full flex flex-col items-start justify-between p-4 overflow-hidden">
				{/* Top Row: Icon and Arrow */}
				<div className="flex justify-between items-start z-10">
					<div className="backdrop-blur-sm rounded-xl group-hover:border-border transition-colors">
						<Icon className="w-6 h-6 text-muted-foreground" />
					</div>
				</div>

				{/* Bottom Row: Label and Username */}
				<div className="z-10 flex flex-col items-end">
					<h3 className="text-sm font text-muted-foreground transition-transform duration-300 leading-none">
						{label}
					</h3>
				</div>
			</div>
		</Tile>
	);
}
