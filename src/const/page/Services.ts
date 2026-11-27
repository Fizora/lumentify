export type ServiceDetailSection = {
  title: string;
  content: string[];
  listItems?: string[];
};

export const webDevelopmentDetails = {
  lastUpdated: "November 2026",
  overview:
    "Web Development Operational Framework: This guide establishes the precise technical boundaries, deliverable definitions, and structural scopes for Lexentify's Web Development services. These parameters ensure absolute clarity between one-time project execution and ongoing monthly maintenance.",
  sections: [
    {
      title: "1. Core Build Deliverables & One-Time Scope",
      content: [
        "Each web development tier (Essential, Pro, and Custom) represents a defined one-time engineering engagement focused on delivering high-performance, mobile-optimized digital assets for home-service and trade businesses.",
        "The initial project fee covers end-to-end architecture, mobile responsiveness, targeted copywriting optimization, and deployment. Once milestones are signed off and the stabilization window concludes, structural changes fall outside this initial scope.",
      ],
      listItems: [
        "Essential Tier: 1 focused landing page for a single-location service business.",
        "Pro Tier: Up to 5 custom pages, incorporating dedicated suburb-level local SEO architecture to capture regional traffic across multiple service zones.",
        "Custom Platform: Up to 12 custom pages designed for scaling multi-location trade fleets, featuring advanced intake flows and bespoke tool integrations.",
      ],
    },
    {
      title: "2. Definition of Deliverables: Pages vs. Content Updates",
      content: [
        "To prevent operational misunderstandings during and after project completion, clients must strictly distinguish between independent page additions and standard content modifications:",
      ],
      listItems: [
        "New Page Additions (e.g., Suburb Page Additions): Refers to the creation of an entirely new, standalone URL path or route. Each new page is engineered with dedicated local SEO optimization, unique regional copy, and specific conversion funnels to target a new location or service category.",
        "Content Updates: Refers to minor modifications made within existing pages—such as updating operating hours, adjusting contact numbers, replacing images, or editing existing text blocks.",
        "Full Content Section Definition: A 'content update' or section addition represents a complete, structured content block on an existing page containing its own dedicated header, descriptive text, supporting imagery layout, and a functional Call-to-Action (CTA). It does not constitute a brand-new independent page route.",
      ],
    },
    {
      title: "3. Hosting Allocation and Transition to MRR",
      content: [
        "Initial development packages include a complimentary managed hosting window (1 year for Essential, 2 years for Pro & Custom) to ensure seamless performance right out of the gate.",
        "Once this initial hosting period expires, server management, security updates, SSL renewals, and ongoing technical care transition to our monthly recurring revenue (MRR) maintenance plans. Clients requiring hands-off operations must subscribe to our maintenance tiers, ensuring server stability without unexpected downtime.",
      ],
    },
    {
      title: "4. Post-Launch Stabilization Window & Support",
      content: [
        "Every project deployment includes an explicit stabilization period (7 days for Essential, 14 days for Pro, 30 days for Custom) dedicated strictly to validating core deliverables in a live production environment.",
        "This window is reserved for fixing bugs or discrepancies originating directly from the initial agreed code scope. It does not cover new feature requests, structural re-designs, or changes requested after final sign-off.",
      ],
    },
    {
      title: "5. Revision Protocols & Client-Supplied Assets",
      content: [
        "Included revision cycles are specified in each package and restated in the written proposal.",
        "Clients are required to supply verified credentials, business licenses, insurance details, and brand assets in a timely manner. Lexentify strictly prohibits the fabrication of unverified licenses or fake customer reviews, maintaining absolute professional integrity.",
      ],
    },
  ],
};

export const webMaintenanceDetails = {
  lastUpdated: "November 2026",
  overview:
    "Web Maintenance Operational Framework: This guide outlines the structure, responsibilities, and coverage limits of Lexentify's Monthly Recurring Revenue (MRR) technical maintenance and managed hosting services.",
  sections: [
    {
      title: "1. Scope of Managed Hosting & Technical Care",
      content: [
        "Maintenance tiers can handle agreed hosting, technical care and routine updates so clients do not need to manage those tasks themselves.",
      ],
      listItems: [
        "Server & Infrastructure: Managed hosting, agreed backup coverage and SSL certificate management.",
        "Security & Updates: Scheduled framework updates and agreed maintenance work.",
        "Uptime Monitoring: Availability checks within the scope and monitoring terms of the selected plan.",
      ],
    },
    {
      title: "2. Monthly Content and Suburb Page Allowances",
      content: [
        "Active MRR plans include a defined monthly allocation for routine content edits or structural additions, ensuring your site evolves alongside your business operations.",
      ],
      listItems: [
        "Small Content Updates: Refers to minor modifications such as text corrections, swapping images, adjusting pricing data, or updating operational hours within existing pages.",
        "New Suburb Page Additions (Growth & Scaling Tiers): Refers to the creation of brand new local landing pages (1 page/month on eligible tiers) to capture emerging regional search markets systematically.",
        "Rollover Policy: Unused content updates or suburb page allowances do not accumulate or roll over to subsequent billing cycles.",
      ],
    },
    {
      title: "3. Service Level Agreements (SLA) & Support Priority",
      content: [
        "Maintenance subscribers receive support under the response and priority terms stated in their selected plan.",
      ],
    },
    {
      title: "4. Billing, Cancellation, and Contract Terms",
      content: [
        "All maintenance plans operate on a flexible monthly recurring billing cycle with no long-term lock-in contracts after the initial first month.",
        "Clients may cancel their subscription at any time after the first month. Upon cancellation, managed hosting coverage and technical care will cease at the end of the current paid billing period, and site files/data can be handed over upon request.",
      ],
    },
  ],
};

