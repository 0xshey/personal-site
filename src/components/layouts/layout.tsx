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
		<html>
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
                                <div className="mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
                                    <Navigator links={links} />
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
