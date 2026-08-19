const testimonials = Array.from({ length: 3 }, () => ({
  quote: "",
  name: "",
  role: "",
  company: "",
  result: "",
}));

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
          {testimonials.map((item, index) => {
            const attribution = [item.role, item.company]
              .filter(Boolean)
              .join(", ");

            return (
              <li
                key={index}
                className="flex flex-col rounded-3xl border border-border bg-surface p-7 sm:p-8"
              >
                {item.result ? (
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                    {item.result}
                  </p>
                ) : (
                  <div className="h-3 w-16 rounded-full bg-hover" />
                )}
                {item.quote ? (
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-body">
                    “{item.quote}”
                  </blockquote>
                ) : (
                  <div className="mt-6 flex-1 space-y-2">
                    <div className="h-3 w-full rounded-full bg-hover" />
                    <div className="h-3 w-11/12 rounded-full bg-hover" />
                    <div className="h-3 w-3/4 rounded-full bg-hover" />
                  </div>
                )}
                <footer className="mt-8 border-t border-border pt-5">
                  {item.name ? (
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                  ) : (
                    <div className="h-4 w-24 rounded-full bg-hover" />
                  )}
                  {attribution ? (
                    <p className="mt-1 text-sm text-muted">{attribution}</p>
                  ) : (
                    <div className="mt-2 h-3 w-32 rounded-full bg-hover" />
                  )}
                </footer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
