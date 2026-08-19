"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { themeCatalog } from "@/lib/themes";

function PaletteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M10 3.25A6.75 6.75 0 1 0 16.4 13.1c-.4.5-1.15.4-1.45-.2a2.25 2.25 0 0 0-2.05-1.3H12a2.5 2.5 0 0 1-2.5-2.5V8.5c0-.8.4-1.55 1.05-2 .55-.4.7-1.15.25-1.65A6.7 6.7 0 0 0 10 3.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="7.25" cy="8" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="5.75" r="0.9" fill="currentColor" />
      <circle cx="12.25" cy="6.25" r="0.9" fill="currentColor" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = themeCatalog.find((item) => item.id === theme) ?? themeCatalog[0];

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function handlePointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) close();
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Theme: ${current.label}. Open theme picker`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-muted transition-colors hover:bg-hover hover:text-foreground"
      >
        <PaletteIcon />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 w-56 pt-2">
          <div
            role="listbox"
            aria-label="Site themes"
            className="theme-menu overflow-hidden rounded-2xl border border-border bg-surface py-2 shadow-lg shadow-black/10"
          >
            <ul>
              {themeCatalog.map((item) => {
                const selected = item.id === theme;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setTheme(item.id);
                      }}
                      className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                        selected
                          ? "bg-hover text-foreground"
                          : "text-body hover:bg-hover hover:text-foreground"
                      }`}
                    >
                      <span
                        className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-border"
                        style={{ background: item.swatch }}
                      >
                        <span
                          className="absolute inset-y-0 right-0 w-1/2"
                          style={{ background: item.accent }}
                        />
                      </span>
                      <span className="flex-1 font-medium">{item.label}</span>
                      {selected && <span className="text-xs text-muted">On</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
