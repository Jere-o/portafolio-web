"use client";

import { useTranslations } from "next-intl";
import { Navbar } from "@/shared";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactoPage() {
  const t = useTranslations("Contact");

  return (
    <main className="w-full max-w-6xl mx-auto px-6 md:px-12">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 py-8 max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl text-sky-400 text-xs font-semibold mb-6"
        >
          <FaMapMarkerAlt className="text-xs" /> {t("location")}
        </motion.div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F9FAFB] mb-4">
          {t("title")}
        </h2>
        <div className="w-12 h-1 bg-[#38BDF8] mx-auto rounded-full mb-6" />

        <p className="text-slate-200 text-base sm:text-lg mb-4 font-medium">
          {t("subtitle")}
        </p>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          {t("description")}
        </p>

        {/* Tarjeta de Contacto Directo por Correo Estilo Apple Liquid Glass (#28, #26) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto mb-10"
        >
          <motion.a
            href="mailto:osoriojeremy3f@gmail.com"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-3xl bg-white/[0.035] backdrop-blur-3xl border border-white/[0.12] shadow-[0_16px_48px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.18)] hover:border-sky-400/50 hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)] flex items-center justify-center text-sky-400 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <FaEnvelope />
            </div>
            <span className="text-xs font-mono text-slate-400">{t("emailLabel")}</span>
            <span className="text-base font-bold text-[#F9FAFB]">osoriojeremy3f@gmail.com</span>
            <span className="text-xs text-sky-400 font-bold mt-1 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:bg-sky-500/20 transition-colors">
              {t("ctaEmail")} →
            </span>
          </motion.a>
        </motion.div>

        {/* Redes Sociales y Ubicación */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" /> Quito, Ecuador
          </div>

          <div className="flex items-center gap-3 text-lg">
            <motion.a
              href="https://github.com/Jere-o"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all"
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </motion.section>
      <footer className="border-t border-white/10 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Jeremy Osorio</p>
      </footer>
    </main>
  );
}

