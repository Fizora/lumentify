import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Explore",
      links: [
        { label: "Showcase", href: "/showcase" },
        { label: "Pricing", href: "/#pricing" },
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
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 mt-auto">
      {/* Decorative dot-grid band */}
      <div
        className="h-24 md:h-32 border-b border-zinc-900"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-black text-white flex items-center gap-2"
            >
              <div className="bg-white group-hover:transform group-hover:scale-105 group-hover:shadow-zinc-400 transition duration-300 p-2 rounded shadow-lg">
                <Image
                  src={"/logo.svg"}
                  alt="Lumentify Logo"
                  priority
                  quality={80}
                  height={20}
                  width={20}
                  className=""
                />
              </div>
              Lumentify.
            </Link>
            <p className="mt-3 text-sm text-zinc-500 max-w-xs">
              Fast, clean, and directed websites — built for home-service
              businesses that can&apos;t afford to lose a call.
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
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick-contact column */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/6285235086814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-3.5 py-2 text-sm text-zinc-200 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:lumentify@gmail.com"
                className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-3.5 py-2 text-sm text-zinc-200 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-20 -mx-4 select-none overflow-hidden">
          <p
            className="font-black text-white text-center leading-none tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          >
            LUMENTIFY
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <p>&copy; {currentYear} Lumentify. All rights reserved.</p>

          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open for new projects
          </span>

          <span>📍 East Java, Indonesia</span>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
