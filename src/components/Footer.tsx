import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Strategy & Analytics", href: "/pricing" },
      { label: "Paid Ads", href: "/pricing" },
      { label: "Influencer", href: "/pricing" },
      { label: "Email / SMS", href: "/pricing" },
      { label: "Customer Support", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 pb-12 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-body transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border" />

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted">
            © TBAgency 2028, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
