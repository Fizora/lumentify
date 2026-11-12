"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtonLink, SecondaryButtonLink } from "./ui/Button";
import Image from "next/image";
import {
  LuMenu,
  LuX,
  LuSparkles,
  LuArrowRight,
  LuChevronDown,
} from "react-icons/lu";
import { navItems, NavDropdown } from "@/components/constant/navigation";

const CTA_HREF = "/start-project";
const MAIL_HREF = "mailto:info@lexentify.com";

// Saklar utama untuk Banner & Services
const ENABLE_ANNOUNCEMENT_BANNER = false;
const SERVICES_ENABLED = true; // Ubah ke false jika ingin menyembunyikan menu dropdown Services

const BANNER_STORAGE_KEY = "lexentify_banner_dismissed_until";
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false); // Default false sebelum dicek localStorage
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Periksa status banner dari localStorage saat komponen dimuat di client
  useEffect(() => {
    if (ENABLE_ANNOUNCEMENT_BANNER) {
      const dismissedUntil = localStorage.getItem(BANNER_STORAGE_KEY);
      const now = new Date().getTime();

      if (!dismissedUntil || now > parseInt(dismissedUntil, 10)) {
        // Jika belum pernah di-close atau sudah lewat 24 jam, tampilkan banner
        setIsBannerVisible(true);
      } else {
        setIsBannerVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isBannerVisible]);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    // Simpan batas waktu kedaluwarsa 24 jam ke depan
    const expireTime = new Date().getTime() + TWENTY_FOUR_HOURS;
    localStorage.setItem(BANNER_STORAGE_KEY, expireTime.toString());
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // Filter item navigasi berdasarkan saklar SERVICES_ENABLED
  const visibleNavItems = navItems.filter(
    (item) => SERVICES_ENABLED || item.name !== "Services",
  );

  const servicesItem = SERVICES_ENABLED
    ? navItems.find((item): item is NavDropdown => item.type === "dropdown")
    : undefined;

  // Konfigurasi Banner Promo / Pengumuman
  const bannerMessage =
    "Special Offer: Lock in exclusive end-of-year rates—valid throughout November & December before 2027!";
  const bannerLinkText = "Claim Offer";
  const bannerLinkHref = "/pricing";

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 bg-white border-b border-zinc-200"
    >
      {/* ===== ANNOUNCEMENT / PROMO BANNER ===== */}
      {ENABLE_ANNOUNCEMENT_BANNER && (
        <AnimatePresence>
          {isBannerVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden bg-zinc-900 text-white text-xs lg:text-sm px-4 py-3 flex items-center justify-between gap-4 relative z-50"
            >
              <div className="flex-1 text-center flex items-center justify-center gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 font-medium text-yellow-400">
                  <LuSparkles size={14} /> Announcement:
                </span>
                {bannerLinkHref && (
                  <Link href={bannerLinkHref} className="hover:underline ">
                    <span>{bannerMessage}</span>
                  </Link>
                )}
              </div>

              {/* Tombol Close di kanan dengan fungsi penyimpanan localStorage 24 jam */}
              <button
                onClick={handleCloseBanner}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full shrink-0 focus:outline-none"
                aria-label="Close banner"
              >
                <LuX size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {/* ======================================= */}

      <div className="mx-auto max-w-7xl py-2 px-3 md:px-0 flex items-center justify-between backdrop-blur-3xl">
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
            {visibleNavItems.map((item, index) => {
              if (item.type !== "dropdown") {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors duration-300 text-sm px-2"
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors duration-300 text-sm focus:outline-none rounded px-2 py-1"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen((v) => !v)}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      <LuChevronDown size={14} />
                    </motion.span>
                  </button>
                </div>
              );
            })}
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

      {/* Desktop Dropdown Panel */}
      {servicesItem && (
        <div className="hidden md:block">
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 right-0 z-40 bg-white border-b border-zinc shadow-sm"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {servicesItem.categories.map((category, catIdx) => (
                      <div key={catIdx}>
                        <h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-3 pb-2 border-b border-zinc-100">
                          {category.title}
                        </h4>
                        <div className="flex flex-col gap-1.5">
                          {category.items.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              href={child.href}
                              onClick={closeMenu}
                              className="text-sm hover:underline text-zinc-700 hover:text-black hover:bg-zinc-50 px-3 py-2 rounded-md transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

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
              className="md:hidden absolute top-full left-0 w-full bg-white overflow-hidden pb-8 border-b border-zinc-200 z-40 shadow-lg max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                {visibleNavItems.map((item, index) => {
                  if (item.type !== "dropdown") {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-sm py-2 text-gray-700 hover:text-black transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="py-2 border-y border-zinc-100 my-1"
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-zinc-900 font-medium py-1"
                        aria-expanded={isServicesOpen}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <LuChevronDown size={16} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 flex flex-col gap-3 overflow-hidden pb-2"
                          >
                            {item.categories.map((category, catIdx) => (
                              <div key={catIdx} className="space-y-1">
                                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                  {category.title}
                                </h4>
                                {category.items.map((child, childIdx) => (
                                  <Link
                                    key={childIdx}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="block py-1 text-sm text-zinc-600 hover:text-black transition-colors pl-2"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

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
