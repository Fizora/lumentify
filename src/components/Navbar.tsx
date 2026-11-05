"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtonLink, SecondaryButtonLink } from "./ui/Button";
import Image from "next/image";
import { LuMenu, LuX, LuSparkles, LuArrowRight } from "react-icons/lu";
import { navItems } from "@/components/constant/navigation";

const CTA_HREF = "/start-project";
const MAIL_HREF = "mailto:info@lexentify.com";

// Saklar utama: Ubah ke `false` jika ingin menonaktifkan banner secara permanen
const ENABLE_ANNOUNCEMENT_BANNER = true;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true); // State untuk tombol close (X)
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Konfigurasi Banner Promo / Pengumuman
  const bannerMessage =
    "🚀 Special Offer: Get 1 free month of Core Tech & Care maintenance on your first project build!";
  const bannerLinkText = "Claim Offer";
  const bannerLinkHref = "/pricing";

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 bg-white border-b border-zinc-200"
    >
      {/* ===== ANNOUNCEMENT / PROMO BANNER (Dikontrol oleh ENABLE_ANNOUNCEMENT_BANNER) ===== */}
      {ENABLE_ANNOUNCEMENT_BANNER && (
        <AnimatePresence>
          {isBannerVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden bg-zinc-900 text-white text-xs md:text-sm px-4 py-2 flex items-center justify-between gap-4 relative z-50"
            >
              <div className="flex-1 text-center flex items-center justify-center gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 font-medium text-yellow-400">
                  <LuSparkles size={14} /> Announcement:
                </span>
                <span>{bannerMessage}</span>
                {bannerLinkHref && (
                  <Link
                    href={bannerLinkHref}
                    className="underline hover:text-yellow-300 font-medium transition-colors ml-1 inline-flex items-center gap-1"
                  >
                    {bannerLinkText} <LuArrowRight size={14} />
                  </Link>
                )}
              </div>

              {/* Tombol Close di kanan */}
              <button
                onClick={() => setIsBannerVisible(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full shrink-0 focus:outline-none"
                aria-label="Close banner"
              >
                <LuX size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {/* ============================================================================== */}

      <div className="mx-auto max-w-300 py-2 px-3 md:px-0 flex items-center justify-between backdrop-blur-3xl">
        {/* Logo */}
        <div className="group px-2 rounded-full text-black flex items-center gap-2">
          <Link href="/" className="text-xl font-black flex items-center gap-2">
            <div className="bg-white group-hover:scale-105 border border-zinc-200 hover:border-black transition duration-300 p-2 rounded-full">
              <Image
                src="/logo.svg"
                alt="Lexentify logo"
                priority
                height={20}
                width={20}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-300 text-sm px-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="px-2 hidden md:flex items-center">
          <SecondaryButtonLink
            href={MAIL_HREF}
            className="text-sm font-medium rounded-full mr-2"
          >
            Contact Us
          </SecondaryButtonLink>
          <PrimaryButtonLink
            href={CTA_HREF}
            className="text-sm font-medium rounded-full"
          >
            Start Project
          </PrimaryButtonLink>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-full relative z-50 p-2 text-black hover:text-gray-600 transition-colors flex items-center justify-center mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-0 z-40 bg-black/10"
              onClick={closeMenu}
            />
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-white overflow-hidden pb-8 border-b border-zinc-200 z-40 shadow-lg"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-sm py-2 text-gray-700 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 flex flex-col sm:flex-row gap-2 border-t border-zinc-100">
                  <SecondaryButtonLink
                    href={MAIL_HREF}
                    className="text-sm font-medium rounded-full text-center py-2"
                  >
                    Contact Us
                  </SecondaryButtonLink>
                  <PrimaryButtonLink
                    href={CTA_HREF}
                    className="text-sm font-medium rounded-full text-center py-2"
                  >
                    Start Project
                  </PrimaryButtonLink>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
