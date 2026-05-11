import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    
    // 密码是 bdacareer2026
    if (password === 'bdacareer2026') {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: '密码错误' }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ error: '服务器错误' }, { status: 500 })
  }
}
