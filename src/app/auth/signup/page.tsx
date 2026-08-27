"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import {
  LuMail,
  LuLock,
  LuUser,
  LuArrowRight,
  LuEye,
  LuEyeOff,
} from "react-icons/lu";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-8">
      <div className="w-full max-w-sm bg-white border border-zinc-300 p-6 rounded-md">
        <div className="text-center space-y-1 mb-6">
          <h1 className="text-2xl font-bold text-black">Create Account</h1>
          <p className="text-zinc-500 text-sm">
            Start building your site today
          </p>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={() => console.log("Continue with Google")}
          className="w-full flex items-center justify-center gap-2.5 bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-700 font-medium py-2.5 px-4 shadow-sm hover:shadow transition-all duration-200 text-sm rounded-md"
        >
          <FcGoogle className="w-4 h-4" />
          Continue with Google
        </button>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-zinc-400">or</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-zinc-700 mb-1"
            >
              Full name
            </label>
            <div className="relative">
              <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition rounded-md"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-zinc-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition rounded-md"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-zinc-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={8}
                className="w-full pl-9 pr-9 py-2 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
              >
                {showPassword ? (
                  <LuEyeOff className="w-3.5 h-3.5" />
                ) : (
                  <LuEye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <p className="text-[10px] text-zinc-400 mt-1">
              Minimum 8 characters
            </p>
          </div>

          <PrimaryButton
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-sm py-2.5 rounded-md"
          >
            Create Account
            <LuArrowRight className="w-3.5 h-3.5" />
          </PrimaryButton>
        </form>

        <p className="mt-5 text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-zinc-900 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>

        <div className="mt-5 pt-4 border-t border-zinc-100 text-center">
          <p className="text-[10px] text-zinc-400 leading-relaxed">
            By signing up, you agree to our{" "}
            <Link href="/legal/terms" className="underline hover:text-zinc-600">
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/privacy"
              className="underline hover:text-zinc-600"
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
