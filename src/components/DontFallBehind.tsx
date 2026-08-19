import Link from "next/link";
import BlogBubble from "@/components/BlogBubble";
import { blogPosts } from "@/lib/blog-posts";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 text-accent-foreground"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const [featured, vertical, ...bottom] = blogPosts;

export default function DontFallBehind() {
  return (
    <section
      id="blogs"
      className="px-4 pb-24 sm:px-6"
      aria-labelledby="dont-fall-behind-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="dont-fall-behind-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            Don&apos;t Fall Behind
          </h2>
          <p className="mt-3 text-lg text-muted-strong sm:text-xl">
            The strategies driving growth right now.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5 lg:items-stretch">
          <BlogBubble
            {...featured}
            className="lg:col-span-3"
            imageClassName="aspect-[16/10] min-h-[220px]"
          />
          <BlogBubble
            {...vertical}
            className="lg:col-span-2"
            imageClassName="aspect-[3/4] min-h-[280px] lg:min-h-0 lg:flex-1 lg:aspect-auto"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {bottom.slice(0, 2).map((post) => (
            <BlogBubble
              key={post.slug}
              {...post}
              imageClassName="aspect-[16/10]"
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            See More Blogs
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
