import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
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
  ArrowUpRight 
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

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="section-label">02 — OUR SERVICES</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A]">
              Technology solutions built for what's next.
            </h2>
          </div>

          <Link href="/services" className="btn-secondary self-start md:self-auto">
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
          </Link>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link 
                  href="/services"
                  className="group block p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#DBEAFE]/20 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xs hover:shadow-md text-decoration-none h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold tracking-wider text-[#2563EB] bg-[#DBEAFE] px-2.5 py-1 rounded-full border border-[#2563EB]/20">
                        {service.num}
                      </span>
                      
                      <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] group-hover:bg-[#2563EB] border border-[#E2E8F0] group-hover:border-[#2563EB] flex items-center justify-center text-[#0F172A] group-hover:text-[#FFFFFF] transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                        {service.subtitle}
                      </p>
                    </div>

                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#2563EB] group-hover:text-[#0F172A]">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#2563EB]" />
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
