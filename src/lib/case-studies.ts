export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  excerpt: string;
  services: string[];
  image?: string;
  highlight?: string;
};

const slugs = [
  "fit-bagel",
  "easylunches",
  "endlessmarket",
  "northshore-canine-academy",
  "crazy-croc",
  "summit-mechanical-solutions",
  "coldchain3pl",
];

export const caseStudies: CaseStudy[] = slugs.map((slug) => ({
  slug,
  name: "",
  industry: "",
  excerpt: "",
  services: [],
}));

export type Partner = {
  name: string;
  slug: string;
  logo?: string;
  logoContained?: boolean;
};

const partnerNames: Record<string, string> = {
  "fit-bagel": "Fit Bagel",
  easylunches: "Easy Lunches",
  endlessmarket: "Endless Market",
  "northshore-canine-academy": "NorthShore Canine Academy",
  "crazy-croc": "Crazy Croc",
  "summit-mechanical-solutions": "Summit Mechanical Solutions",
  coldchain3pl: "ColdChain3PL",
  "marketing-fulfillment": "Marketing Fulfillment",
};

const partnerLogos: Partial<
  Record<string, { src: string; contained?: boolean }>
> = {
  coldchain3pl: { src: "/partners/coldchain3pl-favicon.png" },
  "fit-bagel": { src: "/partners/fit-bagel.png", contained: true },
  easylunches: { src: "/partners/easylunches.png" },
  endlessmarket: { src: "/partners/endless-market.png", contained: true },
  "northshore-canine-academy": {
    src: "/partners/northshore-canine-academy.png",
  },
  "marketing-fulfillment": {
    src: "/partners/marketing-fulfillment.jpg",
    contained: true,
  },
};

const extraPartners: Partner[] = [
  {
    name: "Marketing Fulfillment",
    slug: "marketing-fulfillment",
    logo: partnerLogos["marketing-fulfillment"]?.src,
    logoContained: partnerLogos["marketing-fulfillment"]?.contained,
  },
];

export const partners: Partner[] = [
  ...caseStudies.map((study) => {
    const logo = partnerLogos[study.slug];

    return {
      name: partnerNames[study.slug] ?? study.name,
      slug: study.slug,
      logo: logo?.src,
      logoContained: logo?.contained,
    };
  }),
  ...extraPartners,
];
