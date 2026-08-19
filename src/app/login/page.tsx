import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/seo";

export default function LoginPage() {
  redirect(siteConfig.platformUrl);
}
