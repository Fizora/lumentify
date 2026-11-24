import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Enquiry",
  description:
    "Share your business, service area, and website goals with the Lexentify team.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProjectLayout({
  children,
}: LayoutProps<"/project">) {
  return children;
}
