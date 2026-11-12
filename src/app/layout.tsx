import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Epilogue,
  Geist,
  Geist_Mono,
  Google_Sans,
  Inter,
  Michroma,
  Outfit,
  Plus_Jakarta_Sans,
  Poppins,
  Space_Grotesk,
  Syne,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Epilogue({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexentify.com"),
  title: {
    default: "Lexentify | High-Conversion Web Development for Home Services",
    template: "",
  },
  description:
    "Lexentify is an elite digital studio building ultra-fast, high-converting websites and landing pages specifically engineered for home-service businesses including plumbing, HVAC, electrical, and roofing trades.",
  keywords: [
    "home services web development",
    "plumbing website design",
    "HVAC web developer",
    "electrician landing page",
    "trade business web agency",
    "high conversion landing page",
    "next.js web studio",
  ],
  authors: [{ name: "Lexentify", url: "https://lexentify.com" }],
  creator: "Lexentify",
  publisher: "Lexentify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexentify.com",
    siteName: "Lexentify",
    title: "Lexentify | High-Conversion Web Development for Home Services",
    description:
      "Turn emergency mobile traffic into direct phone calls with lightning-fast, high-converting websites built for trade professionals.",
    images: [
      {
        url: "/og-image.png", // Pastikan Anda menyediakan aset gambar OG di folder public
        width: 1200,
        height: 630,
        alt: "Lexentify - Home Services Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexentify | High-Conversion Web Development for Home Services",
    description:
      "Lightning-fast, high-converting websites engineered specifically for plumbing, HVAC, electrical, and home-service contractors.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lexentify.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-thin`}
    >
      <body className="min-h-full">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
