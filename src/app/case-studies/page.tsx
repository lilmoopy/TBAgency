import type { Metadata } from "next";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CaseStudyHero from "@/components/CaseStudyHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description:
    "Client case studies from TB Agency — Shopify, growth marketing, operations, and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHero />
        <CaseStudyGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
