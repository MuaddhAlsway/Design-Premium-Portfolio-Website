import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function CaseStudyContext() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initialConditions = [
    "Limited scalability in manual processes",
    "Backend workflow bottlenecks",
    "Unclear operational roadmap",
    "Weak cross-team alignment"
  ];

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
            01 — Context & Environment
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Business Context
          </h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Background */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Operational Environment
              </h3>
              
              <div className="space-y-6 text-[#B3B3B3] leading-relaxed">
                <div>
                  <div className="text-white font-semibold mb-2">Company Stage</div>
                  <p>
                    TRQ Studio operates as an innovation lab focused on delivering 
                    high-impact consulting and product development services. Rapid 
                    growth created operational complexity.
                  </p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">Market Environment</div>
                  <p>
                    Competitive landscape demanded faster delivery cycles and higher 
                    quality standards while maintaining cost efficiency.
                  </p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">Resource Constraints</div>
                  <p>
                    Limited operational staff managing increasing project volume. 
                    Manual processes becoming unsustainable bottlenecks.
                  </p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">Stakeholder Alignment</div>
                  <p>
                    Multiple teams with varying priorities requiring unified operational 
                    framework and transparent visibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Neon Vertical Line Separator */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#daff00] to-transparent opacity-30" 
                 style={{ boxShadow: "0 0 10px rgba(218, 255, 0, 0.3)" }} />

            {/* Right Column - Initial Conditions Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 h-full hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-[#daff00] rounded-full shadow-[0_0_15px_rgba(218,255,0,0.6)]" />
                  <h3 className="text-2xl font-bold text-white">
                    Initial Conditions
                  </h3>
                </div>

                <div className="space-y-4">
                  {initialConditions.map((condition, index) => (
                    <motion.div
                      key={condition}
                      className="flex items-start gap-3 pb-4 border-b border-[#1a1a1a] last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.6 + (0.1 * index), duration: 0.4 }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#daff00] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[#B3B3B3] leading-relaxed">{condition}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                  <p className="text-[#B3B3B3] italic">
                    "Without intervention, operational costs would scale linearly 
                    with growth — an unsustainable trajectory."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
