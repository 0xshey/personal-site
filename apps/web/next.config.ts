import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

	// Workspace packages consumed as source
	transpilePackages: ['@repo/ui'],

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
export default nextConfig;
