"use client";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  LuArrowLeft,
  LuSend,
  LuCircleCheck,
  LuLoaderCircle,
  LuShieldCheck,
  LuChevronDown,
  LuCheck,
} from "react-icons/lu";
import { SecondaryButtonLink } from "@/components/ui/Button";

type ProjectFormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  package: string;
  suburbsCount: string;
  goals: string;
};

const initialFormState: ProjectFormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  package: "Essential",
  suburbsCount: "1-5 suburbs",
  goals: "",
};

const packageOptions = [
  { label: "Essential ($1,499) — 1 Landing Page", value: "Essential" },
  { label: "Pro ($2,499) — Up to 5 Custom Pages", value: "Pro" },
  { label: "Custom (from $4,599) — Multi-suburb Platform", value: "Custom" },
];

const suburbOptions = [
  { label: "1 - 5 Suburbs / Local Area", value: "1-5 suburbs" },
  { label: "6 - 15 Suburbs (Regional Coverage)", value: "6-15 suburbs" },
  { label: "Greater Metropolitan Area (Multi-branch)", value: "Greater Metro" },
];

function StartProjectContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ProjectFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  // State untuk mengontrol buka/tutup custom dropdown
  const [openPackage, setOpenPackage] = useState(false);
  const [openSuburb, setOpenSuburb] = useState(false);

  const packageRef = useRef<HTMLDivElement>(null);
  const suburbRef = useRef<HTMLDivElement>(null);

  // Tangkap parameter 'package' dari URL
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      setForm((prev) => ({ ...prev, package: pkg }));
    }
  }, [searchParams]);

  // Handle klik di luar untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        packageRef.current &&
        !packageRef.current.contains(event.target as Node)
      ) {
        setOpenPackage(false);
      }
      if (
        suburbRef.current &&
        !suburbRef.current.contains(event.target as Node)
      ) {
        setOpenSuburb(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Header Nav Minimalis */}
      <header className="border-b w-full border-gray-200">
        <div className="px-4 py-4 flex items-center justify-between max-w-300 mx-auto">
          <SecondaryButtonLink
            href="/"
            className="text-sm flex items-center gap-2"
          >
            <LuArrowLeft />
            Back To Home
          </SecondaryButtonLink>
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Lexentify Onboarding
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-210 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3 mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            Let&apos;s build your high-converting trade site.
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Fill out the details below to lock in your project scope. No upfront
            payment required—we review your brief and send a formal SOW first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-gray-200 p-6 md:p-10 bg-white shadow-xs rounded-lg"
        >
          {status === "sent" ? (
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <LuCircleCheck className="w-14 h-14 text-emerald-600" />
              <h3 className="text-2xl font-medium">Project Brief Received!</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Thank you,{" "}
                <span className="font-medium text-black">{form.name}</span>. We
                have received your project details for{" "}
                <span className="font-medium text-black">{form.business}</span>{" "}
                and will review your specifications. Expect a response with next
                steps within 1 business day.
              </p>
              <Link
                href="/"
                className="mt-4 inline-flex items-center justify-center bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Grid Identitas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700"
                  >
                    Business / Trade Name *
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Smith Plumbing & HVAC"
                    className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>
              </div>

              {/* Grid Kontak */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 255 511 192"
                    className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>
              </div>

              {/* Pilihan Paket & Kebutuhan (Shadcn Custom Popover Select Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Custom Package Select */}
                <div className="relative" ref={packageRef}>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700">
                    Selected Package
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenPackage(!openPackage);
                      setOpenSuburb(false);
                    }}
                    className="w-full flex items-center justify-between border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer text-zinc-900 text-left"
                  >
                    <span className="truncate">
                      {packageOptions.find((opt) => opt.value === form.package)
                        ?.label || "Select package"}
                    </span>
                    <LuChevronDown
                      className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ml-2 ${openPackage ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openPackage && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-md shadow-md overflow-hidden py-1"
                      >
                        {packageOptions.map((opt) => {
                          const isSelected = form.package === opt.value;
                          return (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => {
                                setForm((prev) => ({
                                  ...prev,
                                  package: opt.value,
                                }));
                                setOpenPackage(false);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-zinc-100 font-medium text-black"
                                  : "text-zinc-700 hover:bg-zinc-50 hover:text-black"
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && (
                                <LuCheck className="w-4 h-4 text-black shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Custom Suburbs Select */}
                <div className="relative" ref={suburbRef}>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700">
                    Target Service Area Coverage
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenSuburb(!openSuburb);
                      setOpenPackage(false);
                    }}
                    className="w-full flex items-center justify-between border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer text-zinc-900 text-left"
                  >
                    <span className="truncate">
                      {suburbOptions.find(
                        (opt) => opt.value === form.suburbsCount,
                      )?.label || "Select area"}
                    </span>
                    <LuChevronDown
                      className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ml-2 ${openSuburb ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openSuburb && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-md shadow-md overflow-hidden py-1"
                      >
                        {suburbOptions.map((opt) => {
                          const isSelected = form.suburbsCount === opt.value;
                          return (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => {
                                setForm((prev) => ({
                                  ...prev,
                                  suburbsCount: opt.value,
                                }));
                                setOpenSuburb(false);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-zinc-100 font-medium text-black"
                                  : "text-zinc-700 hover:bg-zinc-50 hover:text-black"
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && (
                                <LuCheck className="w-4 h-4 text-black shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Pesan / Goals */}
              <div>
                <label
                  htmlFor="goals"
                  className="block text-xs font-medium uppercase tracking-wider mb-2 text-zinc-700"
                >
                  Project Goals & Current Website (if any) *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={form.goals}
                  onChange={handleChange}
                  placeholder="Tell us about your current site limitations, specific trade services you want to highlight, or main objectives."
                  className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm rounded-md shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all placeholder:text-zinc-400"
                />
              </div>

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-md">
                  <p className="text-sm text-red-700">
                    Failed to submit project brief. Please try again or email us
                    directly at{" "}
                    <a
                      href="mailto:info@lexentify.com"
                      className="font-medium underline"
                    >
                      info@lexentify.com
                    </a>
                  </p>
                </div>
              )}

              {/* Keamanan & Jaminan */}
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-md flex items-start gap-3">
                <LuShieldCheck className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-black">No Financial Risk:</strong>{" "}
                  Submitting this brief does not lock you into payment. We draft
                  a formal Statement of Work (SOW) first. Work only begins after
                  mutual agreement.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 text-white font-medium px-6 py-3.5 text-sm rounded-md transition-colors cursor-pointer shadow-sm"
              >
                {status === "loading" ? (
                  <>
                    <LuLoaderCircle className="w-4 h-4 animate-spin" />
                    Submitting Project Brief...
                  </>
                ) : (
                  <>
                    Submit Project Brief & Lock Scope
                    <LuSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}

// Dibungkus Suspense karena menggunakan useSearchParams
export default function StartProjectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-sm font-medium">
          Loading...
        </div>
      }
    >
      <StartProjectContent />
    </Suspense>
  );
}
