import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const impacts = [
  {
    metric: "60%",
    label: "Reduction in Task Completion Time",
    description: "Automated workflows eliminated manual bottlenecks, accelerating project delivery cycles."
  },
  {
    metric: "85%",
    label: "Increase in Reporting Accuracy",
    description: "Automated data capture removed human error from status updates and operational metrics."
  },
  {
    metric: "40%",
    label: "Reduction in Operational Overhead",
    description: "Team capacity freed for strategic work instead of repetitive coordination tasks."
  },
  {
    metric: "3x",
    label: "Scalability in Project Volume",
    description: "Systems capable of handling triple the workload without proportional headcount increase."
  },
  {
    metric: "95%",
    label: "Process Compliance Rate",
    description: "Automated quality gates ensured consistent adherence to operational standards."
  }
];

export function CaseStudyImpact() {
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
            06 — Measurable Impact
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quantified Outcomes
          </h2>

          <p className="text-lg text-[#B3B3B3] max-w-3xl mb-16">
            Strategic automation delivered measurable improvements across operational 
            efficiency, quality, and scalability dimensions.
          </p>

          {/* Impact Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2 + (0.1 * index), duration: 0.6 }}
              >
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 h-full hover:border-[#daff00] transition-all hover:shadow-[0_0_40px_rgba(218,255,0,0.2)] hover:-translate-y-2">
                  {/* Large Metric */}
                  <motion.div
                    className="text-6xl md:text-7xl font-bold mb-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + (0.1 * index), duration: 0.6 }}
                  >
                    <span className="text-[#daff00]" style={{
                      textShadow: "0 0 30px rgba(218, 255, 0, 0.3)"
                    }}>
                      {impact.metric}
                    </span>
                    
                    {/* Neon Underline */}
                    <motion.div
                      className="h-1 bg-[#daff00] rounded-full mt-2"
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "100%" } : { width: "0%" }}
                      transition={{ delay: 0.6 + (0.1 * index), duration: 0.8 }}
                      style={{ boxShadow: "0 0 15px rgba(218, 255, 0, 0.6)" }}
                    />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                    {impact.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[#B3B3B3] leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Card */}
          <motion.div
            className="max-w-4xl mx-auto bg-[#0f0f0f] border-l-4 border-[#daff00] rounded-[10px] p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ boxShadow: "0 0 40px rgba(218, 255, 0, 0.08)" }}
          >
            <div className="text-[#daff00] font-semibold mb-4 uppercase tracking-wider text-sm">
              Strategic Impact Summary
            </div>
            <p className="text-white text-xl leading-relaxed mb-4">
              The automation initiative transformed operational constraints into 
              competitive advantages, enabling TRQ Studio to scale profitably 
              while maintaining service quality.
            </p>
            <p className="text-[#B3B3B3] leading-relaxed">
              Beyond immediate efficiency gains, the modular architecture established 
              a foundation for continuous optimization — ensuring long-term operational 
              resilience and adaptability to future growth demands.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
