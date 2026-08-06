import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-black mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-black text-black inline-block border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
            >
              Lumentify.
            </Link>
            <p className="mt-3 text-sm text-gray-700 max-w-xs leading-relaxed">
              Fast, clean, and directed websites — built for home‑service
              businesses that can't afford to lose a call.
            </p>
          </div>

          {/* Link groups */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-black bg-yellow-400 inline-block px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/showcase"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-black bg-blue-600 inline-block px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/085235086814"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-black bg-red-600 inline-block px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/privacy"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="block px-2 py-1 border-2 border-transparent hover:border-black hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700">
          <p>&copy; {currentYear} Lumentify. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-semibold bg-yellow-400 px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
            Fast. Clean. Directed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
