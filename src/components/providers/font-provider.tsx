"use client";

import { useEffect } from "react";
import { useFontStore, FONT_OPTIONS } from "@/stores/font-store";

export function FontProvider({ children }: { children: React.ReactNode }) {
  const { currentFont } = useFontStore();

  useEffect(() => {
    // Remove all font classes from body
    const body = document.body;
    Object.values(FONT_OPTIONS).forEach(({ className }) => {
      body.classList.remove(className);
    });

    // Add current font class to body
    const currentFontClass = FONT_OPTIONS[currentFont].className;
    body.classList.add(currentFontClass);
  }, [currentFont]);

  return <>{children}</>;
}
