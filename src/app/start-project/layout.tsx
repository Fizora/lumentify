import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Website Project",
  description:
    "Tell Lexentify about your home-service business and the website you need.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function StartProjectLayout({
  children,
}: LayoutProps<"/start-project">) {
  return children;
}
