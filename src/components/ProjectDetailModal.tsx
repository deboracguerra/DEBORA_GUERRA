import React from 'react';
import { ProjectItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { X, Github, ExternalLink, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language,
  onClose,
}) => {
  if (!project) return null;
  const t = TRANSLATIONS[language];

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-[#2D2D2D] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1C1C] border border-[#333333] text-[#A0A0A0] hover:text-white hover:border-[#8A2BE2] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <span className="text-xs font-mono-code text-[#8A2BE2] uppercase tracking-wider bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 px-2.5 py-1 rounded">
            {language === 'pt' ? project.categoryPt : project.categoryEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-3 uppercase">
            {language === 'pt' ? project.titlePt : project.titleEn}
          </h3>
        </div>

        {/* Image Preview */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#262626] bg-[#0A0A0A]">
          <img
            src={project.imageUrl}
            alt={project.titlePt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#181818] border border-[#262626]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-display text-[#8A2BE2]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono-code text-[#888888] uppercase mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono-code text-[#888888] uppercase tracking-wider">
            {language === 'pt' ? 'Visão Geral da Arquitetura:' : 'Architecture & Implementation:'}
          </h4>
          <p className="text-sm text-[#CCCCCC] leading-relaxed">
            {language === 'pt' ? project.fullDetailsPt : project.fullDetailsEn}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono-code text-[#888888] uppercase tracking-wider">
            {t.projects.highlightsTitle}
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#BBBBBB]">
                <CheckCircle2 className="w-4 h-4 text-[#8A2BE2] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#181818] border border-[#2D2D2D] text-[#CCCCCC]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#222222]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#333333] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#262626]"
          >
            {t.projects.modalClose}
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8A2BE2] hover:bg-[#7822c9] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(138,43,226,0.4)]"
          >
            <Github className="w-4 h-4" />
            <span>{t.projects.modalRepoButton}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
