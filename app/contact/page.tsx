import type { Metadata } from "next";
import Nav from "../components/Nav";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "contact · patrisiya rumyantseva",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-12">
        <Contact />
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
