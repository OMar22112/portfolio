import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <ChatWidget />
    </>
  );
}
