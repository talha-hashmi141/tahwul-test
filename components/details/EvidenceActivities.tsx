import type { EvidenceActivity } from "@/types";
import { Card } from "../ui";
import { Heading } from "../dashboard";
import { Fragment } from "react";

interface EvidenceActivitiesProps {
  activities: EvidenceActivity[];
}

export function EvidenceActivities({ activities }: EvidenceActivitiesProps) {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <Heading title="Recent Activities" />
      <div className="flex flex-col gap-4">
        {activities.map((activity, index, arr) => (
          <Fragment key={index}>
            <div key={activity.id} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
              <div className="flex-1 flex items-start justify-between gap-3">
                <p className="text-gray-700 font-medium leading-snug flex-1">{activity.text}</p>
                <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">{activity.time}</span>
              </div>
            </div>
            {index !== arr.length - 1 && <hr className="border-gray-200" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
