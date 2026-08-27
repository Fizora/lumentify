import { motion } from "motion/react";
import Link from "next/link";

// interface
interface buttonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset"; // diperbaiki
  onClick?: () => void; // ditambahkan
  disabled?: boolean;
}

interface buttonLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
}

interface buttonGrid {
  children: React.ReactNode;
  className?: string;
}

// Button Event Components
export const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} px-6 py-1.5 font-semibold bg-zinc-900 hover:bg-zinc-800 transition duration-300 text-white border border-zinc-900 hover:shadow-xl text-center transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} px-6 py-1.5 font-semibold bg-gray-50 hover:bg-gray-200 transition duration-300 text-black border border-gray-300 text-center disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

// Button Link Components
export const PrimaryButtonLink = ({
  children,
  className = "",
  href,
  target,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      className={`${className} rounded-md px-6 py-1.5 font-semibold bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-800 transition duration-300 text-white border border-zinc-900 hover:shadow-xl text-center transform active:scale-95`}
      target={target}
    >
      {children}
    </Link>
  );
};

export const SecondaryButtonLink = ({
  children,
  className = "",
  href,
  target,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      className={`${className} rounded-md px-6 py-1.5 font-semibold bg-gray-50 hover:bg-gray-200 transition duration-300 text-black border border-gray-300 text-center `}
      target={target}
    >
      {children}
    </Link>
  );
};

export const ButtonGrid = ({ children, className = "" }: buttonGrid) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row items-center gap-3 py-3 min-h-10`}
    >
      {children}
    </div>
  );
};
