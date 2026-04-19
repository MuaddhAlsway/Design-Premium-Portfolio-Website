import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="text-[#daff00] text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            08 / Connect
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Let's Engineer Something That{" "}
            <span className="text-[#daff00]" style={{
              textShadow: "0 0 30px rgba(218, 255, 0, 0.3)"
            }}>
              Matters
            </span>
            .
          </h2>

          {/* Description */}
          <p className="text-lg text-[#B3B3B3] mb-12 leading-relaxed">
            Ready to transform your product vision into scalable reality? 
            Let's discuss how strategic engineering can drive your business forward.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:hadil.alsewaiee@example.com"
              className="group px-8 py-4 bg-[#daff00] text-black rounded-[10px] font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(218,255,0,0.4)] hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/hadilalsewaiee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#daff00] text-[#daff00] rounded-[10px] font-semibold flex items-center gap-2 transition-all hover:bg-[#daff00] hover:text-black hover:shadow-[0_0_30px_rgba(218,255,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 pt-8 border-t border-[#1a1a1a] text-center text-[#B3B3B3]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="mb-2">
          <span className="text-white font-semibold">Hadil Al-Sewaiee</span> — Strategic Tactical Product Engineer
        </p>
        <p className="text-sm">
          Building scalable systems that win markets
        </p>
      </motion.div>
    </section>
  );
}
