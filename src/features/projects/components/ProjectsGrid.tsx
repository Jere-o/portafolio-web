"use client";

import { useTranslations } from "next-intl";
import { FaFolder, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectsGrid = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      num: "01",
      year: "2026",
      title: t("p1Title"),
      tech: "C# • Figma • .NET • Email Service",
      desc: t("p1Desc"),
      tags: ["C#", "Figma", "UI/UX", "Email Notifications", "Gestión de Roles"],
    },
    {
      num: "02",
      year: "2025",
      title: t("p2Title"),
      tech: "Java • SQL Server • JavaFX/Swing",
      desc: t("p2Desc"),
      tags: ["Java", "SQL Server", "Relational DB", "Calendario", "Citas Médicas"],
    },
    {
      num: "03",
      year: "2024",
      title: t("p3Title"),
      tech: "Python • POO • Casos de Uso",
      desc: t("p3Desc"),
      tags: ["Python", "POO", "Autenticación", "Transacciones", "Casos de Uso"],
    },
    {
      num: "04",
      year: "2026",
      title: t("p4Title"),
      tech: "Next.js 16 • TypeScript • Tailwind CSS • next-intl",
      desc: t("p4Desc"),
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n", "Responsive"],
    },
  ];

  return (
    <section id="proyectos" className="mb-28 scroll-mt-24">
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

      {/* Grid de Proyectos con Animaciones Escalonadas (#2, #28) */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white/[0.035] backdrop-blur-3xl border border-white/[0.1] shadow-[0_12px_40px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)] rounded-3xl p-8 flex flex-col justify-between hover:border-sky-400/50 hover:shadow-[0_20px_48px_rgba(56,189,248,0.12)] transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-[#38BDF8] font-mono">
                    {proj.num}
                  </span>
                  {/* Icono de Carpeta Animado (#11) */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="p-2 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:border-sky-400/30 transition-colors"
                  >
                    <FaFolder className="text-slate-400 group-hover:text-sky-400 transition-colors text-base" />
                  </motion.div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-3 py-1 rounded-full">
                  <FaCalendarAlt className="text-sky-400" /> {proj.year}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#F9FAFB] group-hover:text-sky-300 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-xs text-sky-400 font-mono mt-1 font-semibold">
                  {proj.tech}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-xs bg-white/[0.04] text-slate-300 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-2.5 py-1 rounded-lg font-mono cursor-default hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};