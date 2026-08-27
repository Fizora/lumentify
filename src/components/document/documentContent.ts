export type DocSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type DocContent = {
  title: string;
  meta: { label: string; value: string }[];
  sections: DocSection[];
};

export const sowContent: DocContent = {
  title: "STATEMENT OF WORK (SOW)",
  meta: [
    { label: "SOW No.", value: "SOW-001" },
    { label: "Effective Date", value: "[YYYY-MM-DD]" },
    { label: "MSA Reference", value: "N/A" },
    { label: "Client", value: "[Client Legal Name]" },
    { label: "Provider", value: "[Your Legal Name / Business Name]" },
  ],
  sections: [
    {
      heading: "1. Project Overview",
      paragraphs: [
        "This SOW covers the delivery of a web-based inventory and sales module that enables [Client Company Name] to track stock levels, record sales transactions, and generate daily sales reports without relying on manual spreadsheets or paper-based processes.",
      ],
    },
    {
      heading: "2. Scope of Work",
      bullets: [
        "Inventory Module — product master data, stock in/out, stock adjustment, current stock report by product and category.",
        "Sales Module — sales transaction entry, PDF receipt generation, daily sales summary report.",
        "Admin Dashboard — role-based login (Admin, Cashier), basic settings (store name, logo, tax rate, currency), user management.",
        "Deployment & Documentation — deployment to client's VPS/hosting, PDF user documentation, one 5–10 minute video tutorial.",
      ],
    },
    {
      heading: "3. Out of Scope",
      bullets: [
        "Integration with accounting software, payment gateways, or third-party systems.",
        "Mobile application development (web application only).",
        "Data migration from legacy systems.",
        "Ongoing maintenance, support, or hosting services after final delivery.",
        "Custom features or modules not listed in Section 2.",
      ],
    },
    {
      heading: "4. Timeline",
      bullets: [
        "Kickoff: [YYYY-MM-DD]",
        "Milestone 1 — Inventory Module ready for testing: [YYYY-MM-DD]",
        "Milestone 2 — Sales Module + Admin Dashboard ready for testing: [YYYY-MM-DD]",
        "Final Delivery — all modules deployed, documentation delivered: [YYYY-MM-DD]",
      ],
      paragraphs: [
        "Estimated project duration: [X] weeks from the Effective Date, subject to timely feedback and approvals from the Client.",
      ],
    },
    {
      heading: "5. Client Responsibilities",
      bullets: [
        "Access to required accounts and assets (VPS/server credentials, domain, etc.).",
        "Product list and initial stock data in CSV/Excel format for import.",
        "Store branding assets (logo, store name, address, tax rate, etc.).",
        "One primary decision maker to provide feedback and approvals within 3 business days.",
        "Timely review and testing of deliverables at each milestone.",
      ],
    },
    {
      heading: "6. Revision Policy",
      paragraphs: [
        "This SOW includes 2 (two) rounds of revisions per milestone, covering bug fixes, minor UI adjustments, and clarification of existing requirements.",
        "Additional revisions or significant changes to approved designs/features are billable at USD [XX]/hour, subject to prior written approval by the Client.",
      ],
    },
    {
      heading: "7. Acceptance Criteria",
      bullets: [
        "All features listed in Section 2 are implemented and functional on the agreed environment.",
        "No critical or high-severity bugs remain open.",
        "Client confirms successful testing of core flows (stock in/out, sales transaction entry & receipt, daily sales summary).",
        "Client provides written acceptance via email or signed document.",
      ],
    },
    {
      heading: "8. Fees and Payment",
      paragraphs: ["Total Fee: USD [Total Amount]"],
      bullets: [
        "40% due on signing this SOW.",
        "40% due upon completion of Milestone 2.",
        "20% due within 7 days after Final Delivery and Client acceptance.",
        "Payment via bank transfer / Wise / PayPal / [Other method]. Due within 7 days of invoice date.",
        "Late payments may incur a late fee of [X]% per month, if applicable.",
      ],
    },
    {
      heading: "9. Change Requests",
      bullets: [
        "Any work outside Section 2 is considered a change request.",
        "Requires written approval before work begins, including scope, estimated hours/cost, and timeline impact.",
        "Work only starts after Client approves the change request and associated fees.",
      ],
    },
    {
      heading: "10. Intellectual Property & Confidentiality",
      paragraphs: [
        "Upon full payment of the Total Fee, all deliverables (source code, documentation, designs) become the property of the Client.",
        "Provider retains the right to display the project in portfolio and marketing materials unless otherwise agreed in writing.",
        "Both parties agree to keep proprietary or sensitive information confidential.",
      ],
    },
    {
      heading: "11. Termination",
      paragraphs: [
        "Either party may terminate with written notice if the other materially breaches a term and fails to remedy it within 14 days.",
        "Upon termination, Client pays for all completed work; Provider delivers all work-in-progress upon receipt of outstanding payments.",
      ],
    },
    {
      heading: "12. Governing Law & Dispute Resolution",
      paragraphs: [
        "Governed by the laws of [Country/State]. Disputes are first resolved through good-faith negotiation, then [arbitration/mediation/court] in [City, Country] as mutually agreed.",
      ],
    },
  ],
};

