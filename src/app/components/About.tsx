import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = [
    "Product-Market Fit",
    "Microservices Architecture",
    "AI & Recommender Systems",
    "Growth Engineering",
    "Revenue Optimization",
    "Stakeholder Alignment"
  ];

  return (
    <section ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            01 / Strategic Overview
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Strategic Systems Thinker
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg text-[#B3B3B3] leading-relaxed mb-12">
            <p>
              Multidisciplinary product architect operating at the intersection of user psychology, 
              system engineering, and market intelligence.
            </p>
            <p>
              Experienced in transforming unstable product environments into structured scalable 
              systems through strategic planning and backend architecture optimization.
            </p>
          </div>

          {/* Keywords Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keywords.map((keyword, index) => (
              <motion.div
                key={keyword}
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-4 transition-all group-hover:border-[#daff00] group-hover:shadow-[0_0_20px_rgba(218,255,0,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#daff00] rounded-full group-hover:shadow-[0_0_10px_rgba(218,255,0,0.6)]" />
                    <span className="text-white font-medium">{keyword}</span>
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
