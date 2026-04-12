import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import "./globals.scss"
import { UIProvider } from "@/components/services/contexts/UIContexts"
import AppInitializer from "@/components/AppInitializer"

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-poppins",
})

export const metadata: Metadata = {
   title: "Supafo",
   description: "Supafo",
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
   },
}

const RootLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <html
         className={poppins.variable}
      >
         <body
            className="min-h-full flex flex-col"
         >
            <UIProvider>
               <AppInitializer />
               {children}
            </UIProvider>
         </body>
      </html>
   )
}

export default RootLayout
