import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";

export default async function AboutPage() {
  const t = await getTranslations("about");

  const teamKeys = ["principal", "vice", "teacher", "instructor"] as const;
  const emojis = ["👩‍💼", "👨‍💻", "👩‍🔬", "👨‍🏫"];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="section-container relative text-center max-w-2xl">
          <span className="section-eyebrow text-orange-400">{t("eyebrow")}</span>
          <h1 className="section-headline text-white mt-4">{t("headline")}</h1>
          <p className="text-slate-300 mt-4 text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl text-center">
          <span className="section-eyebrow">{t("mission.eyebrow")}</span>
          <h2 className="section-headline mt-3">{t("mission.headline")}</h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            {t("mission.content")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {[
              { icon: MapPin, label: t("stats.location"), sub: t("stats.locationSub") },
              { icon: Users, label: t("stats.alumni"), sub: t("stats.alumniSub") },
              { icon: Award, label: t("stats.rating"), sub: t("stats.ratingSub") },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="card p-6 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="font-bold text-text">{label}</div>
                <div className="text-sm text-text-secondary mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">{t("team.eyebrow")}</span>
            <h2 className="section-headline mt-3">{t("team.headline")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamKeys.map((key, idx) => (
              <div key={key} className="card p-6 text-center hover:-translate-y-1">
                <div className="text-5xl mb-4">{emojis[idx]}</div>
                <h3 className="font-bold text-text">{t(`team.members.${key}.name`)}</h3>
                <div className="text-xs font-medium text-accent mt-1 mb-3">{t(`team.members.${key}.role`)}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{t(`team.members.${key}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="section-container max-w-2xl">
          <h2 className="section-headline text-white text-2xl">{t("cta.headline")}</h2>
          <Link href="/contact" className="btn-primary bg-accent hover:bg-orange-600 mt-6 text-lg px-8 py-4">
            {t("cta.button")} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
