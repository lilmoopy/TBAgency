const members = [
  {
    name: "Ben Meli",
    handle: "Mogger",
    initials: "BM",
    bio: "Aspiring Firefighter, God Following, Kills the 2s at Tyler concerts. Incredible marketer, loves getting work done, going to the gym, and big believer in humanity.",
  },
  {
    name: "Thomas Lucchesi",
    handle: "FullStackMaxxer",
    initials: "TL",
    bio: "10 years of coding experience. Started as a kid at 15 making Minecraft plugins and posting Java tutorials on YouTube.",
  },
];

export default function BehindTheTeam() {
  return (
    <section
      className="px-4 pb-16 sm:px-6"
      aria-labelledby="behind-the-team-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="behind-the-team-heading"
          className="text-center text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
        >
          Behind the team
        </h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {members.map((member) => (
            <li
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-border bg-surface p-8 text-center sm:p-10"
            >
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full border border-input-border bg-hover text-lg font-semibold tracking-tight text-muted sm:h-32 sm:w-32"
                aria-hidden="true"
              >
                {member.initials}
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                {member.handle}
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-strong">
                {member.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
