"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX, LuChevronDown, LuMail } from "react-icons/lu";
import { navItems, siteContent, type NavDropdown } from "@/const/data";
import { PrimaryButtonLink, SecondaryButtonLink } from "./ui/Button";

const ENABLE_ANNOUNCEMENT_BANNER = false;
const SERVICES_ENABLED = true;

// Dark Brutalist Palette
const BG = "#050505";
const INK = "#FFFFFF";
const MUTED = "#888888";
const BORDER = "#222222";
const PANEL = "#0000";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isBannerVisible]);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const visibleNavItems = navItems.filter(
    (item) =>
      SERVICES_ENABLED || item.name !== siteContent.navbar.servicesLabel,
  );

  const servicesItem = SERVICES_ENABLED
    ? navItems.find((item): item is NavDropdown => item.type === "dropdown")
    : undefined;

  const isActiveHref = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 flex flex-col bg-black border-b"
      style={{ backgroundColor: BG }}
    >
      {/* Top Info Bar */}
      <div
        className="hidden md:flex w-full justify-between items-center px-10 py-2 border-b text-[10px] tracking-widest uppercase bg-black"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>{siteContent.navbar.workHours}</span>
        </div>
        <a
          href={`mailto:${siteContent.businessEmail}`}
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <LuMail size={12} /> {siteContent.businessEmail}
        </a>
      </div>

      <div
        className="mx-auto w-full max-w-[1600px] border-x"
        style={{ borderColor: BORDER }}
      >
        <div className="flex items-center justify-between px-10 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span
              className="text-xl font-bold tracking-tighter uppercase"
              style={{ color: INK }}
            >
              {siteContent.brandName.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {visibleNavItems.map((item, index) => {
              if (item.type !== "dropdown") {
                const isActive = isActiveHref(item.href);
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group relative py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200"
                    style={{ color: isActive ? INK : MUTED }}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-px origin-left transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ backgroundColor: INK }}
                    />
                  </Link>
                );
              }

              const isServicesActive = pathname.startsWith("/services");
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="group relative flex items-center gap-1 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200"
                    style={{
                      color: isServicesOpen || isServicesActive ? INK : MUTED,
                    }}
                  >
                    {item.name}
                    <LuChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-px origin-left transition-transform duration-300 ${
                        isServicesOpen || isServicesActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ backgroundColor: INK }}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA (Kembali ke Awal) */}
          <div className="hidden md:flex items-center gap-3">
            <SecondaryButtonLink
              href={siteContent.navbar.contactHref}
              className="rounded-none! border px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 hover:border-white hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]"
              style={{
                color: INK,
                borderColor: BORDER,
                backgroundColor: "transparent",
              }}
            >
              {siteContent.navbar.contactAction}
            </SecondaryButtonLink>
            <PrimaryButtonLink
              href={siteContent.navbar.startHref}
              className="rounded-none! border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.22)]"
              style={{ backgroundColor: INK, color: BG, borderColor: INK }}
            >
              {siteContent.navbar.startAction}
            </PrimaryButtonLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2"
            style={{ color: INK }}
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Dropdown Panel */}
      {servicesItem && (
        <div className="hidden md:block absolute w-full top-full left-0">
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="border-b shadow-2xl"
                style={{ backgroundColor: BG, borderColor: BORDER }}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div
                  className="max-w-[1600px] mx-auto px-6 py-8 border-x"
                  style={{ borderColor: BORDER }}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {servicesItem.categories.map((category, catIdx) => (
                      <div key={catIdx}>
                        <h4
                          className="text-[10px] font-bold uppercase tracking-widest mb-4 pb-2 border-b"
                          style={{ color: MUTED, borderColor: BORDER }}
                        >
                          {category.title}
                        </h4>
                        <div className="flex flex-col gap-1">
                          {category.items.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              href={child.href}
                              onClick={closeMenu}
                              className="group relative border-l border-transparent py-2 pl-0 text-sm font-medium transition-all duration-200 hover:border-white hover:pl-3"
                              style={{
                                color: isActiveHref(child.href) ? INK : MUTED,
                              }}
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
              className="md:hidden fixed inset-0 top-0 z-40 bg-black/80 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-0 right-0 w-full h-screen border-l z-40 overflow-y-auto flex flex-col"
              style={{ backgroundColor: BG, borderColor: BORDER }}
            >
              <div className="px-6 py-24 flex flex-col gap-6">
                {visibleNavItems.map((item, index) => {
                  if (item.type !== "dropdown") {
                    const isActive = isActiveHref(item.href);
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                        className={`border-l-2 py-1 pl-0 text-3xl font-bold uppercase tracking-tighter transition-all duration-200 hover:border-white hover:pl-3 ${
                          isActive ? "border-white pl-3" : "border-transparent"
                        }`}
                        style={{ color: isActive ? INK : MUTED }}
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-3 py-4 border-y"
                      style={{ borderColor: BORDER }}
                    >
                      <span
                        className="text-3xl font-bold uppercase tracking-tighter"
                        style={{ color: INK }}
                      >
                        {item.name}
                      </span>
                      <div className="flex flex-col gap-4 pl-2 mt-2">
                        {item.categories.map((category, catIdx) => (
                          <div key={catIdx}>
                            <h4
                              className="text-[10px] font-bold uppercase tracking-widest mb-2"
                              style={{ color: MUTED }}
                            >
                              {category.title}
                            </h4>
                            <div className="flex flex-col gap-3">
                              {category.items.map((child, childIdx) => (
                                <Link
                                  key={childIdx}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="border-l border-transparent pl-0 text-sm font-medium transition-all duration-200 active:border-white active:pl-3"
                                  style={{
                                    color: isActiveHref(child.href)
                                      ? INK
                                      : MUTED,
                                  }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div
                  className="pt-8 mt-4 border-t flex flex-col gap-3"
                  style={{ borderColor: BORDER }}
                >
                  <Link
                    href={siteContent.navbar.contactHref}
                    className="border py-4 text-center text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:border-white hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]"
                    style={{ borderColor: BORDER, color: INK }}
                  >
                    {siteContent.navbar.mobileContactAction}
                  </Link>
                  <Link
                    href={siteContent.navbar.startHref}
                    className="border py-4 text-center text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.22)]"
                    style={{
                      backgroundColor: INK,
                      color: BG,
                      borderColor: INK,
                    }}
                  >
                    {siteContent.navbar.startAction}
                  </Link>
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
