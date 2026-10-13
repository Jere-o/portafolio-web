import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <section className="mb-24 pt-4">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Información Principal */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl text-sky-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#38BDF8]" />
            <FaMapMarkerAlt className="text-xs" /> {t("location")}
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">
              Jeremy Osorio
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#38BDF8] tracking-wide mt-3">
              {t("role")}
            </h2>
          </div>

          <p className="text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed">
            {t("description")}
          </p>

          {/* Botones de Acción Estilo Apple Liquid Glass */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 hover:brightness-110 text-[#030712] font-bold px-7 py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-[0_8px_24px_rgba(56,189,248,0.35),inset_0_1px_0_0_rgba(255,255,255,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <FaEnvelope /> {t("cta")}
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl font-semibold px-6 py-3.5 rounded-xl text-xs tracking-wider transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Ver Proyectos
            </Link>
          </div>

          {/* Redes y Contacto Rápido */}
          <div className="flex items-center gap-5 pt-4 text-slate-400">
            <a
              href="mailto:osoriojeremy3f@gmail.com"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all text-xl"
              title="Correo Electrónico"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Jere-o"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all text-xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:text-[#38BDF8] hover:border-sky-400/40 hover:bg-white/[0.08] transition-all text-xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <span className="text-xs text-slate-400 font-mono pl-1">
              osoriojeremy3f@gmail.com
            </span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Visual Técnica Liquid Glass */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-md p-6 sm:p-8 bg-white/[0.035] backdrop-blur-3xl border border-white/[0.12] shadow-[0_16px_48px_0_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.15)] rounded-3xl relative overflow-hidden group hover:border-sky-400/40 transition-all">
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Cabecera de la tarjeta */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shadow-[0_0_10px_#34d399]" />
                <span className="text-xs font-semibold text-emerald-400">Disponible para Trabajar</span>
              </div>
              <span className="text-xs font-mono text-slate-500">Quito, EC</span>
            </div>

            {/* Métricas destacadas del CV */}
            <div className="py-6 space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#F9FAFB]">Experiencia QA & ERP Odoo 19</p>
                  <p className="text-xs text-slate-400">240 horas en Soluciones Kappa Ocho LayerEight</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#F9FAFB]">Automatización con Playwright & Pytest</p>
                  <p className="text-xs text-slate-400">Pruebas end-to-end, reporte de bugs y manuales</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#F9FAFB]">Desarrollo Multi-lenguaje</p>
                  <p className="text-xs text-slate-400">Python • Java • C# • PostgreSQL • Docker</p>
                </div>
              </div>
            </div>

            {/* Tags de Tecnologías Clave */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {["Python", "Playwright", "Odoo 19", "C#", "Java", "Docker", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/[0.04] border border-white/10 text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] px-2.5 py-1 rounded-lg font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};