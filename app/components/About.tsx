export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          about<span className="text-accent">.</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
          <p>
            My first love is my computer, specifically{" "}
            <span className="font-mono text-accent">Claude Code</span>.
            I&apos;m drawn to always building the next craziest idea that
            comes to my mind, whether it&apos;s in a remote Japanese
            village or at the local coffee shop.
          </p>
          <p>
            My second love is{" "}
            <span className="text-foreground font-medium">
              having meaningful impact with my work
            </span>
            : whether that&apos;s making cancer care more accessible to
            patients worldwide, or just saving you 30 minutes out of your day.
          </p>
        </div>
      </div>
    </section>
  );
}
