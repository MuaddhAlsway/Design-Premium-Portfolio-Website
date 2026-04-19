import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowLeft, Calendar, Building2, Briefcase, TrendingUp } from "lucide-react";

export function CaseStudyHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Abstract System Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#daff00 1px, transparent 1px),
            linear-gradient(90deg, #daff00 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#daff00] to-transparent opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Back Navigation */}
        <motion.a
          href="/"
          className="inline-flex items-center gap-2 text-[#B3B3B3] hover:text-[#daff00] transition-colors mb-12 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </motion.a>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Case Study Label */}
          <motion.div
            className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Strategic Case Study
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Optimizing Operations Through{" "}
            <span className="text-[#daff00]" style={{
              textShadow: "0 0 30px rgba(218, 255, 0, 0.3)"
            }}>
              Automated Workflows
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            className="text-xl md:text-2xl text-[#B3B3B3] mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Strategic Systems Design & Operational Excellence at TRQ Studio
          </motion.div>

          {/* Project Info Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-[#daff00]" />
                <div className="text-xs text-[#B3B3B3] uppercase tracking-wider">Industry</div>
              </div>
              <div className="text-white font-semibold">EdTech Operations</div>
            </div>
            
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-[#daff00]" />
                <div className="text-xs text-[#B3B3B3] uppercase tracking-wider">Timeline</div>
              </div>
              <div className="text-white font-semibold">6 Months</div>
            </div>
            
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-[#daff00]" />
                <div className="text-xs text-[#B3B3B3] uppercase tracking-wider">Role</div>
              </div>
              <div className="text-white font-semibold">Systems Architect</div>
            </div>
            
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#daff00]" />
                <div className="text-xs text-[#B3B3B3] uppercase tracking-wider">Stage</div>
              </div>
              <div className="text-white font-semibold">Optimization</div>
            </div>
          </motion.div>

          {/* Executive Summary */}
          <motion.div
            className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-[#daff00] text-sm uppercase tracking-wider mb-4 font-semibold">
              Executive Summary
            </div>
            <div className="space-y-4 text-lg text-[#B3B3B3] leading-relaxed">
              <p>
                <span className="text-white font-semibold">The Challenge:</span> TRQ Studio faced operational bottlenecks from manual processes, delayed approvals, and limited real-time visibility into workflow efficiency.
              </p>
              <p>
                <span className="text-white font-semibold">The Approach:</span> Implemented a strategic automation framework that mapped workflows, identified bottlenecks, and introduced intelligent process orchestration.
              </p>
              <p>
                <span className="text-white font-semibold">The Outcome:</span> Reduced task completion time by 60%, increased reporting accuracy, and unlocked scalable operational capacity for sustainable growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
