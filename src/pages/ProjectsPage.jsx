import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import FinalCTA from '../components/FinalCTA';
import { ArrowUpRight, Sparkles, Layers, Cpu, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-28 pb-16 bg-[#F8F9F3] min-h-screen space-y-16">
      
      {/* Projects Page Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] p-8 sm:p-14 rounded-3xl border border-[#E1E5D3] shadow-sm relative overflow-hidden">
          
          {/* Background Technology Visual SVG */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
            <svg className="w-full h-full text-[#3F481A]" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" />
              <circle cx="200" cy="200" r="40" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2C9] border border-[#BDC033]/50 text-xs font-extrabold text-[#3F481A]">
              <Layers className="w-4 h-4 text-[#65721F]" />
              <span>OUR WORK & CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3F481A] tracking-tight leading-tight">
              Building digital products that move businesses forward.
            </h1>

            <p className="text-lg text-[#68705A] leading-relaxed">
              Explore how we apply software engineering, AI, cloud technologies, and modern digital experiences to solve complex business challenges across industries.
            </p>
          </div>

        </div>
      </section>

      {/* Filter Navigation System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div className="flex items-center gap-2 text-xs font-bold text-[#65721F] mr-2 shrink-0">
            <Filter className="w-4 h-4 text-[#BDC033]" />
            <span>FILTER:</span>
          </div>

          {projectCategories.map((category) => {
            const isSelected = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'bg-[#3F481A] text-[#FFFFFF] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#68705A] border border-[#E1E5D3] hover:border-[#BDC033] hover:text-[#3F481A]'
                }`}
              >
                {category}
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryDot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#BDC033]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Asymmetrical Editorial Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Asymmetrical grid spans:
              // Index 0: 8 cols (Large featured)
              // Index 1: 4 cols (Medium)
              // Index 2 & 3: 6 + 6 cols
              // Index 4: 12 cols (Full width case study)
              // Index 5: 6 cols
              let colSpanClass = "md:col-span-6";
              if (activeCategory === "All") {
                if (index === 0) colSpanClass = "md:col-span-12 lg:col-span-8";
                else if (index === 1) colSpanClass = "md:col-span-12 lg:col-span-4";
                else if (index === 2 || index === 3) colSpanClass = "md:col-span-6";
                else if (index === 4) colSpanClass = "md:col-span-12";
                else colSpanClass = "md:col-span-6";
              }

              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className={colSpanClass}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                    className="group relative cursor-pointer bg-[#FFFFFF] rounded-2xl border border-[#E1E5D3] hover:border-[#BDC033] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col h-full"
                  >
                    {/* Visual Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#3F481A]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3F481A]/80 via-[#3F481A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                      {/* Header Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur text-[#3F481A] text-xs font-bold shadow-xs">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#3F481A]/80 backdrop-blur text-[#EEF2C9] text-[11px] font-medium border border-[#65721F]">
                          {project.industry}
                        </span>
                      </div>

                      {/* Animated Lime Bottom Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BDC033] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#3F481A] group-hover:text-[#65721F] transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#68705A] leading-relaxed line-clamp-2">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Tech Stack & Arrow CTA */}
                      <div className="pt-4 border-t border-[#E1E5D3]/60 flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-[#F8F9F3] text-[#68705A] group-hover:bg-[#EEF2C9] group-hover:text-[#3F481A] text-xs font-medium transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button 
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                          className="flex items-center gap-1 text-xs font-bold text-[#65721F] group-hover:text-[#3F481A] shrink-0 bg-transparent border-none cursor-pointer"
                        >
                          <span className="hidden sm:inline">View Case Study</span>
                          <div className="w-9 h-9 rounded-full bg-[#F8F9F3] group-hover:bg-[#BDC033] flex items-center justify-center text-[#3F481A] transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <FinalCTA />
    </div>
  );
}
