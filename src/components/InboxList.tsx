"use client";

import { useState } from "react";
import {
  LuMessageSquare,
  LuReceipt,
  LuFolderOpen,
  LuBox,
  LuServer,
  LuCheck,
} from "react-icons/lu";

type NotifType = "chat" | "invoice" | "document" | "project" | "hosting";

type NotifItem = {
  id: number;
  type: NotifType;
  title: string;
  detail: string;
  time: string;
  read: boolean;
};

const typeMeta: Record<
  NotifType,
  { icon: typeof LuMessageSquare; className: string }
> = {
  chat: { icon: LuMessageSquare, className: "bg-blue-50 text-blue-600" },
  invoice: { icon: LuReceipt, className: "bg-amber-50 text-amber-600" },
  document: { icon: LuFolderOpen, className: "bg-purple-50 text-purple-600" },
  project: { icon: LuBox, className: "bg-zinc-100 text-zinc-600" },
  hosting: { icon: LuServer, className: "bg-red-50 text-red-600" },
};

// Dummy — replace with real notification records from the database
const initialNotifs: NotifItem[] = [
  {
    id: 1,
    type: "invoice",
    title: "New invoice issued",
    detail: "INV-1041 for $199 is now due on 8 Sep 2026.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "chat",
    title: "New message from Lumentify Team",
    detail: "\"Sure thing, we'll update it and let you know once it's done.\"",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "project",
    title: "Project stage updated",
    detail: "Your project moved from Design to Development.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "document",
    title: "Document awaiting your signature",
    detail: "Statement of Work — Local Dominance Add-on needs review.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    type: "hosting",
    title: "Hosting renewal coming up",
    detail: "Your hosting renews in 42 days — no action needed yet.",
    time: "5 days ago",
    read: true,
  },
];

const InboxList = () => {
  const [notifs, setNotifs] = useState<NotifItem[]>(initialNotifs);
  const unreadCount = notifs.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markOneRead = (id: number) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-zinc-500">
          {unreadCount > 0 ? `${unreadCount} unread` : "All caught up"}
        </p>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
          >
            <LuCheck size={14} />
            Mark all as read
          </button>
        )}
      </div>

      <div className="border border-zinc-200 rounded-lg divide-y divide-zinc-100">
        {notifs.map((notif) => {
          const { icon: Icon, className } = typeMeta[notif.type];
          return (
            <button
              key={notif.id}
              onClick={() => markOneRead(notif.id)}
              className={`w-full flex items-start gap-3 p-4 text-left transition-colors duration-200 ${
                notif.read
                  ? "bg-white hover:bg-zinc-50"
                  : "bg-zinc-50 hover:bg-zinc-100"
              }`}
            >
              <span className={`shrink-0 p-2 rounded-full ${className}`}>
                <Icon size={16} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={`text-sm truncate ${
                      notif.read
                        ? "text-zinc-700"
                        : "font-semibold text-zinc-900"
                    }`}
                  >
                    {notif.title}
                  </p>
                  <span className="text-[10px] text-zinc-400 shrink-0">
                    {notif.time}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                  {notif.detail}
                </p>
              </div>
              {!notif.read && (
                <span className="shrink-0 w-2 h-2 rounded-full bg-zinc-900 mt-1.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InboxList;
