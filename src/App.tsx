import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const initialTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light-theme", theme === "light");
    root.classList.toggle("dark-theme", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + 140;
      let currentSection: SectionId = "home";

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= currentScroll) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
      setShowBackToTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden select-none selection:bg-cyan-400/30 selection:text-white">
      {/* Global toast container */}
      <Toaster position="top-right" richColors />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Back to Top */}
      <button
        type="button"
        onClick={handleBackToTop}
        className={`fixed right-6 bottom-8 z-40 rounded-full p-4 bg-slate-900/90 text-white shadow-2xl shadow-slate-950/40 transition-opacity duration-300 ${showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
