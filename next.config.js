

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.cadhome.ru',
                port: '',
                pathname: '/api/products/**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dkmd58mmx/image/upload/**'
            },
            {
                protocol: 'http',
                hostname: 'cadhome.ru',
                port: '',
                pathname: '/**'
            }
        ]
    },
    swcMinify: true,
}

module.exports = nextConfig
