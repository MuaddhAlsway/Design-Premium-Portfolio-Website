import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Target, GitBranch, BarChart3 } from "lucide-react";

const leadershipQualities = [
  {
    icon: Users,
    label: "Leadership"
  },
  {
    icon: Target,
    label: "Stakeholder Alignment"
  },
  {
    icon: GitBranch,
    label: "Agile Roadmapping"
  },
  {
    icon: BarChart3,
    label: "Data-Driven Decisions"
  }
];

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            06 / Strategic Approach
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Where Engineering Meets <span className="text-[#daff00]">Strategy</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[#B3B3B3] leading-relaxed mb-12">
            Known for aligning cross-functional teams, structuring agile roadmaps, 
            engineering revenue-driven systems, and transforming product chaos into 
            scalable execution frameworks.
          </p>

          {/* Leadership Qualities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadershipQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <motion.div
                  key={quality.label}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 transition-all hover:border-[#daff00] hover:shadow-[0_0_30px_rgba(218,255,0,0.2)] hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#daff00] group-hover:shadow-[0_0_20px_rgba(218,255,0,0.3)] transition-all">
                      <Icon className="w-6 h-6 text-[#daff00] group-hover:text-black transition-colors" />
                    </div>
                    <div className="text-white font-semibold group-hover:text-[#daff00] transition-colors">
                      {quality.label}
                    </div>
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
