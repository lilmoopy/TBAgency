import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StayUpdated from "@/components/StayUpdated";
import { getPaginatedPosts } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/seo";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  if (page > 1) {
    return createMetadata({
      title: `Blog — Page ${page}`,
      description:
        "Growth strategies, ecommerce playbooks, and insights from TB Agency.",
      path: "/blogs",
      noIndex: true,
    });
  }

  return createMetadata({
    title: "Blog",
    description:
      "Growth strategies, ecommerce playbooks, and insights from TB Agency.",
    path: "/blogs",
  });
}

export default async function BlogsPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const { posts, currentPage, totalPages } = getPaginatedPosts(page);

  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid
          posts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <StayUpdated />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
