/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        typedRoutes: true
    },
    transpilePackages: ['@sonar/ui'],
};

module.exports = nextConfig;


