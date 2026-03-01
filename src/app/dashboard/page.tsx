"use client";

import * as React from "react";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { CommandPalette } from "@/components/features/command-palette";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { RevenueBreakdown } from "@/components/dashboard/revenue-breakdown";
import { TopCustomers } from "@/components/dashboard/top-customers";
import { ProfileCard } from "@/components/profile/profile-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  statsData,
  recentTransactions,
  revenueSourcesData,
  topCustomersData,
} from "@/lib/dashboard-data";
import { RecentTransaction } from "@/types/dashboard";

const getStatusColor = (status: RecentTransaction["status"]) => {
  switch (status) {
    case "completed":
      return "text-green-600 dark:text-green-500 bg-green-600/10";
    case "pending":
      return "text-yellow-600 dark:text-yellow-500 bg-yellow-600/10";
    case "failed":
      return "text-red-600 dark:text-red-500 bg-red-600/10";
  }
};

export default function DashboardPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<RecentTransaction>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "customer",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-xs sm:text-sm h-8 px-2 sm:px-3"
          >
            Customer
            <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium text-xs sm:text-sm">
          {row.getValue("customer")}
        </div>
      ),
    },
    {
      accessorKey: "method",
      header: () => <div className="text-xs sm:text-sm">Payment Method</div>,
      cell: ({ row }) => (
        <div className="capitalize text-xs sm:text-sm">
          {row.getValue("method")}
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-xs sm:text-sm h-8 px-2 sm:px-3"
          >
            Amount
            <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-semibold text-xs sm:text-sm">
          {row.getValue("amount")}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div className="text-xs sm:text-sm">Status</div>,
      cell: ({ row }) => {
        const status = row.getValue("status") as RecentTransaction["status"];
        return (
          <Badge
            className={cn(
              "capitalize text-[10px] sm:text-xs",
              getStatusColor(status)
            )}
            variant="outline"
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-xs sm:text-sm h-8 px-2 sm:px-3"
          >
            Date
            <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-xs sm:text-sm">{row.getValue("date")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const transaction = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(transaction.id)}
              >
                Copy transaction ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View transaction details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: recentTransactions,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <AppHeader />

          <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
            <div className="space-y-4 sm:space-y-6 w-full max-w-full">
              {/* Page Header */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Dashboard
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Welcome back! Here&apos;s what&apos;s happening with your
                  business today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {statsData.map((stat) => (
                  <StatCard key={stat.title} stat={stat} />
                ))}
              </div>

              {/* Revenue Chart - Full Width */}
              <div>
                <RevenueChart />
              </div>

              {/* Charts Grid - 2 Columns */}
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                <SalesChart />
                <ActivityChart />
              </div>

              {/* Revenue Breakdown and Top Customers - 2 Columns */}
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                <RevenueBreakdown sources={revenueSourcesData} />
                <TopCustomers customers={topCustomersData} />
              </div>

              {/* Profile Card and Recent Transactions */}
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
                <div className="lg:col-span-1 flex">
                  <ProfileCard />
                </div>
                <div className="lg:col-span-2 min-w-0 flex">
                  <Card className="p-3 sm:p-4 xl:p-6 w-full min-w-0 h-full flex flex-col">
                    <div className="mb-2">
                      <h3 className="text-sm sm:text-base xl:text-lg font-semibold">
                        Recent Transactions
                      </h3>
                      <p className="text-[10px] sm:text-xs xl:text-sm text-muted-foreground">
                        Latest payment transactions
                      </p>
                    </div>
                    <div className="w-full flex-1 flex flex-col min-w-0">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 py-2">
                        <Input
                          placeholder="Filter customers..."
                          value={
                            (table
                              .getColumn("customer")
                              ?.getFilterValue() as string) ?? ""
                          }
                          onChange={(event) =>
                            table
                              .getColumn("customer")
                              ?.setFilterValue(event.target.value)
                          }
                          className="w-full sm:max-w-sm text-xs sm:text-sm"
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full sm:w-auto sm:ml-auto text-xs sm:text-sm"
                            >
                              Columns{" "}
                              <ChevronDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {table
                              .getAllColumns()
                              .filter((column) => column.getCanHide())
                              .map((column) => {
                                return (
                                  <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                      column.toggleVisibility(!!value)
                                    }
                                  >
                                    {column.id}
                                  </DropdownMenuCheckboxItem>
                                );
                              })}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="rounded-md border w-full min-w-0 overflow-hidden flex-1 flex flex-col">
                        <div className="w-full overflow-x-auto flex-1">
                          <Table className="min-w-full">
                            <TableHeader>
                              {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                  {headerGroup.headers.map((header) => (
                                    <TableHead
                                      key={header.id}
                                      className="px-2 sm:px-3 h-8"
                                    >
                                      {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                          )}
                                    </TableHead>
                                  ))}
                                </TableRow>
                              ))}
                            </TableHeader>
                            <TableBody>
                              {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                  <TableRow
                                    key={row.id}
                                    data-state={
                                      row.getIsSelected() && "selected"
                                    }
                                  >
                                    {row.getVisibleCells().map((cell) => (
                                      <TableCell
                                        key={cell.id}
                                        className="px-2 sm:px-3 py-1.5"
                                      >
                                        {flexRender(
                                          cell.column.columnDef.cell,
                                          cell.getContext()
                                        )}
                                      </TableCell>
                                    ))}
                                  </TableRow>
                                ))
                              ) : (
                                <TableRow>
                                  <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                  >
                                    No results.
                                  </TableCell>
                                </TableRow>
                              )}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 pb-1">
                        <div className="text-[10px] sm:text-xs xl:text-sm text-muted-foreground">
                          {table.getFilteredSelectedRowModel().rows.length} of{" "}
                          {table.getFilteredRowModel().rows.length} row(s)
                          selected.
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="text-[10px] sm:text-xs xl:text-sm px-2 sm:px-3"
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="text-[10px] sm:text-xs xl:text-sm px-2 sm:px-3"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <CommandPalette />
    </SidebarProvider>
  );
}
