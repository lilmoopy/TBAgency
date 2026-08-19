import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How TB Agency collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-36 sm:pt-44">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
