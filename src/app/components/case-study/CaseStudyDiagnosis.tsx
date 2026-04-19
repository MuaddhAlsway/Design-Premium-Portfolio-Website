import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Users, Server, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Workflow Bottlenecks",
    description: "Manual approval chains and repetitive tasks created delays that compounded across projects.",
    insight: "Task completion time increased exponentially with project volume."
  },
  {
    icon: Users,
    title: "Process Misalignment",
    description: "Teams operated with inconsistent workflows, leading to miscommunication and duplicated efforts.",
    insight: "30% of operational time wasted on coordination overhead."
  },
  {
    icon: Server,
    title: "Limited Real-Time Visibility",
    description: "Lack of centralized monitoring meant bottlenecks were discovered reactively, not proactively.",
    insight: "Average 48-hour lag between issue emergence and resolution."
  },
  {
    icon: DollarSign,
    title: "Risk of Human Errors",
    description: "Manual data entry and status updates introduced inconsistencies that affected reporting accuracy.",
    insight: "12% error rate in operational reports impacting decision quality."
  }
];

export function CaseStudyDiagnosis() {
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
            02 — Strategic Diagnosis
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Operational Pain Points
          </h2>

          <p className="text-lg text-[#B3B3B3] max-w-3xl mb-16">
            Through systematic analysis and stakeholder interviews, four critical 
            failure modes were identified that threatened operational scalability.
          </p>

          {/* Problem Blocks Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + (0.1 * index), duration: 0.6 }}
                >
                  <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 h-full hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#daff00] transition-all">
                        <Icon className="w-6 h-6 text-[#daff00] group-hover:text-black transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#daff00] transition-colors">
                        {problem.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#B3B3B3] leading-relaxed mb-4">
                      {problem.description}
                    </p>

                    {/* Key Insight - Highlighted */}
                    <div className="pt-4 border-t border-[#1a1a1a]">
                      <div className="flex items-start gap-2">
                        <div className="text-[#daff00] font-semibold text-sm uppercase tracking-wider flex-shrink-0 mt-0.5">
                          Key Insight:
                        </div>
                        <div className="text-white font-medium">
                          {problem.insight}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Insight Box */}
          <motion.div
            className="mt-12 bg-[#0f0f0f] border-l-4 border-[#daff00] rounded-[10px] p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ boxShadow: "0 0 30px rgba(218, 255, 0, 0.05)" }}
          >
            <div className="text-[#daff00] font-semibold mb-3 uppercase tracking-wider text-sm">
              Strategic Assessment
            </div>
            <p className="text-white text-lg leading-relaxed">
              These operational inefficiencies represented a structural constraint 
              on growth. Without systematic intervention, operational costs would 
              scale faster than revenue — making profitable scaling impossible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
