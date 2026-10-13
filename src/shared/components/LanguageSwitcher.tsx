"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] rounded-xl p-1 text-xs font-semibold backdrop-blur-xl">
      <button
        type="button"
        onClick={() => toggleLanguage("es")}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          locale === "es"
            ? "bg-[#38BDF8] text-[#030712] font-bold shadow-[0_2px_10px_rgba(56,189,248,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
            : "text-slate-400 hover:text-white"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => toggleLanguage("en")}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          locale === "en"
            ? "bg-[#38BDF8] text-[#030712] font-bold shadow-[0_2px_10px_rgba(56,189,248,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
};