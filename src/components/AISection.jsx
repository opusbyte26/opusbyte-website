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
    <section className="py-24 bg-[#0F172A] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Decorative subtle background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172554] border border-[#2563EB]/40 text-xs font-bold text-[#38BDF8]">
              <Brain className="w-4 h-4" />
              <span>06 — ARTIFICIAL INTELLIGENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFFFF]">
              Intelligence built into your business.
            </h2>

            <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
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
            <div className="bg-[#172554] p-8 rounded-2xl border border-[#1E293B] shadow-2xl space-y-6 relative">
              <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-[#FFFFFF] flex items-center justify-center font-bold">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#FFFFFF]">OpusByte AI Architecture</h3>
                    <p className="text-xs text-[#94A3B8]">Agentic Orchestration & RAG Engine</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
              </div>

              {/* Sample AI Flow */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#0F172A] border border-[#1E293B] flex items-center justify-between">
                  <span className="text-[#CBD5E1]">01. Unstructured Enterprise Data</span>
                  <span className="text-[#38BDF8] font-mono">Input</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F172A] border border-[#2563EB]/50 flex items-center justify-between text-[#38BDF8]">
                  <span className="font-semibold">02. Vector Search & Embedding Engine</span>
                  <span className="font-mono">Processing</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F172A] border border-[#1E293B] flex items-center justify-between">
                  <span className="text-[#CBD5E1]">03. Custom Agentic Decision Pipeline</span>
                  <span className="text-[#38BDF8] font-mono">Automated</span>
                </div>
              </div>

              <div className="text-[11px] text-[#94A3B8] italic text-center pt-2">
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
              className="p-6 rounded-xl bg-[#172554]/70 border border-[#1E293B] hover:border-[#2563EB] transition-all space-y-3"
            >
              <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#38BDF8]" />
                <h4>{item.title}</h4>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
