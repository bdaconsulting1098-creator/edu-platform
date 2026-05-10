import { getTranslations, setRequestLocale } from "next-intl/server";
import { CheckCircle, Clock, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";

export default async function CourseDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const courseKeys = ["level1", "advanced", "ai", "project"] as const;
  
  if (!courseKeys.includes(slug as typeof courseKeys[number])) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const item = t.raw(`courses.items.${slug}`) as Record<string, unknown>;
  const iconMap: Record<string, string> = {
    level1: "📊",
    advanced: "📈",
    ai: "🤖",
    project: "💼"
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="section-container relative">
          <div className="max-w-4xl">
            <Link href="/courses" className="text-slate-300 hover:text-white mb-4 inline-flex items-center gap-2">
              ← {t("courses.viewAll")}
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-6xl">{iconMap[slug]}</span>
              <div>
                {(item.tag as string) && (
                  <span className="text-xs font-bold px-3 py-1 bg-accent text-white rounded-full mb-2 inline-block">
                    {item.tag as string}
                  </span>
                )}
                <h1 className="section-headline text-white">{item.title as string}</h1>
              </div>
            </div>
            <p className="text-slate-300 mt-4 text-lg max-w-2xl">{item.description as string}</p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5" />
                <span>{item.period as string}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-5 h-5" />
                <span>{item.students as string} students</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-5 h-5" />
                <span>{item.level as string}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-orange-600 text-white">
                {t("courses.enrollNow")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Curriculum */}
              <div className="card p-8">
                <h2 className="text-xl font-bold mb-6">{t("courses.curriculum")}</h2>
                <ul className="space-y-3">
                  {((item.curriculum as string[]) ?? []).map((c, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-surface rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{c}</div>
                        <div className="text-sm text-text-secondary mt-1">
                          Week {i + 1} • Hands-on practice included
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Materials */}
              {slug === "level1" && (
                <div className="card p-8">
                  <h2 className="text-xl font-bold mb-6">Learning Materials</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-text-secondary">SQL for Data Analysis</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {[3,4,6,7,8,17].map(pg => (
                          <img
                            key={pg}
                            src={`/images/courses/traning_SQL FOR DATA ANALYSIS_page${pg}.png`}
                            alt={`SQL Training Page ${pg}`}
                            className="rounded-lg w-full object-cover shadow-sm"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-text-secondary">Power BI Training</h3>
                      <div className="grid grid-cols-4 gap-3">
                        {[3,4,6,7,8,17,36,37].map(pg => (
                          <img
                            key={pg}
                            src={`/images/courses/training_Power_BI_page${pg}.png`}
                            alt={`Power BI Training Page ${pg}`}
                            className="rounded-lg w-full object-cover shadow-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Schedule */}
              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4">{t("courses.schedule")}</h2>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Clock className="w-5 h-5" />
                  <span>{item.schedule as string}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold mb-4">{t("courses.enrollNow")}</h3>
                <Link href="/contact" className="btn-primary w-full text-center">
                  {t("courses.enrollNow")}
                </Link>
                <p className="text-xs text-text-secondary mt-4 text-center">
                  {t("cta.note")}
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-bold mb-4">{t("courses.whatYouGet")}</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>✓ Live sessions with instructors</li>
                  <li>✓ Recorded video access</li>
                  <li>✓ 1-on-1 career coaching</li>
                  <li>✓ Real-world projects</li>
                  <li>✓ Certificate of completion</li>
                  <li>✓ Alumni network access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
