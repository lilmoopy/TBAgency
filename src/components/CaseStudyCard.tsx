import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = CaseStudy & {
  className?: string;
};

export default function CaseStudyCard({
  name,
  industry,
  excerpt,
  services,
  image,
  slug,
  highlight,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-input-focus-border ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <Image
          src={image}
          alt={`${name} case study — ${industry}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur-sm">
          <span className="sr-only">{name} logo</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              {industry}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground">
              {name}
            </h3>
          </div>
          {highlight && (
            <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-strong">
              {highlight}
            </span>
          )}
        </div>

        <p className="mt-4 flex-1 text-base leading-relaxed text-muted-strong">
          {excerpt}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-full bg-hover px-3 py-1 text-xs font-medium text-body"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
