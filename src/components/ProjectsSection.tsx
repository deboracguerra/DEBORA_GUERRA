import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ProjectsSectionProps {
  language: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = TRANSLATIONS[language];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-[#0D0D0D] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-[#1E1E1E]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Direct Link to GitHub Profile */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            id="all-github-projects-link"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161616] border border-[#2E2E2E] hover:border-[#8A2BE2] text-xs font-mono-code text-white hover:text-[#8A2BE2] transition-colors self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-[#8A2BE2]" />
            <span>github.com/deboracguerra</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Projects Cards Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative bg-[#121212] hover:bg-[#151515] border border-[#222222] hover:border-[#8A2BE2]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(138,43,226,0.2)]"
            >
              <div>
                {/* Project Image Preview with Overlay */}
                <div className="relative w-full h-52 overflow-hidden bg-[#0A0A0A] border-b border-[#202020]">
                  <img
                    src={project.imageUrl}
                    alt={project.titlePt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono-code uppercase tracking-wider text-white bg-[#0D0D0D]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded">
                    {language === 'pt' ? project.categoryPt : project.categoryEn}
                  </span>

                  {/* Quick Detail Action on Image */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#0D0D0D]/90 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-[#8A2BE2] hover:border-[#8A2BE2] transition-colors"
                    title={t.projects.viewDetails}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-white mb-2.5 group-hover:text-[#8A2BE2] transition-colors">
                    {language === 'pt' ? project.titlePt : project.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
                    {language === 'pt' ? project.descriptionPt : project.descriptionEn}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#888888] font-mono-code">
                        <span className="text-[#8A2BE2] font-bold">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#BBBBBB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-2.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-github-${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#8A2BE2]/15 hover:bg-[#8A2BE2] border border-[#8A2BE2]/40 hover:border-[#8A2BE2] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects.viewOnGithub}</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] border border-[#2E2E2E] text-[#AAAAAA] hover:text-white text-xs font-bold font-mono-code transition-colors"
                  title={t.projects.viewDetails}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
