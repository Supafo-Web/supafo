import { NextRequest, NextResponse } from 'next/server'

const API_BASE = 'https://poplared-breathed-roosevelt.ngrok-free.dev/api/v1'

async function forward(req: NextRequest, path: string[]) {
   const targetUrl = `${API_BASE}/${path.join('/')}${req.nextUrl.search}`

   const headers = new Headers()
   headers.set('Accept', 'application/json')
   headers.set('Ngrok-Skip-Browser-Warning', 'true')

   const contentType = req.headers.get('content-type')
   if (contentType) {
      headers.set('Content-Type', contentType)
   }

   const auth = req.headers.get('authorization')
   if (auth) {
      headers.set('Authorization', auth)
   }

   let body: BodyInit | undefined = undefined

   if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await req.text()
   }

   const response = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      cache: 'no-store',
   })

   const responseText = await response.text()

   return new NextResponse(responseText, {
      status: response.status,
      headers: {
         'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
   })
}

export async function GET(
   req: NextRequest,
   context: { params: Promise<{ path: string[] }> }
) {
   const { path } = await context.params
   return forward(req, path)
}

export async function POST(
   req: NextRequest,
   context: { params: Promise<{ path: string[] }> }
) {
   const { path } = await context.params
   return forward(req, path)
}

export async function PUT(
   req: NextRequest,
   context: { params: Promise<{ path: string[] }> }
) {
   const { path } = await context.params
   return forward(req, path)
}

export async function DELETE(
   req: NextRequest,
   context: { params: Promise<{ path: string[] }> }
) {
   const { path } = await context.params
   return forward(req, path)
}

export async function PATCH(
   req: NextRequest,
   context: { params: Promise<{ path: string[] }> }
) {
   const { path } = await context.params
   return forward(req, path)
}
