import "@/styles/globals.css";

import FontProvider from "@/components/providers/font-provider";
import MetaProvider from "@/components/providers/meta-provider";
import ThemeProvider from "@/components/providers/theme-provider";
import BackgroundProvider from "@/components/providers/background-provider";

import Navigator, { NavigatorProps } from "@/components/navigator";

// import Navigator from "../navigator";
import Footer from "@/components/footer";

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
							<main className="w-full min-h-screen overflow-x-hidden flex flex-col items-center">
								{children}
							</main>
							<Footer />
						</div>
					</ThemeProvider>
				</FontProvider>
			</body>
		</html>
	);
}
