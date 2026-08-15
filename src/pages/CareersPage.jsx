import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { careersData, companyBenefits } from '../data/careers';
import FinalCTA from '../components/FinalCTA';
import { Users, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', notes: '' });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRole(null);
      setFormData({ name: '', email: '', portfolio: '', notes: '' });
    }, 2500);
  };

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen space-y-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs text-xs font-bold text-[#0F172A]">
          <Users className="w-4 h-4 text-[#2563EB]" />
          <span>CAREERS AT OPUSBYTE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight max-w-4xl leading-tight">
          Build what's next with us.
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl leading-relaxed">
          We're building a team passionate about software engineering, artificial intelligence, cloud technologies, and digital innovation.
        </p>
      </section>

      {/* Company Culture & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <div className="section-label">WHY JOIN OPUSBYTE</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Engineering culture & employee benefits.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyBenefits.map((ben) => (
            <div key={ben.title} className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2E8F0] space-y-2">
              <div className="w-2 h-2 rounded-full bg-[#2563EB] mb-3"></div>
              <h3 className="font-bold text-base text-[#0F172A]">{ben.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <div className="section-label">CURRENT OPENINGS</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Open Engineering & Technical Roles
          </h2>
        </div>

        <div className="space-y-6">
          {careersData.map((role) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] shadow-xs hover:shadow-md transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#DBEAFE] text-[#0F172A] text-xs font-bold">
                      {role.department}
                    </span>
                    <span className="text-xs text-[#64748B] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> {role.location}
                    </span>
                    <span className="text-xs text-[#64748B] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">{role.title}</h3>
                </div>

                <button
                  onClick={() => setSelectedRole(role)}
                  className="btn-primary self-start md:self-auto text-xs"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                {role.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {role.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#F1F5F9] text-[#0F172A] text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Role Application Modal Drawer */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <span className="text-xs font-bold text-[#2563EB] uppercase">{selectedRole.department}</span>
                <h3 className="text-xl font-bold text-[#0F172A]">{selectedRole.title}</h3>
              </div>
              <button onClick={() => setSelectedRole(null)} className="p-2 rounded-full hover:bg-[#F8FAFC]">
                <X className="w-5 h-5 text-[#0F172A]" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#DBEAFE] rounded-xl border border-[#2563EB]">
                <CheckCircle2 className="w-12 h-12 text-[#2563EB] mx-auto" />
                <h4 className="text-xl font-bold text-[#0F172A]">Application Submitted!</h4>
                <p className="text-xs text-[#64748B]">Our engineering talent team will review your submission and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">GitHub / LinkedIn / Portfolio URL</label>
                  <input
                    required
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://github.com/janedoe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Brief Introduction & Why OpusByte</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your technical projects..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-primary w-full justify-center">
                    <span>Submit Engineering Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}

      <FinalCTA />
    </div>
  );
}
