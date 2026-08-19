export const brandTypes = [
  {
    id: "ecommerce",
    label: "Ecommerce / D2C",
    blurb: "Storefront, paid, and retention — built around AOV, CVR, and MER.",
  },
  {
    id: "marketplace",
    label: "Marketplace / wholesale",
    blurb: "Amazon, retail, and wholesale brands that live on listings and repeat orders.",
  },
  {
    id: "saas",
    label: "App / SaaS",
    blurb: "Acquisition, onboarding, and lifecycle — not just ads.",
  },
  {
    id: "creator",
    label: "Creator / media",
    blurb: "Audience, partnerships, and a storefront that actually converts.",
  },
  {
    id: "services",
    label: "Service business",
    blurb: "Lead gen, booking funnels, and reviews — pipeline over pageviews.",
  },
] as const;

export type BrandId = (typeof brandTypes)[number]["id"];

export const engagementTracks = [
  {
    id: "diy",
    label: "Do it yourself",
    blurb: "You run the channels. We give you the math sheet, analytics, and calendar.",
  },
  {
    id: "managed",
    label: "Do it with us",
    blurb: "Pick the boxes you want us to run. Add more as the brand scales.",
  },
] as const;

export type EngagementId = (typeof engagementTracks)[number]["id"];
export type PlanTierId = 1 | 2 | 3;

export type PricingTier = {
  id: PlanTierId;
  name: string;
  tagline: string;
  price: number;
  features: string[];
};

export type PriceModel =
  | { kind: "flat"; amount: number }
  | { kind: "percent"; percent: number; floor: number };

export type GrowthModule = {
  id: string;
  name: string;
  tagline: string;
  includes: string[];
  price: PriceModel;
};

export const supportTiers = [
  // Ops note (internal): after ~2 months, once everything is documented
  // and we have 100% confidence, support can move to an offshore team.
  // Chargebacks stay with core TB — too important, needs reliable context.
  {
    id: 0,
    name: "Chatbot FAQ",
    price: 250,
    checkins: null,
    ticketCap: null,
    channels: ["Chatbot"],
    features: [
      "FAQ chatbot trained on your policies, shipping, and product questions",
      "Deflects repetitive tickets before they hit the inbox",
      "Escalation path into email when a human is needed",
    ],
  },
  {
    id: 1,
    name: "Email support",
    price: 500,
    checkins: 1,
    ticketCap: 150,
    channels: ["Chatbot", "Email"],
    features: [
      "Includes Chatbot FAQ",
      "Email support only",
      "1 daily check-in, weekdays",
      "Up to 150 tickets per month",
    ],
  },
  {
    id: 2,
    name: "Email + live chat",
    price: 950,
    checkins: 3,
    ticketCap: 300,
    channels: ["Chatbot", "Email", "Live chat"],
    features: [
      "Includes Email support",
      "Email and live chat",
      "3 daily check-ins, weekdays",
      "Up to 300 tickets per month",
    ],
  },
  {
    id: 3,
    name: "Full CX desk",
    price: 2000,
    checkins: 5,
    ticketCap: null,
    channels: ["Chatbot", "Email", "Live chat", "Chargebacks", "Reviews"],
    features: [
      "Includes Email + live chat",
      "Email and live chat",
      "5 daily check-ins",
      "Chargeback disputes — handled by our core team, not outsourced",
      "Review management across your public listings",
    ],
  },
] as const;

export type SupportTierId = (typeof supportTiers)[number]["id"];

export const diyTiers: [PricingTier, PricingTier, PricingTier] = [
  {
    id: 1,
    name: "Math sheet",
    tagline: "The onboarding model every brand should have before they spend.",
    price: 397,
    features: [
      "Onboarding math sheet",
      "Marketing analytics dashboard access",
      "Weekly snapshot of spend, revenue, and the one conversion metric that matters",
    ],
  },
  {
    id: 2,
    name: "Operating kit",
    tagline: "Math plus the calendar and voice so your team can ship without us.",
    price: 797,
    features: [
      "Everything in Math sheet",
      "Marketing calendar templates",
      "Brand voice guide",
      "Playbooks for paid, social, and email/SMS",
    ],
  },
  {
    id: 3,
    name: "Operator",
    tagline: "We review the numbers with you. You still run the work.",
    price: 1497,
    features: [
      "Everything in Operating kit",
      "Monthly reports with a written review",
      "Biweekly office hours",
      "Async questions, capped each month",
    ],
  },
];

