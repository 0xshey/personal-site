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
			<div className="relative h-full w-full flex items-start justify-between p-2 overflow-hidden">
				{/* Top Row: Icon and Arrow */}
				<div className="flex justify-between items-start z-10">
					<div className="p-3 backdrop-blur-sm rounded-lg border border-border/50 group-hover:border-border transition-colors">
						<Icon className="w-6 h-6 text-foreground" />
					</div>
				</div>

				{/* Bottom Row: Label and Username */}
				<div className="z-10 mr-4 flex flex-col items-end">
					<h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 leading-none mt-4 mb-2">
						{label}
					</h3>
					{username && (
						<p className="text-sm text-muted-foreground font-mono opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
							{username}
						</p>
					)}
				</div>
			</div>
		</Tile>
	);
}
