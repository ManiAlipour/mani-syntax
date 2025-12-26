"use client";
import Header from "../layout/Header";
import { useLocalStorage, useUpdateEffect } from "iso-hooks";
import { useLocale } from "next-intl";
import { createContext } from "react";

// bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50

export default function Providers({ children }: ChildrenProps) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}

const LocaleProvider = ({ children }: ChildrenProps) => {
  const locale = useLocale();

  const isEnglish = locale === "en";

  return (
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className={`min-h-screen 
                 transition-colors duration-300 
                ${isEnglish ? "" : "font-vazir"}`}
    >
      {children}
    </div>
  );
};

export const ThemeContext = createContext(
  {} as {
    theme: string;
    setTheme: (newValue: string | ((val: string) => string)) => void;
  }
);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useUpdateEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme === "dark" ? "" : "light"}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
