"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function Header() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Blogs", href: "#blogs" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ opacity }}
      className={`sticky top-0 w-full flex justify-between items-center left-0 right-0 z-50 transition-all duration-500
        px-8 py-6 ${
          isScrolled
            ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-2xl shadow-lg shadow-neutral-200/5 dark:shadow-neutral-950/50"
            : ""
        }`}
    >
      <motion.a
        href="/"
        className="text-lg font-extralight relative group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Mani Alipour</span>
      </motion.a>

      <div className="hidden md:flex items-center gap-1">
        {links.map((_, i) => (
          <HeaderLink {..._} index={i} key={i} />
        ))}

        <div className="flex items-center gap-2 border-s border-neutral-200 dark:border-neutral-800 ms-4 ps-4">
          <motion.button
            onClick={() => {
              console.log("toggle theme ...");
            }}
            className="p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all relative overflow-hidden group"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              // animate={{ rotate: theme === "light" ? 0 : 180 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Moon size={18} className="text-neutral-600" />
            </motion.div>
            <motion.span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            onClick={() => {
              console.log("toggle lang ...");
            }}
            className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all text-neutral-600 dark:text-neutral-400 relative overflow-hidden group"
            aria-label="Toggle language"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">EN</span>
            <motion.span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <motion.button
          onClick={() => {
            console.log("toggle theme ...");
          }}
          className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
          aria-label="Toggle theme"
          whileTap={{ scale: 0.95 }}
        >
          <Moon size={18} />
        </motion.button>

        <motion.button
          onClick={() => {
            console.log("toggle lang ...");
          }}
          className="px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900"
          aria-label="Toggle language"
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>

        <motion.button
          className="p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0B0E13]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Top bar inside menu */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
            <span className="text-sm text-neutral-400">menu</span>

            <button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-8 pt-10 space-y-6">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-neutral-300 hover:text-neutral-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {link.title}
              </motion.a>
            ))}
          </nav>

          {/* Utilities */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 border-t border-neutral-800 flex items-center justify-between">
            <button
              aria-label="Toggle theme"
              onClick={() => console.log("toggle theme ...")}
              className="text-neutral-500 hover:text-[#2EE6A6] transition-colors"
            >
              <Moon size={18} />
            </button>

            <button
              aria-label="Toggle language"
              onClick={() => console.log("toggle lang ...")}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-100 transition-colors"
            >
              EN
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

const HeaderLink = ({
  title,
  href,
  index,
}: {
  title: string;
  href: string;
  index: number;
}) => {
  return (
    <motion.a
      href={href}
      className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-all relative group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
    >
      {title}
      <motion.span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-1/2 transition-all" />
    </motion.a>
  );
};
