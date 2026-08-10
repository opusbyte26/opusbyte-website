import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Bot, Network, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function AISection() {
  const highlights = [
    { title: "AI Integration", desc: "Embed AI models seamlessly into existing production codebases." },
    { title: "Intelligent Automation", desc: "Automate complex decision trees and document analysis." },
    { title: "AI-Powered Applications", desc: "Build agentic copilots tailored to client domain needs." },
    { title: "Data-Driven Insights", desc: "Transform operational telemetry into predictive intelligence." },
    { title: "LLM Integration", desc: "Custom RAG workflows, vector search, and model fine-tuning." },
    { title: "Process Automation", desc: "Eliminate repetitive manual back-office tasks safely." }
  ];

  return (
    <section className="py-24 bg-[#3F481A] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Decorative subtle background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BDC033]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#65721F]/60 border border-[#BDC033]/40 text-xs font-bold text-[#BDC033]">
              <Brain className="w-4 h-4" />
              <span>06 — ARTIFICIAL INTELLIGENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFFFF]">
              Intelligence built into your business.
            </h2>

            <p className="text-lg text-[#EEF2C9]/90 leading-relaxed max-w-2xl">
              From intelligent automation to AI-powered products, we help organizations turn artificial intelligence into practical, scalable business value.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Deploy AI Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sophisticated AI Agent Card (Non-cyberpunk) */}
          <div className="lg:col-span-5">
            <div className="bg-[#2f3713] p-8 rounded-2xl border border-[#65721F] shadow-2xl space-y-6 relative">
              <div className="flex items-center justify-between border-b border-[#65721F]/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BDC033] text-[#3F481A] flex items-center justify-center font-bold">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#FFFFFF]">OpusByte AI Architecture</h3>
                    <p className="text-xs text-[#EEF2C9]/70">Agentic Orchestration & RAG Engine</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#BDC033] animate-pulse"></span>
              </div>

              {/* Sample AI Flow */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#3F481A] border border-[#65721F] flex items-center justify-between">
                  <span className="text-[#EEF2C9]">01. Unstructured Enterprise Data</span>
                  <span className="text-[#BDC033] font-mono">Input</span>
                </div>
                <div className="p-3 rounded-lg bg-[#3F481A] border border-[#BDC033]/40 flex items-center justify-between text-[#BDC033]">
                  <span className="font-semibold">02. Vector Search & Embedding Engine</span>
                  <span className="font-mono">Processing</span>
                </div>
                <div className="p-3 rounded-lg bg-[#3F481A] border border-[#65721F] flex items-center justify-between">
                  <span className="text-[#EEF2C9]">03. Custom Agentic Decision Pipeline</span>
                  <span className="text-[#BDC033] font-mono">Automated</span>
                </div>
              </div>

              <div className="text-[11px] text-[#EEF2C9]/60 italic text-center pt-2">
                Enterprise security, zero data leakage, and compliance built-in.
              </div>
            </div>
          </div>

        </div>

        {/* 6 AI Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-[#2f3713]/80 border border-[#65721F]/60 hover:border-[#BDC033] transition-all space-y-3"
            >
              <div className="flex items-center gap-2 text-[#BDC033] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#BDC033]" />
                <h4>{item.title}</h4>
              </div>
              <p className="text-xs text-[#EEF2C9]/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
