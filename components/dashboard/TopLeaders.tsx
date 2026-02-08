// import Image from 'next/image'; // Remove if not used
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { topLeaders } from "@/data";
import type { Leader } from "@/types";

interface TopLeadersProps {
  leaders?: Leader[];
}

export function TopLeaders({ leaders = topLeaders }: TopLeadersProps) {
  return (
    <div className="flex flex-col">
      {leaders.map((leader, index) => (
        <div key={leader.id} className={`flex items-center justify-between py-4 ${index < leaders.length - 1 ? "border-b border-gray-200" : ""}`}>
          <div className="flex items-center gap-4">
            {/* Avatar - circular with subtle shadow */}
            <Avatar className="h-14 w-14 shadow-sm">
              <AvatarImage src={leader.avatar} alt={leader.name} />
              <AvatarFallback className="bg-gray-200 text-gray-600 font-semibold text-lg">{leader.name.charAt(0)}</AvatarFallback>
            </Avatar>

            {/* Leader Info */}
            <div>
              <div className="font-semibold text-base text-gray-700">
                {leader.name}
              </div>
              <div className="text-sm text-gray-500">
                {leader.role}
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="font-bold text-xl text-gray-700">
            {leader.score}
          </div>
        </div>
      ))}
    </div>
  );
}
