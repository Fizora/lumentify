"use client";

import { useState } from "react";
import { LuSend, LuPaperclip } from "react-icons/lu";

type Message = {
  id: number;
  sender: "client" | "team";
  text: string;
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "team",
    text: "Hi! Development on the Services page is done — feel free to check the preview link.",
    time: "10:12",
  },
  {
    id: 2,
    sender: "client",
    text: "Great, taking a look now. Could the booking button be changed to blue?",
    time: "10:20",
  },
  {
    id: 3,
    sender: "team",
    text: "Sure thing, we'll update it and let you know once it's done.",
    time: "10:22",
  },
];

const ChatPanel = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "client",
      text: input.trim(),
      time: new Date().toLocaleTimeString("en-AU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="border border-zinc-200 rounded-lg flex flex-col h-[70vh]">
      <div className="flex items-center gap-3 p-4 border-b border-zinc-200">
        <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm">
          L
        </div>
        <div>
          <p className="font-semibold text-zinc-900 text-sm">Lumentify Team</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Online
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "client"
                  ? "bg-zinc-900 text-white rounded-br-sm"
                  : "bg-zinc-100 text-zinc-800 rounded-bl-sm"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[10px] mt-1 text-zinc-400">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-3 border-t border-zinc-200">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors duration-300"
          aria-label="Attach a file"
        >
          <LuPaperclip size={18} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 bg-zinc-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        />
        <button
          type="button"
          onClick={handleSend}
          className="p-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-300"
          aria-label="Send message"
        >
          <LuSend size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
