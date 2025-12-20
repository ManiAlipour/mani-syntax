import Skills from "@/components/providers/Skills";
import { About } from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

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
