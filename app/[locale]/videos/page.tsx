import { getTranslations, setRequestLocale } from 'next-intl/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = await getTranslations('videosPage')
  
  // 检查登录状态
  const cookieStore = await cookies()
  const isLoggedIn = cookieStore.get('auth')?.value === 'logged-in'
  
  if (!isLoggedIn) {
    redirect(`/${locale}/login`)
  }

  const installVideos = [
    { id: 'mPMdqfE9cfw', titleKey: 'videoTitles.install' },
  ]

  const level1Videos = [
    { id: '5waGp0n0xXM', titleKey: 'videoTitles.pbi1' },
    { id: 'JNM5aWZzVtM', titleKey: 'videoTitles.pbi2' },
    { id: '3ycCQIh9xOY', titleKey: 'videoTitles.pbi3' },
    { id: 'w-dTQArFwR8', titleKey: 'videoTitles.sql1' },
    { id: 'Ix8CL2ARop8', titleKey: 'videoTitles.sql2' },
    { id: '6zZ0THzkga8', titleKey: 'videoTitles.sql3' },
    { id: 'BPYYlipkHXA', titleKey: 'videoTitles.sql4' },
    { id: 'psn0x00jCcY', titleKey: 'videoTitles.tableau1' },
    { id: 'kptJH1wWSsQ', titleKey: 'videoTitles.tableau2' },
  ]

  const level2Videos = [
    { id: '7xQZS29Gde0', titleKey: 'videoTitles.python1' },
    { id: 'SU0AVRjVJQ0', titleKey: 'videoTitles.python2' },
    { id: 'TNxci6mVOS4', titleKey: 'videoTitles.spark1' },
    { id: '-c1rrwWlTpc', titleKey: 'videoTitles.spark2' },
    { id: 'hYIubIVRngE', titleKey: 'videoTitles.databricks1' },
    { id: '6jGYqH9I3OI', titleKey: 'videoTitles.databricks2' },
    { id: '7DVaLFbl4c0', titleKey: 'videoTitles.databricks3' },
    { id: 'CPwUtUpG99s', titleKey: 'videoTitles.databricks4' },
    { id: '-Pfr7KOfm5c', titleKey: 'videoTitles.advanced' },
  ]

  const totalVideos = installVideos.length + level1Videos.length + level2Videos.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🎓 {t('title')}</h1>
            <p className="mt-1 text-gray-600">{t('total', { count: totalVideos })}</p>
          </div>
          <a href="/api/logout" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            🚪 {t('logout')}
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 space-y-12">
        {/* Install Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🔧 {t('install.title')}
            <span className="text-sm font-normal text-gray-500">({installVideos.length})</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Video */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${installVideos[0].id}`}
                  title={t(installVideos[0].titleKey)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{t(installVideos[0].titleKey)}</h3>
              </div>
            </div>
            
            {/* GitHub Alert */}
            <div className="bg-orange-100 border-2 border-orange-500 rounded-xl p-6 shadow-lg">
              <p className="text-lg font-bold text-orange-900">
                ⚠️ At 19:01 - GitHub link needed for Databricks setup：
              </p>
              <a
                href="https://github.com/bdaconsulting1098-creator/bda_course.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-blue-700 font-bold text-xl hover:underline break-all"
              >
                https://github.com/bdaconsulting1098-creator/bda_course.git
              </a>
            </div>
          </div>
        </section>

        {/* Level 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📚 {t('level1.title')}
            <span className="text-sm font-normal text-gray-500">({level1Videos.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {level1Videos.map((video, index) => (
              <div key={`l1-${video.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={t(video.titleKey)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{t(video.titleKey)}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t('level1.lesson', { n: index + 1 })}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Level 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🚀 {t('level2.title')}
            <span className="text-sm font-normal text-gray-500">({level2Videos.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {level2Videos.map((video, index) => (
              <div key={`l2-${video.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={t(video.titleKey)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{t(video.titleKey)}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t('level2.lesson', { n: index + 1 })}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-blue-800">
            <strong>💡 {t('tips')}</strong><br/>
            1. {t('tip1')}<br/>
            2. {t('tip2')}<br/>
            3. {t('tip3')}
          </p>
        </div>
      </main>
    </div>
  )
}
