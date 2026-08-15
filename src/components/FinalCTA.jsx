import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0F172A] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#172554] border border-[#2563EB]/40 text-xs font-bold text-[#38BDF8]">
          <MessageSquare className="w-4 h-4" />
          <span>START A PROJECT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FFFFFF] tracking-tight">
          Have an idea? Let's build it.
        </h2>

        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building, what you're trying to improve, or where technology could take your business next.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base">
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link href="/services" className="btn-secondary text-base bg-[#FFFFFF] text-[#0F172A]">
            <span>Explore Our Services</span>
            <ChevronRight className="w-5 h-5 text-[#2563EB]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
