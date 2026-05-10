export default function handler(req, res) {
  const authCookie = req.cookies.auth
  
  if (authCookie === 'logged-in') {
    return res.status(200).json({ authenticated: true })
  }
  
  return res.status(401).json({ authenticated: false })
}
