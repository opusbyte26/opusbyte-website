import React from 'react';
import { Link } from 'wouter';
import { Cpu, ArrowUpRight, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#FFFFFF] pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1E293B]">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="flex items-center group text-decoration-none mb-4 inline-flex">
                <img 
                  src="/OPUSBYTE_cropped.png" 
                  alt="OpusByte — Building What's Next" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              
              <p className="text-[#94A3B8] text-sm max-w-sm leading-relaxed mb-6">
                We transform ideas into impactful digital products and intelligent business solutions through software engineering, cloud technologies, and artificial intelligence.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#172554] border border-[#2563EB]/40 text-xs font-semibold text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                Tagline: "Building What's Next"
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#github" className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#2563EB] hover:text-[#FFFFFF] text-[#94A3B8] flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#2563EB] hover:text-[#FFFFFF] text-[#94A3B8] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#2563EB] hover:text-[#FFFFFF] text-[#94A3B8] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#38BDF8] mb-4">Navigation</h4>
            <ul className="space-y-2.5 list-none p-0 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#38BDF8] transition-colors text-decoration-none flex items-center gap-1">
                  <span>Projects</span>
                  <span className="text-[10px] bg-[#2563EB] text-[#FFFFFF] px-1.5 py-0.5 rounded font-bold">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#38BDF8] transition-colors text-decoration-none">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#38BDF8] mb-4">Core Services</h4>
            <ul className="space-y-2.5 list-none p-0 text-sm text-[#CBD5E1]">
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Web Applications</Link></li>
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Mobile Applications</Link></li>
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-[#38BDF8] transition-colors text-decoration-none">System Integration</Link></li>
            </ul>
          </div>

          {/* Col 5: Company Info */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#38BDF8] mb-4">Company</h4>
            <div className="space-y-3 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                <span>San Francisco, CA & Global Remote</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="mailto:hello@opusbyte.com" className="hover:text-[#38BDF8] text-decoration-none text-[#CBD5E1]">hello@opusbyte.com</a>
              </div>
              <div className="pt-2 text-xs text-[#94A3B8]">
                <p>Company Size: 11–50 employees</p>
                <p>Founded: 2026</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 OpusByte. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#38BDF8] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#38BDF8] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#38BDF8] cursor-pointer">Security Overview</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
