"use client";

import { useTranslations } from "next-intl";
import { Code2, ShieldCheck, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Encabezado con Scrollytelling (#2) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl font-bold text-[#F9FAFB] mb-3">{t("title")}</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{t("subtitle")}</p>
        <div className="w-12 h-1 bg-[#38BDF8] mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Grid de Habilidades con Animaciones Escalonadas (#2, #28) */}
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] p-8 rounded-3xl space-y-4 ${item.borderHover} transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3">
                {/* Icono Animado Interactivo (#11) */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] group-hover:border-white/20 transition-colors"
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
                <h4 className="text-xl font-bold text-[#F9FAFB] group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-xs bg-white/[0.04] text-slate-300 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-2.5 py-1 rounded-lg font-mono cursor-default hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};