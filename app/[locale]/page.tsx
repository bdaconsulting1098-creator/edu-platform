import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { ArrowRight, CheckCircle, Award, Users, Clock, Play, Star, TrendingUp } from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  const stats = [
    { value: "1,500+", label: t("stats.students"), icon: Users },
    { value: "94%", label: t("stats.rate"), icon: Award },
    { value: "4", label: t("stats.courses"), icon: Clock },
    { value: "4.9/5", label: t("stats.rating"), icon: CheckCircle },
  ];

  const courseKeys = ["level1", "advanced", "ai", "project"] as const;

  const features = [
    { key: "expert", icon: "🎓" },
    { key: "career", icon: "🎯" },
    { key: "network", icon: "🤝" },
    { key: "flexible", icon: "⏰" },
  ];

  const testimonials = ["wei", "liu", "zhang"] as const;

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-30" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500 rounded-full blur-[128px] opacity-20" />

        <div className="section-container relative py-24 sm:py-32 lg:py-44">
          <div className="max-w-3xl">
            <span className="section-eyebrow inline-block mb-6 text-orange-400">
              {t("hero.eyebrow")}
            </span>
            <h1 className="section-headline text-white">
              {t("hero.headline")}
            </h1>
            <p className="section-sub text-slate-300 mt-6 max-w-xl">
              {t("hero.subheadline")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/courses" className="btn-primary">
                {t("hero.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-border">
        <div className="section-container py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-text">{stat.value}</div>
                  <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("courses.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("courses.headline")}</h2>
            <p className="section-sub mx-auto mt-4">{t("courses.subheadline")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseKeys.map((key) => {
              const item = t.raw(`courses.items.${key}`) as Record<string, string>;
              const tag = t(`courses.items.${key}.tag` as any);
              return (
                <div key={key} className="card group overflow-hidden flex flex-col">
                  {/* Card header */}
                  <div className="relative p-6 pb-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                    {tag && (
                      <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 bg-accent text-white rounded-full">
                        {tag}
                      </span>
                    )}
                    <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                    <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Card body */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Curriculum */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {(item.curriculum as unknown as string[]).map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    {/* Meta + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <span>⏱ {item.period}</span>
                        <span>👥 {item.students}</span>
                        <span>📶 {t(`courses.${item.level === "Beginner" ? "beginner" : item.level === "Intermediate" ? "intermediate" : "beginner"}` as any)}</span>
                      </div>
                      <Link
                        href={`/courses/${key}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        {t("courses.enrollNow")} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses" className="btn-secondary">
              {t("courses.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Showcase ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("video.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("video.headline")}</h2>
            <p className="section-sub mx-auto mt-4">{t("video.subheadline")}</p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/Gj1lYM15K6E?controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Data Pipeline Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshops ── */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("workshops.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("workshops.headline")}</h2>
            <p className="section-sub mx-auto mt-4">{t("workshops.subheadline")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t.raw("workshops.items") as Array<{title: string, videoId: string}>).map((item, idx) => (
              <div key={idx} className="card overflow-hidden p-0">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${item.videoId}?controls=1&rel=0&modestbranding=1&playsinline=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-text line-clamp-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow text-orange-400">{t("success.eyebrow")}</span>
            <h2 className="section-headline mt-3 text-white">{t("success.headline")}</h2>
            <p className="section-sub mx-auto mt-4 text-slate-300">{t("success.subheadline")}</p>
          </div>

          {/* Video testimonials - horizontal scroll on mobile, 3-col on desktop */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-orange-400" /> {t("success.videoSection")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {((t.raw("success.videos") as Array<{name: string, platform: string, videoId: string, result: string, note: string}>)).map((v, idx) => (
                <div key={idx} className="card overflow-hidden p-0">
                  {v.platform === 'youtube' ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${v.videoId}?controls=1&rel=0&modestbranding=1&playsinline=1`}
                        title={v.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a href={`https://vimeo.com/${v.videoId}`} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative w-full bg-slate-800 flex items-center justify-center" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0 flex items-center justify-center gap-3">
                          <Play className="w-12 h-12 text-orange-400" fill="currentColor" />
                          <span className="text-white font-bold text-lg">{t("success.watchVideo")}</span>
                        </div>
                      </div>
                    </a>
                  )}
                  <div className="p-4">
                    <div className="font-bold text-white">{v.name}</div>
                    <div className="text-sm text-orange-400 mt-1">{v.result}</div>
                    <div className="text-sm text-slate-400 mt-1">{v.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text success stories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" /> {t("success.storiesSection")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {((t.raw("success.stories") as Array<{name: string, from: string, to: string, salary: string, location: string, quote: string, tag: string}>)).map((s, idx) => (
                <div key={idx} className="card p-6 flex flex-col hover:-translate-y-1 transition-transform">
                  {/* Photo banner at top */}
                  {(s as any).photo ? (
                    <div className="-mx-6 -mt-6 mb-4 h-32 overflow-hidden rounded-t-xl">
                      <img
                        src={(s as any).photo}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="-mx-6 -mt-6 mb-4 h-20 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center rounded-t-xl">
                      <span className="text-3xl font-bold text-white/80">{s.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-white">{s.name}</div>
                    <span className="text-xs font-bold px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full">{s.tag}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400 mb-1">
                    <span>{s.from}</span><span className="text-orange-400">→</span><span className="text-orange-300">{s.to}</span>
                  </div>
                  <div className="text-sm text-orange-400 font-semibold mb-3">{s.salary} · {s.location}</div>
                  <blockquote className="text-sm text-slate-300 leading-relaxed flex-1 italic border-l-2 border-orange-500/40 pl-3">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-orange-400" fill="currentColor" />
                    <span className="text-xs text-slate-400">Real Graduate</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("features.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("features.headline")}</h2>
            <p className="section-sub mx-auto mt-4">{t("features.subheadline")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ key, icon }) => (
              <div key={key} className="card p-6 text-center hover:-translate-y-1">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-text mb-2">{t(`features.items.${key}.title`)}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t(`features.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("testimonials.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("testimonials.headline")}</h2>
            <p className="section-sub mx-auto mt-4">{t("testimonials.subheadline")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((key) => {
              const item = t.raw(`testimonials.items.${key}`) as Record<string, string>;
              return (
                <div key={key} className="card p-8 flex flex-col">
                  <div className="text-2xl text-accent mb-4">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-text">{item.name}</div>
                      <div className="text-xs text-text-secondary">{item.title}</div>
                      <div className="text-xs text-accent mt-0.5">{item.from}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="section-container max-w-2xl">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="section-headline text-white">{t("cta.headline")}</h2>
          <p className="text-slate-200 mt-4 text-lg">{t("cta.subheadline")}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary bg-accent hover:bg-orange-600 text-white text-lg px-8 py-4">
              {t("cta.button")} <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-sm text-slate-300">{t("cta.note")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
