import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Cpu, ExternalLink, ShieldCheck, Layers, Server } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0F172A] text-xs font-bold border border-[#2563EB]/30">
                {project.category} CASE STUDY
              </span>
              <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                {project.industry}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E2E8F0]/60 text-[#0F172A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Title & Headline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
                {project.title}
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* Visual Header */}
            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] aspect-video sm:aspect-[21/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur text-[#0F172A] text-xs font-semibold shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] mb-1">
                      {metric.val}
                    </div>
                    <div className="text-xs font-medium text-[#64748B]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenge */}
              <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {project.challenge || "The client required a modernized infrastructure capable of scaling securely without increasing operational friction or compromise on reliability."}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#2563EB]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-[#FFFFFF] flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span>OpusByte Technical Solution</span>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {project.solution || "OpusByte engineered a custom cloud microservices solution with real-time data sync and AI workflow automation."}
                </p>
              </div>

            </div>

            {/* Architecture Details */}
            {project.architecture && (
              <div className="p-6 rounded-xl bg-[#0F172A] text-[#FFFFFF] space-y-3">
                <div className="flex items-center gap-2 font-bold text-base text-[#38BDF8]">
                  <Server className="w-5 h-5" />
                  <span>System Architecture</span>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64748B]">
              Want a similar custom technical solution for your business?
            </div>
            <button
              onClick={() => {
                onClose();
                window.location.href = "/contact";
              }}
              className="btn-primary w-full sm:w-auto"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
