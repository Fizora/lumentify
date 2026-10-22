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
        { label: "Privacy", href: "/legal/privacy" },
        { label: "Terms", href: "/legal/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-zinc-400 mt-auto">
      {/* Decorative dot-grid band */}
      <div
        className="h-24 md:h-32"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-300 px-4 py-14">
        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-black text-white flex items-center gap-2 group"
            >
              <div className="bg-white p-2 rounded-full border border-zinc-200 shadow-lg transition duration-300 group-hover:scale-105 group-hover:shadow-zinc-400">
                <Image
                  src={"/logo.svg"}
                  alt="Lexentify Logo"
                  priority
                  quality={80}
                  height={20}
                  width={20}
                />
              </div>
              Lexentify.
            </Link>
            <p className="mt-3 text-sm text-zinc-500 max-w-xs">
              Fast, clean, and directed websites — built & dedicated for
              home-service businesses that can&apos;t afford to lose a call.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-xs hover:text-white "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column — bersih, hanya aksi */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm text-white mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="https://wa.me/6285235086814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-800 hover:border-emerald-700 hover:bg-emerald-950/30 bg-zinc-900 px-3.5 py-2 text-sm text-zinc-200 transition-colors rounded-md"
              >
                WhatsApp
              </Link>
              <Link
                href="mailto:info@lexentify.com"
                className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 px-3.5 py-2 text-sm text-zinc-200 transition-colors rounded-md"
              >
                Email
              </Link>
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Rata-rata balas &lt; 2 jam pada jam kerja.
            </p>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-20 -mx-4 select-none overflow-hidden">
          <h1
            className="font-black bg-linear-to-r from-gray-400 via-gray-300 to-gray-400 text-transparent text-center leading-none tracking-tighter bg-clip-text"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          >
            Lexentify
          </h1>
        </div>

        {/* Bottom bar — 3 zona */}
        <div className=" mt-10 pt-6 border-t border-zinc-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-zinc-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Lexentify. All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex justify-center">
            <WorkStatusBadge variant="full" />
          </div>

          <div className="order-3 flex items-center justify-center md:justify-end gap-4">
            <span className="md:hidden sm:inline flex items-center gap-2">
              <LuGlobe></LuGlobe> Asia-Pacific
            </span>
            <Link
              href="/legal/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
