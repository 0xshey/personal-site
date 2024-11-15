import type { Metadata } from "next";
import { fontSans } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Shey Laplanche",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/images/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="/images/apple-icon.png"
					type="image/.png"
				/>
			</head>
			<body className={`${fontSans.className}`}>{children}</body>
		</html>
	);
}
