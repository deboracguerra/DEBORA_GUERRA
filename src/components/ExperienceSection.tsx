import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EXPERIENCES, GLOBAL_CLIENTS } from '../data/portfolioData';
import { 
  Briefcase, 
  Trophy, 
  Tv, 
  Film, 
  CheckCircle, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Clapperboard
} from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 bg-[#0D0D0D] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#1E1E1E] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* SPECIAL FEATURED BANNER: GLOBAL STREAMING PLAYERS */}
        <div
          id="global-players-banner"
          className="mb-16 bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#2D2D2D] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#8A2BE2]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#242424]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] uppercase font-bold tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.experience.clientsTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#888888]">
                {t.experience.clientsSubtitle}
              </p>
            </div>
            <div className="text-[11px] font-mono-code px-3 py-1 rounded bg-[#1F1F1F] border border-[#333333] text-[#CCCCCC] self-start md:self-auto">
              GLOBAL BROADCAST & STREAMING STANDARDS
            </div>
          </div>

          {/* Player Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group relative bg-[#0D0D0D] border border-[#242424] hover:border-[#8A2BE2]/80 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-[0_0_20px_rgba(138,43,226,0.2)]"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-black font-display tracking-widest text-white group-hover:text-white transition-colors">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono-code text-[#777777] group-hover:text-[#A0A0A0] transition-colors mt-1.5 uppercase">
                  {client.label}
                </div>
                <div className="w-8 h-[2px] bg-[#8A2BE2] mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE LIST */}
        <div id="experience-timeline" className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative bg-[#121212] border border-[#222222] hover:border-[#8A2BE2]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.1)]"
            >
              {/* Header inside Timeline Item */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E1E1E]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-wide">
                      {exp.company}
                    </h3>
                    
                    {/* Featured Award / Emmy Badge */}
                    {exp.featuredBadgePt && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-code tracking-wide ${
                          exp.badgeType === 'award'
                            ? 'bg-[#8A2BE2]/20 border border-[#8A2BE2] text-white shadow-[0_0_12px_rgba(138,43,226,0.4)]'
                            : exp.badgeType === 'nomination'
                            ? 'bg-[#E5A93C]/20 border border-[#E5A93C] text-[#F5C77E]'
                            : 'bg-[#1C1C1C] border border-[#333333] text-[#CCCCCC]'
                        }`}
                      >
                        {exp.badgeType === 'award' && <Trophy className="w-3.5 h-3.5 text-[#8A2BE2]" />}
                        {exp.badgeType === 'nomination' && <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />}
                        {exp.badgeType === 'standard' && <Clapperboard className="w-3.5 h-3.5 text-[#8A2BE2]" />}
                        <span>
                          {language === 'pt' ? exp.featuredBadgePt : exp.featuredBadgeEn}
                        </span>
                      </span>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#8A2BE2]">
                    {language === 'pt' ? exp.rolePt : exp.roleEn}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181818] border border-[#2B2B2B] text-xs font-mono-code text-[#AAAAAA] self-start lg:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#8A2BE2]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Main Summary Description */}
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed mb-6">
                {language === 'pt' ? exp.descriptionPt : exp.descriptionEn}
              </p>

              {/* Achievements Checklist */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  {t.experience.keyDeliverables}:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(language === 'pt' ? exp.achievementsPt : exp.achievementsEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#161616] border border-[#222222]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#8A2BE2] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#CCCCCC] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech / Experience Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1C1C1C]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#181818] border border-[#282828] text-[#8E8E8E]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
