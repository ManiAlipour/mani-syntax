import Skills from "@/src/components/providers/Skills";
import About from "@/src/components/sections/About";
import Blogs from "@/src/components/sections/Blogs";
import Contact from "@/src/components/sections/Contact";
import Hero from "@/src/components/sections/Hero";
import { Projects } from "@/src/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Skills />
      <Contact />
    </main>
  );
}
