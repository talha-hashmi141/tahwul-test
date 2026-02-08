import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    indicatorClassName?: string;
}

export function Progress({ className, value = 0, indicatorClassName, ...props }: ProgressProps) {
    return (
        <div
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-secondary/20 bg-gray-100",
                className
            )}
            {...props}
        >
            <div
                className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    );
}
