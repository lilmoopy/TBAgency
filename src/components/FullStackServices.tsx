import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Paid Ads & Acquisition",
    body: "We run paid accounts and Spark / boosting campaigns. The fee is 10% of monthly ad spend, with a $1,500 floor. Media budget stays yours — we take the buying, testing, and reporting.",
    href: "/pricing",
  },
  {
    title: "Influencer & Creative",
    body: "Influencer management, gamification, personal pages, plus video / UGC and brand voice so paid and organic have something worth running.",
    href: "/pricing",
  },
  {
    title: "Lifecycle, Email & CRM",
    body: "Email/SMS campaigns, flows, automations, loyalty, retention, and CRM — the work that makes a first purchase come back.",
    href: "/pricing",
  },
  {
    title: "Strategy & Analytics",
    body: "Math sheet, funnel and campaign strategy, marketing calendar, and monthly reports — the operating system the other boxes run on.",
    href: "/pricing",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 text-accent-foreground"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FullStackServices() {
  return (
    <section
      id="services"
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="services-heading"
              className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              Full Stack Services
            </h2>
            <p className="mt-3 max-w-md text-lg text-muted-strong sm:text-xl">
              The complete growth system, or just the boxes you need.
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on growth strategy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-3xl border border-border bg-surface p-7 sm:p-8"
            >
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-strong">
                {service.body}
              </p>
              <Link
                href={service.href}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Learn More
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
