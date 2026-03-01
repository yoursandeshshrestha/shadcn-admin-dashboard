export interface StatCard {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: React.ComponentType<{ className?: string }>;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface RevenueChartData extends ChartDataPoint {
  revenue: number;
  expenses: number;
}

export interface SalesChartData extends ChartDataPoint {
  sales: number;
}

export interface ActivityChartData extends ChartDataPoint {
  users: number;
}

export interface RecentActivity {
  id: string;
  user: string;
  action: string;
  time: string;
  status: "success" | "pending" | "failed";
}

export interface TopProduct {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: string;
  trend: number;
  image: string;
}

export interface RecentTransaction {
  id: string;
  customer: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  date: string;
  method: string;
}
