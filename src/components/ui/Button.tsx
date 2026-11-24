import { motion } from "motion/react";
import Link from "next/link";
import React from "react"; // Pastikan React di-import untuk tipe data

// interface
interface buttonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // ✅ Tambahkan ini
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface buttonLinkProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // ✅ Tambahkan ini
  href: string;
  target?: string;
}

interface buttonGrid {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // ✅ Tambahkan ini (opsional, untuk jaga-jaga)
}

// Button Event Components
export const PrimaryButton = ({
  children,
  className = "",
  style, // ✅ Tangkap prop style
  type = "button",
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style} // ✅ Teruskan ke elemen button
      className={`${className} px-6 py-1.5 font-medium bg-white hover:bg-zinc-200 transition duration-300 text-black border border-white text-center transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  className = "",
  style, // ✅ Tangkap prop style
  type = "button",
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style} // ✅ Teruskan ke elemen button
      className={`${className} px-6 py-1.5 font-medium bg-transparent hover:bg-white/5 transition duration-300 text-white border border-[#555555] text-center disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

// Button Link Components
export const PrimaryButtonLink = ({
  children,
  className = "",
  style, // ✅ Tangkap prop style
  href,
  target,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      style={style} // ✅ Teruskan ke elemen Link
      className={`${className} px-6 py-1.5 font-medium bg-white hover:bg-zinc-200 transition duration-300 text-black border border-white text-center transform active:scale-95 text-sm`}
      target={target}
    >
      {children}
    </Link>
  );
};

export const SecondaryButtonLink = ({
  children,
  className = "",
  style, // ✅ Tangkap prop style
  href,
  target,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      style={style} // ✅ Teruskan ke elemen Link
      className={`${className} px-6 py-1.5 font-medium bg-transparent hover:bg-white/5 transition duration-300 text-white border border-[#555555] text-center text-sm`}
      target={target}
    >
      {children}
    </Link>
  );
};

export const ButtonGrid = ({ children, className = "", style }: buttonGrid) => {
  return (
    <div
      style={style} // ✅ Teruskan ke div
      className={`${className} flex flex-col md:flex-row items-center gap-3 py-3 min-h-10`}
    >
      {children}
    </div>
  );
};
