import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
   const url = req.nextUrl.searchParams.get("url")

   if (!url) {
      return NextResponse.json(
         { error: "url parametresi gerekli" },
         { status: 400 }
      )
   }

   try {
      const response = await fetch(url, {
         method: "GET",
         redirect: "follow",
         headers: {
            "User-Agent": "Mozilla/5.0",
         },
      })

      return NextResponse.json({
         resolvedUrl: response.url || url,
      })
   } catch (error) {
      console.error("Map URL resolve edilemedi:", error)

      return NextResponse.json({
         resolvedUrl: url,
      })
   }
}
