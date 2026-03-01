import {
  LayoutDashboard,
  Users,
  Package,
  DollarSign,
  BarChart3,
  Settings,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { MenuItem } from "@/types/navigation";

export const menuItems: MenuItem[] = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { title: "Customers", icon: Users, url: "/customers", comingSoon: true },
  { title: "Products", icon: Package, url: "/products", comingSoon: true },
  { title: "Sales", icon: DollarSign, url: "/sales", comingSoon: true },
  { title: "Analytics", icon: BarChart3, url: "/analytics", comingSoon: true },
  { title: "Settings", icon: Settings, url: "/settings", comingSoon: true },
  {
    title: "Auth Pages",
    icon: ShieldCheck,
    url: "/auth",
    items: [
      { title: "Centered Form", icon: Lock, url: "/auth/centered-form" },
      { title: "Simple Login", icon: Lock, url: "/auth/simple-login" },
      { title: "Split Gradient", icon: Lock, url: "/auth/split-gradient" },
      { title: "Card Login", icon: Lock, url: "/auth/card-login" },
      { title: "Card Gradient", icon: Lock, url: "/auth/card-gradient" },
    ],
  },
];
