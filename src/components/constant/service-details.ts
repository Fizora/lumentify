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
        "Essential Tier: Strictly limited to 1 high-converting landing page optimized for emergency mobile dispatch and single-location service coverage.",
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
        "Projects operate under structured revision cycles (2 rounds for Essential, 4 rounds for Pro & Custom) during the design and layout review phases to lock in visual and structural directions efficiently.",
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
        "Our maintenance tiers are designed to provide complete peace of mind for business owners, handling all technical aspects of server infrastructure, security monitoring, and core framework updates without requiring client intervention.",
      ],
      listItems: [
        "Server & Infrastructure: High-speed managed cloud hosting, automated daily/weekly backups, and SSL certificate management.",
        "Security & Updates: Monthly core framework updates, vulnerability patching, and firewall hardening against malicious traffic.",
        "Uptime Monitoring: 24/7 automated checks on site speed and availability to detect and resolve technical anomalies proactively.",
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
        "Maintenance subscribers receive prioritized technical assistance, skipping general studio queues to ensure rapid turnaround times on support tickets, emergency fixes, or requested adjustments.",
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
