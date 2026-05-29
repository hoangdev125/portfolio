import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: "light" | "dark";
  activeSection: string;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  activeSection,
  onToggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : "bg-transparent py-6"
      }`}
      style={{ backdropFilter: isScrolled ? "saturate(180%) blur(8px)" : undefined }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center space-x-2 text-white font-bold text-xl tracking-wider glow-text-hover transition-all duration-300 interactive-hover focus:outline-none"
        >
          <Code2 className="h-6 w-6 text-cyan-400" />
          <span>
            HOÀNG<span className="text-blue-500"> DEV</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-300 relative group interactive-hover focus:outline-none ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <button
            onClick={onToggleTheme}
            className="rounded-full bg-white/10 p-2 text-gray-200 hover:bg-white/20 transition-colors duration-300 interactive-hover focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleTheme}
            className="rounded-full bg-white/10 p-2 text-gray-200 hover:bg-white/20 transition-colors duration-300 interactive-hover focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-300 interactive-hover"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-navbar absolute top-full left-0 w-full py-6 px-6 shadow-2xl border-t border-white/5"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-base font-medium py-2 transition-colors duration-300 interactive-hover focus:outline-none ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
