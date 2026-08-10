import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Careers', path: '/careers', id: 'careers' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  // Scroll detection & Scroll Spy for active section indication
  useEffect(() => {
    const handleScroll = () => {
      // Header backdrop state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy when on Homepage
      if (location === '/') {
        const sections = ['home', 'services', 'projects', 'about', 'careers', 'contact'];
        const scrollPosition = window.scrollY + 220;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle nav click: smooth scroll if section exists on page, else navigate route
  const handleNavClick = (e, link) => {
    if (location === '/') {
      const sectionEl = document.getElementById(link.id);
      if (sectionEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = sectionEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(link.id);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#FFFFFF]/85 backdrop-blur-2xl border-b border-[#E1E5D3] shadow-md py-3'
        : 'bg-[#F8F9F3]/75 backdrop-blur-xl border-b border-[#E1E5D3]/70 shadow-xs py-4.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer text-decoration-none py-0.5">
            <img
              src="/assets/OPUSBYTE1.png"
              alt="OpusByte — Building What's Next"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Glassmorphic Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#FFFFFF]/75 backdrop-blur-x2 border border-[#E1E5D3]/90 px-3 py-1.5 rounded-full shadow-sm shadow-[#3F481A]/5">
            {navLinks.map((link) => {
              const isRouteActive = location === link.path || (link.path !== '/' && location.startsWith(link.path));
              const isSectionActive = location === '/' && activeSection === link.id;
              const isActive = location === '/' ? isSectionActive : isRouteActive;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full text-decoration-none cursor-pointer ${isActive ? 'text-[#3F481A] font-bold' : 'text-[#68705A] hover:text-[#3F481A]'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#EEF2C9] rounded-full -z-10 border border-[#BDC033]/60 shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#FFFFFF]/90 backdrop-blur border border-[#E1E5D3] text-[#3F481A] focus:outline-none shadow-xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Glassmorphic Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FFFFFF]/90 backdrop-blur-2xl border-b border-[#E1E5D3] px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => {
                const isRouteActive = location === link.path || (link.path !== '/' && location.startsWith(link.path));
                const isSectionActive = location === '/' && activeSection === link.id;
                const isActive = location === '/' ? isSectionActive : isRouteActive;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors text-decoration-none flex items-center justify-between ${isActive
                      ? 'bg-[#EEF2C9] text-[#3F481A] font-bold border border-[#BDC033]/60 shadow-xs'
                      : 'text-[#68705A] hover:bg-[#F8F9F3]'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#BDC033]"></div>}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E1E5D3]">
                <Link href="/contact" className="btn-primary w-full text-center justify-center">
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
