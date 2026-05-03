import type { Metadata } from "next";
import Nav from "../components/Nav";
import About from "../components/About";

export const metadata: Metadata = {
  title: "about · patrisiya rumyantseva",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-12">
        <About />
      </main>
      <footer className="border-t border-border py-8 px-6 text-sm text-muted">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Patrisiya Rumyantseva</span>
          <span className="font-mono">always somewhere, always building</span>
        </div>
      </footer>
    </>
  );
}
