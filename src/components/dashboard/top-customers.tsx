"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Customer {
  id: string;
  name: string;
  email: string;
  spent: string;
  orders: number;
}

interface TopCustomersProps {
  customers: Customer[];
}

export function TopCustomers({ customers }: TopCustomersProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="pt-0">
      <CardHeader className="border-b py-4">
        <CardTitle className="text-base sm:text-lg">Top Customers</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Highest spending customers this month</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5">
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9 shrink-0">
                <AvatarImage src="/yoursandeshshrestha.png" alt={customer.name} />
                <AvatarFallback className="text-xs bg-muted">
                  {getInitials(customer.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium truncate">{customer.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  <span className="hidden sm:inline">{customer.email} · </span>{customer.orders} orders
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs sm:text-sm font-semibold">{customer.spent}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
