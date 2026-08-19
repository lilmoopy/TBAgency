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
  return (
    <Link
      href={`/blogs/${slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-input-focus-border ${className}`}
    >
      <div className={`relative overflow-hidden bg-surface-muted ${imageClassName}`}>
        <Image
          src={image}
          alt={`${title} — ${category} article`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            {category}
          </p>
          <p className="text-xs text-faint">
            {date} · {readTime}
          </p>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-base leading-relaxed text-muted-strong">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
