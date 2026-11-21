// src/app/not-found.tsx
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";
import { notFoundContent } from "@/const/page/NotFound";
import { C } from "@/components/ui/Swiss";

export default function NotFound() {
  return (
    <main className="flex w-full flex-col" style={{ backgroundColor: C.BG }}>
      <div className="w-full border-b" style={{ borderColor: C.RULE }}>
        <div
          className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1600px] flex-col items-center justify-center border-x px-4 py-16 text-center sm:px-6 lg:px-8"
          style={{
            backgroundColor: C.BG,
            borderColor: C.RULE,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #080808,
              #080808 1px,
              #000000 1px,
              #000000 6px
            )`,
          }}
        >
          <div className="space-y-4 max-w-lg mx-auto">
            <h2 className="text-6xl font-bold tracking-tight text-white">
              {notFoundContent.title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              {notFoundContent.description}
            </p>
            <div className="pt-2">
              <PrimaryButton className="rounded-lg">
                <Link href={notFoundContent.href} className="inline-block">
                  {notFoundContent.action}
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
