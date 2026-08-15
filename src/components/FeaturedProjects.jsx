import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredList = projectsData.slice(0, 4);

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="section-label">05 — SELECTED WORK</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A]">
              Digital products built to make an impact.
            </h2>
            <p className="text-base text-[#64748B]">
              Explore a selection of digital experiences, software systems, and intelligent solutions built around real-world challenges.
            </p>
          </div>

          <Link href="/projects" className="btn-primary self-start md:self-auto">
            <span>View All Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Featured Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featuredList.map((project, index) => {
            const isLarge = index === 0;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isLarge ? "lg:col-span-8" : index === 1 ? "lg:col-span-4" : "lg:col-span-6"}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                  className="group relative cursor-pointer bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col h-full"
                >
                  {/* Image Container with Zoom & Gradient */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0F172A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur text-[#0F172A] text-xs font-bold shadow-xs">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur text-[#DBEAFE] text-[11px] font-medium border border-[#2563EB]/40">
                        {project.industry}
                      </span>
                    </div>

                    {/* Expandable Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Technology Stack Tags & Arrow */}
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#DBEAFE] group-hover:text-[#0F172A] text-xs font-medium transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        aria-label="View Case Study"
                        className="w-10 h-10 rounded-full bg-[#F1F5F9] group-hover:bg-[#2563EB] flex items-center justify-center text-[#0F172A] group-hover:text-[#FFFFFF] transition-all duration-300 shrink-0 border-none cursor-pointer"
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Nav CTA */}
        <div className="pt-4 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-base font-bold text-[#2563EB] hover:text-[#0F172A] transition-colors text-decoration-none">
            <span>Explore all case studies in our project portfolio</span>
            <ArrowUpRight className="w-5 h-5 text-[#2563EB]" />
          </Link>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
