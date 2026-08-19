"use client";

import { FormEvent, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-input-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-input-focus-border";

export default function StayUpdated() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="px-4 pb-16 sm:px-6"
      aria-labelledby="stay-updated-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
              Newsletter
            </p>
            <h2
              id="stay-updated-heading"
              className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
            >
              Stay updated
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-strong sm:text-lg">
              Get growth strategies and ecommerce insights delivered to your
              inbox. No spam — just what&apos;s working right now.
            </p>

            {submitted ? (
              <p className="mt-8 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground">
                You&apos;re on the list. Talk soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <label className="sr-only" htmlFor="stay-updated-email">
                  Email address
                </label>
                <input
                  id="stay-updated-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={fieldClassName}
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:px-8"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
