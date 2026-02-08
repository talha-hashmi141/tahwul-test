import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EvidenceDocument, DocumentStatus } from "@/types";
import { Card } from "../ui";

interface EvidenceTableProps {
  documents: EvidenceDocument[];
}

const STATUS_COLORS: Record<DocumentStatus, string> = {
  Approved: "text-green-600 bg-green-50",
  "Pending Review": "text-orange-500 bg-orange-50",
  Rejected: "text-red-600 bg-red-50",
  Draft: "text-slate-500 bg-slate-50",
};

export function EvidenceTable({ documents }: EvidenceTableProps) {
  return (
    <Card className="overflow-x-auto p-4">
      <table className="w-full text-left">
        <thead className="bg-slate-100 text-gray-700 text-sm">
          <tr>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Document Number <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Document Name <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Document Lead <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Document Preparer <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Date <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Due Date <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
            <th className="px-2 py-3 whitespace-nowrap text-center">
              <div className="flex items-center gap-1 justify-center cursor-pointer hover:text-slate-500 transition-colors font-medium">
                Status <ArrowUpDown className="w-3 h-3 opacity-60" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {documents.map(doc => (
            <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-2 py-4 text-slate-600">{doc.number}</td>
              <td className="px-2 py-4 font-medium text-slate-600">{doc.name}</td>
              <td className="px-2 py-4 text-slate-600">{doc.lead}</td>
              <td className="px-2 py-4 text-slate-600">{doc.preparer}</td>
              <td className="px-2 py-4 text-slate-600 whitespace-nowrap">{doc.date}</td>
              <td className="px-2 py-4 text-slate-600 whitespace-nowrap">{doc.dueDate}</td>
              <td className="px-2 py-4 text-center whitespace-nowrap">
                <span className={cn("text-sm rounded-full px-3 py-1.5", STATUS_COLORS[doc.status])}>{doc.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
