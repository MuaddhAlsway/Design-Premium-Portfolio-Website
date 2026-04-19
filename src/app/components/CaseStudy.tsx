import { CaseStudyHero } from "./case-study/CaseStudyHero";
import { CaseStudyContext } from "./case-study/CaseStudyContext";
import { CaseStudyDiagnosis } from "./case-study/CaseStudyDiagnosis";
import { CaseStudyFramework } from "./case-study/CaseStudyFramework";
import { CaseStudyArchitecture } from "./case-study/CaseStudyArchitecture";
import { CaseStudyExecution } from "./case-study/CaseStudyExecution";
import { CaseStudyImpact } from "./case-study/CaseStudyImpact";
import { CaseStudyReflection } from "./case-study/CaseStudyReflection";
import { CaseStudyCTA } from "./case-study/CaseStudyCTA";

export function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#1a1a1a]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            <span className="text-white">Hadil</span>
            <span className="text-[#daff00]">.</span>
          </a>
          <div className="flex gap-6">
            <a 
              href="/" 
              className="text-[#B3B3B3] hover:text-[#daff00] transition-colors text-sm uppercase tracking-wider"
            >
              Portfolio
            </a>
            <a 
              href="mailto:hadil.alsewaiee@example.com" 
              className="text-[#B3B3B3] hover:text-[#daff00] transition-colors text-sm uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <CaseStudyHero />
        <CaseStudyContext />
        <CaseStudyDiagnosis />
        <CaseStudyFramework />
        <CaseStudyArchitecture />
        <CaseStudyExecution />
        <CaseStudyImpact />
        <CaseStudyReflection />
        <CaseStudyCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="container mx-auto px-6 text-center text-[#B3B3B3]">
          <p className="mb-2">
            <span className="text-white font-semibold">Hadil Al-Sewaiee</span> — Strategic Tactical Product Engineer
          </p>
          <p className="text-sm">
            Building scalable systems that win markets
          </p>
        </div>
      </footer>
    </div>
  );
}
