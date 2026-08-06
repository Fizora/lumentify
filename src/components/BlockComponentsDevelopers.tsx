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

  // No localStorage / sessionStorage here on purpose — the gate lives only
  // in component state, so any full page reload resets it and asks again.
  if (unlocked) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black px-4 h-screen">
      <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
        <div className="space-y-1.5">
          <span className="inline-block text-xs font-semibold tracking-widest  uppercase text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
            Under development
          </span>
          <h1 className="text-lg font-semibold text-white">
            This site isn&apos;t live yet
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
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
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-[15px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
            />
            {error && (
              <p className="text-xs text-red-400 mt-1.5">
                That password isn&apos;t right — try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black text-[15px] font-semibold py-2.5 hover:bg-zinc-200 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlockComponentsDevelopers;
