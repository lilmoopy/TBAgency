"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/navigation";

const navItemClassName =
  "inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium leading-none text-nav transition-colors hover:bg-hover hover:text-foreground";

export default function ServicesDropdown() {
  const [pinned, setPinned] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!pinned) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setPinned(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setPinned(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pinned]);

  return (
    <li ref={containerRef} className="group relative shrink-0">
      <button
        type="button"
        onClick={() => setPinned((current) => !current)}
        aria-expanded={pinned}
        aria-haspopup="true"
        className={`${navItemClassName} gap-1 border-0 bg-transparent duration-200 ease-out`}
      >
        Services
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className={`h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-focus-within:rotate-180 ${pinned ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`pointer-events-none absolute left-0 top-full z-50 w-80 pt-2 opacity-0 transition-opacity duration-300 ease-out delay-100 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:delay-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:delay-0 sm:left-1/2 sm:-translate-x-1/2 ${
          pinned ? "pointer-events-auto opacity-100" : ""
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/5">
          <div className="border-b border-border px-4 py-3">
            <Link
              href="/pricing"
              onClick={() => setPinned(false)}
              className="text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:text-body"
            >
              All services
            </Link>
            <p className="mt-0.5 text-xs text-muted">
              Full-stack growth for ecommerce brands
            </p>
          </div>

          <ul>
            {services.map((service) => (
              <li key={service.label}>
                <Link
                  href={service.href}
                  onClick={() => setPinned(false)}
                  className="block px-4 py-2.5 text-sm text-body transition-colors duration-200 ease-out hover:bg-hover hover:text-foreground"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
