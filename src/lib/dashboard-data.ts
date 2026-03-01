import { DollarSign, TrendingUp, Users, ShoppingCart } from "lucide-react";
import {
  StatCard,
  RevenueChartData,
  SalesChartData,
  ActivityChartData,
  RecentActivity,
  TopProduct,
  RecentTransaction,
} from "@/types/dashboard";

export const statsData: StatCard[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Sales",
    value: "2,350",
    change: 15.3,
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Active Users",
    value: "12,234",
    change: 8.2,
    trend: "up",
    icon: Users,
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: -2.4,
    trend: "down",
    icon: TrendingUp,
  },
];

export const revenueData: RevenueChartData[] = [
  { name: "Jan", revenue: 4000, expenses: 2400, value: 0 },
  { name: "Feb", revenue: 3000, expenses: 1398, value: 0 },
  { name: "Mar", revenue: 2000, expenses: 9800, value: 0 },
  { name: "Apr", revenue: 2780, expenses: 3908, value: 0 },
  { name: "May", revenue: 1890, expenses: 4800, value: 0 },
  { name: "Jun", revenue: 2390, expenses: 3800, value: 0 },
  { name: "Jul", revenue: 3490, expenses: 4300, value: 0 },
];

export const salesData: SalesChartData[] = [
  { name: "Mon", sales: 120, value: 0 },
  { name: "Tue", sales: 210, value: 0 },
  { name: "Wed", sales: 180, value: 0 },
  { name: "Thu", sales: 290, value: 0 },
  { name: "Fri", sales: 350, value: 0 },
  { name: "Sat", sales: 420, value: 0 },
  { name: "Sun", sales: 310, value: 0 },
];

export const activityData: ActivityChartData[] = [
  { name: "Mon", users: 1200, value: 0 },
  { name: "Tue", users: 1900, value: 0 },
  { name: "Wed", users: 1600, value: 0 },
  { name: "Thu", users: 2100, value: 0 },
  { name: "Fri", users: 2400, value: 0 },
  { name: "Sat", users: 2800, value: 0 },
  { name: "Sun", users: 2200, value: 0 },
];

export const recentActivities: RecentActivity[] = [
  {
    id: "1",
    user: "Sarah Johnson",
    action: "Created a new project milestone",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: "2",
    user: "Michael Chen",
    action: "Uploaded quarterly financial report",
    time: "15 minutes ago",
    status: "success",
  },
  {
    id: "3",
    user: "Emily Rodriguez",
    action: "Payment processing in progress",
    time: "1 hour ago",
    status: "pending",
  },
  {
    id: "4",
    user: "James Wilson",
    action: "Failed to sync customer data",
    time: "2 hours ago",
    status: "failed",
  },
  {
    id: "5",
    user: "Lisa Anderson",
    action: "Completed monthly audit review",
    time: "3 hours ago",
    status: "success",
  },
  {
    id: "6",
    user: "David Park",
    action: "Updated user permissions",
    time: "4 hours ago",
    status: "success",
  },
  {
    id: "7",
    user: "Rachel Martinez",
    action: "Scheduled maintenance window",
    time: "5 hours ago",
    status: "pending",
  },
  {
    id: "8",
    user: "Tom Harrison",
    action: "Deployed new feature update",
    time: "6 hours ago",
    status: "success",
  },
];

export const topProducts: TopProduct[] = [
  {
    id: "1",
    name: "Premium Dashboard Pro",
    category: "Software",
    sales: 1247,
    revenue: "$124,700",
    trend: 23.5,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop",
  },
  {
    id: "2",
    name: "Analytics Suite",
    category: "SaaS",
    sales: 983,
    revenue: "$98,300",
    trend: 18.2,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop",
  },
  {
    id: "3",
    name: "Enterprise Package",
    category: "License",
    sales: 756,
    revenue: "$151,200",
    trend: 12.4,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=80&fit=crop",
  },
  {
    id: "4",
    name: "Mobile App Bundle",
    category: "Application",
    sales: 642,
    revenue: "$64,200",
    trend: -5.1,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=80&h=80&fit=crop",
  },
  {
    id: "5",
    name: "Cloud Storage Plus",
    category: "Service",
    sales: 534,
    revenue: "$53,400",
    trend: 8.7,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=80&h=80&fit=crop",
  },
  {
    id: "6",
    name: "API Integration Hub",
    category: "Platform",
    sales: 487,
    revenue: "$48,700",
    trend: 15.3,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop",
  },
  {
    id: "7",
    name: "Security Shield Pro",
    category: "Security",
    sales: 423,
    revenue: "$84,600",
    trend: 9.8,
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=80&h=80&fit=crop",
  },
];

export const recentTransactions: RecentTransaction[] = [
  {
    id: "1",
    customer: "Acme Corporation",
    amount: "$12,450.00",
    status: "completed",
    date: "Nov 27, 2025",
    method: "Credit Card",
  },
  {
    id: "2",
    customer: "Tech Innovations Ltd",
    amount: "$8,920.00",
    status: "completed",
    date: "Nov 27, 2025",
    method: "Wallet",
  },
  {
    id: "3",
    customer: "Global Solutions Inc",
    amount: "$15,730.00",
    status: "pending",
    date: "Nov 27, 2025",
    method: "Mobile",
  },
  {
    id: "4",
    customer: "Digital Dynamics",
    amount: "$6,340.00",
    status: "completed",
    date: "Nov 26, 2025",
    method: "Credit Card",
  },
  {
    id: "5",
    customer: "Smart Systems Co",
    amount: "$4,280.00",
    status: "failed",
    date: "Nov 26, 2025",
    method: "Wallet",
  },
  {
    id: "6",
    customer: "Innovation Hub",
    amount: "$9,870.00",
    status: "completed",
    date: "Nov 26, 2025",
    method: "Mobile",
  },
  {
    id: "7",
    customer: "Smart Systems Co",
    amount: "$6,340.00",
    status: "completed",
    date: "Nov 26, 2025",
    method: "Mobile",
  },
];

export const revenueSourcesData = [
  {
    id: "1",
    name: "Product Sales",
    amount: "$28,450",
    percentage: 63,
  },
  {
    id: "2",
    name: "Subscription Revenue",
    amount: "$9,870",
    percentage: 22,
  },
  {
    id: "3",
    name: "Service Fees",
    amount: "$4,320",
    percentage: 10,
  },
  {
    id: "4",
    name: "License Revenue",
    amount: "$2,591",
    percentage: 5,
  },
];

export const topCustomersData = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acme.com",
    spent: "$24,500",
    orders: 18,
  },
  {
    id: "2",
    name: "Tech Innovations Ltd",
    email: "info@techinnovations.com",
    spent: "$18,920",
    orders: 14,
  },
  {
    id: "3",
    name: "Global Solutions Inc",
    email: "sales@globalsolutions.com",
    spent: "$15,730",
    orders: 12,
  },
  {
    id: "4",
    name: "Digital Dynamics",
    email: "hello@digitaldynamics.com",
    spent: "$12,340",
    orders: 9,
  },
  {
    id: "5",
    name: "Innovation Hub",
    email: "contact@innovationhub.com",
    spent: "$9,870",
    orders: 7,
  },
  {
    id: "6",
    name: "Smart Systems Co",
    email: "info@smartsystems.com",
    spent: "$6,340",
    orders: 5,
  },
  {
    id: "7",
    name: "Smart Systems Co",
    email: "info@smartsystems.com",
    spent: "$6,340",
    orders: 5,
  },
];
