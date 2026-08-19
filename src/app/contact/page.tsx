import type { Metadata } from "next";
import Contact from "@/components/Contact";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a discovery call with TB Agency. Tell us your growth goals and we'll map a plan to scale your brand.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
