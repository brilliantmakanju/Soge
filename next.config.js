/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'lh3.googleusercontent.com', 'cdn.pixabay.com', 'soge.s3.amazonaws.com']
    },
    experimental: {
        serverActions: true,
        serverActionsBodySizeLimit: '4mb',
    }
}

module.exports = nextConfig
