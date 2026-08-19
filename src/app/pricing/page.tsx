import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingBuilder from "@/components/PricingBuilder";
import PricingEducation from "@/components/PricingEducation";
import PricingFaq from "@/components/PricingFaq";
import PricingHero from "@/components/PricingHero";
import PricingSupport from "@/components/PricingSupport";
import { pricingFaqs } from "@/lib/pricing";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Build a TB Agency growth stack: paid ads at 10% of spend, influencer, creative, email/SMS, strategy, and support.",
  path: "/pricing",
});

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Navbar />
      <main>
        <PricingHero />
        <PricingBuilder />
        <PricingEducation />
        <PricingSupport />
        <PricingFaq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}