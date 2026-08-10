import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[#F8F9F3] border-b border-[#E1E5D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="section-label">01 — WHO WE ARE</div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3F481A] leading-tight">
              Technology that turns ideas into impact.
            </h2>

            <p className="text-lg text-[#3F481A] font-medium leading-relaxed">
              OpusByte is a technology solutions company dedicated to helping businesses transform ideas into impactful digital products and intelligent business solutions.
            </p>

            <p className="text-base text-[#68705A] leading-relaxed">
              We combine software engineering excellence, cloud technologies, and artificial intelligence to deliver innovative solutions that drive growth, efficiency, and long-term success.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#65721F] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#3F481A]">Scalable & Secure Architectures</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#65721F] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#3F481A]">Agentic AI & Automation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#65721F] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#3F481A]">Cloud-Native Ecosystems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#65721F] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#3F481A]">Legacy Modernization</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E1E5D3] shadow-md space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF2C9] rounded-bl-full -z-0 opacity-60"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2C9] border border-[#BDC033]/50 flex items-center justify-center text-[#65721F]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#3F481A]">Engineering Excellence</h3>
                    <p className="text-xs text-[#68705A]">Clean code, robust testing, maintainable design.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#3F481A] flex items-center justify-center text-[#BDC033]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#3F481A]">Intelligent Automation</h3>
                    <p className="text-xs text-[#68705A]">AI models & automated decision processing.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] flex items-center justify-center text-[#65721F]">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#3F481A]">Cloud Transformation</h3>
                    <p className="text-xs text-[#68705A]">Resilient microservices & zero-downtime migrations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E5D3] text-xs text-[#68705A] italic">
                "At OpusByte, technology is more than code — it's a catalyst for sustainable business transformation."
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
