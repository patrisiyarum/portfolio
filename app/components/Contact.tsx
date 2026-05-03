const links = [
  { label: "email", href: "mailto:patrisiya141@gmail.com", display: "patrisiya141@gmail.com" },
  { label: "github", href: "https://github.com/patrisiyarum", display: "@patrisiyarum" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          let&apos;s talk<span className="text-accent">.</span>
        </h2>
        <p className="text-muted text-lg mb-12 max-w-xl">
          Always happy to hear about interesting problems. Research, side
          projects, or anything that doesn&apos;t fit neatly in one box.
        </p>
        <ul className="divide-y divide-border border-y border-border">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 group hover:px-2 transition-all"
              >
                <span className="font-mono text-sm text-muted">{l.label}</span>
                <span className="text-lg group-hover:text-accent transition">
                  {l.display}{" "}
                  <span className="inline-block group-hover:translate-x-1 transition">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
