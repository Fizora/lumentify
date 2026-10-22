"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtonLink, SecondaryButtonLink } from "./ui/Button";
import Image from "next/image";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

type NavLink = { name: string; href: string; type?: undefined };
type NavDropdown = {
  name: string;
  type: "dropdown";
  categories: { title: string; items: { name: string; href: string }[] }[];
};
type NavItem = NavLink | NavDropdown;

// Saklar tunggal untuk nonaktifkan "Services" — set true lagi kapan pun untuk mengaktifkan
const SERVICES_ENABLED = false;

const navItems: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Showcase", href: "/showcase" },
  { name: "Support", href: "/support" },
  { name: "Warranty", href: "/support/warranty" },
  { name: "Help center", href: "/support/help-center" },

  {
    name: "Services",
    type: "dropdown",
    categories: [
      {
        title: "Support",
        items: [
          { name: "Support", href: "/support" },
          { name: "Help Center", href: "/support/help-center" },
          { name: "Warranty", href: "/support/warranty" },
        ],
      },
      {
        title: "Services",
        items: [
          { name: "Web Development", href: "/services/web-development" },
          { name: "Web Maintenance", href: "/services/web-maintenance" },
          { name: "SEO", href: "/services/seo" },
        ],
      },
      {
        title: "Legal",
        items: [
          { name: "Work Flow", href: "/legal/work-flow" },
          { name: "Terms & Condition", href: "/legal/terms" },
          { name: "Privacy", href: "/legal/privacy" },
        ],
      },
    ],
  },

  { name: "Blog", href: "/blog" },
];

// Dipakai untuk render (desktop bar & mobile menu) — Services otomatis hilang saat dinonaktifkan
const visibleNavItems = navItems.filter(
  (item) => SERVICES_ENABLED || item.name !== "Services",
);

const CTA_HREF = "/auth/signin"; // single source of truth — was WA link on mobile, /auth/signup on desktop

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Recalculate on mount AND on resize, so the dropdown never drifts out of place
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const servicesItem = SERVICES_ENABLED
    ? navItems.find((item): item is NavDropdown => item.type === "dropdown")
    : undefined;

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-3xl bg-white border-b"
    >
      <div className="mx-auto max-w-300 py-2 flex items-center justify-between ">
        {/* Logo */}
        <div className="group px-2 rounded-full text-black flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-black flex items-center gap-2 "
          >
            <div className="bg-white group-hover:scale-105 border border-zinc-200 transition duration-300 p-2 rounded-full">
              <Image
                src="/logo.svg"
                alt="Lexentify logo"
                priority
                height={20}
                width={20}
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2 ">
            {visibleNavItems.map((item, index) => {
              if (item.type !== "dropdown") {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-950 transition-colors duration-300 text-xs px-2"
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
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-950  transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 rounded px-1"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen((v) => !v)}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      <LuChevronDown size={16} />
                    </motion.span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Desktop navigation */}

        <div className="px-2 hidden md:flex">
          <SecondaryButtonLink
            href={CTA_HREF}
            className="text-xs font-medium rounded-full mr-2"
          >
            Login
          </SecondaryButtonLink>
          <PrimaryButtonLink
            href={CTA_HREF}
            className="text-xs font-medium rounded-full"
          >
            Create Account
          </PrimaryButtonLink>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-full relative z-50 p-2 text-black hover:text-gray-600 transition-colors flex items-center justify-center mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Desktop dropdown — otomatis tidak pernah render saat SERVICES_ENABLED = false */}
      {servicesItem && (
        <div className="hidden md:block">
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 right-0 z-40"
                style={{ top: headerHeight }}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="container bg-white backdrop-blur-xl rounded-lg mx-auto px-6 py-7">
                  <div className="grid grid-cols-3 gap-8">
                    {servicesItem.categories.map((category, catIdx) => (
                      <div key={catIdx} className="">
                        <h4 className="text-xs font-semibold text-gray-black uppercase tracking-wider mb-3 pb-2">
                          {category.title}
                        </h4>
                        <div className="flex flex-col gap-0.5">
                          {category.items.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              href={child.href}
                              onClick={closeMenu}
                              className="w-max text-sm text-zinc-700 hover:text-gray-950  px-3 py-1.5 rounded transition-all duration-150 -mx-3"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop so the menu doesn't just float over page content */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-0 z-40"
              onClick={closeMenu}
            />
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute mb-2 top-full left-0 w-full bg-white overflow-hidden pb-8 border-b border-zinc-200 z-40"
            >
              <div className="flex flex-col gap-2 px-4 py-4">
                {visibleNavItems.map((item, index) => {
                  if (item.type !== "dropdown") {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-sm py-2 text-gray-700 transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  return (
                    <div key={index} className="py-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-white transition-colors"
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
                            className="pl-4 mt-2 flex flex-col gap-3 overflow-hidden"
                          >
                            {item.categories.map((category, catIdx) => (
                              <div key={catIdx}>
                                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                                  {category.title}
                                </h4>
                                {category.items.map((child, childIdx) => (
                                  <Link
                                    key={childIdx}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="block py-1.5 text-sm text-zinc-100 transition-colors pl-2"
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

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <SecondaryButtonLink
                    href={CTA_HREF}
                    className="text-sm font-medium rounded-full text-center"
                  >
                    Login
                  </SecondaryButtonLink>
                  <PrimaryButtonLink
                    href={CTA_HREF}
                    className="text-sm font-medium rounded-full text-center"
                  >
                    Create Account
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
