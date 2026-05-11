import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.redirect(new URL('/zh/login', process.env.NEXT_PUBLIC_BASE_URL || 'https://bdacareer.com'))
  
  // 清除登录 cookie
  response.cookies.set('auth', '', {
    expires: new Date(0),
    path: '/'
  })
  
  return response
}
