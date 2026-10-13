import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/shared";
import { AboutSection } from "@/features/hero";

export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full max-w-6xl mx-auto px-6 md:px-12">
      <Navbar />
      <AboutSection />
      <footer className="border-t border-white/10 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Jeremy Osorio</p>
      </footer>
    </main>
  );
}
