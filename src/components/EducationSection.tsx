import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Binary, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Calendar,
  Building2,
  Brain,
  Database,
  Terminal,
  Compass
} from 'lucide-react';

interface EducationSectionProps {
  language: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'cs':
        return <Binary className="w-6 h-6 text-[#8A2BE2]" />;
      case 'datascience':
        return <Brain className="w-6 h-6 text-[#8A2BE2]" />;
      case 'cinema':
        return <Film className="w-6 h-6 text-[#8A2BE2]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#8A2BE2]" />;
    }
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-3.5 h-3.5 text-[#8A2BE2]" />;
      case 1:
        return <Database className="w-3.5 h-3.5 text-[#8A2BE2]" />;
      case 2:
        return <Terminal className="w-3.5 h-3.5 text-[#8A2BE2]" />;
      case 3:
        return <Compass className="w-3.5 h-3.5 text-[#8A2BE2]" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-[#8A2BE2]" />;
    }
  };

  return (
    <section
      id="education"
      className="relative py-20 md:py-28 bg-[#0D0D0D] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#1E1E1E] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.education.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education List / Grid */}
        <div className="space-y-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`education-card-${item.id}`}
              className="group relative bg-[#121212] hover:bg-[#151515] border border-[#222222] hover:border-[#8A2BE2]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.12)]"
            >
              {/* Top Row: Icon + Degree + Institution + Badge */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#1E1E1E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#8A2BE2]/50 group-hover:bg-[#8A2BE2]/10 flex items-center justify-center shrink-0 transition-colors">
                    {getEducationIcon(item.iconType)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-white transition-colors">
                      {language === 'pt' ? item.degreePt : item.degreeEn}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs font-mono-code text-[#8E8E8E]">
                      <span className="flex items-center gap-1 text-[#8A2BE2] font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.institution}
                      </span>
                      <span className="flex items-center gap-1 text-[#777777]">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period} {item.hours ? `• ${item.hours}` : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="self-start md:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code uppercase tracking-wider text-white bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 px-3 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(138,43,226,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A2BE2] animate-pulse" />
                    <span>{language === 'pt' ? item.badgePt : item.badgeEn}</span>
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="py-5">
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  {language === 'pt' ? item.descriptionPt : item.descriptionEn}
                </p>
              </div>

              {/* Structured Topics / Grid (If specialisation with categories) */}
              {item.categories && item.categories.length > 0 && (
                <div className="pt-4 border-t border-[#1C1C1C] space-y-4">
                  <div className="text-[11px] font-mono-code text-[#8A2BE2] uppercase tracking-wider font-semibold">
                    {t.education.curriculumTitle}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#171717] border border-[#252525] space-y-2.5"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-white">
                          {getCategoryIcon(idx)}
                          <span>{language === 'pt' ? cat.titlePt : cat.titleEn}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {cat.items.map((it, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-xs text-[#A0A0A0] font-sans"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8A2BE2] mt-1.5 shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Skills Tags (For standard degrees) */}
              {item.skills && item.skills.length > 0 && (
                <div className="pt-4 border-t border-[#1C1C1C] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono-code text-[#777777] uppercase mr-1">
                    {language === 'pt' ? 'Domínios Centrais:' : 'Core Domains:'}
                  </span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#181818] border border-[#282828] text-[#D4D4D4]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#8A2BE2]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
