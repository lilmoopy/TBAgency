import type { Metadata } from "next";
import BehindTheTeam from "@/components/BehindTheTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamHero from "@/components/TeamHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Team",
  description:
    "Meet the TB Agency team — a growth agency built around your business, from London to Chicago.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamHero />
        <BehindTheTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
