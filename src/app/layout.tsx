import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";

import { meta } from "@/content/meta";

const geist = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${geist.className} antialiased bg-background text-foreground`}>
				<main className="min-h-screen px-6 py-16 max-w-lg mx-auto">
					{children}
				</main>
			</body>
		</html>
	);
}
