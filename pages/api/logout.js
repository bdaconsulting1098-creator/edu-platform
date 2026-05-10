export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // 删除 auth cookie
  res.setHeader('Set-Cookie', 'auth=; Path=/; Max-Age=0')
  
  return res.status(200).json({ success: true })
}
