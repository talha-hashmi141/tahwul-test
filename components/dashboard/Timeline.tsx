import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { timelineSteps, timelineProgress } from "@/data";
import type { TimelineStep } from "@/types";
import { Heading } from "./Heading";

interface TimelineProps {
  steps?: TimelineStep[];
  progress?: number;
}

export function Timeline({ steps = timelineSteps, progress = timelineProgress }: TimelineProps) {
  return (
    <Card className="p-6 flex flex-col gap-4 md:gap-6">
      <div className="flex justify-between items-center">
        <Heading title="Project Timeline" />
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-200 text-slate-700 text-sm rounded-lg px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>2026</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical track (background) - spans from first to last dot */}
          <div className="absolute left-[5px] top-[6px] bottom-[6px] w-0.5 -translate-x-1/2 rounded-full bg-slate-100" />
          {/* Vertical progress (green) */}
          <div
            className="absolute left-[5px] top-[6px] w-0.5 -translate-x-1/2 rounded-full bg-green-600"
            style={{ height: `${Math.min(100, progress + 5)}%` }}
          />
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className={cn(
                      "z-10 h-3 w-3 shrink-0 rounded-full border-2 border-white shadow-sm",
                      step.status === "completed"
                        ? "bg-green-600 border-green-600"
                        : step.status === "delayed"
                        ? "bg-red-600 border-red-600"
                        : "border-slate-200 bg-slate-200"
                    )}
                  />
                  {index < steps.length - 1 && <div className="w-0.5 min-h-[32px] flex-1 bg-transparent" aria-hidden />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-500">{step.date}</div>
                  <div className="font-semibold text-slate-700">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-[3px] left-0 w-full h-4 bg-slate-100 rounded-full" />

          {/* Progress Line - Green part */}
          <div className="absolute top-[3px] left-0 h-4 bg-green-600 rounded-full" style={{ width: `${progress + 5}%` }} />

          {/* Points */}
          <div className="relative h-24 2xl:h-20">
            {steps.map(step => (
              <div key={step.id} className="absolute transform -translate-x-1/2 flex flex-col items-center group" style={{ left: step.position, top: 5 }}>
                {/* Dot */}
                <div className={cn("w-3 h-3 rounded-full z-10 mb-3", step.status === "completed" ? "bg-white" : "bg-red-600")} />

                {/* Text Labels */}
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1 font-medium">{step.date}</div>
                  <div className="font-semibold text-slate-600">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
