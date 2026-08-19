import Image from "next/image";

const stats = [
  "3+ Years of Digital Experience",
  "London to Chicago",
  "Personal Partnership",
  "Smart Execution",
];

export default function TeamHero() {
  return (
    <section className="relative px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              The Growth Agency Built Around Your Business
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-strong sm:text-xl">
              From London to Chicago, we bring a personal touch to global scale.
              We partner with brands across industries who need speed, agility,
              and smart execution.
            </p>
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
          {stats.map((stat) => (
            <li
              key={stat}
              className="rounded-3xl border border-border bg-surface px-6 py-8 text-center"
            >
              <p className="text-sm font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                {stat}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
