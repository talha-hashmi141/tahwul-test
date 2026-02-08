import { stats, progressStatus, complianceGauge, auditReadinessGauge, auditStats } from "@/data";
import { Timeline, StatCard, ProgressGrid, GaugeChart, PerformanceChart, RecentActivities, TopLeaders, Heading } from "@/components/dashboard";
import { Card } from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {/* 1. Project Timeline */}
      <Timeline />

      {/* 2. Stats Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
        {stats.map(stat => (
          <StatCard key={stat.id} label={stat.label} value={stat.value} iconName={stat.icon} />
        ))}
      </div>

      {/* 3. Progress Status Grid */}
      <ProgressGrid items={progressStatus} />

      {/* 4. Middle Section: Compliance, Leaders, Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Compliance Score Card */}
        <Card className="p-6 min-h-[300px] flex flex-col">
          <Heading title="Overall Compliance Score" />
          <div className="flex-1 flex items-center justify-center">
            <GaugeChart value={complianceGauge.value} label={complianceGauge.label} color={complianceGauge.color} />
          </div>
        </Card>

        {/* Top Leaders Card */}
        <Card className="p-6 min-h-[300px]">
          <Heading title="Top Performing Perspective Leaders" />
          <TopLeaders />
        </Card>

        {/* Recent Activities Card */}
        <Card className="p-6 min-h-[300px] flex flex-col">
          <Heading title="Recent Activities" />

          <div className="flex-1">
            <RecentActivities />
          </div>
        </Card>
      </div>

      {/* 5. Bottom Section: Performance & Audit Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart Card */}
        <Card className="p-6 lg:col-span-2">
          <Heading title="12-Month Performance" />
          <div className="h-60 lg:h-full">
            <PerformanceChart />
          </div>
        </Card>

        {/* Audit Readiness Card */}
        <Card className="p-6">
          <Heading title="Audit Readiness" />
          <div className="h-48">
            <GaugeChart value={auditReadinessGauge.value} label={auditReadinessGauge.label} color={auditReadinessGauge.color} />
          </div>
          {/* Separator line */}
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex gap-6">
            <AuditStatBox value={auditStats.overdueStandards} label="Overdue Stds" />
            <AuditStatBox value={auditStats.missingEvidence} label="Missing Evidence" />
          </div>
        </Card>
      </div>
    </div>
  );
}

// Small server component for audit stats
function AuditStatBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex-1 p-4 text-center">
      <div className="text-3xl font-bold" style={{ color: "#1e3a5f" }}>
        {value}
      </div>
      <div className="text-sm mt-2" style={{ color: "#64748b" }}>
        {label}
      </div>
    </div>
  );
}
