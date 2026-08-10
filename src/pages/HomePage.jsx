import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ServicesSection from '../components/ServicesSection';
import TechCapabilities from '../components/TechCapabilities';
import HowWeWork from '../components/HowWeWork';
import FeaturedProjects from '../components/FeaturedProjects';
import AISection from '../components/AISection';
import CloudTransformation from '../components/CloudTransformation';
import WhyOpusByte from '../components/WhyOpusByte';
import BrandPhilosophy from '../components/BrandPhilosophy';
import CareersSection from '../components/CareersSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <WhoWeAre />
      <div id="services">
        <ServicesSection />
      </div>
      <TechCapabilities />
      <HowWeWork />
      <div id="projects">
        <FeaturedProjects />
      </div>
      <AISection />
      <CloudTransformation />
      <div id="about">
        <WhyOpusByte />
        <BrandPhilosophy />
      </div>
      <div id="careers">
        <CareersSection />
      </div>
      <div id="contact">
        <FinalCTA />
      </div>
    </div>
  );
}
