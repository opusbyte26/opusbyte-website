import React from 'react';
import { motion } from 'framer-motion';
import FinalCTA from '../components/FinalCTA';
import { Cpu, ShieldCheck, Building, Calendar, Users } from 'lucide-react';

export default function AboutPage() {
  const principles = [
    { title: "Engineering Craftsmanship", desc: "We prioritize clean code, robust automated testing, and long-term architectural stability over quick shortcuts." },
    { title: "Intelligent Innovation", desc: "We actively integrate artificial intelligence and modern cloud workflows to give our clients competitive edges." },
    { title: "Client Alignment", desc: "We view technology as a direct catalyst for business revenue, operational efficiency, and customer experience." },
    { title: "Security First", desc: "Every API endpoint, cloud cluster, and mobile database is built with zero-trust security and compliance protocols." }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen space-y-20">
      
      {/* About Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs text-xs font-bold text-[#0F172A]">
          <Building className="w-4 h-4 text-[#2563EB]" />
          <span>ABOUT OPUSBYTE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight max-w-4xl leading-tight">
          Transforming ideas into intelligent business solutions.
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl leading-relaxed">
          OpusByte is a technology solutions company dedicated to helping businesses build what's next through software engineering excellence, cloud technologies, and artificial intelligence.
        </p>
      </section>

      {/* Key Company Facts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mx-auto mb-3 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0F172A]">2026</div>
            <div className="text-xs font-semibold text-[#64748B]">Founded Year</div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mx-auto mb-3 font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#2563EB]">11–50</div>
            <div className="text-xs font-semibold text-[#64748B]">Engineering Team Size</div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mx-auto mb-3 font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0F172A]">9 Core</div>
            <div className="text-xs font-semibold text-[#64748B]">Technology Disciplines</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] p-8 sm:p-14 rounded-3xl border border-[#E2E8F0] shadow-sm space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-[#2563EB] uppercase">
                OUR MISSION & PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-snug">
                Technology as a catalyst for sustainable business transformation.
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Whether building new digital products or modernizing complex legacy systems, OpusByte focuses on creating scalable, secure, and future-ready solutions aligned with clients' strategic objectives.
              </p>
            </div>

            <div className="bg-[#0F172A] p-8 rounded-2xl text-[#FFFFFF] space-y-6">
              <h3 className="text-xl font-bold text-[#38BDF8]">The OpusByte Difference</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We combine deep technical rigor with modern product design. We don't just write code — we architect ecosystems that scale effortlessly under high load.
              </p>
              
              <div className="pt-2 border-t border-[#1E293B] flex items-center gap-3 text-xs font-semibold text-[#CBD5E1]">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                <span>Trusted engineering partner for growth-minded enterprises.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Guiding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="section-label">OUR GUIDING PRINCIPLES</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            How we maintain engineering excellence.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((pr) => (
            <div key={pr.title} className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] space-y-3">
              <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
              <h3 className="font-bold text-lg text-[#0F172A]">{pr.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
