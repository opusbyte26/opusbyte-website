import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

export default function BrandPhilosophy() {
  return (
    <section className="py-24 bg-[#3F481A] text-[#FFFFFF] border-t border-b border-[#65721F] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#65721F]/50 border border-[#BDC033]/40 text-xs font-bold text-[#BDC033]"
        >
          <Quote className="w-4 h-4" />
          <span>BRAND PHILOSOPHY</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-[#FFFFFF]"
        >
          At OpusByte, technology is <span className="text-[#BDC033] underline decoration-[#65721F]">more than code</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-3xl text-[#EEF2C9]/90 font-medium max-w-4xl mx-auto leading-relaxed"
        >
          Technology is a catalyst for <span className="text-[#BDC033] font-bold">innovation</span>, business <span className="text-[#BDC033] font-bold">transformation</span>, and sustainable <span className="text-[#BDC033] font-bold">growth</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EEF2C9]/70"
        >
          <span>Operational Efficiency</span>
          <span>•</span>
          <span>Better Customer Experiences</span>
          <span>•</span>
          <span>New Opportunities</span>
        </motion.div>

      </div>

    </section>
  );
}