export const servicesCommonContent = {
  includedLabel: "Included",
  relatedLabel: "Related",
  lastUpdatedLabel: "Last updated:",
} as const;

export const webDevelopmentPageContent = {
  metadata: {
    title: "Web Design & Development for Home Services",
    description:
      "Custom, mobile-friendly websites for plumbers, electricians, HVAC, and other home-service businesses, built with clear service pages and local SEO foundations.",
  },
  label: "Services / Web development",
  title: "Websites built to get your phone ringing.",
  intro:
    "A purpose-built website structure for the services, locations and contact needs of trade businesses.",
  included: [
    {
      title: "Click-to-call built in",
      body: "A sticky mobile call button engineered for emergency customers to reach dispatch in one tap.",
    },
    {
      title: "Suburb-level pages",
      body: "Dedicated location pages structured to capture local search traffic in the suburbs you cover.",
    },
    {
      title: "Sub-second load times",
      body: "Performance-conscious code and asset use. Actual loading times vary by device, network and third-party services.",
    },
    {
      title: "Secure by default",
      body: "SSL, modern security headers, and hardened hosting configuration included on every build.",
    },
  ],
  hubLabel: "Development information",
  hubTitle: "Technical scope & operational rules",
  cross: {
    title: "Looking for ongoing updates or server management?",
    body: "If you want to understand how our monthly maintenance tiers handle server uptime, security patches, and routine adjustments, check out our dedicated maintenance guide.",
    href: "/services/web-maintenance",
    cta: "Explore web maintenance",
  },
} as const;

export const webMaintenancePageContent = {
  metadata: {
    title: "Website Maintenance for Home-Service Businesses",
    description:
      "Managed website hosting, security updates, uptime monitoring, and ongoing technical care for home-service businesses.",
  },
  label: "Services / Web maintenance",
  title: "A website is never really “done.”",
  intro:
    "Hosting, software and content need ongoing attention. Maintenance plans can cover agreed technical care and routine updates.",
  included: [
    {
      title: "Hosting & SSL, handled",
      body: "Where included, hosting and SSL administration are managed under the selected maintenance plan.",
    },
    {
      title: "Ongoing updates",
      body: "Agreed framework and security updates are scheduled according to the plan.",
    },
    {
      title: "Uptime monitoring",
      body: "Monitoring and alert arrangements are defined by the selected plan.",
    },
    {
      title: "Priority support",
      body: "Maintenance requests are handled according to the support priority and response terms in the agreement.",
    },
  ],
  hubLabel: "Maintenance information",
  hubTitle: "MRR operational framework & guidelines",
  cross: {
    title: "Looking to commission a brand new trade website?",
    body: "Review our one-time development packages, architectural deliverables, and initial hosting inclusions on our main development page.",
    href: "/services/web-development",
    cta: "Explore web development",
  },
} as const;

export const seoPageContent = {
  metadata: {
    title: "Local SEO Foundations for Home-Service Businesses",
    description:
      "Explore Lexentify's technical SEO foundations for home-service websites, including clear site structure, local service-area pages, and Google Business Profile guidance.",
  },
  label: "Services / SEO",
  title: "Search foundations that start with the build",
  intro:
    "Technical SEO foundations can be included in a build. Ongoing campaigns and larger content strategies are separately scoped.",
  includedLabel: "Included",
  included: [
    {
      title: "Suburb-level pages",
      body: "Where useful and agreed, dedicated pages can present the suburbs or regions you genuinely serve.",
    },
    {
      title: "Technical foundation",
      body: "Clear semantic structure, indexable pages and mobile-friendly presentation provide a practical technical foundation.",
    },
    {
      title: "Google Business Profile",
      body: "Guidance for keeping website information consistent with a Google Business Profile, where this work is included in the agreed scope.",
    },
    {
      title: "Ongoing ranking checks",
      body: "Available only when separately agreed, with reports that explain the monitoring scope and search terms.",
    },
  ],
  expectations: {
    label: "Expectations",
    title: "A note on realistic expectations",
    body:
      "No credible provider can guarantee a first-page or #1 ranking. Search visibility depends on competition, relevance, authority, location and ongoing optimisation. Website work can provide a clear technical and on-page foundation, but cannot guarantee results.",
    action: "See plans",
    href: "/pricing",
  },
} as const;
