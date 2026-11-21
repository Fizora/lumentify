export type TestimonialItem = {
  rating: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: TestimonialItem[] = [
  {
    rating: "★★★★★",
    quote:
      "Our new website completely changed how customers reach us. The mobile click-to-call feature helps emergency customers needing fast AC repairs.",
    name: "Budi Santoso",
    role: "Owner, CoolFix HVAC Services",
  },
  {
    rating: "★★★★★",
    quote:
      "The work was completed quickly and the code is clean. The slow-plugin problems we had with our old WordPress site are gone. Highly recommended for trade businesses!",
    name: "Ahmad Hidayat",
    role: "Director, ProPlumbing Solutions",
  },
  {
    rating: "★★★★★",
    quote:
      "Everything was transparent from start to finish. Homeowners now trust us more because our licences and credentials appear clearly at the top of the page.",
    name: "Michael Pratama",
    role: "Founder, Alpha Electric & Wiring",
  },
  {
    rating: "★★★★★",
    quote:
      "The site went live in less than a week, and the increase in incoming calls was noticeable from the first week.",
    name: "Rian Kusuma",
    role: "Lead Contractor, Kusuma Home Remodeling",
  },
  {
    rating: "★★★★★",
    quote:
      "The local SEO structure is excellent. Our repair service is now much easier for customers to find across the surrounding suburbs.",
    name: "Dewi Lestari",
    role: "Manager, CleanHome Deep Cleaning",
  },
  {
    rating: "★★★★★",
    quote:
      "Communication through Loom and WhatsApp was efficient, with no lengthy meetings. The result is clean, modern, and highly professional.",
    name: "Joko Prasetyo",
    role: "Owner, J-Security & Locksmith",
  },
];

export const testimonialsSectionContent = {
  label: "Testimonials",
  title: "Trusted by owners",
  intro: "Here’s what they say about working with us.",
  previousLabel: "Previous testimonials",
  nextLabel: "Next testimonials",
} as const;
