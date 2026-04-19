import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function CaseStudyCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-[#daff00]/10 to-transparent blur-3xl opacity-30" />
            
            <div className="relative z-10">
              {/* Main Headline */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Engineering{" "}
                <span className="text-[#daff00]" style={{
                  textShadow: "0 0 40px rgba(218, 255, 0, 0.4)"
                }}>
                  Strategy
                </span>
                <br />
                Before Writing Code.
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-xl text-[#B3B3B3] mb-12 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I partner with founders to structure scalable systems before 
                complexity becomes cost. Strategic architecture that transforms 
                operational chaos into competitive advantage.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a
                  href="mailto:hadil.alsewaiee@example.com"
                  className="group px-8 py-4 bg-[#daff00] text-black rounded-[10px] font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(218,255,0,0.5)] hover:scale-105"
                >
                  Let's Collaborate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/"
                  className="px-8 py-4 border-2 border-[#daff00] text-[#daff00] rounded-[10px] font-semibold flex items-center gap-2 transition-all hover:bg-[#daff00] hover:text-black hover:shadow-[0_0_30px_rgba(218,255,0,0.3)]"
                >
                  View More Work
                </a>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="my-16 h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              />

              {/* Contact Info */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#B3B3B3]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a
                  href="mailto:hadil.alsewaiee@example.com"
                  className="flex items-center gap-2 hover:text-[#daff00] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hadil.alsewaiee@example.com
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
