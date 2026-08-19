import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article",
      path: `/blogs/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="px-4 pb-28 pt-36 sm:px-6 sm:pt-44">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blogs"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            ← Back to blog
          </Link>

          <p className="mt-8 text-xs font-mono uppercase tracking-[0.2em] text-muted">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-faint">
            {post.date} · {post.readTime}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-muted-strong">
            {post.excerpt}
          </p>
          <p className="mt-6 text-base leading-relaxed text-body">
            Full article coming soon. In the meantime,{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              book a call
            </Link>{" "}
            to talk through how this applies to your brand.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
