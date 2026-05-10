import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

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
          <span className="section-eyebrow text-orange-400">{t("contact.eyebrow")}</span>
          <h1 className="section-headline text-white mt-4">{t("contact.headline")}</h1>
          <p className="text-slate-300 mt-4 text-lg">{t("contact.subheadline")}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card p-8">
              <h2 className="text-xl font-bold mb-6">{t("contact.form.title")}</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">{t("contact.form.name")}</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("contact.form.email")}</label>
                  <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("contact.form.phone")}</label>
                  <input type="tel" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("contact.form.interest")}</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">{t("contact.form.selectCourse")}</option>
                    <option value="level1">{t("courses.items.level1.title")}</option>
                    <option value="advanced">{t("courses.items.advanced.title")}</option>
                    <option value="ai">{t("courses.items.ai.title")}</option>
                    <option value="project">{t("courses.items.project.title")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("contact.form.message")}</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  {t("contact.form.submit")} <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">{t("footer.contact")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">{t("footer.phone")}</div>
                      <a href="tel:+16476281098" className="text-text-secondary hover:text-primary">+1 (647) 628-1098</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">{t("footer.address")}</div>
                      <div className="text-text-secondary">{t("footer.addressValue")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div className="card p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  {t("contact.wechat.title")}
                </h3>
                <div className="text-sm text-text-secondary mb-3">{t("contact.wechat.name")}</div>
                <div className="bg-white rounded-xl p-3 border border-border inline-block">
                  <img
                    src="/images/wechat-qr.jpg"
                    alt="WeChat QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-xs text-text-secondary mt-2">{locale === 'zh' ? t("contact.wechat.qrLabelZh") : t("contact.wechat.qrLabel")}</p>
              </div>

              <div className="card p-6 bg-gradient-to-br from-primary to-blue-700 text-white">
                <h3 className="font-bold text-lg mb-2">{t("contact.booking.title")}</h3>
                <p className="text-slate-200 text-sm mb-4">{t("contact.booking.description")}</p>
                <Link href="#booking" className="btn-primary bg-accent hover:bg-orange-600 text-white w-full text-center">
                  {t("contact.booking.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
