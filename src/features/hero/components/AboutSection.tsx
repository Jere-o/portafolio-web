import { useTranslations } from "next-intl";
import { GraduationCap, Award, Globe2, BookOpen, User } from "lucide-react";

export const AboutSection = () => {
  const t = useTranslations("Education");

  return (
    <section id="sobre-mi" className="mb-28 scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#F9FAFB] mb-3">{t("title")}</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{t("subtitle")}</p>
        <div className="w-12 h-1 bg-[#38BDF8] mx-auto rounded-full mt-4" />
      </div>

      {/* Tarjeta de Perfil Profesional (Sobre Mí) Estilo Apple Liquid Glass */}
      <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.12] shadow-[0_16px_48px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] p-6 sm:p-8 rounded-3xl mb-8 space-y-3 border-l-4 border-l-[#38BDF8] hover:border-sky-400/50 transition-all">
        <div className="flex items-center gap-2.5 text-sky-400 font-bold text-base">
          <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <User className="w-4 h-4 text-sky-400" />
          </div>
          <h4>{t("profileTitle")}</h4>
        </div>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
          {t("profileDesc")}
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Columna Izquierda: Educación Superior y Secundaria */}
        <div className="md:col-span-7 space-y-6">
          {/* Educación Superior */}
          <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-6 sm:p-8 rounded-3xl border-l-4 border-l-[#38BDF8] space-y-3 hover:border-sky-400/40 transition-all">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Educación Superior
              </span>
              <span className="text-xs bg-white/[0.05] text-sky-300 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] px-3 py-1 rounded-full font-mono">
                {t("collegePeriod")}
              </span>
            </div>
            <h4 className="text-xl font-bold text-[#F9FAFB]">
              {t("collegeTitle")}
            </h4>
            <p className="text-sm font-medium text-slate-300">
              {t("collegePlace")}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("collegeDesc")}
            </p>
          </div>

          {/* Educación Secundaria */}
          <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-6 rounded-3xl border-l-4 border-l-slate-600 space-y-2 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Educación Secundaria
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {t("highSchoolPeriod")}
              </span>
            </div>
            <h4 className="text-lg font-bold text-[#F9FAFB]">
              {t("highSchoolTitle")}
            </h4>
            <p className="text-sm text-slate-400">
              {t("highSchoolPlace")}
            </p>
          </div>
        </div>

        {/* Columna Derecha: Certificaciones e Idiomas */}
        <div className="md:col-span-5 space-y-6">
          {/* Certificados */}
          <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
              <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <Award className="w-4 h-4 text-sky-400" />
              </div>
              <h4>{t("certTitle")}</h4>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all">
                <p className="text-sm font-semibold text-[#F9FAFB]">{t("cert1")}</p>
                <span className="text-xs text-sky-400 font-mono">freeCodeCamp • 2026</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all">
                <p className="text-sm font-semibold text-[#F9FAFB]">{t("cert2")}</p>
                <span className="text-xs text-sky-400 font-mono">Azul School • 2025</span>
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-6 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
              <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <Globe2 className="w-4 h-4 text-sky-400" />
              </div>
              <h4>{t("langTitle")}</h4>
            </div>
            <p className="text-slate-300 text-sm font-medium">
              {t("langDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};