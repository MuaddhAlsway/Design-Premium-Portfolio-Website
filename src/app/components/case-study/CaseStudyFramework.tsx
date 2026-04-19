import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Users, Layout, TrendingUp, ArrowRight } from "lucide-react";

const frameworkSteps = [
  {
    icon: Target,
    number: "01",
    title: "Workflow Mapping & Bottleneck Analysis",
    description: "Mapped end-to-end operational workflows to identify high-friction points and quantify inefficiency costs."
  },
  {
    icon: Users,
    number: "02",
    title: "Task Prioritization & Resource Allocation",
    description: "Assessed impact vs. effort for each automation opportunity to maximize ROI and minimize disruption."
  },
  {
    icon: Layout,
    number: "03",
    title: "Automation Implementation Planning",
    description: "Designed modular automation architecture with phased rollout to ensure continuous operational stability."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Performance Tracking & Continuous Optimization",
    description: "Established KPIs and feedback loops to measure impact and iterate on automation effectiveness."
  }
];

export function CaseStudyFramework() {
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
            03 — Strategy & Systems Framework
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automation Strategy
          </h2>

          <p className="text-lg text-[#B3B3B3] max-w-3xl mb-16">
            A four-phase framework was designed to systematically identify, 
            prioritize, implement, and optimize automation opportunities.
          </p>

          {/* Horizontal Flow Diagram */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop: Horizontal Layout */}
            <div className="hidden lg:block relative">
              {/* Connection Lines */}
              <div className="absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-[#daff00] via-[#daff00] to-[#daff00] opacity-30"
                   style={{ boxShadow: "0 0 10px rgba(218, 255, 0, 0.3)" }} />
              
              <div className="grid grid-cols-4 gap-6 relative">
                {frameworkSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ delay: 0.2 + (0.15 * index), duration: 0.6 }}
                    >
                      {/* Arrow Between Steps */}
                      {index < frameworkSteps.length - 1 && (
                        <div className="absolute top-20 right-0 translate-x-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-[#daff00]" />
                        </div>
                      )}

                      <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)] h-full">
                        {/* Number Badge */}
                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4 mx-auto border-2 border-[#daff00] shadow-[0_0_20px_rgba(218,255,0,0.3)]">
                          <span className="text-[#daff00] text-xl font-bold">{step.number}</span>
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-[#daff00]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-white font-bold text-center mb-3 min-h-[3rem] flex items-center justify-center">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#B3B3B3] text-sm leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Vertical Layout */}
            <div className="lg:hidden space-y-6">
              {frameworkSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.2 + (0.1 * index), duration: 0.6 }}
                  >
                    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 hover:border-[#daff00] transition-all">
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#daff00]">
                          <span className="text-[#daff00] font-bold">{step.number}</span>
                        </div>

                        <div className="flex-1">
                          {/* Icon & Title */}
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-5 h-5 text-[#daff00]" />
                            <h3 className="text-white font-bold">{step.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-[#B3B3B3] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    {index < frameworkSteps.length - 1 && (
                      <div className="flex justify-center py-3">
                        <div className="w-[2px] h-6 bg-gradient-to-b from-[#daff00] to-transparent opacity-50" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
