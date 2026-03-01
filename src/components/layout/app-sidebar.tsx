"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { menuItems } from "@/config/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <aside
      className={cn(
        "border-r border-border bg-sidebar transition-all duration-300 shrink-0 flex flex-col h-full",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className={cn(
        "flex h-16 shrink-0 items-center border-b px-4 transition-all",
        isCollapsed && "justify-center px-2"
      )}>
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 cursor-pointer hover:bg-accent transition-colors rounded-lg px-2 py-1",
            isCollapsed && "justify-center px-0"
          )}
        >
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarImage src="/yoursandeshshrestha.png" alt="Profile" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-base font-bold leading-tight whitespace-nowrap">
                Your Company Name
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                Admin Dashboard
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-2">
        <nav className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 mb-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Navigation
              </h3>
            </div>
          )}
          {menuItems.map((item) => {
            const isExpanded = expandedItems.includes(item.title);
            const isActive = pathname === item.url;

            if (item.items) {
              return (
                <div key={item.title}>
                  <button
                    onClick={() => toggleExpanded(item.title)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
                      "hover:bg-accent hover:text-accent-foreground",
                      isCollapsed && "justify-center",
                      isExpanded && "bg-accent text-accent-foreground"
                    )}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.title}</span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isExpanded && "rotate-90"
                          )}
                        />
                      </>
                    )}
                  </button>
                  {!isCollapsed && isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.url;
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer",
                              isSubActive
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <subItem.icon className="h-4 w-4 shrink-0" />
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isCollapsed && "justify-center",
                  item.comingSoon
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground"
                )}
                title={isCollapsed ? item.title : undefined}
                onClick={item.comingSoon ? (e) => e.preventDefault() : undefined}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1">{item.title}</span>
                    {item.comingSoon && (
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-md">
                        Soon
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
