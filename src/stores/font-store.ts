import { create } from "zustand";
import { persist } from "zustand/middleware";

export const FONT_OPTIONS = {
  jakarta: {
    name: "Plus Jakarta Sans",
    variable: "--font-jakarta",
    className: "font-jakarta",
  },
  inter: {
    name: "Inter",
    variable: "--font-inter",
    className: "font-inter",
  },
  geist: {
    name: "Geist Sans",
    variable: "--font-geist-sans",
    className: "font-geist",
  },
  poppins: {
    name: "Poppins",
    variable: "--font-poppins",
    className: "font-poppins",
  },
  outfit: {
    name: "Outfit",
    variable: "--font-outfit",
    className: "font-outfit",
  },
  manrope: {
    name: "Manrope",
    variable: "--font-manrope",
    className: "font-manrope",
  },
  rubik: {
    name: "Rubik",
    variable: "--font-rubik",
    className: "font-rubik",
  },
  dmSans: {
    name: "DM Sans",
    variable: "--font-dm-sans",
    className: "font-dm-sans",
  },
  ibmPlexSans: {
    name: "IBM Plex Sans",
    variable: "--font-ibm-plex-sans",
    className: "font-ibm-plex-sans",
  },
  spaceGrotesk: {
    name: "Space Grotesk",
    variable: "--font-space-grotesk",
    className: "font-space-grotesk",
  },
  sora: {
    name: "Sora",
    variable: "--font-sora",
    className: "font-sora",
  },
  onest: {
    name: "Onest",
    variable: "--font-onest",
    className: "font-onest",
  },
} as const;

export type FontOption = keyof typeof FONT_OPTIONS;

interface FontState {
  currentFont: FontOption;
  setFont: (font: FontOption) => void;
}

export const useFontStore = create<FontState>()(
  persist(
    (set) => ({
      currentFont: "jakarta",
      setFont: (font) => {
        set({ currentFont: font });
      },
    }),
    {
      name: "font-storage",
    }
  )
);
