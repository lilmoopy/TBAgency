import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              The Growth Agency Built Around Your Business
            </h1>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="TB Agency team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className="flex min-h-[7.5rem] items-center justify-center rounded-3xl border border-border bg-surface px-6 py-8"
            >
              <div className="h-4 w-24 rounded-full bg-hover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
