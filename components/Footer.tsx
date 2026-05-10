import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍁</span>
              <span className="font-bold text-xl">CanadaCareer</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t("tagline")}</p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("quickLinks")}</h3>
            <ul className="space-y-2.5">
              {["home", "courses", "about", "contact"].map((key) => (
                <li key={key}>
                  <Link href={`/${key === "home" ? "" : key}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {useTranslations("nav")(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("programs")}</h3>
            <ul className="space-y-2.5">
              <li><Link href="/courses/data-analytics" className="text-slate-400 hover:text-white text-sm transition-colors">数据分析就业班</Link></li>
              <li><Link href="/courses/ai-training" className="text-slate-400 hover:text-white text-sm transition-colors">AI 实战训练营</Link></li>
              <li><Link href="/courses/immigration" className="text-slate-400 hover:text-white text-sm transition-colors">移民求职专项班</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+16476281098" className="hover:text-white transition-colors">+1 (647) 628-1098</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("addressValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CanadaCareer. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
