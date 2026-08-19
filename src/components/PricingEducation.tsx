import { educationTopics } from "@/lib/pricing";

export default function PricingEducation() {
  return (
    <section
      id="education"
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
          Free
        </p>
        <h2
          id="education-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Basic education
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-strong">
          The fundamentals we give away on purpose. Enough to run a cleaner
          week — not the full operating system we use with paying brands.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {educationTopics.map((topic) => (
            <li
              key={topic.title}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                {topic.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-strong">
                {topic.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
