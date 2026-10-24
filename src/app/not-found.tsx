// src/app/not-found.tsx
import FuzzyText from "@/components/FuzzyText";
import Skathes from "@/components/Skathes";
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen">
      <Skathes />
      <div className="border-b">
        <div
          className="bg-white text-center mx-auto max-w-300 border-x flex min-h-[77vh] flex-col items-center justify-center "
          style={{
            backgroundColor: "#fafafa",
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            #f0f0f0,
            #f0f0f0 1px,
            #fafafa 1px,
            #fafafa 6px
          )`,
          }}
        >
          <h2 className="text-6xl">404</h2>
          <p className="max-w-md text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <PrimaryButton className="mt-4 rounded-lg">
            <Link href="/">Return to Home</Link>
          </PrimaryButton>
        </div>
      </div>
      <Skathes />
    </main>
  );
}
