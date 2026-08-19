"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type Theme,
  isTheme,
  themes,
} from "@/lib/themes";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  themes: readonly Theme[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const fromDom = document.documentElement.getAttribute("data-theme");
    const initial =
      stored && isTheme(stored)
        ? stored
        : fromDom && isTheme(fromDom)
          ? fromDom
          : DEFAULT_THEME;

    setThemeState(initial);
    applyTheme(initial);

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.add("theme-ready");
      });
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    const index = themes.indexOf(theme);
    const next = themes[(index + 1) % themes.length] ?? DEFAULT_THEME;
    setTheme(next);
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, themes }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
