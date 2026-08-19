import BlogBubble from "@/components/BlogBubble";
import BlogPagination from "@/components/BlogPagination";
import type { BlogPost } from "@/lib/blog-posts";

type BlogGridProps = {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
};

export default function BlogGrid({
  posts,
  currentPage,
  totalPages,
}: BlogGridProps) {
  return (
    <section className="px-4 pb-16 sm:px-6" aria-label="Blog articles">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogBubble {...post} />
            </li>
          ))}
        </ul>

        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
}
