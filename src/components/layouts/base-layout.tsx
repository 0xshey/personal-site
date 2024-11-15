import { cn } from "@/lib/utils";
import { Navigator } from "@/components/app/navigator";
import { Footer } from "@/components/app/footer";
import {
	fontSans,
	fontSerif,
	fontMono,
	fontHeadline,
	fontHandwritten,
} from "@/app/fonts";

export default function BaseLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative">
			{/* Background Glowing Orbs */}
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 top-80 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 top-20 -right-4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 bottom-60 -right-2 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
			<div className="fixed md:w-[600px] md:h-[600px] w-72 h-72 -z-10 bottom-10 left-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-6000" />

			<div
				className={cn(
					"w-full h-[100%] min-h-screen overflow-y-scroll dark",
					fontSans.variable,
					fontSerif.variable,
					fontMono.variable,
					fontHeadline.variable,
					fontHandwritten.variable
				)}
			>
				<Navigator />
				<div className="w-full min-h-screen flex justify-center pt-32">
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
}
