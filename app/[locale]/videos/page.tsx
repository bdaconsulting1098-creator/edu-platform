import { getTranslations, setRequestLocale } from 'next-intl/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = await getTranslations()
  
  // 检查登录状态
  const cookieStore = await cookies()
  const isLoggedIn = cookieStore.get('auth')?.value === 'logged-in'
  
  if (!isLoggedIn) {
    redirect(`/${locale}/login`)
  }

  const videos = [
    { id: '4EObREikjwU', title: 'Install Part 1' },
    { id: 'Mq_i7DA2Uo4', title: 'Install Part 2' },
    { id: '5waGp0n0xXM', title: 'POWER BI 1' },
    { id: 'JNM5aWZzVtM', title: 'POWER BI 2' },
    { id: '3ycCQIh9xOY', title: 'POWER BI 3' },
    { id: 'w-dTQArFwR8', title: 'SQL 1' },
    { id: 'Ix8CL2ARop8', title: 'SQL 2' },
    { id: '6zZ0THzkga8', title: 'SQL 3' },
    { id: 'BPYYlipkHXA', title: 'SQL 4' },
    { id: 'psn0x00jCcY', title: 'Tableau 1' },
    { id: 'kptJH1wWSsQ', title: 'Tableau 2' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🎓 BDA Level 1</h1>
            <p className="mt-1 text-gray-600">BDA TOOLS 课程（共11个视频）</p>
          </div>
          <a href="/api/logout" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            🚪 退出登录
          </a>
        </div>
      </header>

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-500 mt-1">第 {index + 1} 课</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-blue-800">
            <strong>💡 使用提示：</strong><br/>
            1. 所有视频都可以直接嵌入播放！<br/>
            2. 点击视频右下角可全屏观看<br/>
            3. 建议按顺序观看，掌握完整知识体系
          </p>
        </div>
      </main>
    </div>
  )
}
