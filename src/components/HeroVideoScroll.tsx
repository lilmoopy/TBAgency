"use client";

const videos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
];

function VideoCard({ src }: { src: string }) {
  return (
    <div className="relative h-[85%] w-52 shrink-0 overflow-hidden rounded-xl bg-surface-muted sm:w-56">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        tabIndex={-1}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function HeroVideoScroll() {
  const scrollItems = [...videos, ...videos];

  return (
    <div
      className="pointer-events-none relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[540px]"
      aria-hidden="true"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
      }}
    >
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="hero-video-scroll flex h-full flex-row items-center gap-4 px-3">
        {scrollItems.map((src, index) => (
          <VideoCard key={`${src}-${index}`} src={src} />
        ))}
      </div>
    </div>
  );
}
