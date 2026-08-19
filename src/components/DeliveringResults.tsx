const testimonials = [
  {
    quote:
      "TB Agency rebuilt our acquisition mix from the ground up. Within two quarters we cut CPA by 38% and more than doubled ROAS on paid social.",
    name: "Alex Rivera",
    role: "VP Growth",
    company: "Northline",
    result: "2.1× ROAS",
  },
  {
    quote:
      "Their CRO program turned our site into a real closer. Conversion rate jumped 27%, and pipeline quality went up with it.",
    name: "Jordan Blake",
    role: "Head of Marketing",
    company: "Harbor Labs",
    result: "+27% CVR",
  },
  {
    quote:
      "Influencer and sponsored content finally felt measurable. We hit our CPA targets three months straight while scaling spend.",
    name: "Sam Okonkwo",
    role: "Founder",
    company: "Field & Form",
    result: "CPA on target",
  },
];

export default function DeliveringResults() {
  return (
    <section
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="delivering-results-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="delivering-results-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            Delivering Results
          </h2>
          <p className="mt-3 text-lg text-muted-strong sm:text-xl">
            What our clients say about their ROI.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-3xl border border-border bg-surface p-7 sm:p-8"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                {item.result}
              </p>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-body">
                “{item.quote}”
              </blockquote>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.role}, {item.company}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
