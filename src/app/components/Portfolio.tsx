import { Hero } from "./Hero";
import { About } from "./About";
import { Expertise } from "./Expertise";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";
import { Leadership } from "./Leadership";
import { Education } from "./Education";
import { Contact } from "./Contact";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#1a1a1a]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-white">Hadil</span>
            <span className="text-[#daff00]">.</span>
          </div>
          <div className="flex gap-6">
            <a 
              href="#projects" 
              className="text-[#B3B3B3] hover:text-[#daff00] transition-colors text-sm uppercase tracking-wider"
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="text-[#B3B3B3] hover:text-[#daff00] transition-colors text-sm uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <TechStack />
        <Leadership />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
