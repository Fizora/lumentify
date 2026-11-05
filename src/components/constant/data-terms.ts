export type LegalSection = {
  title: string;
  content: string[];
  listItems?: string[];
};

export const termsData = {
  lastUpdated: "November 2026",
  scopeNotice:
    "Scope & Legal Hierarchy: These Terms & Conditions govern your access to and use of the Lexentify website, as well as the overarching framework of our professional digital engineering services. Commissioned projects, deliverables, and commercial engagements are formally governed by individual written project agreements, Statements of Work (SOW), and Master Services Agreements (MSA). In the event of any conflict, the specific executed project agreement shall supersede these general website terms.",
  sections: [
    {
      title: "1. Use of this Website",
      content: [
        "You may use this website strictly for lawful purposes and in a manner that does not impair its performance, security, or availability. Unauthorized attempts to harvest data, gain restricted access to backend systems, disrupt infrastructure, or misuse contact channels are strictly prohibited and subject to legal action.",
      ],
    },
    {
      title: "2. Intellectual Property Rights",
      content: [
        "Unless explicitly stated otherwise, all original copywriting, structural layouts, graphic assets, visual branding, and code architectures deployed on this website are the exclusive intellectual property of Lexentify. You may not reproduce, distribute, or commercially exploit protected contents without prior written consent.",
        "Portfolio demonstrations, case studies, and templates may incorporate third-party software, fonts, or assets, which remain protected under their respective licenses. Client-specific intellectual property rights for commissioned development are strictly defined under their executed project agreements upon full settlement of milestones.",
      ],
    },
    {
      title: "3. Pricing, Information Accuracy, and Indicative Scope",
      content: [
        "All pricing frameworks, estimates, feature sets, and timelines displayed across public channels or the website are indicative and serve as general reference guides. They do not constitute a binding legal offer until formalized in a signed proposal or SOW.",
        "While we strive for absolute accuracy, Lexentify disclaims liability for minor typographical errors or temporal discrepancies in website content. Final commercial metrics, deliverables, and exclusions are exclusively determined by direct consultation and written agreement.",
      ],
    },
    {
      title: "4. General Service Framework & Risk Mitigation",
      content: [
        "To maintain transparency and protect project integrity, all professional engagements adhere to structured engineering pipelines and clearly defined parameters:",
      ],
      listItems: [
        "Post-Launch Stabilization Window: Project deployment includes an explicit stabilization period (typically 7–30 days as specified in the SOW) dedicated strictly to validating core deliverables in a live production environment and rectifying bugs originating directly from initial code scope.",
        "Exclusions from Support: Stabilization and support frameworks do not cover feature additions, structural modifications requested post-approval, issues caused by third-party external integrations, or alterations made by unauthorized parties.",
        "Change Order Protocol: Any adjustment, expansion, or pivot outside the agreed SOW parameters requires formal documentation via a Change Order, which may adjust billing schedules and timelines accordingly.",
      ],
    },
    {
      title: "5. Website Availability and Limitation of Liability",
      content: [
        "We maintain high standards of reliability for our digital properties, but we do not guarantee uninterrupted access or error-free operation. To the maximum extent permitted by applicable law, Lexentify shall not be held liable for any direct or indirect losses arising from website usage or temporary service interruptions.",
        "Remedies, indemnities, and liability caps relating to paid commercial engagements are explicitly restricted and governed by the terms outlined in the client's signed project agreement.",
      ],
    },
    {
      title:
        "6. External Links, Third-Party Services, and Integration Liability",
      content: [
        "Our website and delivered projects may incorporate or rely upon third-party tools, platforms, cloud infrastructure, and APIs (such as hosting providers like Vercel, email delivery services like Hostinger or Resend, domain registrars, analytics, or regional payment gateways requested or integrated for client projects).",
        "Lexentify exercises no direct operational or infrastructural control over these third-party entities. To the maximum extent permitted by applicable law, Lexentify explicitly disclaims any liability for system downtime, security vulnerabilities, data breaches, API failures, processing errors, or data misuse originating from or caused by third-party providers, external services, or client-integrated systems. The use of such services remains subject entirely to their respective terms and privacy policies.",
      ],
    },
    {
      title: "7. Project Cancellation, Deposits, and Refunds",
      content: [
        "Commercial cancellation policies, project deposit treatments, and milestone refund eligibility are explicitly detailed within individual project contracts prior to financial transactions.",
        "Where an agreement permits early cancellation during a designated design-review phase, the client must strictly adhere to the written notice protocols and deadlines specified therein. Deductions for third-party processing fees or completed preliminary labor apply as stipulated.",
      ],
    },
    {
      title: "8. Governing Law and Dispute Resolution",
      content: [
        "These Terms & Conditions shall be interpreted, construed, and governed by the laws of the Republic of Indonesia. Any disputes arising out of website usage or professional contracts shall first be addressed through good-faith negotiation between authorized representatives. If unresolved, matters shall fall under the jurisdiction of the competent courts.",
      ],
    },
    {
      title: "9. Changes to These Terms",
      content: [
        "We reserve the right to modify these terms periodically to reflect operational improvements or regulatory updates. Revised terms take effect immediately upon publication on this page and apply prospectively to future website use, without automatically altering pre-existing signed project contracts.",
      ],
    },
  ],
};
