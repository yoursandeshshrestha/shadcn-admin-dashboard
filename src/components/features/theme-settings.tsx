"use client";

import { useThemeStore } from "@/stores/theme-store";
import { themes, themeNames } from "@/config/themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSettings() {
  const { theme, mode, radius, setTheme, setMode, setRadius } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px] p-4" align="end">
        <div className="space-y-4">
          {/* Theme Preset */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Theme preset</h4>
            <div className="grid grid-cols-2 gap-2">
              {themeNames.map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => setTheme(themeName)}
                  className={cn(
                    "rounded-md border px-3 py-2 text-sm font-medium transition-colors cursor-pointer text-left",
                    theme === themeName
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                >
                  {themes[themeName].name}
                </button>
              ))}
            </div>
          </div>

          {/* Color Mode */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Color mode</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode("light")}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  mode === "light"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                Light
              </button>
              <button
                onClick={() => setMode("dark")}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  mode === "dark"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Border Radius */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Border radius</h4>
              <span className="text-xs text-muted-foreground">{radius}rem</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.125"
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0"
            />
            <div className="grid grid-cols-5 gap-1">
              {[0, 0.25, 0.5, 0.75, 1].map((value) => (
                <button
                  key={value}
                  onClick={() => setRadius(value)}
                  className={cn(
                    "h-8 border text-xs font-medium transition-colors cursor-pointer",
                    radius === value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                  style={{ borderRadius: `${value}rem` }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <Button
            onClick={() => {
              setTheme("default");
              setMode("light");
              setRadius(0.375);
            }}
            variant="destructive"
            className="w-full text-sm cursor-pointer"
          >
            Reset to Default
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
