import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#3F481A] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BDC033]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65721F]/60 border border-[#BDC033]/40 text-xs font-bold text-[#BDC033]">
          <MessageSquare className="w-4 h-4" />
          <span>START A PROJECT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FFFFFF] tracking-tight">
          Have an idea? Let's build it.
        </h2>

        <p className="text-lg sm:text-xl text-[#EEF2C9]/90 max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building, what you're trying to improve, or where technology could take your business next.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base">
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link href="/services" className="btn-secondary text-base bg-[#FFFFFF] text-[#3F481A]">
            <span>Explore Our Services</span>
            <ChevronRight className="w-5 h-5 text-[#65721F]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
