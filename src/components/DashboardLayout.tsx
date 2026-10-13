"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import PromoBanner from "./PromoBanner";

type SidebarContextType = {
  isMobileOpen: boolean;
  isCollapsed: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
  toggleCollapse: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within DashboardLayout");
  }
  return ctx;
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const value: SidebarContextType = {
    isMobileOpen,
    isCollapsed,
    toggleMobile: () => setIsMobileOpen((v) => !v),
    closeMobile: () => setIsMobileOpen(false),
    toggleCollapse: () => setIsCollapsed((v) => !v),
  };

  return (
    <SidebarContext.Provider value={value}>
      <div className="flex w-full">
        <DashboardSidebar />
        <main
          className={`flex flex-col w-full min-h-screen pt-14 transition-[margin] duration-300 ${
            isCollapsed ? "md:ml-20" : "md:ml-60"
          }`}
        >
          <DashboardHeader />
          <div className="p-4 sm:p-6 md:p-10">
            <PromoBanner />
            {children}
          </div>
        </main>
      </div>
    </SidebarContext.Provider>
  );
};

export default DashboardLayout;
