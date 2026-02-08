"use client";

interface GaugeProps {
  value: number;
  label: string;
  subLabel?: string;
  color: string;
}

export function GaugeChart({ value, label, subLabel, color }: GaugeProps) {
  // Arc configuration - increased size, reduced stroke
  const strokeWidth = 16;
  const radius = 100;
  const centerX = 140;
  const centerY = 130;

  // Calculate arc length for stroke-dasharray
  const circumference = Math.PI * radius; // Half circle circumference
  const filledLength = (value / 100) * circumference;
  const remainingLength = circumference - filledLength;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="300" height="170" viewBox="0 0 300 170" className="overflow-visible">
        {/* Background arc (gray) */}
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Filled arc (colored) */}
        {value > 0 && (
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${filledLength} ${remainingLength}`}
            strokeDashoffset={0}
          />
        )}

        {/* Center text - percentage */}
        <text x={centerX} y={centerY - 15} textAnchor="middle" dominantBaseline="middle" fill="#1e3a5f" fontSize="42" fontWeight="bold">
          {value}%
        </text>

        {/* Label text */}
        <text x={centerX} y={centerY + 10} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="14" fontWeight="500">
          {label}
        </text>
      </svg>
    </div>
  );
}
