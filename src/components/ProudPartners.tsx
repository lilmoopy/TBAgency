import Image from "next/image";
import { partners } from "@/lib/case-studies";

export default function ProudPartners() {
  return (
    <section
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="proud-partners-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          id="proud-partners-heading"
          className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Proud Partners
        </h2>

        <p className="mt-3 text-lg text-muted-strong sm:text-xl">
          Driving Growth as One
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <li key={partner.slug}>
              {partner.logo ? (
                <div
                  className={`relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28 ${
                    partner.logoContained
                      ? "border border-border bg-white"
                      : ""
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className={
                      partner.logoContained ? "object-contain p-3" : "object-cover"
                    }
                  />
                </div>
              ) : (
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface sm:h-28 sm:w-28"
                  aria-label={`${partner.name} logo`}
                >
                  <span className="sr-only">{partner.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
