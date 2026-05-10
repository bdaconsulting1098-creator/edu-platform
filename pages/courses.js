import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function CoursesPage() {
  const router = useRouter()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // 检查登录状态
    const checkAuth = async () => {
      const res = await fetch('/api/check-auth')
      if (!res.ok) {
        router.push('/login')
      }
    }
    
    checkAuth()
    
    // 加载视频数据
    setVideos([
      { 
        id: '5waGp0n0xXM', 
        title: 'BDA | TOOLS | 20260206', 
        desc: '数据分析工具课程 - 第1课' 
      },
      { 
        id: 'JNM5aWZzVtM', 
        title: 'BDA | TOOLS | 20260212', 
        desc: '数据分析工具课程 - 第2课' 
      },
      { 
        id: '3ycCQIh9xOY', 
        title: 'BDA | TOOLS | 20260220', 
        desc: '数据分析工具课程 - 第3课' 
      },
      { 
        id: 'w-dTQArFwR8', 
        title: 'BDA | TOOLS | 20260227', 
        desc: '数据分析工具课程 - 第4课' 
      },
      { 
        id: 'Ix8CL2ARop8', 
        title: 'BDA | TOOLS | 20260306', 
        desc: '数据分析工具课程 - 第5课' 
      },
      { 
        id: '6zZ0THzkga8', 
        title: 'BDA | TOOLS | 20260312', 
        desc: '数据分析工具课程 - 第6课' 
      },
      { 
        id: 'ryrwpwJ26T8', 
        title: 'BDA | TOOLS | PART2 | 20260129', 
        desc: '数据分析工具课程 - 第7课（PART2）' 
      }
    ])
  }, [])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  const watchVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
  }

  return (
    <>
      <Head>
        <title>BDA Career - 课程平台</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* 顶部导航 */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  🎓 BDA Career 课程
                </h1>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  退出登录
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 主内容区 */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-6">📚 BDA TOOLS 工具课程（共7个视频）</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {videos.map((video, index) => (
                  <div 
                    key={video.id}
                    className="flex gap-4 p-4 border-b hover:bg-gray-50 cursor-pointer"
                    onClick={() => watchVideo(video.id)}
                  >
                    <div className="flex-shrink-0 text-3xl font-bold text-indigo-600">
                      {index + 1}
                    </div>
                    <div 
                      className="flex-shrink-0 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        watchVideo(video.id)
                      }}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-48 h-27 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {video.desc}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          watchVideo(video.id)
                        }}
                        className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                      >
                        ▶️ 在 YouTube 观看
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">💡 使用提示</h3>
                <p className="text-gray-700">
                  点击任意视频可以跳转到 YouTube 观看完整课程。建议按顺序观看，掌握完整知识体系。
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
