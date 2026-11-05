import type { IconType } from "react-icons";
import {
  LuPhoneCall,
  LuMapPin,
  LuBadgeCheck,
  LuCalendarCheck,
  LuZap,
  LuShield,
  LuPenTool,
  LuLifeBuoy,
  LuHammer,
} from "react-icons/lu";

// FAQ
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Why aren't there client testimonials listed on your website?",
    answer:
      "We strictly avoid placeholder or unverified reviews. Instead, we let live, fully interactive demo builds and pristine code architecture serve as transparent, verifiable proof of our execution standard.",
  },
  {
    question: "How do I know these websites actually convert local customers?",
    answer:
      "Our layouts are engineered around real emergency trade-buyer behavior: sticky mobile click-to-call bars, prominent license & insurance badges, sub-second load times, and frictionless quote forms. You can test these exact interactive features live on our Showcase demo builds before committing.",
  },
  {
    question:
      "How does remote project delivery work seamlessly across time zones?",
    answer:
      "We operate on a streamlined asynchronous workflow utilizing structured Loom video updates, WhatsApp, and shared milestone dashboards. This ensures zero waiting for meetings, transparent progress tracking, and direct senior-level execution without local agency overhead.",
  },
  {
    question: "Do I own the website and source code once built?",
    answer:
      "Yes, 100% ownership. Upon final completion, all source code, design assets, and domain configurations transfer entirely to you. There are zero proprietary builder lock-ins or mandatory long-term platform fees.",
  },
  {
    question: "How long does a project take from kickoff to launch?",
    answer:
      "Essential landing pages are delivered in 5–7 business days, Pro multi-page builds take 1–2 weeks, and Custom platforms take 3–4 weeks. All delivery milestones are firmly locked in writing before kickoff.",
  },
  {
    question: "What happens after the website goes live?",
    answer:
      "Every project includes a dedicated post-launch stabilization and support window (7 days for Essential, 14 days for Pro, and 30 days for Custom). During this period, our team handles all system fine-tuning, adjustments, and transition assistance at zero extra cost.",
  },
  {
    question: "Will my site be optimized to show up on Google?",
    answer:
      "Every build incorporates robust technical local SEO architecture: clean semantic HTML, sub-second asset optimization, suburb-level page hierarchies, and Google Business Profile structural alignment to give you an immediate competitive edge.",
  },
];

// FEATURES
export type FeatureItem = {
  icon: IconType;
  title: string;
  description: string;
};

export const businessFeatures: FeatureItem[] = [
  {
    icon: LuPhoneCall,
    title: "Instant mobile click-to-call",
    description:
      "A sticky, thumb-friendly call bar engineered to give urgent emergency customers a direct line to your dispatch in a single tap.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service mapping",
    description:
      "Dedicated location page structures architected to capture high-intent local search traffic across every suburb you service.",
  },
  {
    icon: LuBadgeCheck,
    title: "Authority front and center",
    description:
      "Strategic above-the-fold placement for your state licenses, insurance credentials, and verified Google ratings to instantly establish trust.",
  },
  {
    icon: LuCalendarCheck,
    title: "Frictionless quote & booking flows",
    description:
      "Streamlined interaction forms optimized for rapid mobile input, minimizing user drop-off and maximizing direct callout requests.",
  },
];

export const technicalFeatures: FeatureItem[] = [
  {
    icon: LuZap,
    title: "Sub-second load speed",
    description:
      "Lean modern code and optimized assets guarantee near-instant loading, preventing potential clients from bouncing to competitors.",
  },
  {
    icon: LuShield,
    title: "Secure infrastructure by default",
    description:
      "Enterprise-grade SSL encryption, advanced security headers, and hardened hosting environments configured as standard.",
  },
  {
    icon: LuPenTool,
    title: "High-converting trade copy",
    description:
      "Direct, persuasive copywriting frameworks structured around consumer urgency, transparent value, and immediate action.",
  },
  {
    icon: LuLifeBuoy,
    title: "Post-launch transition support",
    description:
      "Dedicated post-deployment assistance included with every build to ensure absolute platform stability and total peace of mind.",
  },
];

// Tambahkan tipe TestimonialItem
export type TestimonialItem = {
  rating: string; // atau number, sesuai penggunaannya (misal: "★★★★★")
  quote: string;
  name: string;
  role: string;
};

// Tambahkan data testimonials dummy
export const testimonials: TestimonialItem[] = [
  {
    rating: "★★★★★",
    quote:
      "Website baru kami benar-benar mengubah cara pelanggan menghubungi kami. Fitur click-to-call di ponsel sangat membantu klien darurat yang butuh perbaikan AC cepat.",
    name: "Budi Santoso",
    role: "Owner, CoolFix HVAC Services",
  },
  {
    rating: "★★★★★",
    quote:
      "Pengerjaannya sangat cepat dan kodenya bersih. Tidak ada lagi drama plugin lambat seperti di WordPress lama kami. Sangat direkomendasikan untuk bisnis tukang!",
    name: "Ahmad Hidayat",
    role: "Director, ProPlumbing Solutions",
  },
  {
    rating: "★★★★★",
    quote:
      "Transparan dari awal sampai akhir. Pemilik rumah sekarang jauh lebih percaya karena lisensi dan kredensial kami langsung terlihat di bagian atas halaman.",
    name: "Michael Pratama",
    role: "Founder, Alpha Electric & Wiring",
  },
  {
    rating: "★★★★★",
    quote:
      "Hanya butuh waktu kurang dari seminggu hingga situs live, dan peningkatannya langsung terasa pada jumlah panggilan telepon masuk di minggu pertama.",
    name: "Rian Kusuma",
    role: "Lead Contractor, Kusuma Home Remodeling",
  },
  {
    rating: "★★★★★",
    quote:
      "Struktur SEO lokalnya luar biasa. Bisnis jasa perbaikan kami sekarang jauh lebih mudah ditemukan oleh pelanggan di berbagai area suburb sekitar kota.",
    name: "Dewi Lestari",
    role: "Manager, CleanHome Deep Cleaning",
  },
  {
    rating: "★★★★★",
    quote:
      "Komunikasi via Loom dan WhatsApp sangat efisien tanpa buang waktu meeting berjam-jam. Hasil akhirnya bersih, modern, dan sangat profesional.",
    name: "Joko Prasetyo",
    role: "Owner, J-Security & Locksmith",
  },
];
