import Link from "next/link";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import ServicesDropdown from "@/components/ServicesDropdown";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6">
      <nav
        className="relative mx-auto flex max-w-6xl flex-col gap-3 overflow-visible rounded-[2rem] border border-border-subtle bg-surface px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:px-6 sm:py-2.5"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-3 sm:justify-start">
          <Logo size={44} />

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>

        <div className="hidden flex-1 sm:block">
          <ul className="flex items-center gap-1">
            <ServicesDropdown />
            {navLinks.map((link) => (
              <li key={link.label} className="shrink-0">
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium leading-none text-nav transition-colors hover:bg-hover hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-nav transition-colors hover:bg-hover hover:text-foreground"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
