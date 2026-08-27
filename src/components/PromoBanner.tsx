"use client";

import { useEffect, useState } from "react";
import { LuX, LuSparkles } from "react-icons/lu";
import { promoOffers, type PromoOffer } from "@/components/constant/data";
import Link from "next/link";

const getExpiryDate = (offer: PromoOffer) => {
  const start = new Date(offer.startDate);
  const days =
    offer.durationUnit === "weeks" ? offer.duration * 7 : offer.duration;
  const expiry = new Date(start);
  expiry.setDate(expiry.getDate() + days);
  return expiry;
};

const getActiveOffer = (): { offer: PromoOffer; daysLeft: number } | null => {
  const now = new Date();
  for (const offer of promoOffers) {
    const start = new Date(offer.startDate);
    const expiry = getExpiryDate(offer);
    if (now >= start && now <= expiry) {
      const daysLeft = Math.max(
        Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
        0,
      );
      return { offer, daysLeft };
    }
  }
  return null;
};

const PromoBanner = () => {
  const [active, setActive] = useState<{
    offer: PromoOffer;
    daysLeft: number;
  } | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const result = getActiveOffer();
    setActive(result);
    if (result) {
      const wasDismissed = localStorage.getItem(
        `promo-dismissed-${result.offer.id}`,
      );
      setDismissed(wasDismissed === "true");
    }
    setHydrated(true);
  }, []);

  // Avoid a flash of content before we know if there's an active, non-dismissed offer
  if (!hydrated || !active || dismissed) return null;

  const { offer, daysLeft } = active;

  const handleDismiss = () => {
    localStorage.setItem(`promo-dismissed-${offer.id}`, "true");
    setDismissed(true);
  };

  return (
    <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 bg-zinc-900 text-white rounded-lg px-4 sm:px-5 py-3 mb-6">
      <span className="flex items-center justify-center bg-white/10 text-white p-2 rounded-full shrink-0">
        <LuSparkles size={16} />
      </span>
      <div className="flex-1">
        <p className="font-semibold text-sm">{offer.title}</p>
        <p className="text-xs text-zinc-300">{offer.message}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-zinc-400 hidden sm:inline">
          {daysLeft > 0
            ? `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`
            : "Ends today"}
        </span>
        <Link
          href={offer.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-zinc-100 transition-colors duration-300 whitespace-nowrap"
        >
          {offer.cta}
        </Link>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss offer"
          className="p-1 rounded-full hover:bg-white/10 transition-colors duration-300"
        >
          <LuX size={16} />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
