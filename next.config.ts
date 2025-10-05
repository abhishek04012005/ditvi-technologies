/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...existing config
    generateStaticParams: true,
    siteMap: {
        hostname: 'https://abhishek04012005.github.io/ditvi-technologies',
    },
}

module.exports = nextConfig