import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

type BlogBubbleProps = BlogPost & {
  className?: string;
  imageClassName?: string;
};

export default function BlogBubble({
  title,
  excerpt,
  category,
  image,
  slug,
  date,
  readTime,
  className = "",
  imageClassName = "aspect-[16/10]",
}: BlogBubbleProps) {
  const meta = [date, readTime].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/blogs/${slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-input-focus-border ${className}`}
    >
      <div className={`relative overflow-hidden bg-surface-muted ${imageClassName}`}>
        {image ? (
          <Image
            src={image}
            alt={title || "Blog post"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          {category ? (
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              {category}
            </p>
          ) : (
            <div className="h-3 w-16 rounded-full bg-hover" />
          )}
          {meta ? (
            <p className="text-xs text-faint">{meta}</p>
          ) : (
            <div className="h-3 w-24 rounded-full bg-hover" />
          )}
        </div>
        {title ? (
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
            {title}
          </h3>
        ) : (
          <div className="mt-4 h-6 w-3/4 rounded-full bg-hover" />
        )}
        {excerpt ? (
          <p className="mt-2 flex-1 text-base leading-relaxed text-muted-strong">
            {excerpt}
          </p>
        ) : (
          <div className="mt-4 flex-1 space-y-2">
            <div className="h-3 w-full rounded-full bg-hover" />
            <div className="h-3 w-5/6 rounded-full bg-hover" />
            <div className="h-3 w-2/3 rounded-full bg-hover" />
          </div>
        )}
      </div>
    </Link>
  );
}
