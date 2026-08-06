"use client";

import { useState } from "react";

const CORRECT_PASSWORD = "010363";

const BlockComponentsDevelopers = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black px-4 h-screen">
      <div
        className="
        w-full max-w-sm
        bg-white
        border-2 border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
        p-6
        space-y-4
        transition-all duration-300
        hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
      "
      >
        <div className="space-y-1.5">
          <span
            className="
            inline-block text-xs font-bold tracking-widest uppercase
            text-black bg-yellow-400
            px-3 py-1
            border-2 border-black
            shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
          "
          >
            Under development
          </span>
          <h1 className="text-lg font-bold text-black">
            This site isn&apos;t live yet
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Only developers can access this page right now. Enter the password
            to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Password"
              className="
                w-full
                border-2 border-black
                shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
                px-3.5 py-2.5
                text-[15px] text-black
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
                transition-all duration-200
                hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]
              "
            />
            {error && (
              <p className="text-xs text-red-600 mt-1.5 font-semibold border-l-4 border-red-600 pl-2">
                That password isn&apos;t right — try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-yellow-400 hover:bg-zinc-800
              text-black hover:text-white
              border-2 border-black
              shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
              hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
              transition-all duration-300
              text-[15px] font-bold
              py-2.5
              active:scale-95
            "
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlockComponentsDevelopers;