export const growthModules: GrowthModule[] = [
  {
    id: "strategy",
    name: "Strategy & analytics",
    tagline: "The operating system. Start here unless you already have it in-house.",
    includes: [
      "Onboarding math sheet",
      "Funnel strategy",
      "Promotional strategy",
      "Acquisition strategy",
      "Campaign strategy",
      "Customer journey strategy",
      "Customer segmentation",
      "Cross-channel campaign coordination",
      "Campaign implementation",
      "Marketing calendar",
      "Marketing analytics",
      "Monthly reports",
    ],
    price: { kind: "flat", amount: 2500 },
  },
  {
    id: "paid",
    name: "Paid ads",
    tagline: "We run the accounts. Media budget stays yours.",
    includes: [
      "Paid ads",
      "Boosting / Spark Ads",
      "Campaign implementation inside the ad accounts",
    ],
    price: { kind: "percent", percent: 10, floor: 1500 },
  },
  {
    id: "influencer",
    name: "Influencer",
    tagline: "Partnerships that sell, not just post.",
    includes: [
      "Influencer sourcing and management",
      "Gamification for influencer marketing",
      "Influencer personal pages",
    ],
    price: { kind: "flat", amount: 3000 },
  },
  {
    id: "creative",
    name: "Creative / UGC",
    tagline: "The assets paid, social, and email actually run.",
    includes: ["Video / UGC / creative", "Brand voice"],
    price: { kind: "flat", amount: 2500 },
  },
  {
    id: "social",
    name: "Organic social",
    tagline: "The feed, the community, the always-on presence.",
    includes: ["Organic social", "Social media", "Community building"],
    price: { kind: "flat", amount: 2000 },
  },
  {
    id: "lifecycle",
    name: "Email / SMS & CRM",
    tagline: "Retention, flows, and the money after first purchase.",
    includes: [
      "Email/SMS campaigns",
      "Email/SMS operations",
      "Email/SMS flows",
      "Automations",
      "Loyalty program execution",
      "Customer retention",
      "Lifecycle journeys",
      "CRM implementation",
    ],
    price: { kind: "flat", amount: 2500 },
  },
  {
    id: "content",
    name: "Content & PR",
    tagline: "Owned content and partnerships that make paid cheaper.",
    includes: ["Blog / content marketing", "PR / partnerships"],
    price: { kind: "flat", amount: 1800 },
  },
];

export type ModuleId = (typeof growthModules)[number]["id"];

export const recommendedModulesByBrand: Record<BrandId, ModuleId[]> = {
  ecommerce: ["strategy", "paid", "creative", "lifecycle"],
  marketplace: ["strategy", "paid", "lifecycle", "content"],
  saas: ["strategy", "paid", "lifecycle", "content"],
  creator: ["strategy", "influencer", "social", "creative"],
  services: ["strategy", "paid", "social", "content"],
};

export const pricingFaqs = [
  {
    question: "How did you pick these prices?",
    answer:
      "We grouped the work into boxes instead of 30 separate line items. Flat retainers cover people time. Paid ads are 10% of monthly ad spend because the workload scales with budget. Support stays at the rates we already run. Everything is a starting template — we confirm scope on the call.",
  },
  {
    question: "How does the 10% paid ads fee work?",
    answer:
      "If you spend $20,000 on ads that month, our fee is $2,000. If you spend $8,000, 10% would be $800 — the floor is $1,500 so the account is still worth running. Ad spend itself is billed by Meta, TikTok, Google, and so on. It never sits inside our retainer.",
  },
  {
    question: "What is the onboarding math sheet?",
    answer:
      "A one-page model of how your brand actually makes money — contribution margin, breakeven CAC, MER, and what a good month looks like before we touch ads or creative. It is included with any Do it with us work, and it is the core of the DIY Math sheet tier.",
  },
  {
    question: "How do support tiers stack?",
    answer:
      "Each support tier includes the one before it. Chatbot FAQ is the base. Email includes chatbot. Live chat includes email. The full desk includes live chat, plus chargebacks and review management.",
  },
  {
    question: "Who handles chargebacks?",
    answer:
      "Chargeback disputes stay with our core team. They are too important to hand off, and they need someone who already understands the brand, the offers, and the payment flow.",
  },
];

export const educationTopics = [
  {
    title: "Start with the math sheet, not the ads",
    body: "If you do not know contribution margin, breakeven CAC, and a target MER, paid spend is a guess. The onboarding math sheet is the basic version of that model — enough to stop bad spend, not the full forecast we build with retainers.",
  },
  {
    title: "Why paid is a percentage",
    body: "A $5k/month account and a $80k/month account are not the same job. 10% of budget keeps the fee honest as spend scales, with a $1,500 floor so small accounts still get a real buyer, not leftover time.",
  },
  {
    title: "Pick boxes that share a customer journey",
    body: "Paid without creative dies in week three. Email without segmentation is a blast calendar. Influencer without a landing page wastes the click. Strategy & analytics is the box that makes the others talk to each other.",
  },
  {
    title: "When to add a support desk",
    body: "If the same ten questions hit the inbox every day, start with the FAQ chatbot. Add email when a human has to touch refunds or delays. Add live chat when you are losing carts in the moment. Add chargebacks and reviews when those are already costing you revenue.",
  },
];

