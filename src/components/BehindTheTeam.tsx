const members = [
  {
    name: "Ben Meli",
    handle: "",
    initials: "BM",
    bio: "",
  },
  {
    name: "Thomas Lucchesi",
    handle: "",
    initials: "TL",
    bio: "",
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
              {member.handle ? (
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                  {member.handle}
                </p>
              ) : (
                <div className="mt-2 h-3 w-16 rounded-full bg-hover" />
              )}
              {member.bio ? (
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-strong">
                  {member.bio}
                </p>
              ) : (
                <div className="mt-6 w-full max-w-sm space-y-2">
                  <div className="mx-auto h-3 w-full rounded-full bg-hover" />
                  <div className="mx-auto h-3 w-5/6 rounded-full bg-hover" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
