import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  icon: LucideIcon;
  url: string;
  items?: MenuItem[];
  comingSoon?: boolean;
}
