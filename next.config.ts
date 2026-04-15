import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()
const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
   reactStrictMode: true,
   poweredByHeader: false,
   productionBrowserSourceMaps: false,

   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "poplared-breathed-roosevelt.ngrok-free.dev",
            pathname: "/storage/**",
         },
      ],
   },

   compiler: isProd
      ? {
         removeConsole: {
            exclude: ["error", "warn"],
         },
      }
      : undefined,

   async rewrites() {
      if (!isProd) {
         return [
            {
               source: "/backend/:path*",
               destination: "https://poplared-breathed-roosevelt.ngrok-free.dev/api/v1/:path*",
            },
         ]
      }

      return []
   },
}

export default withNextIntl(nextConfig)
