import { structuredDataJsonLd } from "@/lib/seo";

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataJsonLd()) }}
    />
  );
}
