import { ButtonLink, C, Container } from "@/components/ui/Swiss";
import { ctaContent } from "@/const/landing/CTA";

const CTA = () => (
  <section
    className="flex items-center"
    style={{ backgroundColor: C.BG, color: C.INK, borderColor: C.RULE }}
  >
    <Container className="py-20 md:py-32">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-9">
          <h2 className="text-balance text-[clamp(2.25rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            {ctaContent.title}
          </h2>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: C.MUTED }}
          >
            {ctaContent.description}
          </p>
        </div>
        <div className="md:col-span-3">
          <ButtonLink href={ctaContent.href} className="w-full">
            {ctaContent.action}
          </ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
