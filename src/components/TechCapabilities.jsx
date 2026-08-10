import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Cpu, Layout, Database, Server, Terminal, Shield, Zap } from 'lucide-react';

export default function TechCapabilities() {
  const [activeNode, setActiveNode] = useState('AI');

  const capabilities = [
    { title: "Software Engineering", desc: "Clean architecture, automated testing, scalable design patterns." },
    { title: "AI & Machine Learning", desc: "Agentic pipelines, LLM integration, predictive machine learning models." },
    { title: "Cloud Computing", desc: "AWS, GCP, Azure serverless and Kubernetes microservices." },
    { title: "API Architecture", desc: "REST, GraphQL, gRPC, and message brokers with enterprise gateways." },
    { title: "System Integration", desc: "Seamless interconnectivity across enterprise ERPs, CRMs, and SaaS." },
    { title: "Digital Products", desc: "End-to-end web & mobile applications designed for delight." },
    { title: "Automation", desc: "Intelligent RPA, CI/CD pipelines, and workflow orchestration." },
    { title: "Legacy Modernization", desc: "Strangler fig migrations eliminating technical debt smoothly." }
  ];

  const networkNodes = [
    { id: 'AI', label: 'AI & ML Engine', icon: Brain, x: 50, y: 25, desc: "Autonomous agentic reasoning & vector search" },
    { id: 'Cloud', label: 'Cloud Infrastructure', icon: Cloud, x: 20, y: 50, desc: "Multi-cloud elasticity & Kubernetes clusters" },
    { id: 'APIs', label: 'API Layer', icon: Cpu, x: 80, y: 50, desc: "High-throughput REST/GraphQL gateway" },
    { id: 'Apps', label: 'Digital Applications', icon: Layout, x: 35, y: 80, desc: "Responsive web & cross-platform mobile" },
    { id: 'Data', label: 'Data Pipelines', icon: Database, x: 65, y: 80, desc: "Real-time Kafka streams & analytics" },
    { id: 'Systems', label: 'Enterprise Systems', icon: Server, x: 50, y: 55, desc: "Core legacy & backend databases" }
  ];

  return (
    <section className="py-24 bg-[#F8F9F3] border-t border-b border-[#E1E5D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-label justify-center">03 — CAPABILITIES</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3F481A]">
            Engineering the technology behind tomorrow.
          </h2>
          <p className="text-base sm:text-lg text-[#68705A]">
            We bridge deep software engineering expertise with cutting-edge artificial intelligence and cloud architectures.
          </p>
        </div>

        {/* Interactive Animated Node Network Section */}
        <div className="bg-[#3F481A] rounded-2xl p-6 sm:p-10 text-[#FFFFFF] shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#BDC033]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Network Interactive Visual */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] flex items-center justify-center bg-[#2f3713]/50 rounded-xl border border-[#65721F]/40 p-4">
              
              {/* SVG Connecting Lines with Lime Glow */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#BDC033]/40 stroke-2">
                <line x1="50%" y1="25%" x2="20%" y2="50%" strokeDasharray="4 4" />
                <line x1="50%" y1="25%" x2="80%" y2="50%" strokeDasharray="4 4" />
                <line x1="20%" y1="50%" x2="35%" y2="80%" />
                <line x1="80%" y1="50%" x2="65%" y2="80%" />
                <line x1="50%" y1="25%" x2="50%" y2="55%" />
                <line x1="35%" y1="80%" x2="65%" y2="80%" />
                <line x1="50%" y1="55%" x2="35%" y2="80%" />
                <line x1="50%" y1="55%" x2="65%" y2="80%" />
              </svg>

              {/* Render Nodes */}
              {networkNodes.map((node) => {
                const IconComponent = node.icon;
                const isActive = activeNode === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group focus:outline-none ${
                      isActive ? 'z-20 scale-110' : 'z-10 hover:scale-105'
                    }`}
                  >
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 shadow-md ${
                      isActive 
                        ? 'bg-[#BDC033] text-[#3F481A] border-[#FFFFFF] font-bold ring-4 ring-[#BDC033]/30' 
                        : 'bg-[#3F481A] text-[#EEF2C9] border-[#65721F] hover:border-[#BDC033]'
                    }`}>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#3F481A]' : 'text-[#BDC033]'}`} />
                      <span className="text-xs font-semibold whitespace-nowrap">{node.label}</span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Node Detail Inspector Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65721F]/40 border border-[#BDC033]/40 text-xs font-semibold text-[#BDC033]">
                <Zap className="w-3.5 h-3.5" />
                <span>ACTIVE NODE INSPECTOR</span>
              </div>

              {networkNodes.filter(n => n.id === activeNode).map(node => (
                <div key={node.id} className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] flex items-center gap-3">
                    <span>{node.label}</span>
                  </h3>
                  <p className="text-sm text-[#EEF2C9]/90 leading-relaxed">
                    {node.desc}. Designed with enterprise security, high-concurrency protocols, and zero-trust verification.
                  </p>
                  
                  <div className="pt-4 border-t border-[#65721F]/50 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#65721F] text-xs text-[#FFFFFF]">High Performance</span>
                    <span className="px-2.5 py-1 rounded bg-[#65721F] text-xs text-[#FFFFFF]">Fault Tolerant</span>
                    <span className="px-2.5 py-1 rounded bg-[#65721F] text-xs text-[#FFFFFF]">Automated Monitoring</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 8 Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E1E5D3] hover:border-[#BDC033] hover:shadow-sm transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-[#BDC033] mb-4"></div>
              <h3 className="font-bold text-base text-[#3F481A] mb-2">{cap.title}</h3>
              <p className="text-xs text-[#68705A] leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
