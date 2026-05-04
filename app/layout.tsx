import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import "./globals.scss"
import { UIProvider } from "@/components/services/contexts/UIContexts"
import AppInitializer from "@/components/AppInitializer"
import { SITE_NAME, SITE_URL } from "@/config/seo"
import FirebaseAnalyticsProvider from "@/components/firebase/FirebaseAnalyticsProvider"
import { Suspense } from "react"

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-poppins",
   display: "swap",
})

export const metadata: Metadata = {
   metadataBase: new URL(SITE_URL),
   applicationName: SITE_NAME,
   generator: "Next.js",
   referrer: "strict-origin-when-cross-origin",
   authors: [{ name: SITE_NAME }],
   creator: SITE_NAME,
   publisher: SITE_NAME,
   formatDetection: {
      telephone: false,
      address: false,
      email: false,
   },
   icons: {
      icon: [
         { url: "/favicon.ico", sizes: "48x48" },
         { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
         { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
         { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
         { url: "/icons/icon-64.png", sizes: "64x64", type: "image/png" },
         { url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" },
         { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
         { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
         { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
   },
   manifest: "/site.webmanifest",
   appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "default",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
   },
}

export const viewport: Viewport = {
   width: "device-width",
   initialScale: 1,
   viewportFit: "cover",
   themeColor: "#ffffff",
   colorScheme: "light",
}

const RootLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode
}>) => {
   return (
      <html lang="tr" className={poppins.variable} suppressHydrationWarning>
         <body className="min-h-full flex flex-col antialiased">
            <UIProvider>
               <AppInitializer />

               <Suspense
                  fallback={null}
               >
                  <FirebaseAnalyticsProvider />
               </Suspense>

               {children}
            </UIProvider>
         </body>
      </html>
   )
}

export default RootLayout
