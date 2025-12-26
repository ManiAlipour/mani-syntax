"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ThemeContext } from "../providers";

const links = [
  { title: "home", href: "/" },
  { title: "about", href: "/#about" },
  { title: "projects", href: "#projects" },
  { title: "blogs", href: "/blog" },
  { title: "skills", href: "#skills" },
  { title: "contact", href: "#contact" },
];

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, theme } = useContext(ThemeContext);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [1, 0.96]);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleLanguage = () => {
    const path = pathname.replace(`/${locale}`, "");

    if (locale === "en") router.push(`/fa${path}`);
    if (locale === "fa") router.push(`/en${path}`);
  };

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

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
          ${scrolled || menuOpen ? "bg-background/70 backdrop-blur-xl" : ""}
        `}
      >
        <Link href="/" className="font-light tracking-wide">
          Mani Alipour
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {links.map((link, i) => (
            <HeaderLink key={link.href} {...link} index={i} />
          ))}

          <div className="hidden md:flex gap-7">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-background border border-border hover:border-accent
               hover:bg-background/80 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={16} className="text-muted" />
              ) : (
                <Sun size={16} className="text-muted" />
              )}
            </button>

            <button
              onClick={handleToggleLanguage}
              className="text-sm font-medium text-neutral-400"
            >
              {locale === "en" ? "فا" : "EN"}
            </button>
          </div>
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
              className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm"
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
                bg-background/90
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
                  onClick={toggleTheme}
                  className="p-2.5 rounded-lg bg-background border border-border hover:border-accent
               hover:bg-background/80 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon size={16} className="text-muted" />
                  ) : (
                    <Sun size={16} className="text-muted" />
                  )}
                </button>

                <button
                  onClick={handleToggleLanguage}
                  className="text-sm font-medium text-neutral-400"
                >
                  {locale === "en" ? "فا" : "EN"}
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
  const t = useTranslations("Header");

  return (
    <motion.a
      href={href}
      className="relative text-sm text-muted hover:text-foreground transition-colors group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {t(title)}

      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}
