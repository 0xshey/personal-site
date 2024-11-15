import type { NextConfig } from "next";
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

	// Allow all image sources
	images: {
		domains: [],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},

	// Other configurations...
};

const withMDX = createMDX({
	// MD plugins here
});

export default withMDX(nextConfig);
