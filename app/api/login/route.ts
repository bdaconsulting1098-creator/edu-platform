import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    
    // 密码是 bdacareer2026
    if (password === 'bdacareer2026') {
      const response = NextResponse.json({ success: true })
      // 设置 7 天有效的登录 cookie
      response.cookies.set('auth', 'logged-in', {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        path: '/'
      })
      return response
    } else {
      return NextResponse.json({ success: false, error: '密码错误' }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ error: '服务器错误' }, { status: 500 })
  }
}
