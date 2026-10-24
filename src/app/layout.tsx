import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  Google_Sans,
  Michroma,
  Poppins,
} from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Bricolage_Grotesque({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexentify",
  description: "- Creative Studio For Home Services Web Development",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-thin `}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
