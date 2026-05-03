import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

type Photo = { src: string; alt: string };

function loadPhotos(): Photo[] {
  const dir = path.join(process.cwd(), "public", "photos");
  try {
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort();
    return files.map((f) => ({
      src: `/photos/${f}`,
      alt: f.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
    }));
  } catch {
    return [];
  }
}

export default function Photos() {
  const photos = loadPhotos();

  if (photos.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            moments<span className="text-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-muted">
            always somewhere
          </span>
        </div>
        <div className="overflow-x-auto -mx-6 px-6">
          <ul className="flex gap-4 pb-2">
            {photos.map((p) => (
              <li
                key={p.src}
                className="relative shrink-0 w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-foreground/5"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
