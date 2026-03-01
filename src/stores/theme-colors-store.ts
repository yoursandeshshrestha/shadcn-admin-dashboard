import { create } from "zustand";
import { persist } from "zustand/middleware";

export const COLOR_THEMES = {
  blue: {
    name: "Blue",
    colors: ["#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af"],
  },
  green: {
    name: "Green",
    colors: ["#6ee7b7", "#34d399", "#10b981", "#059669", "#047857"],
  },
  purple: {
    name: "Purple",
    colors: ["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9"],
  },
  orange: {
    name: "Orange",
    colors: ["#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c"],
  },
  pink: {
    name: "Pink",
    colors: ["#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d"],
  },
  red: {
    name: "Red",
    colors: ["#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c"],
  },
  cyan: {
    name: "Cyan",
    colors: ["#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490"],
  },
  yellow: {
    name: "Yellow",
    colors: ["#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207"],
  },
  gray: {
    name: "Gray",
    colors: ["#94a3b8", "#64748b", "#475569", "#334155", "#1e293b"],
  },
} as const;

export type ColorTheme = keyof typeof COLOR_THEMES;

interface ThemeColorsState {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

export const useThemeColors = create<ThemeColorsState>()(
  persist(
    (set) => ({
      colorTheme: "green",
      setColorTheme: (theme) => {
        set({ colorTheme: theme });
        // Update CSS variables
        const colors = COLOR_THEMES[theme].colors;
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
      },
    }),
    {
      name: "theme-colors-storage",
    }
  )
);
