/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true, //dzięki tej opcji mozemy podjerzeć jakie mamy pathy do stron
		mdxRs: true, // moliwość obsługowania mardowna
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
			{
				protocol: "https",
				hostname: "dummyimage.com",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true, //przeglądarka zrobi cache tego przekierowania
			},
			{
				source: "/search",
				destination: "/search/1",
				permanent: true, //przeglądarka zrobi cache tego przekierowania
			},
		];
	},
};

module.exports = withMDX(nextConfig);
