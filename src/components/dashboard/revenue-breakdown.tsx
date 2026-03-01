"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RevenueSource {
  id: string;
  name: string;
  amount: string;
  percentage: number;
}

interface RevenueBreakdownProps {
  sources: RevenueSource[];
}

const chartConfig = {
  amount: {
    label: "Amount",
  },
  product: {
    label: "Product Sales",
    color: "var(--chart-1)",
  },
  subscription: {
    label: "Subscription",
    color: "var(--chart-2)",
  },
  service: {
    label: "Service Fees",
    color: "var(--chart-3)",
  },
  license: {
    label: "License",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function RevenueBreakdown({ sources }: RevenueBreakdownProps) {
  const chartData = sources.map((source, index) => ({
    name: source.name,
    value: parseFloat(source.amount.replace(/[$,]/g, "")),
    fill: `var(--chart-${index + 1})`,
  }));

  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col pt-0">
      <CardHeader className="items-center border-b py-4 pb-0">
        <CardTitle className="text-base sm:text-lg">Revenue Sources</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Revenue breakdown by source</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 pt-6 overflow-hidden">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] sm:max-h-[300px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              strokeWidth={5}
              stroke="hsl(var(--card))"
              label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke="hsl(var(--card))" />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl sm:text-3xl font-bold"
                        >
                          ${(totalRevenue / 1000).toFixed(1)}k
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-xs sm:text-sm"
                        >
                          Total Revenue
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 20.1% this month <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>
        <div className="text-muted-foreground leading-none text-center">
          Showing revenue breakdown for the current period
        </div>
      </CardFooter>
    </Card>
  );
}
