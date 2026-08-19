import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnderConstruction from "@/components/UnderConstruction";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Login",
  description: "Client login for TB Agency is coming soon.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
}
