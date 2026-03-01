import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatCard as StatCardType } from "@/types/dashboard";

interface StatCardProps {
  stat: StatCardType;
}

export function StatCard({ stat }: StatCardProps) {
  const isPositive = stat.trend === "up";

  return (
    <Card className="p-4 sm:p-6">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start justify-between">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {stat.title}
          </p>
          <div
            className={cn(
              "flex items-center gap-0.5 rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold",
              isPositive
                ? "bg-green-500/10 text-green-600 dark:bg-green-500/10 dark:text-green-500"
                : "bg-red-500/10 text-red-600 dark:bg-red-500/10 dark:text-red-500"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            ) : (
              <TrendingDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            )}
            <span>{Math.abs(stat.change)}%</span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{stat.value}</h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            {isPositive ? "Increase" : "Decrease"} from last period
          </p>
        </div>
      </div>
    </Card>
  );
}
