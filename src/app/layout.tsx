import type { Metadata } from "next";
import { Epilogue, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { siteContent } from "@/const/data";

const sans = Epilogue({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexentify.com"),
  title: {
    default: siteContent.metadata.title,
    template: siteContent.metadata.template,
  },
  // ...sisanya sama persis seperti sebelumnya
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll="smooth"
      className={`${sans.variable} ${mono.variable} h-full antialiased scrollbar-thin`}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-clip bg-black">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
