import { Card, CardContent } from "@/components/ui/Card";
import { ArrowUpRight, Folder, CheckCircle, FileText, UploadCloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/types";

const ICON_MAP: Record<IconName, LucideIcon> = {
  "bar-chart": ArrowUpRight,
  folder: Folder,
  "check-circle": CheckCircle,
  "file-text": FileText,
  "file-check": CheckCircle,
  "cloud-upload": UploadCloud,
};

interface StatCardProps {
  label: string;
  value: string;
  iconName?: IconName;
  className?: string;
}

export function StatCard({ label, value, iconName }: StatCardProps) {
  const Icon = iconName ? ICON_MAP[iconName] : Folder;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="text-slate-500 mt-1">{label}</div>
          </div>
          <Icon className="h-6 w-6 text-red-500" />
        </div>
      </CardContent>
    </Card>
  );
}
