import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(#daff00 1px, transparent 1px),
          linear-gradient(90deg, #daff00 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Engineering Scalable Products That{" "}
            <span className="text-[#daff00] inline-block" style={{
              textShadow: "0 0 30px rgba(218, 255, 0, 0.3)"
            }}>
              Win Markets
            </span>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            className="text-xl md:text-2xl text-[#B3B3B3] mb-6 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Strategic Tactical Product Engineer & Systems Architect
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-[#B3B3B3] mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I co-engineer innovative, scalable systems with founders — aligning user behavior, 
            business strategy, and technical architecture to build products that drive sustainable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button 
              className="group px-8 py-4 bg-[#daff00] text-black rounded-[10px] font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.4)] hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="px-8 py-4 border-2 border-[#daff00] text-[#daff00] rounded-[10px] font-semibold transition-all hover:bg-[#daff00] hover:text-black hover:shadow-[0_0_30px_rgba(218,255,0,0.3)]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-[#daff00] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[#daff00] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
