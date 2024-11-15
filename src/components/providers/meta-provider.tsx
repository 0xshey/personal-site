import Head from "next/head";

type MetaProviderProps = {
	title?: string;
	description?: string;
};

export default function MetaProvider({
	title = "0xshey",
	description = "Shey is an Australian full-stack developer specialising in Python & React.",
}: MetaProviderProps) {
	return (
		<>
			<Head>
				<title>0xshey</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="/apple-icon.png"
					type="image/.png"
				/>

				<meta name="title" key="title" content={title} />
				<meta
					name="description"
					key="description"
					content={description}
				/>
			</Head>
		</>
	);
}
