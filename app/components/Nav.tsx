import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
        <Link href="/" className="font-mono font-medium tracking-tight">
          patrisiya<span className="text-accent">.</span>
        </Link>
        <ul className="flex gap-6 text-muted">
          <li>
            <Link href="/#projects" className="hover:text-foreground transition">
              projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-foreground transition">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-foreground transition">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
