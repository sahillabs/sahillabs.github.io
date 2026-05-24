import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import TechMarquee from "@/components/TechMarquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <TechMarquee />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
