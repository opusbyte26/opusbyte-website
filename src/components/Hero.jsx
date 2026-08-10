import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Cpu, Sparkles, ShieldCheck, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#F8F9F3]">

      {/* Background Hero Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 mix-blend-multiply scale-105"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Warm-White Overlay (Non-heavy light background gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9F3]/80 via-[#F8F9F3]/60 to-[#F8F9F3]"></div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-8">

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E1E5D3] shadow-xs text-xs font-semibold text-[#3F481A]"
          >
            <span className="w-2 h-2 rounded-full bg-[#BDC033] animate-pulse"></span>
            <span className="text-[#65721F]">OPUSBYTE SOLUTIONS</span>
            <span className="text-[#E1E5D3]">|</span>
            <span className="text-[#68705A]">IT Services & Consulting Founded 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#3F481A] tracking-tight leading-[1.08]">
              Building What's <span className="relative inline-block text-[#65721F]">
                Next
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#EEF2C9] -z-10 rounded"></span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-[#3F481A]/90 max-w-2xl leading-snug">
              Technology solutions that transform ideas into intelligent digital products.
            </p>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#68705A] max-w-2xl leading-relaxed"
          >
            From software engineering to AI and cloud transformation, we build scalable, secure, and future-ready digital solutions designed for what's next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link href="/contact" className="btn-primary text-base">
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link href="/services" className="btn-secondary text-base">
              <span>Explore Our Services</span>
              <ChevronRight className="w-5 h-5 text-[#65721F]" />
            </Link>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
          >
            <div className="p-4 rounded-xl bg-[#FFFFFF]/90 backdrop-blur border border-[#E1E5D3] shadow-xs">
              <div className="text-2xl font-bold text-[#3F481A]">11–50</div>
              <div className="text-xs text-[#68705A] font-medium">Tech Specialists</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF]/90 backdrop-blur border border-[#E1E5D3] shadow-xs">
              <div className="text-2xl font-bold text-[#65721F]">99.9%</div>
              <div className="text-xs text-[#68705A] font-medium">Uptime Standards</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF]/90 backdrop-blur border border-[#E1E5D3] shadow-xs">
              <div className="text-2xl font-bold text-[#3F481A]">AI + Cloud</div>
              <div className="text-xs text-[#68705A] font-medium">Native Engineering</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF]/90 backdrop-blur border border-[#E1E5D3] shadow-xs">
              <div className="text-2xl font-bold text-[#65721F]">2026</div>
              <div className="text-xs text-[#68705A] font-medium">Modern Founded</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
