import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Server, Brain, Database, TrendingUp, CheckCircle } from "lucide-react";

const expertiseAreas = [
  {
    icon: Target,
    title: "Product Strategy & Market Alignment",
    description: "Driving product-market fit through strategic positioning and user-centric execution."
  },
  {
    icon: Server,
    title: "Backend Architecture & Microservices Optimization",
    description: "Designing scalable distributed systems with performance and reliability at core."
  },
  {
    icon: Brain,
    title: "AI & Recommender Systems Engineering",
    description: "Building intelligent systems that personalize experiences and drive engagement."
  },
  {
    icon: Database,
    title: "Data Engineering & Knowledge Graph Design",
    description: "Architecting data pipelines and semantic structures for intelligent decision-making."
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth & Market Intelligence",
    description: "Leveraging analytics and strategy to optimize conversion and maximize ROI."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Execution Leadership",
    description: "Ensuring product excellence through systematic testing and operational discipline."
  }
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            02 / Core Competencies
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Capability Architecture
          </h2>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <div className="h-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 transition-all hover:border-[#daff00] hover:shadow-[0_0_30px_rgba(218,255,0,0.15)] hover:-translate-y-1">
                    {/* Icon */}
                    <div className="mb-4 w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-[#daff00] group-hover:shadow-[0_0_20px_rgba(218,255,0,0.3)] transition-all">
                      <Icon className="w-6 h-6 text-[#daff00] group-hover:text-black transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#daff00] transition-colors">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#B3B3B3] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
