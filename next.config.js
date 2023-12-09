

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, options) => {
        config.optimization.minimize = false;
        return config
    }
}
