import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileCard() {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden">
      <CardContent className="flex flex-1 flex-col p-3 sm:p-4 xl:p-6">
        <div className="flex flex-1 flex-col items-center justify-between space-y-3 sm:space-y-4 xl:space-y-6">
          {/* Profile Picture */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 xl:h-32 xl:w-32 overflow-hidden rounded-full border-2 border-border shrink-0">
            <Image
              src="/yoursandeshshrestha.png"
              alt="Sandesh Shrestha"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name */}
          <div className="text-center w-full min-w-0">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold truncate">Sandesh Shrestha</h2>
            <p className="text-[10px] sm:text-xs xl:text-sm text-muted-foreground truncate">@yoursandeshdev</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 xl:gap-4 w-full sm:w-auto">
            <Link
              href="https://github.com/yoursandeshshrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-border px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 transition-colors hover:bg-accent min-w-0"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 xl:h-5 xl:w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-[10px] sm:text-xs xl:text-sm truncate">GitHub</span>
            </Link>
            <Link
              href="https://x.com/yoursandeshdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-border px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 transition-colors hover:bg-accent min-w-0"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 xl:h-5 xl:w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-[10px] sm:text-xs xl:text-sm truncate">Twitter</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-border" />

          {/* Payment Information */}
          <div className="w-full space-y-2 sm:space-y-2.5 xl:space-y-3 min-w-0">
            <h3 className="text-center text-[10px] sm:text-xs xl:text-sm font-medium text-muted-foreground">
              Support Me
            </h3>

            {/* UPI */}
            <div className="rounded-lg border border-border p-1.5 sm:p-2 xl:p-3 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] sm:text-[10px] xl:text-xs text-muted-foreground">UPI</p>
                  <p className="font-mono text-[10px] sm:text-xs xl:text-sm break-all">yoursandesh@ybl</p>
                </div>
                <div className="shrink-0">
                  <Image
                    src="/phonepe.svg"
                    alt="PhonePe"
                    width={40}
                    height={40}
                    className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
                  />
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div className="rounded-lg border border-border p-1.5 sm:p-2 xl:p-3 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] sm:text-[10px] xl:text-xs text-muted-foreground">PayPal</p>
                  <p className="font-mono text-[10px] sm:text-xs xl:text-sm break-all">yoursandeshshrestha@gmail.com</p>
                </div>
                <div className="shrink-0">
                  <Image
                    src="/paypal.svg"
                    alt="PayPal"
                    width={40}
                    height={40}
                    className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
