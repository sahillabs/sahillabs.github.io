import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import LivePreview from "@/components/LivePreview";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <LivePreview />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
