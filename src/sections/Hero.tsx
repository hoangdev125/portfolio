import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// Custom inline SVG icons for brands to ensure maximum compiler stability
const GithubIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-bgMain overflow-hidden pt-20 px-6"
    >
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accentBlue/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accentPurple/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-accentCyan/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Hello badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-white/10 text-sm font-semibold text-accentCyan"
        >
          <span className="animate-bounce">👋</span>
          <span>Xin chào, tôi là</span>
        </motion.div>

        {/* Huge Name Heading */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              HOÀNG
            </span>
          </motion.h1>

          {/* Role with Typing glow animation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan bg-clip-text text-transparent">
              Fullstack Developer
            </span>
          </motion.h2>
        </div>

        {/* Short Bio Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Xây dựng ứng dụng web hiện đại, tối ưu và thẩm mỹ bằng{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">TypeScript</span>,{" "}
          <span className="text-white font-semibold">Spring Boot</span> và{" "}
          <span className="text-white font-semibold">MySQL</span>.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center space-x-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900/80 border border-white/5 text-gray-400 hover:text-accentCyan hover:border-accentCyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900/80 border border-white/5 text-gray-400 hover:text-accentBlue hover:border-accentBlue hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900/80 border border-white/5 text-gray-400 hover:text-accentPurple hover:border-accentPurple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Facebook Profile"
          >
            <FacebookIcon />
          </a>
        </motion.div>

        {/* Buttons Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accentBlue to-accentCyan text-white text-base font-bold shadow-lg shadow-accentBlue/25 hover:brightness-110 hover:shadow-accentBlue/35 transition-all duration-300"
          >
            View Projects
          </button>

          {/* Download CV placeholder */}
          <a
            href="#download-cv"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/10 text-white text-base font-bold hover:bg-slate-800 hover:border-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Smooth Scroll Indicator (placed under action buttons for visual balance) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center space-y-1 cursor-pointer mt-6"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-accentCyan"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
