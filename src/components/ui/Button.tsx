import { motion } from "motion/react";
import Link from "next/link";

// interface
interface buttonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

interface buttonLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

interface buttonGrid {
  children: React.ReactNode;
  className?: string;
}

// Button Event Components
export const PrimaryButton = ({
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
}: buttonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${className} 
        px-4 py-2 font-semibold 
        bg-yellow-400 hover:bg-red-600 
        text-black hover:text-white
        transition duration-300 
        border border-zinc-900 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] 
        text-center 
        transform active:scale-90
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
}: buttonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${className} 
        px-4 py-2 font-semibold 
        bg-white hover:bg-blue-600 
        text-black hover:text-white
        transition duration-300 
        border border-zinc-900 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] 
        text-center 
        transform active:scale-90
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

// Button Link Components
export const PrimaryButtonLink = ({
  children,
  className,
  href,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      className={`
        ${className} 
        px-4 py-2 font-semibold 
        bg-yellow-400 hover:bg-red-600 
        text-black hover:text-white
        transition duration-300 
        border border-zinc-900 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] 
        text-center 
        transform active:scale-90
      `}
    >
      {children}
    </Link>
  );
};

export const SecondaryButtonLink = ({
  children,
  className,
  href,
}: buttonLinkProps) => {
  return (
    <Link
      href={href}
      className={`
        ${className} 
        px-4 py-2 font-semibold 
        bg-white hover:bg-blue-600 
        text-black hover:text-white
        transition duration-300 
        border border-zinc-900 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] 
        text-center 
        transform active:scale-90
      `}
    >
      {children}
    </Link>
  );
};

export const ButtonGrid = ({ children, className }: buttonGrid) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row items-center gap-3 py-3 min-h-40`}
    >
      {children}
    </div>
  );
};
