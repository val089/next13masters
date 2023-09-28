/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true, //dzięki tej opcji mozemy podjerzeć jakie mamy pathy do stron
	},
};

module.exports = nextConfig;
