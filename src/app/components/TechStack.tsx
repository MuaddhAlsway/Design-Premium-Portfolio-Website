import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const techStacks = [
  {
    category: "Programming",
    techs: ["Python", "Java", "C++", "SQL"]
  },
  {
    category: "AI & ML",
    techs: ["TensorFlow", "Keras", "OpenCV", "Machine Learning", "Deep Learning"]
  },
  {
    category: "Data Engineering",
    techs: ["Hadoop", "Spark", "Hive", "ETL Pipelines"]
  },
  {
    category: "Cloud & Tools",
    techs: ["Google Cloud Platform (GCP)", "JIRA", "Git"]
  },
  {
    category: "Architecture",
    techs: ["Microservices", "Knowledge Graphs", "Data Flow Mapping"]
  }
];

export function TechStack() {
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
            05 / Technical Arsenal
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Technology & Architecture Stack
          </h2>

          {/* Tech Categories */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#daff00] rounded-full shadow-[0_0_10px_rgba(218,255,0,0.6)]" />
                    {stack.category}
                  </h3>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-3">
                    {stack.techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.1 * index + 0.05 * techIndex, duration: 0.4 }}
                      >
                        <div className="px-4 py-2 bg-[#1a1a1a] border border-[#1a1a1a] text-[#B3B3B3] rounded-full transition-all group-hover:border-[#daff00] group-hover:text-[#daff00] group-hover:shadow-[0_0_15px_rgba(218,255,0,0.2)]">
                          {tech}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
