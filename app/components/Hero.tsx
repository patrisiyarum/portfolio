export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-32 sm:pt-36 sm:pb-44">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent mb-6 tracking-wide">
          // patrisiya rumyantseva
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
          always somewhere
          <br />
          <span className="text-muted">and</span> always building<span className="text-accent">.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
          I build at the edges where machine learning meets healthcare,
          web, and the messy realities in between. Currently focused on
          oncology genomics and patient-facing tools.
        </p>
        <div className="mt-12 flex gap-4 text-sm font-mono">
          <a
            href="#projects"
            className="px-5 py-3 bg-foreground text-background rounded-full hover:opacity-85 transition"
          >
            see what I&apos;ve built →
          </a>
          <a
            href="#contact"
            className="px-5 py-3 border border-border rounded-full hover:border-foreground transition"
          >
            say hi
          </a>
        </div>
      </div>
    </section>
  );
}
