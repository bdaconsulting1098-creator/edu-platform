import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const t = useTranslations();
  const courseKeys = ["level1", "advanced", "ai", "project"] as const;

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
        <div className="section-container relative text-center max-w-2xl">
          <span className="section-eyebrow text-orange-400">{t("courses.eyebrow")}</span>
          <h1 className="section-headline text-white mt-4">{t("courses.headline")}</h1>
          <p className="text-slate-300 mt-4 text-lg">{t("courses.subheadline")}</p>
        </div>
      </section>

      {/* Course List */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="space-y-16">
            {courseKeys.map((key, index) => {
              const item = t.raw(`courses.items.${key}`) as Record<string, unknown>;
              const isEven = index % 2 === 0;
              const tag = t(`courses.items.${key}.tag` as never);

              return (
                <div key={key} className="card overflow-hidden">
                  <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Visual panel */}
                    <div className="md:w-5/12 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-10 flex flex-col justify-center items-center text-center min-h-[320px]">
                      <div className="text-6xl mb-6">
                        {key === "level1" ? "📊" : key === "advanced" ? "📈" : key === "ai" ? "\uD83E\uDD16" : "\uD83D\uDCCA"}
                      </div>
                      {tag && (
                        <span className="text-xs font-bold px-3 py-1 bg-accent text-white rounded-full mb-4">
                          {tag}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold">{item.title as string}</h3>
                      <div className="flex items-center gap-4 mt-4 text-sm text-slate-300">
                        <span>⏱ {item.period as string}</span>
                        <span>👥 {item.students as string}</span>
                      </div>

                    </div>

                    {/* Content panel */}
                    <div className="md:w-7/12 p-8 md:p-12">
                      <p className="text-text-secondary leading-relaxed mb-6">{item.description as string}</p>

                      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-text-secondary">
                        Curriculum
                      </h4>
                      <ul className="space-y-2 mb-8">
                        {((item.curriculum as string[]) ?? []).map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={`/courses/${key}`} className="btn-primary">
                          {t("courses.viewDetails")} <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="btn-secondary">
                          {t("cta.button")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="section-container text-center">
          <h2 className="section-headline text-2xl">Not sure which program is right for you?</h2>
          <p className="text-text-secondary mt-3">Book a free 15-minute consultation and we&apos;ll help you choose.</p>
          <Link href="/contact" className="btn-primary mt-6">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
