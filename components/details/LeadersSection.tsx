import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import type { Leader } from "@/types";
import { Heading } from "../dashboard";
import { Card } from "../ui";

interface LeadersSectionProps {
  leaders: Leader[];
}

export function LeadersSection({ leaders }: LeadersSectionProps) {
  return (
    <Card className="rounded-xl flex flex-col gap-4 p-6 border border-gray-100">
      <Heading title="Leaders" />
      <div className="flex flex-wrap gap-4">
        {leaders.map(leader => (
          <div key={leader.id} className="flex items-center gap-3 bg-background p-3 rounded-xl border border-slate-100 min-w-[240px]">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
              <AvatarImage src={leader.avatar} alt={leader.name} />
              <AvatarFallback className="bg-slate-200 text-slate-600 font-medium">
                {leader.name
                  .split(" ")
                  .map(n => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-slate-800">{leader.name}</div>
              <div className="text-sm text-slate-500">{leader.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
