"use client";
import { motion } from "motion/react";
import {
  LuArrowUpRight,
  LuPhone,
  LuClock,
  LuWrench,
  LuStar,
  LuBadgeCheck,
  LuTimer,
  LuAward,
  LuFileText,
} from "react-icons/lu";
import { heroContent } from "@/const/landing/Hero";

// Dark Brutalist Palette
const PANEL = "#111111";
const INK = "#FFFFFF";
const MUTED = "#888888";
const BORDER = "#222222";

const marqueeIcons = [LuPhone, LuWrench, LuClock];
const achievementIcons = [LuAward, LuStar, LuBadgeCheck, LuTimer];

const Hero = () => {
  return (
    <section className="flex min-h-screen w-full bg-black relative z-10 items-center overflow-hidden">
      <div
        className="mx-auto w-full max-w-[1600px] border-x pt-24 sm:pt-28 md:pt-40 pb-12 md:pb-24"
        style={{ borderColor: BORDER }}
      >
        {/* Top Section */}
        <div className="mb-12 w-full px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-7 inline-flex w-fit max-w-full items-center gap-2 border px-3 py-2 text-[9px] font-bold uppercase tracking-widest md:mb-8 md:text-[10px]"
              style={{ color: INK, borderColor: BORDER }}
            >
              <LuFileText className="h-3.5 w-3.5" />
              {heroContent.eyebrow}
            </span>

            <h1 className="max-w-312.5 text-[clamp(2.25rem,8vw,7.25rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-white">
              <span className="block">{heroContent.title[0]}</span>
              <span className="block">{heroContent.title[1]}</span>
              <span className="block text-[#777777]">
                {heroContent.title[2]}
              </span>
            </h1>

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-12 md:items-end">
              <p
                className="max-w-xl text-sm leading-relaxed md:col-span-7 md:text-base"
                style={{ color: MUTED }}
              >
                {heroContent.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
                <a
                  href="/start-project"
                  className="flex min-h-12 items-center justify-between gap-8 border border-white bg-white px-5 text-[11px] font-bold uppercase tracking-widest text-black"
                >
                  <span>{heroContent.primaryAction}</span>
                  <LuArrowUpRight size={18} />
                </a>
                <a
                  href="/showcase"
                  className="flex min-h-12 items-center justify-between gap-8 border px-5 text-[11px] font-bold uppercase tracking-widest text-white"
                  style={{ borderColor: BORDER }}
                >
                  <span>{heroContent.secondaryAction}</span>
                  <div className="h-1.5 w-1.5 bg-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 grid grid-cols-1 border-l border-t md:grid-cols-3"
            style={{ borderColor: BORDER }}
          >
            {heroContent.stats.map((stat) => (
              <div
                key={stat.title}
                className="border-b border-r px-5 py-7 md:px-7 md:py-9"
                style={{ borderColor: BORDER }}
              >
                <p className="text-[clamp(1.75rem,4vw,3.25rem)] font-black uppercase leading-none tracking-[-0.055em]">
                  {stat.title}
                </p>
                <p
                  className="mt-4 text-[9px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: INK }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-3 text-[11px] md:text-xs"
                  style={{ color: MUTED }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: Mini Website Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full px-4 sm:px-8 md:px-10"
        >
          <div
            className="w-full border flex flex-col relative overflow-hidden"
            style={{ borderColor: BORDER, backgroundColor: PANEL }}
          >
            {/* Browser Chrome */}
            <div
              className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-2.5 md:py-3 border-b"
              style={{ borderColor: BORDER }}
            >
              <div className="flex gap-1.5 md:gap-2 shrink-0">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#333]" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#333]" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#333]" />
              </div>
              <div
                className="flex-1 min-w-0 max-w-md mx-auto border px-2 md:px-4 py-1 text-center text-[9px] md:text-[10px] font-mono tracking-widest truncate"
                style={{ borderColor: BORDER, color: MUTED }}
              >
                {heroContent.previewUrl}
              </div>
            </div>

            {/* Website Content */}
            <div className="text-sm flex flex-col">
              {/* Mini Navbar */}
              <div
                className="flex items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b"
                style={{ borderColor: BORDER }}
              >
                <span
                  className="font-bold text-xs md:text-sm tracking-tighter uppercase whitespace-nowrap"
                  style={{ color: INK }}
                >
                  {heroContent.previewBrand[0]}{" "}
                  <span style={{ color: MUTED }}>
                    {heroContent.previewBrand[1]}
                  </span>
                </span>
                <div
                  className="hidden sm:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: MUTED }}
                >
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {heroContent.previewNavigation[0]}
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {heroContent.previewNavigation[1]}
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {heroContent.previewNavigation[2]}
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {heroContent.previewNavigation[3]}
                  </span>
                  <span
                    className="px-4 py-1.5 text-black flex items-center gap-2 font-bold"
                    style={{ backgroundColor: INK }}
                  >
                    <LuPhone className="w-3 h-3" />
                    {heroContent.callAction}
                  </span>
                </div>
                <span
                  className="sm:hidden px-3 py-1.5 text-black flex items-center gap-1.5 text-[9px] font-bold uppercase shrink-0"
                  style={{ backgroundColor: INK }}
                >
                  <LuPhone className="w-3 h-3" /> {heroContent.mobileCallAction}
                </span>
              </div>

              {/* Marquee — w-max supaya -50% = setengah lebar konten (loop mulus) */}
              <div
                className="relative w-full overflow-hidden py-2 border-b"
                style={{ borderColor: BORDER, backgroundColor: PANEL }}
              >
                <motion.div
                  className="flex w-max whitespace-nowrap text-[9px] md:text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: MUTED }}
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[
                    ...heroContent.marqueeItems,
                    ...heroContent.marqueeItems,
                    ...heroContent.marqueeItems,
                    ...heroContent.marqueeItems,
                  ].map((item, i) => {
                    const Icon = marqueeIcons[i % marqueeIcons.length];
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 shrink-0 pr-10"
                      >
                        <Icon className="w-3 h-3" />
                        <span>{item}</span>
                        <span className="opacity-40 pl-8">/</span>
                      </span>
                    );
                  })}
                </motion.div>
              </div>

              {/* Main Hero Area inside mini site */}
              <div
                className="p-5 md:p-12 border-b"
                style={{ borderColor: BORDER }}
              >
                <span
                  className="inline-block max-w-full border text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-2 py-1 mb-4 md:mb-6"
                  style={{ borderColor: BORDER, color: MUTED }}
                >
                  {heroContent.previewEyebrow}
                </span>
                <h2
                  className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-3 md:mb-4 max-w-lg leading-[1.1] "
                  style={{ color: INK }}
                >
                  {heroContent.previewTitle}
                </h2>
                <p
                  className="text-xs md:text-sm mb-6 md:mb-8 max-w-md"
                  style={{ color: MUTED }}
                >
                  {heroContent.previewDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    className="px-4 md:px-6 py-2.5 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
                    style={{ backgroundColor: INK }}
                  >
                    {heroContent.previewActions[0]}
                  </button>
                  <button
                    className="px-4 md:px-6 py-2.5 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border transition-colors hover:bg-[#1a1a1a]"
                    style={{ borderColor: BORDER, color: INK }}
                  >
                    {heroContent.previewActions[1]}
                  </button>
                </div>
              </div>

              <section
                className="border-b p-5 md:p-12"
                style={{ borderColor: BORDER }}
              >
                <div className="mb-6 grid gap-3 md:mb-8 md:grid-cols-12 md:items-end">
                  <div className="md:col-span-6">
                    <p
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: MUTED }}
                    >
                      {heroContent.servicesLabel}
                    </p>
                    <h3
                      className="mt-2 text-xl font-bold uppercase tracking-tight md:text-2xl"
                      style={{ color: INK }}
                    >
                      {heroContent.servicesTitle}
                    </h3>
                  </div>
                  <p
                    className="max-w-md text-xs leading-relaxed md:col-span-6 md:justify-self-end md:text-right"
                    style={{ color: MUTED }}
                  >
                    {heroContent.servicesIntro}
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 border-l border-t sm:grid-cols-3"
                  style={{ borderColor: BORDER }}
                >
                  {heroContent.services.map((service, index) => (
                    <article
                      key={service.title}
                      className="border-b border-r p-4 md:p-5"
                      style={{ borderColor: BORDER }}
                    >
                      <span
                        className="text-[9px] font-bold tracking-widest"
                        style={{ color: MUTED }}
                      >
                        0{index + 1}
                      </span>
                      <h4
                        className="mt-5 text-xs font-bold uppercase tracking-wider"
                        style={{ color: INK }}
                      >
                        {service.title}
                      </h4>
                      <p
                        className="mt-2 text-[10px] leading-relaxed"
                        style={{ color: MUTED }}
                      >
                        {service.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section
                className="border-b p-5 md:p-12"
                style={{ borderColor: BORDER }}
              >
                <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <p
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: MUTED }}
                    >
                      {heroContent.processLabel}
                    </p>
                    <h3
                      className="mt-2 text-xl font-bold uppercase tracking-tight md:text-2xl"
                      style={{ color: INK }}
                    >
                      {heroContent.processTitle}
                    </h3>
                  </div>
                  <ol
                    className="border-t md:col-span-8"
                    style={{ borderColor: BORDER }}
                  >
                    {heroContent.processSteps.map((step, index) => (
                      <li
                        key={step.title}
                        className="grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1 border-b py-4 last:border-b-0 md:grid-cols-[2.5rem_1fr_1.5fr] md:items-baseline md:gap-4"
                        style={{ borderColor: BORDER }}
                      >
                        <span
                          className="row-span-2 text-[9px] font-bold tracking-widest md:row-span-1"
                          style={{ color: MUTED }}
                        >
                          0{index + 1}
                        </span>
                        <h4
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: INK }}
                        >
                          {step.title}
                        </h4>
                        <p
                          className="col-start-2 text-[10px] leading-relaxed md:col-start-auto"
                          style={{ color: MUTED }}
                        >
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* Achievement Grid — hanya desktop */}
              <div
                className="hidden md:grid grid-cols-4 divide-x border-b"
                style={{ borderColor: BORDER }}
              >
                {heroContent.achievements.map((item, i) => {
                  const Icon = achievementIcons[i];
                  return (
                    <div
                      key={i}
                      className="p-6 flex flex-col gap-3"
                      style={{ borderColor: BORDER }}
                    >
                      <Icon className="w-5 h-5" style={{ color: INK }} />
                      <div>
                        <p
                          className="font-bold text-xs uppercase tracking-wider mb-1"
                          style={{ color: INK }}
                        >
                          {item.title}
                        </p>
                        <p className="text-[10px]" style={{ color: MUTED }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer inside mini site — hanya desktop */}
              <div className="hidden md:grid grid-cols-3 p-12 gap-8">
                <div>
                  <p
                    className="font-bold text-xs uppercase tracking-widest mb-3"
                    style={{ color: INK }}
                  >
                    {heroContent.previewBrand.join(" ")}
                  </p>
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {heroContent.licenseLabel}
                    <br />
                    {heroContent.insuranceLabel}
                  </p>
                </div>
                <div>
                  <p
                    className="font-bold text-xs uppercase tracking-widest mb-3"
                    style={{ color: INK }}
                  >
                    {heroContent.serviceAreasLabel}
                  </p>
                  <ul
                    className="text-[11px] space-y-1.5"
                    style={{ color: MUTED }}
                  >
                    {heroContent.serviceAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="font-bold text-xs uppercase tracking-widest mb-3"
                    style={{ color: INK }}
                  >
                    {heroContent.contactLabel}
                  </p>
                  <ul
                    className="text-[11px] space-y-1.5"
                    style={{ color: MUTED }}
                  >
                    <li className="flex items-center gap-2">
                      <LuPhone className="w-3 h-3" /> {heroContent.previewPhone}
                    </li>
                    <li>{heroContent.previewEmail}</li>
                    <li className="font-bold mt-2" style={{ color: INK }}>
                      {heroContent.emergencyLabel}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating Call Button — hanya desktop (di mobile sudah ada di navbar mini) */}
            <div
              className="hidden md:flex absolute bottom-6 right-6 items-center gap-2 px-4 py-2 border shadow-2xl cursor-pointer transition-colors hover:bg-[#1a1a1a]"
              style={{
                backgroundColor: PANEL,
                borderColor: BORDER,
                color: INK,
              }}
            >
              <LuPhone className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {heroContent.mobileCallAction}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
