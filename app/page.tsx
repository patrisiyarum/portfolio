import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Photos />
        <About />
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
