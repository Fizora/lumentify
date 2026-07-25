import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Elms_Sans,
  Geist,
  Geist_Mono,
  Gelasio,
  IBM_Plex_Mono,
  IBM_Plex_Serif,
  JetBrains_Mono,
  Playfair_Display,
  Playfair_Display_SC,
  Plus_Jakarta_Sans,
  Poppins,
  Voltaire,
  Young_Serif,
} from "next/font/google";
import "./globals.css";
import WhatsAppCall from "@/components/WhatsAppCall";

const geistSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = IBM_Plex_Serif({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumentify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-thin`}
    >
      <body className="min-h-full flex flex-col text-base md:text-md lg:text-lg">
        {children}
        <WhatsAppCall />
      </body>
    </html>
  );
}
