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
