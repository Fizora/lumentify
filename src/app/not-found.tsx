// src/app/not-found.tsx
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white w-full flex flex-col">
      <div className="border-b w-full">
        <div
          className="bg-white text-center mx-auto max-w-7xl w-full border-x flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
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
          <div className="space-y-4 max-w-lg mx-auto">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-900">
              404
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="pt-2">
              <PrimaryButton className="rounded-lg">
                <Link href="/" className="inline-block">
                  Return to Home
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
