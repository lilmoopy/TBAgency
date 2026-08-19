"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LogoProps = {
  className?: string;
  size?: number;
};

export default function Logo({ className = "", size = 40 }: LogoProps) {
  const pathname = usePathname();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="TB Agency home"
      className={`relative block shrink-0 overflow-hidden rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/tba-logo-short.png"
        alt="TB Agency"
        fill
        priority
        sizes={`${size}px`}
        className="object-contain object-center"
      />
    </Link>
  );
}
