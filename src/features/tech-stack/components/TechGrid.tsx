import { useTranslations } from "next-intl";
import { Code2, ShieldCheck, Database, Layers } from "lucide-react";

export const TechGrid = () => {
  const t = useTranslations("Skills");

  const skills = [
    {
      icon: Code2,
      title: t("devTitle"),
      desc: t("devDesc"),
      tags: ["Python", "Java", "C#", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      color: "text-sky-400",
      borderHover: "hover:border-sky-400/50 hover:shadow-[0_16px_40px_rgba(56,189,248,0.15)]",
    },
    {
      icon: ShieldCheck,
      title: t("qaTitle"),
      desc: t("qaDesc"),
      tags: ["Playwright", "Pytest", "QA Automation", "Bug Reporting", "Manual Técnico"],
      color: "text-emerald-400",
      borderHover: "hover:border-emerald-400/50 hover:shadow-[0_16px_40px_rgba(52,211,153,0.15)]",
    },
    {
      icon: Database,
      title: t("dbTitle"),
      desc: t("dbDesc"),
      tags: ["PostgreSQL", "SQL Server", "MySQL", "Diagramas ER", "Diagramas C4"],
      color: "text-indigo-400",
      borderHover: "hover:border-indigo-400/50 hover:shadow-[0_16px_40px_rgba(129,140,248,0.15)]",
    },
    {
      icon: Layers,
      title: t("toolsTitle"),
      desc: t("toolsDesc"),
      tags: ["Odoo 19", "Docker Desktop", "Figma", "VS Code", "Visual Studio", "Git"],
      color: "text-amber-400",
      borderHover: "hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(251,191,36,0.15)]",
    },
  ];

  return (
    <section id="habilidades" className="mb-28 scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#F9FAFB] mb-3">{t("title")}</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{t("subtitle")}</p>
        <div className="w-12 h-1 bg-[#38BDF8] mx-auto rounded-full mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-8 rounded-3xl space-y-4 ${item.borderHover} hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-xl font-bold text-[#F9FAFB]">{item.title}</h4>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/[0.04] text-slate-300 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-2.5 py-1 rounded-lg font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};