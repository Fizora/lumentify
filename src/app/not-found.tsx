// src/app/not-found.tsx
import FuzzyText from "@/components/FuzzyText";
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-6xl">404</h2>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <PrimaryButton>
        <Link href="/">Return to Home</Link>
      </PrimaryButton>
    </main>
  );
}
