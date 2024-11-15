import { cn } from "@/lib/utils";
import {
	fontSans,
	fontSerif,
	fontMono,
	fontHeadline,
	fontHandwritten,
} from "@/fonts/fonts";

export default function FontProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div
			className={cn(
				fontSans.className, // default to sans
				fontSans.variable,
				fontSerif.variable,
				fontMono.variable,
				fontHeadline.variable,
				fontHandwritten.variable
			)}
		>
			{children}
		</div>
	);
}
