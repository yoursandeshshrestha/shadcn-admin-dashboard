import Link from "next/link";
import { ProfileCard } from "@/components/profile/profile-card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <ProfileCard />
        <Link
          href="/dashboard"
          className="block w-full text-center text-sm font-medium underline decoration-2 underline-offset-4 transition-colors hover:text-muted-foreground"
        >
          Maybe Later, For Now Take Me to Dashboard
        </Link>
      </div>
    </div>
  );
}
