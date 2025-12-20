"use client";

import { Link, Menu, Moon, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Blogs", href: "#blogs" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [1, 0.96]);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        style={{ opacity }}
        className={`
          fixed w-full top-0 z-50
          px-4 py-4 md:px-8 md:py-6
          flex items-center justify-between
          transition-all duration-300
          ${
            scrolled || menuOpen
              ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl"
              : ""
          }
        `}
      >
        <Link href="/" className="text-sm font-medium tracking-wide">
          Mani Alipour
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {links.map((link, i) => (
            <HeaderLink key={link.href} {...link} index={i} />
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className={`
            md:hidden
            h-11 w-11
            flex items-center justify-center
            rounded-xl
            transition-colors
            ${
              menuOpen
                ? "bg-neutral-200 dark:bg-neutral-800"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
            }
          `}
        >
          <Menu size={20} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              className="
                fixed top-0 left-0 right-0 z-50
                rounded-b-3xl
                bg-[#0B0E13]/90
                backdrop-blur-2xl
                px-6 pt-6 pb-8
              "
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  Menu
                </span>

                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="
                    h-11 w-11
                    flex items-center justify-center
                    rounded-xl
                    hover:bg-neutral-800
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="space-y-5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium text-neutral-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </nav>

              {/* Utilities */}
              <div className="mt-10 flex items-center justify-between">
                <button
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-neutral-800"
                  aria-label="Toggle theme"
                >
                  <Moon size={18} />
                </button>

                <button className="text-sm font-medium text-neutral-400">
                  EN
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Desktop navigation link
 */
function HeaderLink({
  title,
  href,
  index,
}: {
  title: string;
  href: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      className="
        px-4 py-2
        text-sm
        rounded-lg
        text-neutral-600 dark:text-neutral-400
        hover:text-neutral-900 dark:hover:text-neutral-100
        hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50
      "
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {title}
    </motion.a>
  );
}
