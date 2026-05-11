import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function CoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = await getTranslations()

  const videos = [
    { id: '5waGp0n0xXM', date: '20260206', title: 'BDA | TOOLS | 20260206' },
    { id: 'JNM5aWZzVtM', date: '20260212', title: 'BDA | TOOLS | 20260212' },
    { id: '3ycCQIh9xOY', date: '20260220', title: 'BDA | TOOLS | 20260220' },
    { id: 'w-dTQArFwR8', date: '20260227', title: 'BDA | TOOLS | 20260227' },
    { id: 'Ix8CL2ARop8', date: '20260306', title: 'BDA | TOOLS | 20260306' },
    { id: '6zZ0THzkga8', date: '20260312', title: 'BDA | TOOLS | 20260312' },
    { id: 'ryrwpwJ26T8', date: '20260129', title: 'BDA | TOOLS | PART2 | 20260129' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">🎓 BDA Career 课程平台</h1>
          <p className="mt-1 text-gray-600">BDA TOOLS 工具课程（共7个视频）</p>
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
