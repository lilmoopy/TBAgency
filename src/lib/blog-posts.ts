export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "paid-media-plays-winning",
    title: "The paid media plays winning right now",
    excerpt:
      "Channel mix shifts, creative fatigue signals, and the tests teams should run this quarter.",
    category: "Growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    date: "12 Jul 2026",
    readTime: "6 min read",
  },
  {
    slug: "influencer-roi-without-vanity-metrics",
    title: "Influencer ROI without the vanity metrics",
    excerpt:
      "How to structure whitelisting and content so partnerships become acquisition funnels.",
    category: "Influencer",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e5e948eb?auto=format&fit=crop&w=800&q=80",
    date: "8 Jul 2026",
    readTime: "5 min read",
  },
  {
    slug: "cro-fixes-that-move-revenue",
    title: "CRO fixes that move revenue fast",
    excerpt:
      "The on-page changes that consistently lift conversion without a full redesign.",
    category: "CRO",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    date: "3 Jul 2026",
    readTime: "4 min read",
  },
  {
    slug: "sponsored-content-that-converts",
    title: "Sponsored content that still converts",
    excerpt:
      "Native placements that feel editorial — and still hit CPA and ROAS goals.",
    category: "Content",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffecfa6ad5?auto=format&fit=crop&w=900&q=80",
    date: "28 Jun 2026",
    readTime: "5 min read",
  },
  {
    slug: "shopify-redesign-checklist",
    title: "The Shopify redesign checklist for brands scaling past seven figures",
    excerpt:
      "What to fix in theme architecture, PDP flow, and speed before you pour more budget into ads.",
    category: "Shopify",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80",
    date: "22 Jun 2026",
    readTime: "7 min read",
  },
  {
    slug: "custom-app-vs-off-the-shelf",
    title: "When a custom app beats off-the-shelf SaaS",
    excerpt:
      "The operational signals that mean you need your own tooling — and how to scope an MVP.",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    date: "15 Jun 2026",
    readTime: "6 min read",
  },
  {
    slug: "3pl-operations-playbook",
    title: "Building an ecommerce ops stack that survives peak season",
    excerpt:
      "Inventory sync, fulfillment routing, and the automations that keep CS tickets down.",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    date: "9 Jun 2026",
    readTime: "8 min read",
  },
  {
    slug: "dashboards-your-team-will-use",
    title: "Dashboards your team will actually use",
    excerpt:
      "How we design analytics views that drive weekly decisions instead of collecting dust.",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    date: "2 Jun 2026",
    readTime: "5 min read",
  },
];

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
