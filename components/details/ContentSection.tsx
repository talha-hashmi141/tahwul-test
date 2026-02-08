import { cn } from "@/lib/utils";
import type { DetailsSection } from "@/types";

interface ContentSectionProps {
  section: DetailsSection;
  className?: string;
}

export function ContentSection({ section, className }: ContentSectionProps) {
  return (
    <div className={cn("flex flex-col md:flex-row gap-4 py-6 border-b border-gray-200 last:border-0", className)}>
      <div className="w-full md:w-1/4 min-w-[200px]">
        <h3 className="bg-gray-100 w-fit px-4 py-2 font-medium rounded-lg text-slate-700">{section.title}</h3>
      </div>

      <div className="flex-1">
        {section.type === "list" && Array.isArray(section.content) ? (
          <div className="bg-gray-100 p-4 rounded-lg text-slate-700 leading-relaxed border border-slate-100">
            <p className="mb-2 font-medium">{section.content[0]}</p>
            <ul className="space-y-1.5 pl-1">
              {section.content.slice(1).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={cn("p-4 rounded-lg text-slate-700 leading-relaxed bg-gray-100 border border-slate-100")}>{section.content}</div>
        )}
      </div>
    </div>
  );
}
