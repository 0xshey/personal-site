import BaseLayout from "./base-layout";

export default function MainLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<BaseLayout>
			<div className="w-full max-w-lg md:max-w-2xl">{children}</div>
		</BaseLayout>
	);
}
