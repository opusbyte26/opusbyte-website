import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0F172A]">

      {/* Background Hero Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          disablePictureInPicture
          controlsList="nodownload"
          className="w-full h-full object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Scrim Gradient for 100% Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/60 to-[#0F172A]/25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-8">

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/80 backdrop-blur border border-[#1E293B] shadow-md text-xs font-semibold text-[#FFFFFF]"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="text-[#38BDF8]">OPUSBYTE SOLUTIONS</span>
            <span className="text-[#1E293B]">|</span>
            <span className="text-[#CBD5E1]">IT Services & Consulting Founded 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.08] drop-shadow-md">
              Building What's <span className="text-[#38BDF8]">Next</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-[#F1F5F9] max-w-2xl leading-snug drop-shadow-sm">
              Technology solutions that transform ideas into intelligent digital products.
            </p>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl leading-relaxed"
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

            <Link href="/services" className="btn-secondary text-base bg-[#0F172A]/80 backdrop-blur border border-[#1E293B] text-[#FFFFFF] hover:bg-[#172554] hover:text-[#38BDF8]">
              <span>Explore Our Services</span>
              <ChevronRight className="w-5 h-5 text-[#38BDF8]" />
            </Link>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
          >
            <div className="p-4 rounded-xl bg-[#0F172A]/85 backdrop-blur border border-[#1E293B] shadow-md">
              <div className="text-2xl font-bold text-[#FFFFFF]">11–50</div>
              <div className="text-xs text-[#94A3B8] font-medium">Tech Specialists</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F172A]/85 backdrop-blur border border-[#1E293B] shadow-md">
              <div className="text-2xl font-bold text-[#38BDF8]">99.9%</div>
              <div className="text-xs text-[#94A3B8] font-medium">Uptime Standards</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F172A]/85 backdrop-blur border border-[#1E293B] shadow-md">
              <div className="text-2xl font-bold text-[#FFFFFF]">AI + Cloud</div>
              <div className="text-xs text-[#94A3B8] font-medium">Native Engineering</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F172A]/85 backdrop-blur border border-[#1E293B] shadow-md">
              <div className="text-2xl font-bold text-[#38BDF8]">2026</div>
              <div className="text-xs text-[#94A3B8] font-medium">Modern Founded</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
