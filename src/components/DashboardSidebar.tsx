"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LuAppWindow,
  LuBox,
  LuChevronDown,
  LuFolderOpen,
  LuInbox,
  LuLayers,
  LuLogOut,
  LuMessageSquare,
  LuPanelLeft,
  LuReceipt,
  LuSettings,
  LuUser,
} from "react-icons/lu";
import { sidebarNavItems } from "@/components/constant/data";
import { LuText } from "react-icons/lu";
import { useSidebar } from "./DashboardLayout";

const ItemsNav = [
  { name: "Services", href: "/dashboard-panel/services", icon: LuLayers },
];

const userMenuItems = [
  { name: "Profile", href: "/dashboard-panel/profile", icon: LuUser },
  { name: "Settings", href: "/dashboard-panel/settings", icon: LuSettings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { isMobileOpen, isCollapsed, closeMobile, toggleCollapse } =
    useSidebar();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Tutup popup kalau klik di luar area-nya
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup popup otomatis kalau sidebar di-collapse (biar gak nyangkut kebuka)
  useEffect(() => {
    setIsUserMenuOpen(false);
  }, [isCollapsed]);

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    // TODO: sambungkan ke logic logout (clear session/token, redirect, dst)
    console.log("logout");
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full inset-0 w-60 bg-zinc-900 text-white pb-4 px-3 flex flex-col justify-between gap-3 border-r-2 border-zinc-700 z-50 transition-all duration-300
        ${isCollapsed ? "md:w-20" : "md:w-60"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div>
          <Link
            href="/dashboard-panel"
            onClick={closeMobile}
            className="flex items-center justify-center border border-zinc-700 gap-2 m-2 rounded-lg p-2"
          >
            <Image
              src="/logo.svg"
              alt="Lumentify logo"
              priority
              quality={80}
              height={20}
              width={20}
            />
            <h1 className={isCollapsed ? "md:hidden" : ""}>Lumentify</h1>
          </Link>

          <nav className="p-2 text-base flex flex-col gap-1">
            {sidebarNavItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  title={name}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 p-4 pr-8 py-1.5 rounded-md transition-colors duration-300 text-base ${
                    isActive ? "bg-zinc-800" : "hover:bg-zinc-800"
                  } ${isCollapsed ? "md:justify-center md:pr-4" : ""}`}
                >
                  <Icon size={18} />
                  <span className={isCollapsed ? "md:hidden" : ""}>{name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-between gap-2 px-4 pt-4 border-t border-zinc-700">
          {/* User button + popup */}
          <div className="relative flex-1" ref={userMenuRef}>
            {isUserMenuOpen && (
              <div
                role="menu"
                className={`absolute bottom-full mb-2 bg-white text-zinc-900 rounded-lg shadow-xl border border-zinc-200 py-1 w-48 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150 ${
                  isCollapsed ? "left-0" : "left-0 right-0 w-full"
                }`}
              >
                {userMenuItems.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      closeMobile();
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-100 transition-colors duration-150"
                  >
                    <Icon size={16} />
                    {name}
                  </Link>
                ))}
                <div className="my-1 border-t border-zinc-200" />
                <button
                  role="menuitem"
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left text-red-600 hover:bg-red-50 transition-colors duration-150"
                >
                  <LuLogOut size={16} />
                  Logout
                </button>
              </div>
            )}

            <button
              onClick={() => setIsUserMenuOpen((v) => !v)}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="menu"
              className={`flex items-center justify-between gap-2 p-3 py-2 w-full hover:bg-zinc-800 transition-colors duration-300 rounded-md ${
                isUserMenuOpen ? "bg-zinc-800" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="bg-white text-zinc-900 p-1 rounded-full shrink-0">
                  <LuUser size={15} />
                </span>
                <span
                  className={`uppercase text-sm ${isCollapsed ? "md:hidden" : ""}`}
                >
                  Christ
                </span>
              </span>
              <LuChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-200 ${
                  isCollapsed ? "md:hidden" : ""
                } ${isUserMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <button
            onClick={toggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden md:block rounded-md p-2.5 hover:bg-zinc-800 transition duration-300 shrink-0"
          >
            <LuPanelLeft
              size={18}
              className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
