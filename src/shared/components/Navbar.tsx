"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/experiencia", label: t("experience") },
    { href: "/habilidades", label: t("skills") },
    { href: "/proyectos", label: t("projects") },
    { href: "/sobre-mi", label: t("about") },
    { href: "/contacto", label: t("contact") },
  ];

  return (
    <>
      {/* Barra de Navegación 100% Anclada al Borde Superior (top: 0, ancho completo) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl bg-[#030712]/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.06)] transition-all">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo y Nombre con Subtítulo Traducido */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-sky-300 to-indigo-500 flex items-center justify-center text-[#030712] font-black text-xs sm:text-sm shadow-[0_4px_16px_rgba(56,189,248,0.35),inset_0_1px_0_0_rgba(255,255,255,0.5)]">
                JO
              </div>
              <div>
                <span className="text-sm sm:text-base font-bold tracking-tight text-[#F9FAFB] block leading-tight">
                  Jeremy Osorio
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono block">
                  {t("role")}
                </span>
              </div>
            </Link>

            {/* Menú de Enlaces para Computadora (Escritorio) */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2 text-xs sm:text-sm font-semibold tracking-wide">
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
            </div>

            {/* Controles del Lado Derecho: Idioma + Botón Hamburguesa Móvil */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />

              {/* Botón para Abrir/Cerrar en Celulares */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all"
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-sky-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Desplegable de Enlaces para Celulares (Liquid Glass) */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-white/10 flex flex-col gap-1.5 animate-in fade-in duration-150">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-white/[0.08] text-[#38BDF8] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Espaciador para que el contenido empiece limpiamente debajo del header fijo */}
      <div className="h-16 sm:h-20 w-full mb-8 sm:mb-10" aria-hidden="true" />
    </>
  );
};