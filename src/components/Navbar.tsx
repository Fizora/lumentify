"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtonLink } from "./ui/Button";

const Navbar = () => {
  const navList = [
    { name: "About", href: "/about" },
    { name: "Showcase", href: "/showcase" },
    { name: "Support", href: "/support" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 border-b-2 border-black shadow-[0_6px_0px_0px_rgba(0,0,0,0.8)]">
      <div className="mx-auto max-w-7xl px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-black">
          <Link
            href="/"
            className="text-xl font-black inline-block border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:bg-zinc-800 hover:text-white transition-all duration-300"
          >
            Lumentify.
          </Link>
        </h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navList.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="px-3 py-1 border-2 border-transparent hover:border-black hover:bg-yellow-400 hover:text-black transition-all duration-200 text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
          <PrimaryButtonLink href="/project" className="text-base font-medium">
            Start Project
          </PrimaryButtonLink>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 flex flex-col gap-1 p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:bg-zinc-800 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            className="block h-0.5 w-4 bg-black"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-black"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-black"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white overflow-hidden pb-8 border-b-2 border-black shadow-[0_6px_0px_0px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navList.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  onClick={closeMenu}
                  className="block px-3 py-2 border-2 border-transparent hover:border-black hover:bg-yellow-400 hover:text-black transition-all duration-200 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <PrimaryButtonLink
                  href="/project"
                  className="w-full text-center"
                >
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
