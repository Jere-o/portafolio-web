import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/shared";
import { TechGrid } from "@/features/tech-stack";

export default async function HabilidadesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full max-w-6xl mx-auto px-6 md:px-12">
      <Navbar />
      <TechGrid />
      <footer className="border-t border-white/10 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Jeremy Osorio</p>
      </footer>
    </main>
  );
}
