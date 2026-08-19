import Link from "next/link";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  function pageHref(page: number) {
    return page === 1 ? "/blogs" : `/blogs?page=${page}`;
  }

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-3"
    >
      {prevPage ? (
        <Link
          href={pageHref(prevPage)}
          className="inline-flex items-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-nav transition-colors hover:bg-hover hover:text-foreground"
        >
          Previous
        </Link>
      ) : (
        <span className="inline-flex items-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-faint">
          Previous
        </span>
      )}

      <p className="text-sm text-muted">
        Page {currentPage} of {totalPages}
      </p>

      {nextPage ? (
        <Link
          href={pageHref(nextPage)}
          className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Next page
        </Link>
      ) : (
        <span className="inline-flex items-center rounded-xl bg-hover px-5 py-2.5 text-sm font-semibold text-faint">
          Next page
        </span>
      )}
    </nav>
  );
}