export type PricingSelection = {
  brandId: BrandId | null;
  engagementId: EngagementId | null;
  tierId: PlanTierId | null;
  moduleIds: ModuleId[];
  supportId: SupportTierId | null;
};

export function formatMonthly(amount: number, prefix?: "from") {
  const value = `$${amount.toLocaleString("en-US")}/mo`;
  return prefix === "from" ? `From ${value}` : value;
}

export function formatModulePrice(price: PriceModel) {
  if (price.kind === "percent") {
    return `${price.percent}% of monthly ad spend (${formatMonthly(price.floor)} min)`;
  }
  return formatMonthly(price.amount);
}

export function getBrand(id: BrandId) {
  return brandTypes.find((brand) => brand.id === id) ?? brandTypes[0];
}

export function getSupportTier(id: SupportTierId) {
  return supportTiers.find((tier) => tier.id === id) ?? supportTiers[0];
}

export function getDiyTier(tierId: PlanTierId) {
  return diyTiers[tierId - 1];
}

export function getModule(id: ModuleId) {
  return growthModules.find((item) => item.id === id);
}

export function getSelectionTotal(selection: PricingSelection) {
  const support =
    selection.supportId === null || selection.supportId === undefined
      ? null
      : getSupportTier(selection.supportId);
  const supportPrice = support?.price ?? 0;

  if (selection.engagementId === "diy" && selection.tierId) {
    const plan = getDiyTier(selection.tierId);
    return {
      plan,
      modules: [] as GrowthModule[],
      support,
      retainerTotal: plan.price + supportPrice,
      paidFloor: 0,
      hasPaidPercent: false,
      startingFrom: plan.price + supportPrice,
    };
  }

  const modules = selection.moduleIds
    .map((id) => getModule(id))
    .filter((item): item is GrowthModule => Boolean(item));
  const retainerTotal = modules.reduce(
    (sum, item) => sum + (item.price.kind === "flat" ? item.price.amount : 0),
    0,
  );
  const paid = modules.find((item) => item.price.kind === "percent");
  const paidFloor = paid && paid.price.kind === "percent" ? paid.price.floor : 0;

  return {
    plan: null,
    modules,
    support,
    retainerTotal: retainerTotal + supportPrice,
    paidFloor,
    hasPaidPercent: Boolean(paid),
    startingFrom: retainerTotal + supportPrice + paidFloor,
  };
}

export function buildContactHref(selection: PricingSelection) {
  const params = new URLSearchParams();
  if (selection.brandId) params.set("brand", selection.brandId);
  if (selection.engagementId) params.set("work", selection.engagementId);
  if (selection.engagementId === "diy" && selection.tierId) {
    params.set("tier", String(selection.tierId));
  }
  if (selection.engagementId === "managed" && selection.moduleIds.length > 0) {
    params.set("modules", selection.moduleIds.join(","));
  }
  if (selection.supportId !== null && selection.supportId !== undefined) {
    params.set("support", String(selection.supportId));
  }
  const query = params.toString();
  return query ? `/contact?${query}` : "/contact";
}

export function parsePricingSearchParams(params: {
  brand?: string;
  work?: string;
  tier?: string;
  modules?: string;
  support?: string;
}): PricingSelection {
  const brand = brandTypes.find((item) => item.id === params.brand);
  const work = engagementTracks.find((item) => item.id === params.work);
  const tierNumber = Number(params.tier);
  const tier =
    work?.id === "diy" &&
    (tierNumber === 1 || tierNumber === 2 || tierNumber === 3)
      ? (tierNumber as PlanTierId)
      : null;
  const moduleIds = (params.modules ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter((id): id is ModuleId =>
      growthModules.some((item) => item.id === id),
    );
  const supportNumber = Number(params.support);
  const support = supportTiers.find((item) => item.id === supportNumber);

  return {
    brandId: brand?.id ?? null,
    engagementId: work?.id ?? null,
    tierId: tier,
    moduleIds: work?.id === "managed" ? moduleIds : [],
    supportId: support ? support.id : null,
  };
}

export function describeSelection(selection: PricingSelection) {
  const parts: string[] = [];
  if (selection.brandId) parts.push(getBrand(selection.brandId).label);
  if (selection.engagementId === "diy" && selection.tierId) {
    parts.push(`Do it yourself — ${getDiyTier(selection.tierId).name}`);
  }
  if (selection.engagementId === "managed" && selection.moduleIds.length > 0) {
    const names = selection.moduleIds
      .map((id) => getModule(id)?.name)
      .filter(Boolean)
      .join(", ");
    parts.push(`Do it with us — ${names}`);
  }
  if (selection.supportId !== null && selection.supportId !== undefined) {
    parts.push(`Support: ${getSupportTier(selection.supportId).name}`);
  }
  return parts;
}
