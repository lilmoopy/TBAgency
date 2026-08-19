import type { Metadata } from "next";
import BuiltToConvert from "@/components/BuiltToConvert";
import Contact from "@/components/Contact";
import CreativeThatCaptures from "@/components/CreativeThatCaptures";
import DeliveringResults from "@/components/DeliveringResults";
import DontFallBehind from "@/components/DontFallBehind";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrganizationSchema from "@/components/OrganizationSchema";
import ProudPartners from "@/components/ProudPartners";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <Navbar />
      <main>
        <Hero />
        <ProudPartners />
        <BuiltToConvert />
        <CreativeThatCaptures />
        <DeliveringResults />
        <DontFallBehind />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
