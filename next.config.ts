import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
   reactStrictMode: true,

   async rewrites() {
      return [
         {
            source: '/backend/:path*',
            destination: 'https://poplared-breathed-roosevelt.ngrok-free.dev/api/v1/:path*',
         },
      ]
   },
}

export default withNextIntl(nextConfig)
