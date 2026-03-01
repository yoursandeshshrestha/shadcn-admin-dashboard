"use client";

import * as React from "react";
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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { date: "2024-01-01", revenue: 4200, expenses: 2400 },
  { date: "2024-01-08", revenue: 3800, expenses: 2200 },
  { date: "2024-01-15", revenue: 4500, expenses: 2600 },
  { date: "2024-01-22", revenue: 4100, expenses: 2300 },
  { date: "2024-01-29", revenue: 4800, expenses: 2700 },
  { date: "2024-02-05", revenue: 3900, expenses: 2100 },
  { date: "2024-02-12", revenue: 4300, expenses: 2500 },
  { date: "2024-02-19", revenue: 4700, expenses: 2800 },
  { date: "2024-02-26", revenue: 4400, expenses: 2400 },
  { date: "2024-03-04", revenue: 5100, expenses: 3000 },
  { date: "2024-03-11", revenue: 4900, expenses: 2900 },
  { date: "2024-03-18", revenue: 5300, expenses: 3200 },
  { date: "2024-03-25", revenue: 5000, expenses: 3100 },
  { date: "2024-04-01", revenue: 5500, expenses: 3400 },
  { date: "2024-04-08", revenue: 5200, expenses: 3300 },
  { date: "2024-04-15", revenue: 5700, expenses: 3600 },
  { date: "2024-04-22", revenue: 5400, expenses: 3500 },
  { date: "2024-04-29", revenue: 5900, expenses: 3800 },
  { date: "2024-05-06", revenue: 5600, expenses: 3700 },
  { date: "2024-05-13", revenue: 6100, expenses: 4000 },
  { date: "2024-05-20", revenue: 5800, expenses: 3900 },
  { date: "2024-05-27", revenue: 6300, expenses: 4200 },
  { date: "2024-06-03", revenue: 6000, expenses: 4100 },
  { date: "2024-06-10", revenue: 6500, expenses: 4400 },
  { date: "2024-06-17", revenue: 6200, expenses: 4300 },
  { date: "2024-06-24", revenue: 6700, expenses: 4600 },
  { date: "2024-07-01", revenue: 6400, expenses: 4500 },
  { date: "2024-07-08", revenue: 6900, expenses: 4800 },
  { date: "2024-07-15", revenue: 6600, expenses: 4700 },
  { date: "2024-07-22", revenue: 7100, expenses: 5000 },
  { date: "2024-07-29", revenue: 6800, expenses: 4900 },
  { date: "2024-08-05", revenue: 7300, expenses: 5200 },
  { date: "2024-08-12", revenue: 7000, expenses: 5100 },
  { date: "2024-08-19", revenue: 7500, expenses: 5400 },
  { date: "2024-08-26", revenue: 7200, expenses: 5300 },
  { date: "2024-09-02", revenue: 7700, expenses: 5600 },
  { date: "2024-09-09", revenue: 7400, expenses: 5500 },
  { date: "2024-09-16", revenue: 7900, expenses: 5800 },
  { date: "2024-09-23", revenue: 7600, expenses: 5700 },
  { date: "2024-09-30", revenue: 8100, expenses: 6000 },
  { date: "2024-10-07", revenue: 7800, expenses: 5900 },
  { date: "2024-10-14", revenue: 8300, expenses: 6200 },
  { date: "2024-10-21", revenue: 8000, expenses: 6100 },
  { date: "2024-10-28", revenue: 8500, expenses: 6400 },
  { date: "2024-11-04", revenue: 8200, expenses: 6300 },
  { date: "2024-11-11", revenue: 8700, expenses: 6600 },
  { date: "2024-11-18", revenue: 8400, expenses: 6500 },
  { date: "2024-11-25", revenue: 8900, expenses: 6800 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-11-25");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 space-y-2 sm:space-y-0 border-b py-4 sm:py-5">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-base sm:text-lg">Revenue Overview</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Showing revenue and expenses comparison
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-full sm:w-[160px] rounded-lg text-sm"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] sm:h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeOpacity={0.1} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillExpenses)"
              stroke="var(--color-expenses)"
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
