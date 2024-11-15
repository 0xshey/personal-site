import BaseLayout from "./base-layout";

export default function ArticleLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<BaseLayout>
			<div className="w-full max-w-lg">{children}</div>
		</BaseLayout>
	);
}
