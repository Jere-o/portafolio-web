import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Osorio | Portafolio Web",
  description: "Desarrollador de Software Junior",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#030712] text-[#F9FAFB] antialiased min-h-screen relative selection:bg-sky-500/25 selection:text-sky-200">
        {/* Apple-style Liquid Ambient Lighting Canvas */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-[20%] left-[10%] w-[650px] h-[650px] bg-sky-500/12 rounded-full blur-[140px] animate-liquid-1" />
          <div className="absolute top-[30%] -right-[15%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] animate-liquid-2" />
          <div className="absolute -bottom-[10%] left-[20%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] animate-liquid-3" />
          <div className="absolute top-[60%] left-[-10%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px] animate-liquid-1" />
        </div>

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
