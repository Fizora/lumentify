import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top grid – replace links with your own */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-black text-black">
              Lumentify.
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              Fast, clean, and directed websites — built for home‑service
              businesses that can't afford to lose a call.
            </p>
          </div>

          {/* Link groups */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-zinc-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-zinc-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/085235086814"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-zinc-900 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Lumentify. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Fast. Clean. Directed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
