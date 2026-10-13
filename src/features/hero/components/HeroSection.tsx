"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { LiveCodeSandbox } from "./LiveCodeSandbox";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <section className="mb-24 pt-4 overflow-visible">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Información Principal con Animaciones Tipográficas Expresivas (#4) */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 space-y-6"
        >
          {/* Badge con Micromovimiento de Estado (#12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl text-sky-400 text-xs font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#38BDF8]" />
            <FaMapMarkerAlt className="text-xs" /> {t("location")}
          </motion.div>

          {/* Título Principal con Gradiente Shimmer Líquido (#18) */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-sky-100 to-slate-300 bg-clip-text text-transparent">
                Jeremy Osorio
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent animate-shimmer tracking-wide mt-3 inline-block"
            >
              {t("role")}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* Botones de Acción Estilo Apple Liquid Glass con Microinteracciones (#12 & #26) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 hover:brightness-110 text-[#030712] font-bold px-7 py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-[0_8px_24px_rgba(56,189,248,0.35),inset_0_1px_0_0_rgba(255,255,255,0.6)] transition-all"
              >
                <FaEnvelope /> {t("cta")}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl font-semibold px-6 py-3.5 rounded-xl text-xs tracking-wider transition-all"
              >
                <span>Ver Proyectos</span>
                <FaArrowRight className="text-[10px] text-sky-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Redes y Contacto Rápido con Iconos Interactivos (#11) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 pt-4 text-slate-400"
          >
            {[
              { href: "mailto:osoriojeremy3f@gmail.com", icon: FaEnvelope, title: "Correo" },
              { href: "https://github.com/Jere-o", icon: FaGithub, title: "GitHub", target: "_blank" },
              { href: "https://linkedin.com", icon: FaLinkedin, title: "LinkedIn", target: "_blank" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.target}
                  rel={social.target ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -3, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/50 hover:bg-white/[0.08] transition-all text-xl"
                  title={social.title}
                >
                  <Icon />
                </motion.a>
              );
            })}
            <span className="text-xs text-slate-400 font-mono pl-1">
              osoriojeremy3f@gmail.com
            </span>
          </motion.div>
        </motion.div>

        {/* Columna Derecha: Tarjeta Visual Técnica Liquid Glass (#28, #23) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center"
        >
          <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-md p-5 sm:p-7 bg-white/[0.035] backdrop-blur-3xl border border-white/[0.12] shadow-[0_16px_48px_0_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-3xl relative overflow-hidden group hover:border-sky-400/50 transition-all duration-300"
          >
            {/* Luz Líquida Interna (#17) */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-sky-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-400/30 transition-all duration-500" />

            {/* Cabecera de la tarjeta */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <span className="text-xs font-semibold text-emerald-400">Disponible para Trabajar</span>
              </div>
              <span className="text-xs font-mono text-slate-500">Quito, EC</span>
            </div>

            {/* Renderizado de Programación y QA en Tiempo Real (#1) */}
            <div className="my-4">
              <LiveCodeSandbox />
            </div>

            {/* Métricas destacadas del CV */}
            <div className="py-2 space-y-3">
              {[
                { title: "Experiencia QA & ERP Odoo 19", sub: "240 horas en Soluciones Kappa Ocho LayerEight" },
                { title: "Automatización con Playwright & Pytest", sub: "Pruebas end-to-end, reporte de bugs y manuales" },
                { title: "Desarrollo Multi-lenguaje", sub: "Python • Java • C# • PostgreSQL • Docker" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/15 transition-all"
                >
                  <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#F9FAFB]">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tags de Tecnologías Clave */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {["Python", "Playwright", "Odoo 19", "C#", "Java", "Docker", "PostgreSQL"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.08, y: -1 }}
                  className="text-xs bg-white/[0.04] border border-white/10 text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-2.5 py-1 rounded-lg font-mono cursor-default hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};