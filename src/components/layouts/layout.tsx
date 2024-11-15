import "@/styles/globals.css";

import FontProvider from "@/components/providers/font-provider";
import MetaProvider from "@/components/providers/meta-provider";
import BackgroundProvider from "@/components/providers/background-provider";

import Navigator from "@/components/navigator";
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
					<BackgroundProvider>
						<div className="h-[100%]">
							<Navigator />
							<main className="w-full min-h-dvh flex flex-col items-center">
								{children}
							</main>
							<Footer />
						</div>
					</BackgroundProvider>
				</FontProvider>
			</body>
		</html>
	);
}