export const msaContent: DocContent = {
  title: "MASTER SERVICE AGREEMENT (MSA)",
  meta: [
    { label: "Effective Date", value: "14-08-2026" },
    { label: "Client Address", value: "Montana Street No. 42, AU" },
    { label: "Client Email", value: "recal@bussiness.com" },
    { label: "Provider", value: "Lumentify" },
    { label: "Provider Address", value: "East Java, ID" },
    { label: "Provider Email", value: "lumentify@gmail.com" },
  ],
  sections: [
    {
      heading: "1. Purpose",
      paragraphs: [
        'This Agreement establishes the general terms and conditions under which Provider will perform services for Client. Specific projects will be defined in separate Statements of Work ("SOW").',
      ],
    },
    {
      heading: "2. Term",
      paragraphs: [
        "This Agreement begins on 14-08-2026 and continues until terminated by either party with [Notice Period] written notice.",
      ],
    },
    {
      heading: "3. Services",
      paragraphs: [
        "Provider may perform services as agreed in one or more SOWs executed under this Agreement.",
      ],
    },
    {
      heading: "4. Order of Precedence",
      paragraphs: [
        "If there is a conflict between this Agreement and any SOW, the SOW will control only for the specific project terms, unless stated otherwise.",
      ],
    },
    {
      heading: "5. Fees and Payment",
      paragraphs: [
        "Client shall pay fees according to the applicable SOW. Invoices are due within [X] days. Late payments may be subject to [Late Fee].",
      ],
    },
    {
      heading: "6. Client Responsibilities",
      paragraphs: [
        "Client shall provide timely access, information, approvals, and feedback necessary for the services.",
      ],
    },
    {
      heading: "7. Confidentiality",
      paragraphs: [
        "Each party shall keep confidential information confidential and use it only for the purpose of this Agreement.",
      ],
    },
    {
      heading: "8. Intellectual Property",
      paragraphs: [
        "Upon full payment, ownership of deliverables will transfer to Client, except for Provider's pre-existing materials, tools, templates, and know-how.",
      ],
    },
    {
      heading: "9. Warranty and Disclaimer",
      paragraphs: [
        'Provider warrants that services will be performed in a professional manner. Except as expressly stated, services are provided "as is" without additional warranties.',
      ],
    },
    {
      heading: "10. Limitation of Liability",
      paragraphs: [
        "Provider's total liability shall not exceed the amount paid under the relevant SOW, except where prohibited by law.",
      ],
    },
    {
      heading: "11. Termination",
      paragraphs: [
        "Either party may terminate this Agreement for cause or with written notice as stated above. Client shall pay for all completed work up to the termination date.",
      ],
    },
    {
      heading: "12. Governing Law",
      paragraphs: [
        "This Agreement shall be governed by the laws of [Jurisdiction].",
      ],
    },
  ],
};
