import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Cpu, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState(['Custom Software']);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '$25k - $50k',
    timeline: '1-3 Months',
    message: ''
  });

  const availableServices = [
    'Custom Software',
    'Web Applications',
    'Mobile Applications',
    'Desktop Software',
    'AI & Automation',
    'Cloud Solutions',
    'Legacy Modernization',
    'API Integration',
    'Maintenance & Support'
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="pt-28 pb-16 bg-[#F8F9F3] min-h-screen space-y-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E1E5D3] shadow-xs text-xs font-bold text-[#3F481A]">
          <MessageSquare className="w-4 h-4 text-[#65721F]" />
          <span>START A CONVERSATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3F481A] tracking-tight max-w-4xl leading-tight">
          Have an idea? Let's build it.
        </h1>

        <p className="text-lg sm:text-xl text-[#68705A] max-w-3xl leading-relaxed">
          Tell us what you're building, what you're trying to improve, or where technology could take your business next. Our technical directors will respond within 24 hours.
        </p>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Interactive Project Form */}
          <div className="lg:col-span-8 bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E1E5D3] shadow-sm space-y-8">
            
            {submitted ? (
              <div className="py-16 text-center space-y-6 bg-[#EEF2C9]/60 rounded-2xl border border-[#BDC033] p-8">
                <div className="w-16 h-16 bg-[#BDC033] text-[#3F481A] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-[#3F481A]">Project Inquiry Received!</h3>
                  <p className="text-base text-[#68705A] max-w-md mx-auto">
                    Thank you, {formData.name}. An OpusByte solutions architect has been assigned to review your inquiry. We'll be in touch shortly at {formData.email}.
                  </p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 01. Select Services */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#65721F] tracking-wider uppercase">
                    01 — What services are you interested in?
                  </label>

                  <div className="flex flex-wrap gap-2.5">
                    {availableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#3F481A] text-[#FFFFFF] border border-[#3F481A] shadow-xs'
                              : 'bg-[#F8F9F3] text-[#68705A] border border-[#E1E5D3] hover:border-[#BDC033]'
                          }`}
                        >
                          {srv}
                          {isSelected && ' ✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 02. Personal & Company Details */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#65721F] tracking-wider uppercase">
                    02 — Tell us about yourself
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Work Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      />
                    </div>
                  </div>
                </div>

                {/* 03. Budget & Timeline */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#65721F] tracking-wider uppercase">
                    03 — Estimated Budget & Timeline
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Target Investment Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      >
                        <option>$10k - $25k</option>
                        <option>$25k - $50k</option>
                        <option>$50k - $100k</option>
                        <option>$100k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3F481A] mb-1">Project Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                      >
                        <option>&lt; 1 Month (Urgent)</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Ongoing Engineering Retainer</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 04. Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#65721F] tracking-wider uppercase">
                    04 — Project Description & Scope
                  </label>

                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about what you want to build or modernize..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9F3] border border-[#E1E5D3] text-sm text-[#3F481A] focus:outline-none focus:border-[#BDC033]"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto text-base">
                    <span>Submit Project Inquiry</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right: Office & Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="bg-[#3F481A] p-8 rounded-3xl text-[#FFFFFF] space-y-6">
              <h3 className="text-2xl font-bold text-[#BDC033]">Contact Direct</h3>
              
              <div className="space-y-4 text-sm text-[#EEF2C9]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#BDC033] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#FFFFFF]">Email</div>
                    <a href="mailto:hello@opusbyte.com" className="hover:underline text-[#EEF2C9]">hello@opusbyte.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#BDC033] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#FFFFFF]">Direct Inquiries</div>
                    <div>+1 (415) 890-2026</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#BDC033] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#FFFFFF]">Headquarters</div>
                    <div>San Francisco, CA & Global Remote Engineering Teams</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#65721F]/60 text-xs text-[#EEF2C9]/80">
                <p>Company Size: 11–50 specialists</p>
                <p>Founded: 2026</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E1E5D3] space-y-4">
              <h4 className="font-bold text-base text-[#3F481A]">NDA & Confidentiality</h4>
              <p className="text-xs text-[#68705A] leading-relaxed">
                We are happy to sign a Non-Disclosure Agreement (NDA) before reviewing your proprietary documentation or system architecture.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
