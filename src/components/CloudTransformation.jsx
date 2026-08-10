import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Cloud, Smartphone, Brain, ArrowRight } from 'lucide-react';

export default function CloudTransformation() {
  const steps = [
    { title: "Legacy System", desc: "Monolith extraction & data auditing", icon: Database, bg: "bg-[#FFFFFF]", border: "border-[#E1E5D3]" },
    { title: "API Layer", desc: "REST/GraphQL gateway & message queue", icon: Cpu, bg: "bg-[#FFFFFF]", border: "border-[#E1E5D3]" },
    { title: "Cloud Native", desc: "Kubernetes & multi-cloud serverless", icon: Cloud, bg: "bg-[#EEF2C9]", border: "border-[#BDC033]" },
    { title: "Modern App", desc: "Next-gen web & cross-platform mobile", icon: Smartphone, bg: "bg-[#FFFFFF]", border: "border-[#E1E5D3]" },
    { title: "AI Intelligence", desc: "Predictive model & agentic copilot", icon: Brain, bg: "bg-[#3F481A]", border: "border-[#BDC033]", dark: true }
  ];

  return (
    <section className="py-24 bg-[#F8F9F3] border-b border-[#E1E5D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-label justify-center">07 — DIGITAL TRANSFORMATION</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3F481A]">
            Modernize. Scale. Transform.
          </h2>
          <p className="text-base sm:text-lg text-[#68705A]">
            We turn legacy bottlenecks into high-speed digital engines through systematic, zero-downtime architectural evolution.
          </p>
        </div>

        {/* Animated Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {steps.map((step, i) => {
            const IconComp = step.icon;

            return (
              <React.Fragment key={step.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border ${step.border} ${step.bg} shadow-xs space-y-4 text-center relative flex flex-col items-center justify-between min-h-[200px]`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    step.dark ? 'bg-[#BDC033] text-[#3F481A]' : 'bg-[#F8F9F3] text-[#65721F] border border-[#E1E5D3]'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-bold text-base ${step.dark ? 'text-[#FFFFFF]' : 'text-[#3F481A]'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs ${step.dark ? 'text-[#EEF2C9]/80' : 'text-[#68705A]'}`}>
                      {step.desc}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#65721F]">
                    Step 0{i + 1}
                  </span>
                </motion.div>

                {/* Arrow connector between steps on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex justify-center -mx-4 z-10 text-[#BDC033]">
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
