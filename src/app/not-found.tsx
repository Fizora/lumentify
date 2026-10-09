// src/app/not-found.tsx
import FuzzyText from "@/components/FuzzyText";
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
        <h2 className="text-4xl">404</h2>
      </FuzzyText>
      <p className="max-w-md text-muted-foreground">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <PrimaryButton>
        <Link href="/">Kembali ke beranda</Link>
      </PrimaryButton>
    </main>
  );
}
