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

  const level1Videos = [
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

  const level2Videos = [
    { id: '7xQZS29Gde0', title: 'Python Basics 1' },
    { id: 'SU0AVRjVJQ0', title: 'Python Basics 2' },
    { id: 'TNxci6mVOS4', title: 'SPARK 1' },
    { id: '-c1rrwWlTpc', title: 'SPARK 2' },
    { id: 'hYIubIVRngE', title: 'Databricks+SPARK+WORKFLOW 1' },
    { id: '6jGYqH9I3OI', title: 'Databricks+SPARK+WORKFLOW 2' },
    { id: '7DVaLFbl4c0', title: 'Databricks+SPARK+WORKFLOW 3' },
    { id: 'CPwUtUpG99s', title: 'Databricks+SPARK+WORKFLOW 4' },
    { id: '-Pfr7KOfm5c', title: 'Advanced Analytics 1' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🎓 BDA 课程平台</h1>
            <p className="mt-1 text-gray-600">共 {level1Videos.length + level2Videos.length} 个视频</p>
          </div>
          <a href="/api/logout" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            🚪 退出登录
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 space-y-12">
        {/* Level 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📚 Level 1 - 基础工具课程
            <span className="text-sm font-normal text-gray-500">({level1Videos.length} 个视频)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {level1Videos.map((video, index) => (
              <a
                key={`l1-${video.id}`}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-900 relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Level 1 - 第 {index + 1} 课</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Level 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🚀 Level 2 - 进阶数据工程
            <span className="text-sm font-normal text-gray-500">({level2Videos.length} 个视频)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {level2Videos.map((video, index) => (
              <a
                key={`l2-${video.id}`}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-900 relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Level 2 - 第 {index + 1} 课</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-blue-800">
            <strong>💡 使用提示：</strong><br/>
            1. 点击视频卡片在新窗口打开YouTube观看<br/>
            2. 建议按顺序观看，掌握完整知识体系
          </p>
        </div>
      </main>
    </div>
  )
}