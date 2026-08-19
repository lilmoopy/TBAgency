import Link from "next/link";
import AsSeenIn from "@/components/AsSeenIn";
import HeroVideoScroll from "@/components/HeroVideoScroll";

export default function Hero() {
  return (
    <section className="relative px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start rounded-2xl border border-border bg-surface p-8 text-left sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
            Growth Agency
          </p>

          <h1 className="mt-4 max-w-xl text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            A Full Growth Agency
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-strong sm:text-xl">
            Real, Data Driven, and Results Focused Market Skills to grow your
            business
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Partner with TB
          </Link>

          <AsSeenIn />
        </div>

        <HeroVideoScroll />
      </div>
    </section>
  );
}
