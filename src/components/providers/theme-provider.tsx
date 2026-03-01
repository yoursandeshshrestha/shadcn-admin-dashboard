"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";
import { themes } from "@/config/themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, mode, radius } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const themeConfig = themes[theme];

    if (!themeConfig) return;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Add current mode class
    root.classList.add(mode);

    // Apply CSS variables for the current theme and mode
    const vars = themeConfig.cssVars[mode];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply border radius
    root.style.setProperty("--radius", `${radius}rem`);
  }, [theme, mode, radius]);

  return <>{children}</>;
}
