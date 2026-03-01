import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeName } from "@/config/themes";

interface ThemeState {
  theme: ThemeName;
  mode: "light" | "dark";
  radius: number;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: "light" | "dark") => void;
  setRadius: (radius: number) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "default",
      mode: "light",
      radius: 0.375,
      setTheme: (theme) => set({ theme }),
      setMode: (mode) => set({ mode }),
      setRadius: (radius) => set({ radius }),
      toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme-storage",
    }
  )
);
