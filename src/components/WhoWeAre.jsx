import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
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
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
              Technology that turns ideas into impact.
            </h2>

            <p className="text-lg text-[#0F172A] font-medium leading-relaxed">
              OpusByte is a technology solutions company dedicated to helping businesses transform ideas into impactful digital products and intelligent business solutions.
            </p>

            <p className="text-base text-[#64748B] leading-relaxed">
              We combine software engineering excellence, cloud technologies, and artificial intelligence to deliver innovative solutions that drive growth, efficiency, and long-term success.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#0F172A]">Scalable & Secure Architectures</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#0F172A]">Agentic AI & Automation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#0F172A]">Cloud-Native Ecosystems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-1" />
                <span className="text-sm font-semibold text-[#0F172A]">Legacy Modernization</span>
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
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-md space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBEAFE] rounded-bl-full -z-0 opacity-60"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0F172A]">Engineering Excellence</h3>
                    <p className="text-xs text-[#64748B]">Clean code, robust testing, maintainable design.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#172554] flex items-center justify-center text-[#38BDF8]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0F172A]">Intelligent Automation</h3>
                    <p className="text-xs text-[#64748B]">AI models & automated decision processing.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB]">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0F172A]">Cloud Transformation</h3>
                    <p className="text-xs text-[#64748B]">Resilient microservices & zero-downtime migrations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B] italic">
                "At OpusByte, technology is more than code — it's a catalyst for sustainable business transformation."
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
