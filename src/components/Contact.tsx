"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  describeSelection,
  parsePricingSearchParams,
} from "@/lib/pricing";

const points = [
  "Schedule a discovery",
  "Develop a scope of work custom to your goals",
  "Develop a strategy for your influencer and social media pages, including budget, benchmarks of success, and more",
  "Help you build out your tech stack to scale",
  "Develop your creator and influencer communication flows",
  "Assist you in developing your legal creator contracts and FTC language",
  "Train your team on how to manage your programs, or we can manage them for you",
];

const hearAboutOptions = [
  "Referral",
  "LinkedIn",
  "Google",
  "Podcast / Media",
  "Event",
  "Other",
];

const fieldClassName =
  "mt-2 w-full rounded-xl border border-input-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-input-focus-border";

function SelectedPlanFields() {
  const searchParams = useSearchParams();
  const selection = parsePricingSearchParams({
    brand: searchParams.get("brand") ?? undefined,
    work: searchParams.get("work") ?? undefined,
    tier: searchParams.get("tier") ?? undefined,
    modules: searchParams.get("modules") ?? undefined,
    support: searchParams.get("support") ?? undefined,
  });
  const summary = describeSelection(selection);

  if (summary.length === 0) return null;

  const planNote = summary.join(" · ");

  return (
    <div className="rounded-2xl border border-border bg-background px-4 py-3">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
        Selected stack
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-strong">{planNote}</p>
      <input type="hidden" name="selectedPlan" value={planNote} />
    </div>
  );
}

export default function Contact() {
  const [referralSource, setReferralSource] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const showOtherSourceField = referralSource === "Other";

  return (
    <section
      id="contact"
      className="px-4 pb-28 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12"
        >
          <div className="lg:sticky lg:top-28">
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              Ready for Real Results?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-strong sm:text-xl">
              Let&apos;s discuss your objectives.
            </p>

            <ol className="mt-10 divide-y divide-border">
              {points.map((point) => (
                <li key={point} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-base leading-relaxed text-muted-strong">
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5">
            <Suspense fallback={null}>
              <SelectedPlanFields />
            </Suspense>
            <label className="block">
              <span className="text-sm font-medium text-body">Your Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldClassName}
                placeholder="Jane Smith"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-body">
                Company name
              </span>
              <input
                name="company"
                type="text"
                required
                autoComplete="organization"
                className={fieldClassName}
                placeholder="Acme Co."
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-body">
                Company website
              </span>
              <input
                name="website"
                type="url"
                required
                autoComplete="url"
                className={fieldClassName}
                placeholder="https://example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-body">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClassName}
                placeholder="jane@example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-body">
                How did you hear about us?
              </span>
              <select
                name="referral"
                required
                value={referralSource}
                onChange={(event) => setReferralSource(event.target.value)}
                className={`${fieldClassName} appearance-none`}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            {showOtherSourceField && (
              <label className="block">
                <span className="text-sm font-medium text-body">
                  Where?{" "}
                  <span className="font-normal text-faint">(optional)</span>
                </span>
                <input
                  name="referralOther"
                  type="text"
                  className={fieldClassName}
                  placeholder="Tell us where you found us"
                />
              </label>
            )}

            <label className="block">
              <span className="text-sm font-medium text-body">
                Anything else you would like us to know before your call?{" "}
                <span className="font-normal text-faint">(optional)</span>
              </span>
              <textarea
                name="notes"
                rows={4}
                className={`${fieldClassName} resize-y`}
                placeholder="Goals, timeline, current channels…"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Book your call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
