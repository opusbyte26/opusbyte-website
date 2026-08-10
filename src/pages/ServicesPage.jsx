import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import FinalCTA from '../components/FinalCTA';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Monitor, 
  Brain, 
  Cloud, 
  RefreshCw, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Cloud,
  RefreshCw,
  Cpu,
  ShieldCheck
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(servicesData[0].id);

  return (
    <div className="pt-28 pb-16 bg-[#F8F9F3] min-h-screen space-y-20">
      
      {/* Services Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E1E5D3] shadow-xs text-xs font-bold text-[#3F481A]">
          <span className="w-2 h-2 rounded-full bg-[#BDC033]"></span>
          <span>OUR SERVICES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3F481A] tracking-tight max-w-4xl leading-tight">
          Technology solutions built for what's next.
        </h1>

        <p className="text-lg sm:text-xl text-[#68705A] max-w-3xl leading-relaxed">
          From custom software engineering to AI automation and cloud transformation, OpusByte provides comprehensive IT services tailored to strategic business goals.
        </p>
      </section>

      {/* Services Main Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {servicesData.map((service, index) => {
          const IconComp = iconMap[service.icon] || Code2;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFFFFF] rounded-3xl border border-[#E1E5D3] p-8 sm:p-12 shadow-sm hover:shadow-md hover:border-[#BDC033] transition-all space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E1E5D3]/60 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF2C9] border border-[#BDC033]/40 text-[#3F481A] flex items-center justify-center font-extrabold text-xl">
                    <IconComp className="w-7 h-7 text-[#65721F]" />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold text-[#65721F] tracking-widest uppercase">
                      SERVICE {service.num}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3F481A]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <a href={`/contact?service=${service.id}`} className="btn-secondary self-start md:self-auto text-xs">
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#65721F]" />
                </a>
              </div>

              {/* Grid Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Description & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base text-[#3F481A] font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#68705A] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#65721F]">
                      Key Service Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-[#3F481A] font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#65721F] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverables & Business Impact Box */}
                <div className="lg:col-span-5 bg-[#F8F9F3] p-6 rounded-2xl border border-[#E1E5D3] space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#3F481A] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#BDC033]" />
                      <span>Deliverables & Outputs</span>
                    </h4>
                    <ul className="space-y-2 list-none p-0 text-xs text-[#68705A]">
                      {service.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#BDC033]"></span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="p-4 rounded-xl bg-[#3F481A] text-[#FFFFFF] space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#BDC033]">
                      BUSINESS IMPACT GUARANTEE
                    </div>
                    <p className="text-xs text-[#EEF2C9] font-medium leading-normal">
                      {service.impact}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })}

      </section>

      <FinalCTA />
    </div>
  );
}
