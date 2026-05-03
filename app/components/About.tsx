import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

function firstPhoto(): string | null {
  const dir = path.join(process.cwd(), "public", "photos");
  try {
    const file = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()[0];
    return file ? `/photos/${file}` : null;
  } catch {
    return null;
  }
}

export default function About() {
  const photo = firstPhoto();

  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            about<span className="text-accent">.</span>
          </h2>
          {photo && (
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-foreground/5">
              <Image
                src={photo}
                alt="patrisiya"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
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
