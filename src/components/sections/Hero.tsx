"use client";
import { motion } from "motion/react";
import {
  ButtonGrid,
  PrimaryButtonLink,
  SecondaryButtonLink,
} from "../ui/Button";
import {
  LuCheck,
  LuClock,
  LuUser,
  LuBot,
  LuLink,
  LuSend,
  LuPhone,
  LuStar,
  LuBadgeCheck,
  LuTimer,
  LuAward,
  LuWrench,
} from "react-icons/lu";

const Hero = () => {
  const marqueeItems = [
    { icon: LuPhone, text: "(02) 5551 0192" },
    { icon: LuWrench, text: "Plumbing · HVAC · Gas Fitting" },
    { icon: LuClock, text: "Open 24/7 — Emergency Callouts" },
  ];

  return (
    <section className="py-20 mx-auto max-w-6xl px-3">
      <div className="space-y-12">
        {/* Headline */}
        <div className="space-y-4 py-20">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black ">
              Every Slow Page Is a Customer Calling Your Competitor Instead.
            </h1>
            <p className="max-w-3xl">
              When a pipe bursts, people don&apos;t wait for a slow site to load
              — they call whoever answers first. I build fast, clean, and
              directed websites for home service businesses, so that call goes
              to you.
            </p>
          </div>
          <ButtonGrid>
            <PrimaryButtonLink
              href="/project-deal"
              children="Start Project"
              className="w-full lg:w-max"
            ></PrimaryButtonLink>
            <SecondaryButtonLink
              href="/showcase"
              children="See Showcase"
              className="w-full lg:w-max"
            ></SecondaryButtonLink>
          </ButtonGrid>
        </div>

        {/* Example Web – Mini Website UI */}
        <div className="bg-[url('/hero-image.jpg')] bg-fixed bg-center bg-cover min-h-135 rounded-xl px-4 py-10 md:p-10 lg:p-20 flex items-center justify-center">
          <div className="w-full max-w-6xl rounded-xl bg-white shadow-2xl overflow-hidden relative">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-full px-4 py-1 text-xs text-gray-500 border border-gray-200">
                https://everflowplumbing.com
              </div>
            </div>

            {/* Mini website content */}
            <div className="text-sm">
              {/* Navbar */}
              <div className="flex items-center justify-between px-4 md:px-3 pt-4 pb-4 mb-0">
                <span className="font-bold text-base text-black">
                  Everflow <span className="text-yellow-600">Plumbing</span>
                </span>
                <div className="hidden sm:flex items-center gap-4 text-gray-600 text-xs">
                  <span>Home</span>
                  <span>About</span>
                  <span>Services</span>
                  <span>Contact</span>
                  <span className="px-3 py-1.5 rounded-full bg-yellow-600 text-white flex items-center gap-2 font-semibold">
                    <LuPhone />
                    Need Now | Call Us
                  </span>
                </div>
                <div className="sm:hidden text-gray-600">☰</div>
              </div>

              {/* Marquee bar: phone – services – 24/7 hours */}
              <div className="relative w-full overflow-hidden bg-yellow-600 py-2 mb-6">
                <motion.div
                  className="flex whitespace-nowrap gap-10 text-white text-xs font-medium"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[
                    ...marqueeItems,
                    ...marqueeItems,
                    ...marqueeItems,
                    ...marqueeItems,
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 shrink-0"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.text}</span>
                        <span className="opacity-50 ml-8">•</span>
                      </span>
                    );
                  })}
                </motion.div>
              </div>

              <div className="p-4 md:p-6 pt-0">
                {/* Hero section inside the mini web */}
                <div className="bg-yellow-50/60 rounded-xl p-4 md:p-6 mb-6 border border-yellow-100">
                  <span className="inline-block text-[10px] font-semibold tracking-wide uppercase text-yellow-700 bg-white px-2.5 py-1 rounded-full mb-2 border border-yellow-100">
                    Licensed &amp; Insured · 24/7 Emergency
                  </span>
                  <h2 className="md:text-3xl font-bold text-black mb-2">
                    A Burst Pipe Won&apos;t Wait — Neither Do We
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 max-w-sm">
                    Same-day plumbing and HVAC repairs across Sydney, done right
                    the first time.
                  </p>
                  <div className="flex gap-2 pt-3">
                    <button className="bg-yellow-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium ">
                      Book a Callout
                    </button>
                    <button className="bg-white text-yellow-700 px-4 py-1.5 rounded-lg text-xs font-medium border border-yellow-200">
                      Get a Free Quote
                    </button>
                  </div>
                </div>

                {/* Achievement / proof cards — replaces generic sales-copy cards */}
                {/* TODO: replace with real client data before using this template on an actual client project */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-yellow-50/50 rounded-lg p-3 flex items-center gap-2 border border-yellow-100/60">
                    <LuAward className="text-yellow-600 w-4 h-4" />
                    <div>
                      <p className="font-semibold text-xs">
                        1,200+ Jobs Completed
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Across Greater Sydney since 2014
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50/50 rounded-lg p-3 flex items-center gap-2 border border-yellow-100/60">
                    <LuStar className="text-yellow-600 w-4 h-4" />
                    <div>
                      <p className="font-semibold text-xs">
                        4.9★ from 240+ Reviews
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Verified on Google
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50/50 rounded-lg p-3 flex items-center gap-2 border border-yellow-100/60">
                    <LuBadgeCheck className="text-yellow-600 w-4 h-4" />
                    <div>
                      <p className="font-semibold text-xs">11 Years Licensed</p>
                      <p className="text-gray-500 text-[10px]">
                        Master Plumbers Association member
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50/50 rounded-lg p-3 flex items-center gap-2 border border-yellow-100/60">
                    <LuTimer className="text-yellow-600 w-4 h-4" />
                    <div>
                      <p className="font-semibold text-xs">
                        98% Same-Day Response
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Tracked across last 12 months
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer — expanded, functional footer for the demo site */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-[10px]">
                    {/* Business info */}
                    <div>
                      <p className="font-semibold text-black mb-1.5">
                        Everflow Plumbing
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        Lic. #PL-48213
                        <br />
                        Fully insured &amp; bonded
                      </p>
                    </div>

                    {/* Quick links */}
                    <div>
                      <p className="font-semibold text-black mb-1.5">
                        Quick Links
                      </p>
                      <ul className="text-gray-500 space-y-1">
                        <li>Services</li>
                        <li>Areas We Cover</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                      </ul>
                    </div>

                    {/* Areas covered */}
                    <div>
                      <p className="font-semibold text-black mb-1.5">
                        Areas We Cover
                      </p>
                      <ul className="text-gray-500 space-y-1">
                        <li>Sydney CBD</li>
                        <li>Parramatta</li>
                        <li>Bankstown</li>
                        <li>+12 more suburbs</li>
                      </ul>
                    </div>

                    {/* Contact / emergency */}
                    <div>
                      <p className="font-semibold text-black mb-1.5">
                        Get In Touch
                      </p>
                      <ul className="text-gray-500 space-y-1">
                        <li className="flex items-center gap-1.5">
                          <LuPhone className="w-3 h-3 text-yellow-600" />
                          (02) 5551 0192
                        </li>
                        <li>info@everflowplumbing.com</li>
                        <li className="text-yellow-700 font-medium">
                          24/7 Emergency Line
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="border-t border-gray-100 pt-3 flex flex-col sm:flex-row justify-between gap-1 text-[10px] text-gray-400">
                    <span>© 2026 Everflow Plumbing. All rights reserved.</span>
                    <span>Privacy · Terms · Sitemap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating emergency WhatsApp/call button */}
            <span className="cursor-pointer absolute bottom-2 right-2 flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 transition-colors text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg">
              <LuPhone className="w-4 h-4" />
              <span className="text-xs font-semibold">Call</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
