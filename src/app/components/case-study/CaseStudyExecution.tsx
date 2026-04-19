import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GitBranch, ListChecks, Users, CheckCircle } from "lucide-react";

const executionActivities = [
  {
    icon: GitBranch,
    title: "Roadmap Restructuring",
    description: "Transformed chaotic feature requests into prioritized execution plan aligned with operational impact metrics."
  },
  {
    icon: ListChecks,
    title: "Backlog Prioritization",
    description: "Applied value vs. complexity framework to sequence automation initiatives for maximum early ROI."
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Established cross-functional ceremonies and communication protocols to ensure consistent implementation quality."
  },
  {
    icon: CheckCircle,
    title: "Early QA Integration",
    description: "Embedded quality validation at each automation phase to catch edge cases before production deployment."
  }
];

const stakeholders = [
  { role: "Leadership", involvement: "Strategic Approval", frequency: "Monthly" },
  { role: "Operations Team", involvement: "Daily Execution", frequency: "Daily" },
  { role: "Product Team", involvement: "Requirements Definition", frequency: "Weekly" },
  { role: "Technical Team", involvement: "Implementation", frequency: "Daily" }
];

export function CaseStudyExecution() {
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
            05 — Cross-Functional Execution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Execution Leadership
          </h2>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Execution Activities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Execution Framework
              </h3>

              <div className="space-y-6">
                {executionActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={activity.title}
                      className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 hover:border-[#daff00] transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 + (0.1 * index), duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#daff00]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            {activity.title}
                          </h4>
                          <p className="text-[#B3B3B3] leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Stakeholder Alignment Matrix */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Stakeholder Alignment Matrix
              </h3>

              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-[#1a1a1a]">
                  <div className="text-[#daff00] font-semibold text-sm uppercase tracking-wider">
                    Role
                  </div>
                  <div className="text-[#daff00] font-semibold text-sm uppercase tracking-wider">
                    Involvement
                  </div>
                  <div className="text-[#daff00] font-semibold text-sm uppercase tracking-wider">
                    Cadence
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-4">
                  {stakeholders.map((stakeholder, index) => (
                    <motion.div
                      key={stakeholder.role}
                      className="grid grid-cols-3 gap-4 pb-4 border-b border-[#1a1a1a] last:border-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.6 + (0.1 * index), duration: 0.4 }}
                    >
                      <div className="text-white font-medium">
                        {stakeholder.role}
                      </div>
                      <div className="text-[#B3B3B3]">
                        {stakeholder.involvement}
                      </div>
                      <div className="text-[#B3B3B3]">
                        {stakeholder.frequency}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Timeline Indicator */}
                <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
                  <div className="text-white font-semibold mb-4">
                    Implementation Timeline
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#daff00] rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "100%" } : { width: "0%" }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        style={{ boxShadow: "0 0 10px rgba(218, 255, 0, 0.5)" }}
                      />
                    </div>
                    <span className="text-[#daff00] font-semibold text-sm">6 months</span>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <motion.div
                className="mt-6 bg-[#0f0f0f] border-l-4 border-[#daff00] rounded-[10px] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-[#B3B3B3] italic leading-relaxed">
                  "Structured stakeholder engagement ensured buy-in at every level, 
                  transforming potential resistance into active collaboration."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
