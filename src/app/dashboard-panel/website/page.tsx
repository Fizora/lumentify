// import DashboardLayout from "@/components/DashboardLayout";
// import DashboardPageHeader from "@/components/DashboardPageHeader";
// import {
//   LuGlobe,
//   LuServer,
//   LuShieldCheck,
//   LuActivity,
//   LuExternalLink,
// } from "react-icons/lu";
// import { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "My Website - Control Panel",
// };

// const statusCards = [
//   {
//     label: "Domain",
//     value: "coastalplumbing.com.au",
//     detail: "Expires 14 Mar 2027",
//     icon: LuGlobe,
//     tone: "ok",
//   },
//   {
//     label: "Hosting",
//     value: "42 days left",
//     detail: "Local Dominance plan — auto-renews",
//     icon: LuServer,
//     tone: "warning",
//   },
//   {
//     label: "SSL Certificate",
//     value: "Active",
//     detail: "Valid through 14 Mar 2027",
//     icon: LuShieldCheck,
//     tone: "ok",
//   },
//   {
//     label: "Uptime (30 days)",
//     value: "99.98%",
//     detail: "No incidents recorded",
//     icon: LuActivity,
//     tone: "ok",
//   },
// ] as const;

// export default function WebsiteDashboard() {
//   return (
//     <DashboardLayout>
//       <DashboardPageHeader
//         title="My Website"
//         description="A snapshot of your website's current status — domain, hosting, security, and performance."
//       />

//       <div className="border border-zinc-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 bg-zinc-900 text-white">
//         <div>
//           <p className="text-xs text-zinc-400 mb-1">Your live website</p>
//           <p className="font-bold text-lg">www.coastalplumbing.com.au</p>
//         </div>
//         <Link
//           href="https://coastalplumbing.com.au"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 bg-white text-zinc-900 rounded-md px-4 py-2 font-semibold text-sm hover:bg-zinc-100 transition-colors duration-300 w-max"
//         >
//           Visit Website
//           <LuExternalLink size={16} />
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
//         {statusCards.map(({ label, value, detail, icon: Icon, tone }, idx) => (
//           <div key={idx} className="border border-zinc-200 rounded-lg p-5">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm text-zinc-500">{label}</span>
//               <span
//                 className={`p-2 rounded-full ${
//                   tone === "warning"
//                     ? "bg-amber-50 text-amber-600"
//                     : "bg-zinc-100 text-zinc-600"
//                 }`}
//               >
//                 <Icon size={16} />
//               </span>
//             </div>
//             <p className="text-xl font-bold text-zinc-900">{value}</p>
//             <p className="text-xs text-zinc-400 mt-1">{detail}</p>
//           </div>
//         ))}
//       </div>

//       <div className="border border-zinc-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//         <div>
//           <p className="font-semibold text-zinc-900">
//             Hosting renews automatically
//           </p>
//           <p className="text-sm text-zinc-500">
//             A renewal invoice is sent to your email 7 days before the due date.
//           </p>
//         </div>
//         <button className="bg-zinc-900 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-zinc-800 transition-colors duration-300 w-max">
//           Manage Renewal
//         </button>
//       </div>
//     </DashboardLayout>
//   );
// }
