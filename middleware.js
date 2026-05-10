export function middleware(req) {
  const authCookie = req.cookies.auth
  
  // 保护 /courses 路由
  if (req.nextUrl.pathname.startsWith('/courses')) {
    if (!authCookie || authCookie !== 'logged-in') {
      return Response.redirect(new URL('/login', req.url))
    }
  }

  // 如果已登录，访问 /login 则重定向到 /courses
  if (req.nextUrl.pathname === '/login') {
    if (authCookie && authCookie === 'logged-in') {
      return Response.redirect(new URL('/courses', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/courses/:path*', '/login']
}
