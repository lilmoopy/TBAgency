import Link from "next/link";

export default function UnderConstruction() {
  return (
    <section className="px-4 pb-28 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
          Coming soon
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
          Under construction
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-strong sm:text-xl">
          This page isn&apos;t ready yet. In the meantime, book a call and
          we&apos;ll get you what you need.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Book a call
          </Link>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:bg-hover"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
