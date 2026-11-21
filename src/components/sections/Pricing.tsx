import {
  buildPlans,
  mrrPlans,
  originalPrices,
  pricingSectionContent,
} from "@/const/landing/Pricing";
import {
  ButtonLink,
  C,
  Container,
  Label,
  Section,
} from "@/components/ui/Swiss";

type Plan = (typeof buildPlans)[number] | (typeof mrrPlans)[number];

interface PricingProps {
  showOneTime?: boolean;
  showMRR?: boolean;
}

const ENABLE_DISCOUNT = false;

const Tag = ({ children, color }: { children: string; color: string }) => (
  <span
    className="border px-2 py-0.5 text-xs"
    style={{ borderColor: color, color }}
  >
    {children}
  </span>
);

const PlanGrid = ({
  plans,
  badge,
  monthly = false,
}: {
  plans: Plan[];
  badge: string;
  monthly?: boolean;
}) => (
  <div
    className="-mx-5 grid grid-cols-1 border-y md:-mx-10 lg:grid-cols-3"
    style={{ borderColor: C.RULE }}
  >
    {plans.map((plan) => {
      const featured = Boolean(plan.featured);
      const promo = ENABLE_DISCOUNT ? originalPrices[plan.name] : undefined;
      // Featured plan: soft warm contrast, easier on the eye than pure white.
      const fg = featured ? C.BG : C.INK;
      const muted = featured ? "#5C594F" : C.MUTED;
      const rule = featured ? "#B5AE9B" : C.RULE;
      const featuredBackground = "#D8D1C2";

      return (
        <div
          key={plan.name}
          className="flex flex-col border-b p-5 py-32 transition-colors hover:bg-white/[0.03] last:border-b-0 md:p-6 lg:border-b-0 lg:border-r lg:p-7 lg:last:border-r-0"
          style={{
            borderColor: C.RULE,
            backgroundColor: featured ? featuredBackground : "transparent",
            color: fg,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight">
              {plan.name}
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              {promo && <Tag color={muted}>{promo.discountLabel}</Tag>}
              {featured && <Tag color={fg}>{badge}</Tag>}
            </div>
          </div>

          <p
            className="mt-3 min-h-16 text-[15px] leading-relaxed"
            style={{ color: muted }}
          >
            {plan.description}
          </p>

          <div className="mt-6">
            {promo && (
              <span
                className="block text-sm line-through"
                style={{ color: muted }}
              >
                {promo.price}
              </span>
            )}
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-[-0.04em] xl:text-5xl">
                {plan.price}
              </span>
              <span className="text-sm" style={{ color: muted }}>
                {plan.period}
              </span>
            </div>
            {monthly && (
              <span className="mt-1 block text-sm" style={{ color: muted }}>
                {pricingSectionContent.billedMonthly}
              </span>
            )}
          </div>

          <ButtonLink
            href={plan.href}
            variant={featured ? "dark" : "line"}
            className="mt-6"
          >
            {plan.cta}
          </ButtonLink>

          <ul
            className="mt-6 space-y-2 border-t pt-6"
            style={{ borderColor: rule }}
          >
            {plan.features.map((feat: string) => (
              <li
                key={feat}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: muted }}
              >
                <span aria-hidden="true" style={{ color: fg }}>
                  —
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

const Pricing = ({ showOneTime = true, showMRR = true }: PricingProps) => (
  <>
    {showOneTime && (
      <Section
        id="pricing"
        label={pricingSectionContent.oneTime.label}
        title={pricingSectionContent.oneTime.title}
        intro={pricingSectionContent.oneTime.intro}
        wide
        compact
      >
        <PlanGrid
          plans={buildPlans}
          badge={pricingSectionContent.oneTime.badge}
        />
      </Section>
    )}

    {showMRR && (
      <Section
        id={showOneTime ? "maintenance" : "pricing"}
        label={pricingSectionContent.maintenance.label}
        title={pricingSectionContent.maintenance.title}
        intro={pricingSectionContent.maintenance.intro}
        wide
        compact
      >
        <PlanGrid
          plans={mrrPlans}
          badge={pricingSectionContent.maintenance.badge}
          monthly
        />
      </Section>
    )}

    {(showOneTime || showMRR) && (
      <div
        className="flex items-center"
        style={{ backgroundColor: C.BG, color: C.INK }}
      >
        <Container className="py-8 md:py-10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-12">
            <div className="md:col-span-3">
              <Label>{pricingSectionContent.capacityLabel}</Label>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-snug tracking-tight md:col-span-9 md:text-xl">
              {pricingSectionContent.capacityMessage}
            </p>
          </div>
        </Container>
      </div>
    )}
  </>
);

export default Pricing;
