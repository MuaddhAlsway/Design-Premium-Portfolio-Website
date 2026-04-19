import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Polaris Innova Labs",
    role: "Product Engineer & Systems Architect",
    period: "Current",
    highlights: [
      "Operations automation systems",
      "Scalable backend architecture",
      "Founder collaboration"
    ]
  },
  {
    company: "Fresh Futures Australia (Yuzee EduTech App)",
    role: "Product Director & GTM Strategist → Backend Team Lead → Business & Product Analyst → QA & Automation Lead → Recommender Systems Engineer",
    period: "2021 - 2024",
    highlights: [
      "Built AI-powered recommender system",
      "Migrated monolithic backend to scalable architecture",
      "Designed ETL pipelines & data lake",
      "Achieved product-market fit shift toward vocational sector",
      "Implemented low-cost automation frameworks"
    ]
  },
  {
    company: "MIBDAAT EL-THELATH for Advertising",
    role: "Brand Growth Architect & Business Impact Manager",
    period: "2020 - 2021",
    highlights: [
      "Vision-driven campaigns",
      "ROI optimization",
      "Conversion-based strategy",
      "Saudi Vision 2030 alignment"
    ]
  },
  {
    company: "JA Trading Vietnam SDN. BHD.",
    role: "Wholesale Sales & Market Expansion Specialist",
    period: "2019 - 2020",
    highlights: [
      "B2B sales",
      "International supply chain coordination",
      "Private label manufacturing",
      "Market expansion"
    ]
  }
];

export function Experience() {
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
            03 / Professional Journey
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Experience Timeline
          </h2>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[15px] md:left-[23px] top-[40px] bottom-0 w-[2px] bg-[#1a1a1a]" />
                )}

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-2 top-2 w-8 h-8 bg-[#0f0f0f] border-2 border-[#daff00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(218,255,0,0.4)]">
                  <Briefcase className="w-4 h-4 text-[#daff00]" />
                </div>

                {/* Content Card */}
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-6 hover:border-[#daff00] transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.1)]">
                  {/* Period Badge */}
                  <div className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#daff00] text-sm rounded-full mb-3">
                    {exp.period}
                  </div>

                  {/* Company */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>

                  {/* Role */}
                  <div className="text-[#B3B3B3] mb-4 font-medium">
                    {exp.role}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#daff00] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#B3B3B3]">{highlight}</span>
                      </div>
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
