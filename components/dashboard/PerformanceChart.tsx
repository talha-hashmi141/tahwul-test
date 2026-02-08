"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { performanceData } from "@/data";
import type { ChartDataPoint } from "@/types";

interface PerformanceChartProps {
  data?: ChartDataPoint[];
}

export function PerformanceChart({ data = performanceData }: PerformanceChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
        {/* Define gradient for bars - top to bottom fade */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e5eba" stopOpacity={1} />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity={0.95} />
            <stop offset="70%" stopColor="#60a5fa" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.3} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="0" horizontal={true} vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#64748b" }} dy={8} />
        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={30} />
        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
        />
        <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={42} fill="url(#barGradient)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
