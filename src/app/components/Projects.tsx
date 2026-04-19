import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Education Recommender System",
    description: "Intelligent course-to-career matching system leveraging machine learning and knowledge graphs to improve educational outcomes.",
    stack: ["Python", "Machine Learning", "Knowledge Graph", "ETL"],
    impact: "Improved course-to-career matching accuracy"
  },
  {
    title: "Operations Automation Platform (TRQ Studio)",
    description: "Comprehensive backend system designed to streamline internal operations and enhance delivery efficiency.",
    stack: ["Backend Systems", "Workflow Engineering", "Automation"],
    impact: "Optimized internal operations & delivery efficiency",
    caseStudy: true
  },
  {
    title: "Real-Time Sign Language Detection System",
    description: "Computer vision-based system for real-time gesture recognition using convolutional neural networks.",
    stack: ["Python", "OpenCV", "CNN", "Keras"],
    impact: "Computer vision-based gesture recognition"
  },
  {
    title: "Product-Market Fit Strategy Framework",
    description: "Strategic framework for analyzing market positioning and driving revenue stabilization through data-driven insights.",
    stack: ["Strategy", "Market Analysis", "Data-Driven"],
    impact: "Market repositioning & revenue stabilization"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            04 / Selected Work
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Strategic Systems Portfolio
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
              >
                {project.caseStudy ? (
                  <a href="/case-study" className="block h-full">
                    <div className="h-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 transition-all hover:border-[#daff00] hover:shadow-[0_0_40px_rgba(218,255,0,0.15)] hover:-translate-y-1 cursor-pointer">
                      {/* Case Study Badge */}
                      <div className="inline-block px-3 py-1 bg-[#daff00] text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        View Case Study
                      </div>

                      {/* Title with Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#daff00] transition-colors flex-1">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-[#daff00] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                      </div>

                      {/* Description */}
                      <p className="text-[#B3B3B3] mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#1a1a1a] border border-[#1a1a1a] text-[#daff00] text-sm rounded-full group-hover:border-[#daff00] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Impact */}
                      <div className="pt-4 border-t border-[#1a1a1a]">
                        <div className="text-sm text-[#B3B3B3] mb-1">Impact:</div>
                        <div className="text-white font-medium">{project.impact}</div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="h-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 transition-all hover:border-[#daff00] hover:shadow-[0_0_40px_rgba(218,255,0,0.15)] hover:-translate-y-1">
                    {/* Title with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#daff00] transition-colors flex-1">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[#daff00] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                    </div>

                    {/* Description */}
                    <p className="text-[#B3B3B3] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#1a1a1a] text-[#daff00] text-sm rounded-full group-hover:border-[#daff00] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="pt-4 border-t border-[#1a1a1a]">
                      <div className="text-sm text-[#B3B3B3] mb-1">Impact:</div>
                      <div className="text-white font-medium">{project.impact}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}