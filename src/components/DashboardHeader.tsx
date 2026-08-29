"use client";

import Link from "next/link";
import { BiShare } from "react-icons/bi";
import { LuBell, LuInbox, LuMenu } from "react-icons/lu";
import { useSidebar } from "./DashboardLayout";

const DashboardHeader = () => {
  const { toggleMobile, isCollapsed } = useSidebar();

  return (
    <header
      className={`fixed top-0 right-0 left-0 h-14 z-30 bg-white px-4 py-1 flex items-center justify-between md:justify-end border-b border-zinc-200 transition-[left] duration-300 ${
        isCollapsed ? "md:left-20" : "md:left-60"
      }`}
    >
      <button
        onClick={toggleMobile}
        aria-label="Open menu"
        className="md:hidden p-3 rounded-full hover:bg-zinc-200 transition-colors duration-300"
      >
        <LuMenu size={22} />
      </button>

      <div className="flex items-center gap-2 sm:gap-4 text-base">
        {/* <Link
          href="/dashboard-panel/notification"
          aria-label="Inbox"
          className="flex items-center gap-2 p-3 rounded-full hover:bg-zinc-200 transition-colors duration-300"
        >
          <LuBell size={22} />
        </Link> */}

        {/* <button
          type="button"
          className="flex items-center gap-2 bg-zinc-900 text-white rounded-md p-2 px-4 font-bold hover:bg-zinc-800 transition-colors duration-300"
        >
          <BiShare className="-scale-x-100" size={18} />
          <span className="hidden sm:inline">Share</span>
        </button> */}
      </div>
    </header>
  );
};

export default DashboardHeader;
