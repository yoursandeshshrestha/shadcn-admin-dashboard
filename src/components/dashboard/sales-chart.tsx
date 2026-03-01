"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { date: "2024-11-18", sales: 450 },
  { date: "2024-11-19", sales: 380 },
  { date: "2024-11-20", sales: 520 },
  { date: "2024-11-21", sales: 140 },
  { date: "2024-11-22", sales: 600 },
  { date: "2024-11-23", sales: 480 },
  { date: "2024-11-24", sales: 520 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card className="pt-0">
      <CardHeader className="border-b py-4 sm:py-5">
        <CardTitle className="text-base sm:text-lg">Sales Analytics</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Weekly sales performance</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] sm:h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="sales"
              fill="var(--color-sales)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
