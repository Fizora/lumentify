import { motion } from "motion/react";
import Link from "next/link";

// interface
interface buttonProps {
  children: React.ReactNode;
  className?: string;
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
export const PrimaryButton = ({ children, className }: buttonProps) => {
  return <button className={`${className}`}>{children}</button>;
};

export const SecondaryButton = ({ children, className }: buttonProps) => {
  return <button className={`${className}`}>{children}</button>;
};

// Button Link Components
export const PrimaryButtonLink = ({
  children,
  className,
  href,
}: buttonLinkProps) => {
  return (
    <Link
      href={`${href}`}
      className={`${className} px-10 py-1.5 font-semibold bg-zinc-900 hover:bg-zinc-800 transition duration-300 text-white  border border-zinc-900 hover:shadow-xl text-center transform active:scale-90`}
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
      href={`${href}`}
      className={`${className} px-10 py-1.5 font-semibold bg-gray-50 hover:bg-gray-200 transition duration-300 text-black  border border-gray-300 text-center`}
    >
      {children}
    </Link>
  );
};

export const ButtonGrid = ({ children, className }: buttonGrid) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row items-center gap-3 py-3 min-40`}
    >
      {children}
    </div>
  );
};
