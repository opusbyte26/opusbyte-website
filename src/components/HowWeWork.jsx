import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Code, TrendingUp, Check } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      icon: Compass,
      desc: "Deep-dive business discovery, requirement mapping, risk mitigation, and technical strategy validation."
    },
    {
      num: "02",
      name: "Design",
      icon: Palette,
      desc: "System architecture blueprints, API contract definitions, data schemas, and high-fidelity UX wireframes."
    },
    {
      num: "03",
      name: "Build",
      icon: Code,
      desc: "Agile engineering sprints, automated CI/CD pipelines, strict code reviews, and continuous security testing."
    },
    {
      num: "04",
      name: "Evolve",
      icon: TrendingUp,
      desc: "Zero-downtime deployment, real-time performance telemetry, AI enhancements, and long-term scaling."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="section-label">04 — OUR APPROACH</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A]">
            From idea to impact.
          </h2>
          <p className="text-base text-[#64748B]">
            A proven, transparent engineering methodology designed to mitigate risk and accelerate time-to-market.
          </p>
        </div>

        {/* Horizontal Desktop / Vertical Mobile Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Bar (Horizontal line behind steps) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-[#E2E8F0] -z-0">
            <div className="h-full bg-[#2563EB] w-3/4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] shadow-xs hover:shadow-md transition-all space-y-6"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#0F172A] border border-[#2563EB]/40 flex items-center justify-center font-bold text-lg">
                      <IconComp className="w-6 h-6 text-[#2563EB]" />
                    </div>

                    <span className="text-2xl font-black text-[#E2E8F0]">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {step.name}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                    <Check className="w-4 h-4 text-[#2563EB]" />
                    <span>Phase Milestone Verification</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
