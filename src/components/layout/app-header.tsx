"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/contexts/SidebarContext";
import { Search, Bell, Moon, Sun, Palette, Check, Type } from "lucide-react";
import { useCommandPalette } from "@/stores/command-palette-store";
import { useTheme } from "next-themes";
import { useThemeColors, COLOR_THEMES, ColorTheme } from "@/stores/theme-colors-store";
import { useFontStore, FONT_OPTIONS, FontOption } from "@/stores/font-store";

export function AppHeader() {
  const { open } = useCommandPalette();
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useThemeColors();
  const { currentFont, setFont } = useFontStore();
  const { toggleSidebar, isCollapsed } = useSidebar();

  return (
    <header className="flex h-14 sm:h-16 shrink-0 items-center gap-2 sm:gap-4 border-b bg-card px-3 sm:px-6">
      {/* Sidebar Toggle */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleSidebar}
          className="relative inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-transparent hover:bg-accent text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 size-9 cursor-pointer [&>svg]:size-5"
          data-slot="sidebar-trigger"
          data-sidebar="trigger"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5">
            <line
              x1="18"
              y1="4"
              x2="18"
              y2="28"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              data-color="color-2"
              data-cap="butt"
              strokeLinejoin="miter"
              strokeLinecap="butt"
            />
            <rect
              x="2"
              y="4"
              width="28"
              height="24"
              rx="3"
              ry="3"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            <line
              x1="22"
              y1="11"
              x2="26"
              y2="11"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              data-color="color-2"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            <line
              x1="22"
              y1="16"
              x2="26"
              y2="16"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              data-color="color-2"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            <line
              x1="22"
              y1="21"
              x2="26"
              y2="21"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              data-color="color-2"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
          </svg>
          <span className="sr-only">Toggle Sidebar</span>
        </button>
        <Separator orientation="vertical" className="ml-3 mr-2 h-8" />
      </div>

      {/* Search Bar */}
      <div
        className="relative flex-1 max-w-md cursor-pointer hidden lg:block"
        onClick={open}
      >
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-9 pr-16 shadow-none cursor-pointer text-sm"
          readOnly
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {/* Right Side Icons */}
      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative cursor-pointer">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              <span className="text-xs font-normal text-muted-foreground">3 unread</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[400px] overflow-y-auto">
              <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src="/yoursandeshshrestha.png" alt="User" />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New milestone achieved</p>
                  <p className="text-xs text-muted-foreground">
                    Congratulations on reaching $10,000 in revenue!
                  </p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src="/yoursandeshshrestha.png" alt="User" />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">System update completed</p>
                  <p className="text-xs text-muted-foreground">
                    All systems are running smoothly
                  </p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src="/yoursandeshshrestha.png" alt="User" />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New comment on your post</p>
                  <p className="text-xs text-muted-foreground">
                    Someone replied to your dashboard update
                  </p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer opacity-60">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src="/yoursandeshshrestha.png" alt="User" />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Weekly report ready</p>
                  <p className="text-xs text-muted-foreground">
                    Your analytics report is ready to view
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center cursor-pointer text-sm">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex">
              <Type className="h-5 w-5" />
              <span className="sr-only">Font</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Font Family</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.entries(FONT_OPTIONS).map(([key, { name, className }]) => (
              <DropdownMenuItem
                key={key}
                className="cursor-pointer"
                onClick={() => setFont(key as FontOption)}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={className}>
                    {name}
                  </span>
                  {currentFont === key && <Check className="h-4 w-4" />}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer h-8 w-8 sm:h-9 sm:w-9 hidden md:flex">
              <Palette className="h-5 w-5" />
              <span className="sr-only">Theme colors</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="end">
            <DropdownMenuLabel>Theme Colors</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.entries(COLOR_THEMES).map(([key, { name, colors }]) => (
              <DropdownMenuItem
                key={key}
                className="cursor-pointer"
                onClick={() => setColorTheme(key as ColorTheme)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {colors.slice(0, 5).map((color, i) => (
                        <div
                          key={i}
                          className="h-4 w-4 rounded-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span>{name}</span>
                  </div>
                  {colorTheme === key && <Check className="h-4 w-4" />}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full cursor-pointer">
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                <AvatarImage src="/yoursandeshshrestha.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
