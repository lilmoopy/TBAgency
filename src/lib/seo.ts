import type { Metadata } from "next";

export const siteConfig = {
  name: "TB Agency",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tbagency.com",
  platformUrl: "https://platform.tbagency.co",
  defaultTitle:
    "TB Agency | Full-Stack Growth Marketing for Ecommerce Brands",
  description:
    "TB Agency is a growth agency for ecommerce brands — paid ads, influencer, creative, email/SMS, and customer support from London to Chicago.",
  ogImage: "/tba-logo-extended.png",
} as const;

type CreateMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
  absoluteTitle?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noIndex = false,
  image = siteConfig.ogImage,
  absoluteTitle = false,
}: CreateMetadataOptions): Metadata {
  const canonicalPath = path || "/";
  const url = `${siteConfig.url}${canonicalPath}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  const brandedTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/tba-logo-short.png`,
    description: siteConfig.description,
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/tba-logo-short.png`,
      },
    },
  };
}

export function structuredDataJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}
