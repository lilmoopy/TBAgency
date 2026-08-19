import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudyGrid() {
  return (
    <section className="px-4 pb-28 sm:px-6" aria-label="Case studies">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard {...study} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
