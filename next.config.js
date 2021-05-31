const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        // dest: 'public',
        register: true,
        sw: '/sw.js'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        JWT_SECRET: "djhfghbdsgrasklkajsdgf",
        SENDGRID_KEY: 'SG.4py49dSvRsuOA_y1LvKZWg.KCRikQIJDVT_.....Q',
        CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/d.......",
        CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/d.....",
        STRIPE_SECRET_KEY: "sk_test_.....",
        STRIPE_PUBLISHABLE_KEY: "pk_test_...."
    }
})