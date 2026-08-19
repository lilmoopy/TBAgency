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
    title: post.title || "Article",
    description: post.excerpt || undefined,
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

  const meta = [post.date, post.readTime].filter(Boolean).join(" · ");

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

          {post.category ? (
            <p className="mt-8 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              {post.category}
            </p>
          ) : (
            <div className="mt-8 h-3 w-20 rounded-full bg-hover" />
          )}
          {post.title ? (
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              {post.title}
            </h1>
          ) : (
            <div className="mt-5 h-9 w-64 rounded-full bg-hover" />
          )}
          {meta ? (
            <p className="mt-4 text-sm text-faint">{meta}</p>
          ) : (
            <div className="mt-4 h-3 w-32 rounded-full bg-hover" />
          )}
          {post.excerpt ? (
            <p className="mt-8 text-lg leading-relaxed text-muted-strong">
              {post.excerpt}
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
