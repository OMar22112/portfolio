import { Nav } from "@/components/Nav";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <ChatWidget />
    </>
  );
}
