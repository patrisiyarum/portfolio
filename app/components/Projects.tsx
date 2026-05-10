type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "kintsugi",
    year: "2026",
    blurb: "patient-facing HRD cancer interpreter",
    description:
      "An educational platform that helps cancer patients understand how their medications work at the molecular level. Profiles, symptom tracking, CT-scan upload with 3D viewing, and a clear explanation of how genetic variants affect drug effectiveness, built so patients walk into oncology appointments prepared. Named for the Japanese art of mending broken pottery with gold: showing the cracks, not hiding them.",
    tags: ["Web", "ML", "Genomics", "3D viz"],
    href: "https://kintsugi-lc08.onrender.com/",
  },
  {
    title: "flashinspector-ai",
    year: "2025",
    blurb: "AI fire-safety inspection",
    description:
      "Computer-vision pipeline that scans images and video for fire-safety compliance: fire extinguishers, smoke and fire, emergency-exit signs, and common code violations, using a YOLOv8 detector trained on Roboflow datasets. Deploys as a web app for fast, automated walkthroughs.",
    tags: ["YOLOv8", "PyTorch", "Computer Vision", "Roboflow"],
    href: "https://github.com/patrisiyarum/Flash-Inspector-AI",
  },
  {
    title: "langmatch",
    year: "2025",
    blurb: "Tinder-style language exchange for GT × Namseoul",
    description:
      "A language-exchange platform built for Georgia Tech students studying abroad at Namseoul University in Korea. Tinder-style swipe interface that helps them meet and befriend Korean partners who want to practice English, with profiles, interest tags, and a SQL-backed matching system. Live under the modlangs.gatech.edu domain.",
    tags: ["Web", "SQL", "Matching", "Deployed"],
    href: "https://languagematchmaker.modlangs.gatech.edu/home",
  },
  {
    title: "flightline",
    year: "2025",
    blurb: "ML system for Delta airlines crew comments",
    description:
      "A full-stack ML system I built for Delta Air Lines to replace a manual 10-hour-per-week task: classifying thousands of airline crew comments about on-board meal quality and service into actionable categories. Pipeline ingests raw comments, runs them through a fine-tuned classifier, and surfaces categorized results in a dashboard the operations team can act on.",
    tags: ["Full-Stack", "ML", "NLP", "Delta"],
    href: "https://deltaflightline.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            projects<span className="text-accent">.</span>
          </h2>
          <span className="font-mono text-sm text-muted">
            {projects.length.toString().padStart(2, "0")} selected
          </span>
        </div>
        <ul className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {projects.map((p) => (
            <li
              key={p.title}
              className="bg-background hover:bg-foreground/[0.02] transition group"
            >
              <article className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold font-mono tracking-tight">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-sm text-accent hover:underline font-mono"
                    >
                      visit ↗
                    </a>
                  )}
                </div>
                <p className="text-muted mb-4 italic">{p.blurb}</p>
                <p className="leading-relaxed mb-5 max-w-3xl">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono border border-border rounded-full text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
