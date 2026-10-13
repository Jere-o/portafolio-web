import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/shared";
import { HeroSection, ExperienceSection, AboutSection } from "@/features/hero";
import { TechGrid } from "@/features/tech-stack";
import { ProjectsGrid } from "@/features/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full max-w-6xl mx-auto px-6 md:px-12">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <TechGrid />
      <ProjectsGrid />
      <AboutSection />
      <footer className="border-t border-white/10 py-12 text-center text-slate-400 text-sm">
      </footer>
    </main>
  );
}
