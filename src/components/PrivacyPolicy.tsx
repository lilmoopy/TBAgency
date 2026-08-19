import Link from "next/link";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          TB Agency (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates
          this website and provides growth marketing services to businesses. We
          respect your privacy and are committed to protecting your personal
          data.
        </p>
        <p className="mt-4">
          This policy explains what information we collect when you visit our
          site, how we use it, and the choices you have. It applies to visitors
          and prospective clients in the United Kingdom, United States, and
          anywhere else our site is accessed.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-foreground">
              Contact details you provide
            </strong>{" "}
            — such as your name, company name, company website, email address,
            how you heard about us, and any notes you include when you submit our
            contact form.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Chat messages
            </strong>{" "}
            — if you use our on-site chat assistant, messages are processed in
            your browser session. Live chat is not yet connected to a backend
            service; we do not permanently store chat conversations at this
            time.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Technical and usage data
            </strong>{" "}
            — such as your IP address, browser type, device information, pages
            visited, and referring URL. This may be collected automatically
            through standard server logs or analytics tools if enabled.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Preferences
            </strong>{" "}
            — such as your light or dark theme choice, stored locally in your
            browser.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to enquiries and schedule strategy calls</li>
          <li>Understand your business needs and prepare tailored recommendations</li>
          <li>Operate, maintain, and improve our website</li>
          <li>Communicate with you about our services, where you have asked us to</li>
          <li>Comply with legal obligations and protect our legitimate business interests</li>
        </ul>
        <p className="mt-4">
          We do not sell your personal information.
        </p>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    content: (
      <>
        <p>
          If you are in the UK or European Economic Area, we process personal
          data on the following legal bases under UK GDPR and EU GDPR:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-foreground">Consent</strong>{" "}
            — where you submit a form or otherwise choose to share information
            with us
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Legitimate interests
            </strong>{" "}
            — to operate our website, respond to enquiries, and grow our
            business in a way that does not override your rights
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Legal obligation
            </strong>{" "}
            — where we are required to retain or disclose information by law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    content: (
      <>
        <p>
          We use local storage in your browser to remember your theme preference
          (light or dark mode). This is a functional setting, not used for
          advertising.
        </p>
        <p className="mt-4">
          We may also use cookies or similar technologies for essential site
          operation or analytics in the future. If we introduce non-essential
          cookies, we will update this policy and, where required, ask for your
          consent before placing them.
        </p>
        <p className="mt-4">
          You can clear cookies and local storage at any time through your
          browser settings. Doing so may reset your theme preference.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    content: (
      <>
        <p>
          Our website may rely on third-party providers to deliver fonts,
          images, video, hosting, or form processing. These providers may
          process technical data (such as your IP address) when you load our
          pages. We choose reputable providers and limit data sharing to what
          is necessary to run the site.
        </p>
        <p className="mt-4">
          If you follow links to social networks or other external sites, their
          privacy policies apply — not ours.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep your data",
    content: (
      <p>
        We keep personal data only for as long as needed for the purposes
        described in this policy — typically while we are in active
        communication with you, or for a reasonable period afterwards so we can
        follow up on enquiries. We may retain certain records longer where
        required by law or for legitimate business purposes such as resolving
        disputes.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or restrict use of your personal data, to object to certain
          processing, to withdraw consent, and to receive a copy of your data
          in a portable format.
        </p>
        <p className="mt-4">
          UK and EEA residents also have the right to lodge a complaint with
          their local data protection authority. In the UK, this is the
          Information Commissioner&apos;s Office (ICO).
        </p>
        <p className="mt-4">
          California residents may have additional rights under the CCPA/CPRA,
          including the right to know what personal information we collect and
          the right to request deletion, subject to certain exceptions.
        </p>
        <p className="mt-4">
          To exercise any of these rights, please contact us using the details
          below. We will respond within the timeframes required by applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We implement appropriate technical and organisational measures to
        protect personal data against unauthorised access, loss, or misuse.
        No method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        Our website and services are directed at businesses and professionals.
        We do not knowingly collect personal data from anyone under 16. If you
        believe we have received such information, please contact us and we
        will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this privacy policy from time to time. The &quot;Last
        updated&quot; date at the top of this page will reflect the latest
        version. Material changes will be posted on this page. We encourage you
        to review this policy periodically.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>
          If you have questions about this privacy policy or how we handle your
          data, get in touch:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-foreground">TB Agency</strong>
          </li>
          <li>
            Via our{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              contact page
            </Link>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="px-4 pb-28 sm:px-6" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-border pb-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
            Legal
          </p>
          <h1
            id="privacy-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: 14 July 2026
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-strong">
            How TB Agency collects, uses, and protects your personal
            information when you visit our website or get in touch.
          </p>
        </header>

        <nav
          aria-label="Privacy policy sections"
          className="mt-10 rounded-2xl border border-border bg-surface p-6"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            On this page
          </p>
          <ol className="mt-4 columns-1 gap-x-8 space-y-2 text-sm sm:columns-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-body transition-colors hover:text-foreground"
                >
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-32 border-b border-border pb-12 last:border-b-0"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-body">
                {section.content}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
