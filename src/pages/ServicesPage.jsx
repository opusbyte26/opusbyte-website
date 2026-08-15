import React from 'react';
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
  Layers
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

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen space-y-20">
      
      {/* Services Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs text-xs font-bold text-[#0F172A]">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
          <span>OUR SERVICES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight max-w-4xl leading-tight">
          Technology solutions built for what's next.
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl leading-relaxed">
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
              className="bg-[#FFFFFF] rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E2E8F0] pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] border border-[#2563EB]/40 text-[#0F172A] flex items-center justify-center font-extrabold text-xl">
                    <IconComp className="w-7 h-7 text-[#2563EB]" />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold text-[#2563EB] tracking-widest uppercase">
                      SERVICE {service.num}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <a href={`/contact?service=${service.id}`} className="btn-secondary self-start md:self-auto text-xs">
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </a>
              </div>

              {/* Grid Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Description & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base text-[#0F172A] font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#2563EB]">
                      Key Service Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-[#0F172A] font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverables & Business Impact Box */}
                <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#0F172A] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#2563EB]" />
                      <span>Deliverables & Outputs</span>
                    </h4>
                    <ul className="space-y-2 list-none p-0 text-xs text-[#64748B]">
                      {service.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="p-4 rounded-xl bg-[#0F172A] text-[#FFFFFF] space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                      BUSINESS IMPACT GUARANTEE
                    </div>
                    <p className="text-xs text-[#94A3B8] font-medium leading-normal">
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
