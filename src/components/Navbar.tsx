"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtonLink } from "./ui/Button"; // if you use it later
import Image from "next/image";

const Navbar = () => {
  const navList = [
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Showcase", href: "/showcase" },
    { name: "Support", href: "/support" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50">
      <div className="mx-auto max-w-7xl px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-black group">
          <Link href="/" className="text-xl font-black flex items-center gap-2">
            <div className="bg-white group-hover:transform group-hover:scale-105 border border-zinc-200 group-hover:shadow-xl group-hover:shadow-zinc-300 transition duration-300 p-2 rounded shadow-lg">
              <Image
                src={"/logo.svg"}
                alt=""
                height={20}
                width={20}
                className=""
              />
            </div>
            Lumentify.
          </Link>
        </h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 ">
          {navList.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="hover:text-zinc-900 transition-colors duration-300 text-base"
            >
              {item.name}
            </Link>
          ))}
          <PrimaryButtonLink
            href="https://wa.me/6285235086814"
            className="text-base font-medium"
          >
            Start Project
          </PrimaryButtonLink>
        </nav>

        {/* Hamburger button (visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 flex flex-col gap-1 p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {/* Simple animated hamburger icon */}
          <motion.span
            className="block h-0.5 w-4 bg-gray-500"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-gray-500"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-gray-500"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white overflow-hidden pb-8 border-b border-zinc-200"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navList.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  onClick={closeMenu} // close on click
                  className="block py-2  hover:text-zinc-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {/* Example CTA button – remove if not needed */}
              <div className="pt-2">
                <PrimaryButtonLink href="https://wa.me/6285235086814">
                  Start Project
                </PrimaryButtonLink>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
