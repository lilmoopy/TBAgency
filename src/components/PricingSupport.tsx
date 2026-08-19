import { formatMonthly, supportTiers } from "@/lib/pricing";

export default function PricingSupport() {
  return (
    <section
      id="support"
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="support-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
          Add-ons
        </p>
        <h2
          id="support-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Support packages
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-strong">
          Each tier includes the one before it. Chargeback disputes stay with
          our core team — too important to hand off.
        </p>

        <ul className="mt-10 grid gap-5 lg:grid-cols-4">
          {supportTiers.map((tier) => (
            <li
              key={tier.id}
              className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                Tier {tier.id}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
                {tier.name}
              </h3>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {formatMonthly(tier.price)}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm leading-relaxed text-muted-strong"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
