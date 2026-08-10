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
    <section className="py-24 bg-[#F8F9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="section-label">02 — OUR SERVICES</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3F481A]">
              Technology solutions built for what's next.
            </h2>
          </div>

          <Link href="/services" className="btn-secondary self-start md:self-auto">
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 text-[#65721F]" />
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
                  className="group block p-8 rounded-2xl bg-[#FFFFFF] border border-[#E1E5D3] hover:border-[#BDC033] hover:bg-[#EEF2C9]/30 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xs hover:shadow-md text-decoration-none h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold tracking-wider text-[#65721F] bg-[#EEF2C9] px-2.5 py-1 rounded-full border border-[#BDC033]/30">
                        {service.num}
                      </span>
                      
                      <div className="w-12 h-12 rounded-xl bg-[#F8F9F3] group-hover:bg-[#BDC033] border border-[#E1E5D3] group-hover:border-[#BDC033] flex items-center justify-center text-[#3F481A] transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#3F481A] group-hover:text-[#65721F] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#68705A] leading-relaxed line-clamp-3">
                        {service.subtitle}
                      </p>
                    </div>

                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-[#E1E5D3]/60 flex items-center justify-between text-xs font-semibold text-[#65721F] group-hover:text-[#3F481A]">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#BDC033]" />
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
