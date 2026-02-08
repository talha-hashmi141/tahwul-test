import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { EvidenceStat } from "@/types";
import { FileText, FileClock, FileCheck, File } from "lucide-react";

interface EvidenceSummaryProps {
  stats: EvidenceStat[];
}

const STATUS_ICONS = {
  total: FileText,
  "under-review": FileClock,
  "in-progress": File,
  completed: FileCheck,
};

const STATUS_COLORS = {
  total: "text-red-600",
  "under-review": "text-red-600",
  "in-progress": "text-red-600",
  completed: "text-red-600",
};

export function EvidenceSummary({ stats }: EvidenceSummaryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(stat => {
        const Icon = STATUS_ICONS[stat.status] || FileText;
        const colorClass = STATUS_COLORS[stat.status] || "text-red-600";

        return (
          <Card key={stat.id} className="p-4 flex items-center gap-4 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Icon size={24} className={colorClass} />
            <div>
              <div className="text-2xl font-bold text-slate-800">{stat.count}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
