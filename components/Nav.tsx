"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/lib/navigation";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const locales = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
];

export function Nav() {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = currentLocale === "en" ? "zh" : "en";

  const handleLocaleSwitch = () => {
    // pathname from next-intl/navigation doesn't include locale prefix
    // router.push with locale option handles the switch correctly
    router.push(pathname ?? "/", { locale: switchLocale });
  };

  const links = [
    { key: "home", href: "/" },
    { key: "courses", href: "/courses" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍁</span>
            <span className="font-bold text-xl text-text">CanadaCareer</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            {/* Login Link */}
            <Link
              href="/login"
              className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-lg"
            >
              🔐 Login
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-primary bg-indigo-600 hover:bg-indigo-700 hidden sm:inline-flex text-sm px-4 py-2">
              🔐 Login
            </Link>
            <button
              onClick={handleLocaleSwitch}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              <Globe className="w-4 h-4" />
              {locales.find((l) => l.code === switchLocale)?.label}
            </button>

            <Link href="/contact" className="btn-primary hidden sm:inline-flex text-sm px-4 py-2">
              {t("contact")}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-text-secondary hover:text-primary transition-colors px-2 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t(link.key)}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-3 rounded-lg text-center mt-2"
              >
                🔐 Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary text-sm text-center mt-2"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
