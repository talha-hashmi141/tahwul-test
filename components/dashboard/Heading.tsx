import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export function Heading({ title, className }: HeadingProps) {
  return <div className={cn("text-xl font-bold text-gray-700", className)}>{title}</div>;
}
