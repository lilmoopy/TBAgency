"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  brandTypes,
  buildContactHref,
  describeSelection,
  diyTiers,
  engagementTracks,
  formatModulePrice,
  formatMonthly,
  getSelectionTotal,
  growthModules,
  recommendedModulesByBrand,
  supportTiers,
  type BrandId,
  type EngagementId,
  type ModuleId,
  type PlanTierId,
  type SupportTierId,
} from "@/lib/pricing";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-1 h-4 w-4 shrink-0 text-foreground"
    >
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function selectedClass(active: boolean) {
  return active
    ? "border-foreground bg-hover"
    : "border-border bg-surface hover:border-input-focus-border";
}

export default function PricingBuilder() {
  const [brandId, setBrandId] = useState<BrandId | null>(null);
  const [engagementId, setEngagementId] = useState<EngagementId | null>(null);
  const [tierId, setTierId] = useState<PlanTierId | null>(null);
  const [moduleIds, setModuleIds] = useState<ModuleId[]>([]);
  const [supportId, setSupportId] = useState<SupportTierId | null>(null);

  const recommended = brandId ? recommendedModulesByBrand[brandId] : [];

  const selection = useMemo(
    () => ({ brandId, engagementId, tierId, moduleIds, supportId }),
    [brandId, engagementId, tierId, moduleIds, supportId],
  );

  const totals = getSelectionTotal(selection);
  const summary = describeSelection(selection);
  const contactHref = buildContactHref(selection);
  const canBook = Boolean(
    brandId &&
      ((engagementId === "diy" && tierId) ||
        (engagementId === "managed" && moduleIds.length > 0)),
  );

  function toggleModule(id: ModuleId) {
    setModuleIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <section
      id="build"
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="build-heading"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              Step 1
            </p>
            <h2
              id="build-heading"
              className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
            >
              What type of brand are you?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">
              This does not change the menu — it highlights the boxes that
              usually pay off first.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {brandTypes.map((brand) => {
                const active = brandId === brand.id;
                return (
                  <li key={brand.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setBrandId(brand.id)}
                      className={`h-full w-full rounded-2xl border px-5 py-4 text-left transition-colors ${selectedClass(active)}`}
                    >
                      <span className="block text-base font-semibold text-foreground">
                        {brand.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-strong">
                        {brand.blurb}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              Step 2
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              How do you want to work?
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {engagementTracks.map((track) => {
                const active = engagementId === track.id;
                return (
                  <li key={track.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      disabled={!brandId}
                      onClick={() => {
                        setEngagementId(track.id);
                        setTierId(null);
                        setModuleIds(
                          track.id === "managed" ? ["strategy"] : [],
                        );
                      }}
                      className={`h-full w-full rounded-2xl border px-5 py-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${selectedClass(active)}`}
                    >
                      <span className="block text-base font-semibold text-foreground">
                        {track.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-strong">
                        {track.blurb}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {engagementId === "diy" && (
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                Step 3
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                DIY tiers
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">
                Each tier includes the one before it. You keep execution
                in-house.
              </p>
              <ul className="mt-6 grid gap-3 lg:grid-cols-3">
                {diyTiers.map((tier) => {
                  const active = tierId === tier.id;
                  return (
                    <li key={tier.id}>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setTierId(tier.id)}
                        className={`flex h-full w-full flex-col rounded-2xl border px-5 py-5 text-left transition-colors ${selectedClass(active)}`}
                      >
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                          Tier {tier.id}
                        </span>
                        <span className="mt-2 block text-lg font-semibold text-foreground">
                          {tier.name}
                        </span>
                        <span className="mt-2 text-sm text-muted-strong">
                          {tier.tagline}
                        </span>
                        <span className="mt-4 text-base font-semibold text-foreground">
                          {formatMonthly(tier.price)}
                        </span>
                        <ul className="mt-5 space-y-2.5">
                          {tier.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-2 text-sm leading-relaxed text-body"
                            >
                              <CheckIcon />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {engagementId === "managed" && (
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                Step 3
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                Build the box
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">
                Add the work you want us to run. Strategy is selected by
                default because the other boxes need it.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {growthModules.map((module) => {
                  const active = moduleIds.includes(module.id);
                  const isRecommended = recommended.includes(module.id);
                  return (
                    <li key={module.id}>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleModule(module.id)}
                        className={`flex h-full w-full flex-col rounded-2xl border px-5 py-5 text-left transition-colors ${selectedClass(active)}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-lg font-semibold text-foreground">
                            {module.name}
                          </span>
                          {isRecommended && (
                            <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-strong">
                              Usually first
                            </span>
                          )}
                        </div>
                        <span className="mt-2 text-sm text-muted-strong">
                          {module.tagline}
                        </span>
                        <span className="mt-4 text-base font-semibold text-foreground">
                          {formatModulePrice(module.price)}
                        </span>
                        <ul className="mt-4 space-y-1.5">
                          {module.includes.map((item) => (
                            <li
                              key={item}
                              className="text-sm leading-relaxed text-body"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              Step 4
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              Customer support
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">
              Optional. Each tier includes the one before it.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li>
                <button
                  type="button"
                  aria-pressed={supportId === null}
                  onClick={() => setSupportId(null)}
                  className={`h-full w-full rounded-2xl border px-5 py-4 text-left transition-colors ${selectedClass(supportId === null)}`}
                >
                  <span className="block text-base font-semibold text-foreground">
                    No support add-on
                  </span>
                  <span className="mt-2 block text-sm text-muted-strong">
                    Keep the box to growth work only.
                  </span>
                </button>
              </li>
              {supportTiers.map((tier) => {
                const active = supportId === tier.id;
                return (
                  <li key={tier.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSupportId(tier.id)}
                      className={`h-full w-full rounded-2xl border px-5 py-4 text-left transition-colors ${selectedClass(active)}`}
                    >
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                        Tier {tier.id}
                      </span>
                      <span className="mt-2 block text-base font-semibold text-foreground">
                        {tier.name}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-foreground">
                        {formatMonthly(tier.price)}
                      </span>
                      <ul className="mt-3 space-y-1.5">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm leading-relaxed text-muted-strong"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              Your box
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
              {summary.length > 0 ? "Current stack" : "Nothing selected yet"}
            </h3>

            {summary.length > 0 ? (
              <ul className="mt-5 divide-y divide-border">
                {summary.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-sm text-muted-strong first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted-strong">
                Pick a brand type to start assembling the package.
              </p>
            )}

            <div className="mt-5 border-t border-border pt-5">
              <p className="text-sm text-muted">Starting monthly</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                {totals.startingFrom > 0
                  ? formatMonthly(totals.startingFrom, "from")
                  : "—"}
              </p>
              {totals.hasPaidPercent && (
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  Includes the $1,500 paid-ads floor. Actual paid fee is 10% of
                  that month&apos;s ad spend if it is higher. Ad spend is extra.
                </p>
              )}
              <p className="mt-2 text-xs leading-relaxed text-faint">
                Software, influencer talent fees, and media budget are billed
                separately. We confirm scope on the call.
              </p>
            </div>

            <Link
              href={contactHref}
              aria-disabled={!canBook}
              className={`mt-6 flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                canBook
                  ? "bg-accent text-accent-foreground hover:bg-accent-hover"
                  : "pointer-events-none bg-surface-muted text-faint"
              }`}
            >
              Book this stack
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
