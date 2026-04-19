import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Layers, Database, Workflow, RefreshCw } from "lucide-react";

const architectureLayers = [
  {
    icon: Layers,
    title: "Operational Logic Layer",
    description: "Core business rules and workflow definitions",
    components: ["Process orchestration", "Decision routing", "Task scheduling"]
  },
  {
    icon: Workflow,
    title: "Automation & Scheduling Layer",
    description: "Intelligent task execution and resource allocation",
    components: ["Auto-task triggers", "Queue management", "Priority handling"]
  },
  {
    icon: Database,
    title: "Data Intelligence Layer",
    description: "Real-time monitoring and analytics infrastructure",
    components: ["Performance metrics", "Status tracking", "Exception handling"]
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement Loop",
    description: "Feedback mechanisms and optimization cycles",
    components: ["KPI monitoring", "Bottleneck detection", "Process refinement"]
  }
];

export function CaseStudyArchitecture() {
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
            04 — Systems Architecture Transformation
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Operations Architecture
          </h2>

          <p className="text-lg text-[#B3B3B3] max-w-3xl mb-16">
            A four-layer architectural model was designed to separate concerns, 
            enable modularity, and support iterative optimization.
          </p>

          {/* Architecture Diagram */}
          <div className="max-w-6xl mx-auto">
            {/* Visual Flow Representation */}
            <div className="relative">
              {/* Connecting Lines - Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#daff00] via-[#daff00] to-[#daff00] opacity-20 -translate-x-1/2"
                   style={{ boxShadow: "0 0 10px rgba(218, 255, 0, 0.2)" }} />

              <div className="space-y-8">
                {architectureLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={layer.title}
                      className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                      transition={{ delay: 0.2 + (0.15 * index), duration: 0.6 }}
                    >
                      {/* Layer Card */}
                      <div className="flex-1 bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.15)]">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Icon */}
                          <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-[#daff00] shadow-[0_0_20px_rgba(218,255,0,0.2)]">
                            <Icon className="w-7 h-7 text-[#daff00]" />
                          </div>

                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {layer.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-[#B3B3B3] mb-4">
                              {layer.description}
                            </p>

                            {/* Components */}
                            <div className="flex flex-wrap gap-2">
                              {layer.components.map((component) => (
                                <span
                                  key={component}
                                  className="px-3 py-1 bg-[#1a1a1a] text-[#daff00] text-sm rounded-full border border-[#1a1a1a]"
                                >
                                  {component}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Node - Desktop Only */}
                      <div className="hidden md:block w-6 h-6 bg-[#daff00] rounded-full flex-shrink-0 shadow-[0_0_20px_rgba(218,255,0,0.6)] relative z-10" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Architecture Summary */}
            <motion.div
              className="mt-16 bg-[#0f0f0f] border-l-4 border-[#daff00] rounded-[10px] p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{ boxShadow: "0 0 30px rgba(218, 255, 0, 0.05)" }}
            >
              <div className="text-[#daff00] font-semibold mb-3 uppercase tracking-wider text-sm">
                Architecture Philosophy
              </div>
              <p className="text-white text-lg leading-relaxed mb-4">
                Each layer operates independently while communicating through 
                well-defined interfaces. This separation enables isolated updates, 
                A/B testing of automation strategies, and gradual scaling without 
                systemic disruption.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed">
                The modular design allows non-technical stakeholders to understand 
                system behavior while giving technical teams flexibility to optimize 
                individual components.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
