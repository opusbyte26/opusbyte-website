import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Sparkles } from 'lucide-react';

export default function CareersSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle Decorative Badge */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0F172A] text-xs font-bold border border-[#2563EB]/30">
              <Users className="w-4 h-4 text-[#2563EB]" />
              <span>CAREERS AT OPUSBYTE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Build what's next with us.
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              We're building a team passionate about software engineering, artificial intelligence, cloud technologies, and digital innovation. Join our 11–50 tech specialists across global remote locations.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/careers" className="btn-primary text-base">
              <span>Explore Careers</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
