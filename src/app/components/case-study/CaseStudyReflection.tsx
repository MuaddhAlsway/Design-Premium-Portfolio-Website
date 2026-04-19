import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb } from "lucide-react";

const reflections = [
  {
    question: "What would have failed without restructuring?",
    answer: "Without systematic intervention, operational costs would have scaled linearly with project volume. The team would have reached maximum capacity within 12 months, forcing either service quality degradation or unsustainable hiring expenses. Strategic bottlenecks would have become chronic crises."
  },
  {
    question: "What tradeoffs were made?",
    answer: "Initial automation development required upfront time investment that temporarily reduced feature velocity. We prioritized operational stability over rapid feature expansion — a deliberate choice to build sustainable foundations rather than accumulate technical and operational debt."
  },
  {
    question: "What was intentionally not built?",
    answer: "We avoided over-automation of edge cases that represented <5% of operational volume. Rather than pursuing 100% automation, we strategically preserved human judgment for high-stakes, low-frequency decisions. This pragmatic approach maximized ROI while maintaining quality control."
  },
  {
    question: "What long-term scalability was unlocked?",
    answer: "The modular architecture enables independent scaling of each operational layer. Future capacity expansion can be achieved through targeted automation enhancements rather than wholesale system redesigns. This architectural flexibility transforms scaling from a constraint into a competitive advantage."
  }
];

export function CaseStudyReflection() {
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
          {/* Section Title */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            07 — Strategic Insights
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership Reflection
          </h2>

          <p className="text-lg text-[#B3B3B3] max-w-3xl mb-16">
            Beyond metrics, the deeper lessons from this transformation reveal 
            how strategic thinking separates sustainable growth from operational chaos.
          </p>

          {/* Reflection Blocks */}
          <div className="max-w-5xl mx-auto space-y-8">
            {reflections.map((reflection, index) => (
              <motion.div
                key={reflection.question}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + (0.15 * index), duration: 0.6 }}
              >
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 md:p-10 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#daff00] transition-all">
                      <Lightbulb className="w-5 h-5 text-[#daff00] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#daff00] leading-tight">
                      {reflection.question}
                    </h3>
                  </div>

                  {/* Answer */}
                  <div className="pl-0 md:pl-14">
                    <p className="text-white text-lg leading-relaxed">
                      {reflection.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Philosophy Statement */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto bg-[#0f0f0f] border border-[#daff00] rounded-[10px] p-8 md:p-10 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ boxShadow: "0 0 50px rgba(218, 255, 0, 0.15)" }}
          >
            <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              Core Philosophy
            </div>
            <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4">
              Strategy before execution.
              <br />
              Structure before speed.
              <br />
              Systems before scale.
            </p>
            <p className="text-[#B3B3B3] text-lg leading-relaxed">
              Operational excellence is not about doing more — it's about 
              architecting systems that enable sustainable growth without 
              proportional complexity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
