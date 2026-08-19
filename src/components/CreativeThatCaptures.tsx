"use client";

import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80",
    alt: "Creative brand photography shoot",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing team reviewing campaign creative",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    alt: "Team collaboration on content strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Creative directors reviewing designs",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Video production camera setup",
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b824a5f6?auto=format&fit=crop&w=900&q=80",
    alt: "Camera and multimedia equipment",
  },
];

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl bg-surface-muted sm:h-64 sm:w-96">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="384px"
      />
    </div>
  );
}

export default function CreativeThatCaptures() {
  const scrollItems = [...images, ...images];

  return (
    <section
      className="overflow-hidden pb-24"
      aria-labelledby="creative-that-captures-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2
          id="creative-that-captures-heading"
          className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Creative That Captures
        </h2>
        <p className="mt-3 text-lg text-muted-strong sm:text-xl">
          We craft multi-media marketing that secures sales.
        </p>
      </div>

      <div className="relative mt-12" aria-hidden="true">
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="creative-that-captures-scroll flex w-max gap-5 pl-5">
          {scrollItems.map((image, index) => (
            <ImageCard
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
