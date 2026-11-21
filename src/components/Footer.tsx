import Image from "next/image";
import Link from "next/link";
import WorkStatusBadge from "@/components/WorkStatusBadge";
import { siteContent } from "@/const/data";
import { C } from "@/components/ui/Swiss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full" style={{ backgroundColor: C.BG }}>
      <div
        className="mx-auto w-full max-w-[1600px] border-l border-r"
        style={{ borderColor: C.RULE }}
      >
        <div className="grid grid-cols-1 border-y md:grid-cols-12" style={{ borderColor: C.RULE }}>
          <div className="px-6 py-12 md:col-span-7 md:px-12 md:py-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.svg"
                alt={siteContent.logoAlt}
                priority
                height={20}
                width={20}
              />
              <span
                className="text-lg font-semibold tracking-tight"
                style={{ color: C.INK }}
              >
                {siteContent.brandName}.
              </span>
            </Link>
            <p
              className="mt-6 max-w-md text-sm leading-relaxed"
              style={{ color: C.MUTED }}
            >
              {siteContent.footer.description}
            </p>
          </div>

          <div
            className="border-t px-6 py-10 md:col-span-5 md:border-l md:border-t-0 md:px-12 md:py-16"
            style={{ borderColor: C.RULE }}
          >
            <h4
              className="mb-5 text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: C.MUTED }}
            >
              Start a conversation
            </h4>
            <Link
              href={`mailto:${siteContent.businessEmail}`}
              className="group flex h-14 items-stretch border transition-[border-color,box-shadow] duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]"
              style={{
                borderColor: C.RULE_HI,
                color: C.INK,
                backgroundColor: "transparent",
              }}
            >
              <span className="flex flex-1 items-center px-4 text-sm font-medium">
                {siteContent.businessEmail}
              </span>
              <span
                className="flex w-14 items-center justify-center border-l text-xl transition-[background-color,color,transform] duration-300 group-hover:bg-white group-hover:text-black"
                style={{ borderColor: C.RULE_HI }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b md:grid-cols-12" style={{ borderColor: C.RULE }}>
          {siteContent.footer.groups.map((group, index) => (
            <div
              key={group.title}
              className={`px-6 py-8 md:col-span-3 md:px-10 md:py-10 ${
                index > 0 ? "border-l" : ""
              } ${index === 2 ? "border-t md:border-t-0" : ""}`}
              style={{ borderColor: C.RULE }}
            >
              <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: C.INK }}>
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: C.MUTED }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-l px-6 py-8 md:col-span-3 md:px-10 md:py-10" style={{ borderColor: C.RULE }}>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: C.INK }}>
              Operations
            </h4>
            <div className="space-y-3 text-sm" style={{ color: C.MUTED }}>
              <div>{siteContent.navbar.workHours}</div>
              <div>{siteContent.footer.region}</div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 items-center gap-5 px-6 py-7 text-xs md:grid-cols-12 md:px-10"
          style={{ color: C.MUTED }}
        >
          <p className="md:col-span-5">
            &copy; {currentYear} {siteContent.brandName}. {siteContent.footer.copyright}
          </p>
          <div className="md:col-span-3">
            <WorkStatusBadge variant="full" />
          </div>
          <div className="flex items-center gap-6 md:col-span-4 md:justify-end">
            <Link
              href="/legal/privacy-policy"
              className="transition-colors hover:opacity-70"
            >
              {siteContent.footer.privacyLink}
            </Link>
            <Link
              href="/legal/terms"
              className="transition-colors hover:opacity-70"
            >
              {siteContent.footer.termsLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
