import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Swiss system — satu sumber kebenaran untuk seluruh situs           */
/*  Hitam murni, satu typeface, grid 12 kolom, garis tipis sebagai     */
/*  struktur. Satu-satunya "blok putih" = elemen yang paling penting.  */
/* ------------------------------------------------------------------ */

export const C = {
  BG: "#000000",
  INK: "#FFFFFF",
  MUTED: "#8A8A8A",
  RULE: "#2A2A2A",
  RULE_HI: "#555555",
} as const;

const BORDER = "#222222";

type WithChildren = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Container = ({
  children,
  className = "",
  style,
}: WithChildren) => (
  <div
    className={`mx-auto box-border w-full max-w-[1600px] border-x px-5 md:px-10 ${className}`}
    style={{ borderColor: BORDER, ...style }}
  >
    {children}
  </div>
);

export const Label = ({ children, className = "" }: WithChildren) => (
  <span className={`text-sm ${className}`} style={{ color: C.MUTED }}>
    {children}
  </span>
);

/* Section dengan judul: label di kolom 1–3, judul di kolom 4–12 */
export const Section = ({
  id,
  label,
  title,
  intro,
  wide = false,
  compact = false,
  children,
}: {
  id?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  wide?: boolean;
  compact?: boolean;
  children?: ReactNode;
}) => (
  <section
    id={id}
    className={`flex items-center ${compact ? "border-b" : ""}`}
    style={{ borderColor: C.RULE, backgroundColor: C.BG, color: C.INK }}
  >
    <Container
      className={compact ? "py-12 md:py-16 lg:py-32" : "py-16 md:py-28"}
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Label>{label}</Label>
        </div>
        <div className="md:col-span-9">
          <h2 className="max-w-4xl text-balance text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {title}
          </h2>
          {intro && (
            <p
              className={`${compact ? "mt-4" : "mt-6"} max-w-xl text-base leading-relaxed md:text-lg`}
              style={{ color: C.MUTED }}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
      {children && (
        <div
          className={`${compact ? "mt-8 md:mt-10" : "mt-12 md:mt-20"} md:grid md:grid-cols-12 md:gap-x-6`}
        >
          <div
            className={wide ? "md:col-span-12" : "md:col-span-9 md:col-start-4"}
          >
            {children}
          </div>
        </div>
      )}
    </Container>
  </section>
);

/* Section tanpa judul besar — untuk halaman konten */
export const Block = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <section
    className=""
    style={{ borderColor: C.RULE, backgroundColor: C.BG, color: C.INK }}
  >
    <Container className="py-14 md:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Label>{label}</Label>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </Container>
  </section>
);

/* Hero untuk halaman dalam (h1) */
export const PageHero = ({
  label,
  title,
  intro,
  compact = false,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  compact?: boolean;
}) => (
  <header
    className={
      compact
        ? "pb-10 pt-32 md:pb-14 md:pt-40"
        : "pb-16 pt-32 md:pb-24 md:pt-44"
    }
    style={{ backgroundColor: C.BG, color: C.INK }}
  >
    <Container>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Label>{label}</Label>
        </div>
        <div className="md:col-span-9">
          <h1 className="text-balance text-[clamp(2.25rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            {title}
          </h1>
          {intro && (
            <p
              className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: C.MUTED }}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </Container>
  </header>
);

/* Baris daftar: judul kiri, isi kanan. `index` hanya untuk urutan nyata. */
export const Row = ({
  index,
  title,
  children,
}: {
  index?: string;
  title: ReactNode;
  children?: ReactNode;
}) => (
  <div
    className="grid grid-cols-12 gap-x-6 gap-y-3 border-t py-6 md:py-8"
    style={{ borderColor: C.RULE }}
  >
    {index && (
      <span
        className="col-span-2 pt-1 text-sm tabular-nums md:col-span-1"
        style={{ color: C.MUTED }}
      >
        {index}
      </span>
    )}
    <h3
      className={`text-lg font-medium tracking-tight md:text-xl ${
        index ? "col-span-10 md:col-span-4" : "col-span-12 md:col-span-5"
      }`}
    >
      {title}
    </h3>
    {children && (
      <div
        className={`space-y-4 text-[15px] leading-relaxed md:col-span-6 md:col-start-7 ${
          index ? "col-span-10 col-start-3" : "col-span-12"
        }`}
        style={{ color: C.MUTED }}
      >
        {children}
      </div>
    )}
  </div>
);

export const RowList = ({ children }: { children: ReactNode }) => (
  <div className="border-b" style={{ borderColor: C.RULE }}>
    {children}
  </div>
);

/* Tombol: putih solid = aksi utama, garis = sekunder, dark = di atas blok putih */
type Variant = "solid" | "line" | "dark";

const btnBase =
  "inline-flex items-center justify-between gap-8 border px-5 py-4 text-left text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "border-white bg-white text-black hover:bg-black hover:text-white",
  line: "border-[#555555] bg-transparent text-white hover:border-white",
  dark: "border-black bg-black text-white hover:bg-white hover:text-black",
};

export const buttonClass = (variant: Variant = "solid") =>
  `${btnBase} ${variants[variant]}`;

export const ButtonLink = ({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) => (
  <Link href={href} className={`${buttonClass(variant)} ${className}`}>
    {children}
  </Link>
);

/* Form */
export const inputClass =
  "w-full rounded-none border-0 border-b border-[#555555] bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-[#666666] focus:border-white focus:shadow-[0_1px_0_0_#fff]";

export const Field = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 block text-sm"
      style={{ color: C.MUTED }}
    >
      {label}
    </label>
    {children}
  </div>
);
