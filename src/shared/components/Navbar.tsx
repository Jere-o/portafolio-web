"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/experiencia", label: t("experience") },
    { href: "/habilidades", label: t("skills") },
    { href: "/proyectos", label: t("projects") },
    { href: "/sobre-mi", label: t("about") },
    { href: "/contacto", label: t("contact") },
  ];

  return (
    <nav className="sticky top-4 z-50 mb-12 backdrop-blur-2xl bg-[#030712]/65 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-2xl px-6 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4 transition-all">
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-sky-300 to-indigo-500 flex items-center justify-center text-[#030712] font-black text-sm shadow-[0_4px_16px_rgba(56,189,248,0.35),inset_0_1px_0_0_rgba(255,255,255,0.5)]">
          JO
        </div>
        <div>
          <span className="text-base font-bold tracking-tight text-[#F9FAFB] block leading-tight">
            Jeremy Osorio
          </span>
          <span className="text-[11px] text-slate-400 font-mono block">Junior Developer</span>
        </div>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold tracking-wide">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-all px-3 py-1.5 rounded-xl ${
                isActive
                  ? "bg-white/[0.08] text-[#38BDF8] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="pl-1">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};