const PLACEHOLDER_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

export default function ContactHero() {
  return (
    <section className="relative px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface-muted">
          <video
            src={PLACEHOLDER_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
            Get in touch
          </p>

          <h1 className="mt-4 max-w-xl text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s Build Your Growth Plan
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-strong sm:text-xl">
            Book a discovery call and tell us where you want to go — we&apos;ll
            map the channels, creative, and ops to get you there.
          </p>
        </div>
      </div>
    </section>
  );
}
