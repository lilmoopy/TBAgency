"use client";

import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Analytics dashboard on laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c45904e857b9?auto=format&fit=crop&w=900&q=80",
    alt: "Developer workspace with code on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    alt: "Website design mockups on desk",
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
    alt: "Product UI on tablet and phone",
  },
  {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile app screens",
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    alt: "App interface on smartphone",
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

export default function BuiltToConvert() {
  const scrollItems = [...images, ...images];

  return (
    <section
      className="overflow-hidden pb-24"
      aria-labelledby="built-to-convert-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2
          id="built-to-convert-heading"
          className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Built to Convert
        </h2>
        <p className="mt-3 text-lg text-muted-strong sm:text-xl">
          We design high-performance websites that close deals.
        </p>
      </div>

      <div
        className="relative mt-12"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="built-to-convert-scroll flex w-max gap-5 pl-5">
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
