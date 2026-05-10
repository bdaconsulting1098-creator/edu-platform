import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">{t("privacy.title")}</h1>
        
        <div className="card p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-3">{t("privacy.collection.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("privacy.collection.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("privacy.usage.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("privacy.usage.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("privacy.sharing.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("privacy.sharing.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("privacy.security.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("privacy.security.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("privacy.contact.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("privacy.contact.content")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
