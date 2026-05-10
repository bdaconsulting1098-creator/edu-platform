import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">{t("terms.title")}</h1>
        
        <div className="card p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-3">{t("terms.acceptance.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("terms.acceptance.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("terms.services.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("terms.services.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("terms.payment.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("terms.payment.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("terms.refund.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("terms.refund.content")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">{t("terms.intellectual.title")}</h2>
            <p className="text-text-secondary leading-relaxed">{t("terms.intellectual.content")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
