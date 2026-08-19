export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  excerpt: string;
  services: string[];
  image: string;
  highlight?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fit-bagel",
    name: "Fit Bagel",
    industry: "Food & Beverage",
    excerpt:
      "Scaling a DTC bagel brand with Shopify optimization, paid acquisition, and fulfillment workflows built for weekly subscribers.",
    services: ["Shopify", "Growth Marketing", "Operations"],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    highlight: "Subscription growth",
  },
  {
    slug: "easylunches",
    name: "EasyLunches",
    industry: "Meal Delivery",
    excerpt:
      "Launching a meal-prep platform with custom ordering flows, conversion-focused landing pages, and performance creative testing.",
    services: ["Custom Apps", "CRO", "Paid Media"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    highlight: "Checkout conversion",
  },
  {
    slug: "endlessmarket",
    name: "EndlessMarket",
    industry: "Ecommerce Marketplace",
    excerpt:
      "Building a multi-vendor storefront with catalog automation, analytics dashboards, and acquisition campaigns across paid social.",
    services: ["Ecommerce Platforms", "Analytics", "Growth Marketing"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    highlight: "Multi-vendor scale",
  },
  {
    slug: "northshore-canine-academy",
    name: "NorthShore Canine Academy",
    industry: "Pet Services",
    excerpt:
      "Redesigning the booking experience, local SEO foundations, and paid campaigns to fill training programs year-round.",
    services: ["Web Redesign", "Technical SEO", "Paid Ads"],
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
    highlight: "Local demand",
  },
  {
    slug: "crazy-croc",
    name: "Crazy Croc",
    industry: "Consumer Brand",
    excerpt:
      "Refreshing brand creative, influencer partnerships, and Shopify UX to turn product launches into repeatable revenue events.",
    services: ["Creative", "Influencer", "Shopify"],
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    highlight: "Launch velocity",
  },
  {
    slug: "summit-mechanical-solutions",
    name: "Summit Mechanical Solutions",
    industry: "B2B Services",
    excerpt:
      "A credibility-first website rebuild, lead-gen landing pages, and CRM automations to shorten the commercial sales cycle.",
    services: ["Web Development", "Automation", "CRO"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    highlight: "Qualified leads",
  },
  {
    slug: "coldchain3pl",
    name: "ColdChain3PL",
    industry: "Logistics & 3PL",
    excerpt:
      "Operational tooling, client dashboards, and a site that communicates cold-chain capabilities to high-intent ecommerce brands.",
    services: ["3PL Operations", "Custom Tools", "Technical SEO"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    highlight: "Ops visibility",
  },
];

export type Partner = {
  name: string;
  slug: string;
  logo?: string;
  logoContained?: boolean;
};

const partnerLogos: Partial<
  Record<string, { src: string; contained?: boolean }>
> = {
  coldchain3pl: { src: "/partners/cold-chain-3pl.png" },
  "fit-bagel": { src: "/partners/fit-bagel.png", contained: true },
};

export const partners: Partner[] = caseStudies.map((study) => {
  const logo = partnerLogos[study.slug];

  return {
    name: study.name,
    slug: study.slug,
    logo: logo?.src,
    logoContained: logo?.contained,
  };
});
