import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { PerspectiveItem, StepStatus } from "@/types";
import { Heading } from "./Heading";
import Link from "next/link";

const STATUS_COLORS: Record<StepStatus, string> = {
  completed: "bg-green-600 text-white",
  "in-progress": "bg-yellow-500 text-white",
  pending: "bg-gray-200 text-gray-500",
  delayed: "bg-red-500 text-white",
  "not-started": "bg-slate-300 text-white",
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  gray: "bg-slate-500 text-white",
};

const getStatusColor = (status: StepStatus): string => {
  return STATUS_COLORS[status] || "bg-gray-200 text-gray-500";
};

interface PerspectiveColumnProps {
  item: PerspectiveItem;
}

function PerspectiveColumn({ item }: PerspectiveColumnProps) {
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Header Card */}
      <div className="bg-primary-dark text-white rounded-lg p-2.5 flex flex-col items-center justify-center text-center shadow-sm h-24">
        <h4 className="text-sm font-bold mb-1.5 leading-tight px-1 flex items-center justify-center">{item.title}</h4>
        <div className="bg-white/10 px-2.5 py-0.5 rounded text-sm font-bold">{item.percent}%</div>
      </div>

      {/* Sub Items */}
      <div className="flex flex-col gap-2 flex-1">
        {item.subItems.map((subItem, index) => (
          <Link key={index} href={subItem.href || "#"}>
            <Card className="p-2.5 flex flex-col items-center justify-center gap-2 border bg-background border-gray-200 hover:shadow-md transition-shadow flex-1">
              <span className="text-sm text-gray-700 text-center font-medium leading-tight flex items-center justify-center w-full">{subItem.title}</span>
              <div className="flex flex-wrap justify-center gap-1 w-full max-w-[90px]">
                {subItem.steps.map((step, idx) => (
                  <div
                    key={`${subItem.id}-step-${idx}`}
                    className={cn("w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0", getStatusColor(step.status))}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

const LEGEND_ITEMS = [
  { label: "Not Started", color: "bg-slate-300" },
  { label: "In Progress", color: "bg-yellow-400" },
  { label: "Completed", color: "bg-green-500" },
  { label: "Partially Uploaded", color: "bg-blue-500" },
  { label: "Fully Uploaded", color: "bg-blue-600" },
  { label: "Delayed", color: "bg-red-500" },
];

interface ProgressGridProps {
  items: PerspectiveItem[];
}

export function ProgressGrid({ items }: ProgressGridProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-3">
        <Heading title="Progress Status" />
        <div className="flex flex-wrap gap-4 text-sm text-slate-500 justify-center">
          {LEGEND_ITEMS.map(legend => (
            <span key={legend.label} className="flex items-center gap-1.5">
              <span className={cn("w-2.5 h-2.5 rounded-full", legend.color)} />
              {legend.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-2.5 items-stretch">
        {items.map(item => (
          <PerspectiveColumn key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}
