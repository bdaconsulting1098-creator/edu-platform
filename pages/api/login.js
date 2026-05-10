export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { password } = req.body
    
    // 从环境变量读取密码
    const correctPassword = process.env.LOGIN_PASSWORD || 'bdacareer2026'
    
    if (password === correctPassword) {
      // 设置简单的 cookie
      res.setHeader('Set-Cookie', [
        `auth=logged-in; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 7}`
      ])
      return res.status(200).json({ success: true })
    }
    
    return res.status(401).json({ error: 'Wrong password' })
  } catch (error) {
    return res.status(500).json({ error: 'Server error' })
  }
}
