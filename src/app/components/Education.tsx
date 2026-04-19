import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Code } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Big Data",
    "Statistics",
    "Calculus"
  ];

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
            07 / Academic Foundation
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Education
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Main Education Card */}
            <motion.div
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-[10px] p-8 mb-8 hover:border-[#daff00] transition-all hover:shadow-[0_0_40px_rgba(218,255,0,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#daff00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <div className="text-[#daff00] font-medium mb-1">
                    International Islamic University Malaysia (IIUM)
                  </div>
                  <div className="text-[#B3B3B3]">
                    Specialization: Data Science & Machine Learning
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#1a1a1a] my-6" />

              {/* Final Year Project */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-5 h-5 text-[#daff00]" />
                  <h4 className="text-lg font-bold text-white">Final Year Project</h4>
                </div>
                <div className="pl-8">
                  <div className="text-white font-medium mb-2">
                    Real-Time Sign Language Detection using CNN
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "OpenCV", "Keras", "NumPy", "Scikit-Learn"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1a1a1a] border border-[#1a1a1a] text-[#daff00] text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#1a1a1a] my-6" />

              {/* Courses */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Key Courses</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + 0.05 * index, duration: 0.4 }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#daff00] rounded-full flex-shrink-0" />
                      <span className="text-[#B3B3B3]">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
