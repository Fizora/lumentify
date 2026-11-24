import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about Lexentify's website development, pricing, project process, hosting, and maintenance for home-service businesses.",
};

export default function FAQLayout({
  children,
}: LayoutProps<"/faq">) {
  return children;
}
