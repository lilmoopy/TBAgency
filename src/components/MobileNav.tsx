"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, services } from "@/lib/navigation";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3.5 w-3.5 transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-nav transition-colors duration-200 ease-out hover:bg-hover hover:text-foreground"
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-[5.25rem] z-40 bg-background/60 backdrop-blur-sm sm:hidden"
            onClick={closeMenu}
          />

          <div
            id="mobile-nav-menu"
            className="absolute inset-x-0 top-full z-50 px-4 pt-3 sm:hidden"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/5">
              <ul>
                <li className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((current) => !current)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-nav transition-colors duration-200 ease-out hover:bg-hover hover:text-foreground"
                  >
                    Services
                    <ChevronIcon open={servicesOpen} />
                  </button>

                  {servicesOpen && (
                    <ul className="border-t border-border bg-background/50">
                      <li>
                        <Link
                          href="/#services"
                          onClick={closeMenu}
                          className="block border-b border-border px-4 py-3 pl-6 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-hover"
                        >
                          All services
                        </Link>
                      </li>
                      {services.map((service) => (
                        <li key={service.label}>
                          <Link
                            href={service.href}
                            onClick={closeMenu}
                            className="block border-b border-border px-4 py-3 pl-6 text-sm text-body transition-colors duration-200 ease-out last:border-b-0 hover:bg-hover hover:text-foreground"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-border last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-sm font-medium text-nav transition-colors duration-200 ease-out hover:bg-hover hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border p-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex h-11 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
