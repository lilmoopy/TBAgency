"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "My profile", href: "/team" },
  { label: "Account settings", href: "#" },
  { label: "Billing", href: "#" },
  { label: "Sign out", href: "#" },
];

export default function ProfileMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-label="Open account menu"
        aria-haspopup="true"
        className="relative h-9 w-9 overflow-hidden rounded-full border border-border bg-surface-muted transition-colors hover:border-input-focus-border"
      >
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="36px"
        />
      </button>

      <div className="pointer-events-none absolute right-0 top-full z-50 w-48 pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/5">
          <div className="border-b border-border px-4 py-3">
            <p className="text-sm font-semibold text-foreground">Thomas Lucchesi</p>
            <p className="mt-0.5 text-xs text-muted">thomas@tbagency.com</p>
          </div>

          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-body transition-colors hover:bg-hover hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
