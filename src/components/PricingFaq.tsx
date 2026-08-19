import { pricingFaqs } from "@/lib/pricing";

export default function PricingFaq() {
  return (
    <section
      id="pricing-faq"
      className="px-4 pb-16 sm:px-6"
      aria-labelledby="pricing-faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="pricing-faq-heading"
          className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Pricing questions
        </h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {pricingFaqs.map((item) => (
            <div key={item.question} className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-base font-semibold text-foreground md:pr-8">
                {item.question}
              </dt>
              <dd className="text-base leading-relaxed text-muted-strong md:col-span-2">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
