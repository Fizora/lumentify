import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BlockComponentsDevelopers from "@/components/BlockComponentsDevelopers";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Poppins({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumentify - Creative Studio For Home Services Web Development",
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
        <LenisProvider>
          {children}
          {/* <BlockComponentsDevelopers /> */}
        </LenisProvider>
      </body>
    </html>
  );
}
