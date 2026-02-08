import { LayoutDashboard, Layers, CheckSquare, FileText, BarChart3, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const NAV_ICON_MAP: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  "layers": Layers,
  "check-square": CheckSquare,
  "file-text": FileText,
  "bar-chart-3": BarChart3,
  "users": Users,
};

export const DEFAULT_NAV_ICON = LayoutDashboard;
