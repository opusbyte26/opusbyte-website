import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, HeartHandshake, Code2, LineChart } from 'lucide-react';

export default function WhyOpusByte() {
  const valueProps = [
    {
      icon: Award,
      title: "Engineering Excellence",
      desc: "Clean code, domain-driven design, and rigorous automated testing built into every release."
    },
    {
      icon: Zap,
      title: "Future-Ready Architecture",
      desc: "Modular microservices and cloud infrastructures designed to scale seamlessly with your growth."
    },
    {
      icon: Code2,
      title: "AI-Driven Innovation",
      desc: "Practical agentic AI and machine learning integration to automate high-friction workflows."
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      desc: "Zero-trust protocols, SOC2 alignment, HIPAA readiness, and 99.99% uptime guarantees."
    },
    {
      icon: LineChart,
      title: "Business-Focused Tech",
      desc: "Technology measured by real ROI, operational efficiency, and tangible market impact."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      desc: "Continuous software evolution, 24/7 technical support, and dedicated engineering teams."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-label justify-center">08 — WHY OPUSBYTE</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3F481A]">
            Built around engineering. Driven by innovation.
          </h2>
          <p className="text-base sm:text-lg text-[#68705A]">
            Why enterprise leaders choose OpusByte to power their critical digital products and cloud transformations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((vp, index) => {
            const IconComponent = vp.icon;

            return (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="opus-card p-8 space-y-4 bg-[#FFFFFF]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF2C9] border border-[#BDC033]/40 flex items-center justify-center text-[#65721F]">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#3F481A]">
                  {vp.title}
                </h3>

                <p className="text-sm text-[#68705A] leading-relaxed">
                  {vp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
