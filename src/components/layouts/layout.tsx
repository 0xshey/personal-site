import "@/styles/globals.css";

import FontProvider from "@/components/providers/font-provider";
import MetaProvider from "@/components/providers/meta-provider";
import ThemeProvider from "@/components/providers/theme-provider";

import Navigator from "@/components/navigator";

const links = [
	{ label: "Shey", href: "/" },
	{ label: "Work", href: "/work" },
	{ label: "Writing", href: "/writing" },
	{ label: "Life", href: "/life" },
	{ label: "Connect", href: "/connect" },
];

type LayoutProps = {
	children: React.ReactNode;
	metadata?: React.ComponentProps<typeof MetaProvider>;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<html suppressHydrationWarning>
			<MetaProvider />
			<body>
				<FontProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<div>
							<main className="w-full min-h-screen flex flex-col items-center">
								<div className="h-full mx-auto w-full px-4 md:px-8 font-sans">
									<div className="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
										<Navigator links={links} />
									</div>
									{children}
								</div>
							</main>
						</div>
					</ThemeProvider>
				</FontProvider>
			</body>
		</html>
	);
}
