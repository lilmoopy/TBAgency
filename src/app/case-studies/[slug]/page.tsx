import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { caseStudies } from "@/lib/case-studies";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return createMetadata({
      title: "Case Study",
      path: `/case-studies/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: study.name || "Case Study",
    description: study.excerpt || undefined,
    path: `/case-studies/${slug}`,
    noIndex: true,
    image: study.image,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="px-4 pb-28 pt-36 sm:px-6 sm:pt-44">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            ← Back to case studies
          </Link>

          {study.industry ? (
            <p className="mt-8 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              {study.industry}
            </p>
          ) : (
            <div className="mt-8 h-3 w-20 rounded-full bg-hover" />
          )}
          {study.name ? (
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              {study.name}
            </h1>
          ) : (
            <div className="mt-5 h-9 w-48 rounded-full bg-hover" />
          )}

          {study.services.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {study.services.map((service, index) => (
                <li
                  key={`${service}-${index}`}
                  className="rounded-full bg-hover px-3 py-1 text-xs font-medium text-body"
                >
                  {service}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 flex gap-2">
              <div className="h-6 w-16 rounded-full bg-hover" />
              <div className="h-6 w-20 rounded-full bg-hover" />
              <div className="h-6 w-14 rounded-full bg-hover" />
            </div>
          )}

          {study.excerpt ? (
            <p className="mt-8 text-lg leading-relaxed text-muted-strong">
              {study.excerpt}
            </p>
          ) : (
            <div className="mt-8 space-y-3">
              <div className="h-4 w-full rounded-full bg-hover" />
              <div className="h-4 w-11/12 rounded-full bg-hover" />
              <div className="h-4 w-3/4 rounded-full bg-hover" />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
