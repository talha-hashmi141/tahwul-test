import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MoveLeft, Search, Bell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading } from "../dashboard";

// Simple radial progress component
function RadialProgress({ value, size = 60, strokeWidth = 8 }: { value: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={strokeWidth} fill="transparent" className="text-gray-200" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-green-600 transition-all duration-500 ease-in-out"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-bold text-slate-700">{value}%</span>
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  category: string;
  progress: number;
  description?: string;
}

export function PageHeader({ title, category, progress, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors flex items-center gap-1">
          <MoveLeft size={20} />
        </Link>
        <Heading title={title} className="text-lg text-gray-600" />
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <Badge variant="secondary" className="text-sm mb-2 rounded-full border border-gray-200 text-gray-500">
            {category}
          </Badge>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{title}</h1>
          <p className="text-slate-500 max-w-3xl">
            {description || "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals"}
          </p>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <RadialProgress value={progress} size={80} strokeWidth={8} />
        </div>
      </div>
    </div>
  );
}
