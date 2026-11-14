import Image from "next/image";
import Link from "next/link";
import WorkStatusBadge from "@/components/WorkStatusBadge";
import { LuGlobe } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Explore",
      links: [
        { label: "Showcase", href: "/showcase" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms & Conditions", href: "/legal/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-zinc-600 mt-auto w-full border-b border-zinc-200">
      {/* Decorative dot-grid band */}
      <div
        className=""
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* 
        PERUBAHAN UTAMA DI SINI:
        Ditambahkan px-4 sm:px-6 md:px-8 agar konten di dalam border-x 
        tidak menempel atau terpotong garis di layar HP (mobile).
      */}
      <div className="mx-auto max-w-7xl py-12 md:py-20 px-4 sm:px-6 md:px-8 border-x border-zinc-200">
        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold text-black flex items-center gap-2 group tracking-tight"
            >
              <div className="bg-white group-hover:scale-105 border hover:border-black transition duration-300 p-2 rounded-full">
                <Image
                  src="/logo.svg"
                  alt="Lexentify logo"
                  priority
                  height={20}
                  width={20}
                />
              </div>
              Lexentify.
            </Link>
            <p className="mt-3 text-sm text-zinc-500 max-w-xs leading-relaxed">
              Fast, clean, and directed websites — built & dedicated for
              home-service businesses that can&apos;t afford to lose a call.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-black mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 text-sm hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column dengan Zona Waktu Asia-Pacific */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-black mb-4">
                Get in Touch
              </h4>
              <Link
                href="mailto:business@lexentify.com"
                className="group flex items-center justify-between border hover:border-blue-600 bg-zinc-50 hover:bg-zinc-100 px-3.5 py-2 text-sm text-zinc-900 font-medium transition-colors rounded-md"
              >
                <span>Email</span>
                <span className="text-xs text-zinc-400 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  Inbox <span className="text-xs">▶</span>
                </span>
              </Link>
            </div>

            {/* Jam Operasional Zona Waktu Asia-Pacific */}
            {/* <div className="space-y-1.5 text-xs text-zinc-500 pt-3 border-t border-zinc-100">
              <div className="flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-black mb-4">
                <span>Business Hours (APAC):</span>
              </div>
              <div className="flex justify-between">
                <span>Mon–Fri, 09:00–18:00</span>
                <span className="font-mono text-zinc-400">(GMT+7)</span>
              </div>
              <div className="flex justify-between">
                <span>Mon–Fri, 10:00–19:00</span>
                <span className="font-mono text-zinc-400">(GMT+8)</span>
              </div>
              <div className="flex justify-between">
                <span>Mon–Fri, 11:00–20:00</span>
                <span className="font-mono text-zinc-400">(GMT+10)</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16 md:mt-20 -mx-4 sm:-mx-6 md:-mx-8 select-none overflow-hidden py-10 md:py-15">
          <h1
            className="font-black text-zinc-800 text-center leading-none tracking-tighter"
            style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
          >
            LEXENTIFY
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-zinc-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Lexentify. All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex justify-center">
            <WorkStatusBadge variant="full" />
          </div>

          <div className="order-3 flex items-center justify-center md:justify-end gap-5">
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-400">
              <LuGlobe className="w-3.5 h-3.5" /> Asia-Pacific / Remote
            </span>
            <Link
              href="/legal/privacy-policy"
              className="hover:text-black transition-colors"
            >
              Privacy & Policy
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-black transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
