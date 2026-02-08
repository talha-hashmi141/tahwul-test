import { recentActivities } from "@/data";
import type { Activity } from "@/types";

interface RecentActivitiesProps {
  activities?: Activity[];
}

export function RecentActivities({ activities = recentActivities }: RecentActivitiesProps) {
  return (
    <div className="flex flex-col flex-1">
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className="flex items-start gap-3 py-5 cursor-pointer"
          style={{
            borderBottom: index < activities.length - 1 ? "1px solid #e5e7eb" : "none",
          }}
        >
          {/* Red bullet dot */}
          <div className="mt-2 h-2.5 w-2.5 bg-red-500 shrink-0 rounded-full" />

          {/* Activity content */}
          <div className="flex-1 min-w-0">
            <p className="font-medium leading-relaxed text-gray-700">
              {activity.text}
            </p>
          </div>

          {/* Timestamp - right aligned */}
          <span className="mt-2 shrink-0 text-xs whitespace-nowrap self-start text-gray-500">
            {activity.time}
          </span>
        </div>
      ))}
    </div>
  );
}
