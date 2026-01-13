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
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>.png"
					sizes="<generated>"
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
