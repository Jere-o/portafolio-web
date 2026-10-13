import { useTranslations } from "next-intl";
import { CheckCircle2, Calendar, Clock, Building2 } from "lucide-react";

export const ExperienceSection = () => {
  const t = useTranslations("Experience");

  const tasks = [
    t("tasks.0"),
    t("tasks.1"),
    t("tasks.2"),
    t("tasks.3"),
    t("tasks.4"),
    t("tasks.5"),
  ];

  return (
    <section id="experiencia" className="mb-28 scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#F9FAFB] mb-3">{t("title")}</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{t("subtitle")}</p>
        <div className="w-12 h-1 bg-[#38BDF8] mx-auto rounded-full mt-4" />
      </div>

      <div className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.12] shadow-[0_16px_48px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] p-8 sm:p-10 rounded-3xl hover:border-sky-400/40 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-1">
              <Building2 className="w-4 h-4" />
              {t("company")}
            </div>
            <h4 className="text-2xl font-bold text-[#F9FAFB]">
              {t("role")}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {t("period")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <Clock className="w-3.5 h-3.5" />
              {t("badge")}
            </span>
          </div>
        </div>

        {/* Lista de responsabilidades y logros */}
        <div className="pt-6 space-y-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {task}
              </p>
            </div>
          ))}
        </div>

        {/* Tecnologías de la experiencia */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold mr-2">Herramientas aplicadas:</span>
          {["Python", "Playwright", "Pytest", "Odoo 19", "PostgreSQL", "Docker Desktop", "Diagramas C4", "Diagramas ER"].map((tech) => (
            <span
              key={tech}
              className="text-xs bg-white/[0.04] text-sky-300 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-3 py-1 rounded-lg font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
