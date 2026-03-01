"use client";

import { useEffect } from "react";
import { useThemeColors, COLOR_THEMES } from "@/stores/theme-colors-store";

export function ThemeColorsProvider({ children }: { children: React.ReactNode }) {
  const { colorTheme } = useThemeColors();

  useEffect(() => {
    // Apply colors on mount and when colorTheme changes
    const colors = COLOR_THEMES[colorTheme].colors;
    const root = document.documentElement;

    // Update chart colors
    colors.forEach((color, index) => {
      root.style.setProperty(`--chart-${index + 1}`, color);
    });

    // Update primary color (use the second color from the palette)
    root.style.setProperty(`--primary`, colors[1]);

    // Update sidebar primary color
    root.style.setProperty(`--sidebar-primary`, colors[1]);

    // Update sidebar accent color (use the first color from the palette to match chart-1)
    root.style.setProperty(`--sidebar-accent`, colors[0]);

    // Update ring color (focus rings)
    root.style.setProperty(`--ring`, colors[1]);

    // Update sidebar ring color
    root.style.setProperty(`--sidebar-ring`, colors[1]);
  }, [colorTheme]);

  return <>{children}</>;
}
