export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  date: string;
  readTime: string;
};

const slugs = [
  "paid-media-plays-winning",
  "influencer-roi-without-vanity-metrics",
  "cro-fixes-that-move-revenue",
  "sponsored-content-that-converts",
  "shopify-redesign-checklist",
  "custom-app-vs-off-the-shelf",
  "3pl-operations-playbook",
  "dashboards-your-team-will-use",
];

export const blogPosts: BlogPost[] = slugs.map((slug) => ({
  slug,
  title: "",
  excerpt: "",
  category: "",
  date: "",
  readTime: "",
}));

export const POSTS_PER_PAGE = 6;

export function getPaginatedPosts(page: number) {
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    posts: blogPosts.slice(start, start + POSTS_PER_PAGE),
    currentPage,
    totalPages,
  };
}
