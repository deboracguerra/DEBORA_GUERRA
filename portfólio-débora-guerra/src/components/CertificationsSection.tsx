import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Cloud, 
  Code, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface CertificationsSectionProps {
  language: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const getIcon = (type: string) => {
    switch (type) {
      case 'oracle':
        return <Cloud className="w-6 h-6 text-[#8A2BE2]" />;
      case 'hackathon':
        return <Code className="w-6 h-6 text-[#8A2BE2]" />;
      case 'alura':
        return <Award className="w-6 h-6 text-[#8A2BE2]" />;
      case 'university':
        return <GraduationCap className="w-6 h-6 text-[#8A2BE2]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#8A2BE2]" />;
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-20 md:py-28 bg-[#0D0D0D] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#1E1E1E] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.certifications.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.certifications.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          id="certifications-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CERTIFICATIONS.map((item) => (
            <div
              key={item.id}
              id={`cert-card-${item.id}`}
              className="group relative bg-[#121212] hover:bg-[#151515] border border-[#222222] hover:border-[#8A2BE2]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)]"
            >
              <div>
                {/* Header inside Card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#8A2BE2]/50 group-hover:bg-[#8A2BE2]/10 flex items-center justify-center transition-colors">
                      {getIcon(item.iconType)}
                    </div>
                    <div>
                      <div className="text-xs font-mono-code text-[#8A2BE2] font-semibold">
                        {item.institution}
                      </div>
                      <div className="text-[11px] font-mono-code text-[#666666]">
                        {item.period} {item.hours ? `• ${item.hours}` : ''}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-white bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {item.badgeText}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-white transition-colors">
                  {language === 'pt' ? item.titlePt : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {language === 'pt' ? item.descriptionPt : item.descriptionEn}
                </p>
              </div>

              {/* Skills / Key Topics */}
              <div className="pt-4 border-t border-[#1C1C1C]">
                <div className="text-[10px] font-mono-code text-[#777777] uppercase mb-2">
                  {language === 'pt' ? 'Competências & Tópicos:' : 'Skills & Topics Covered:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code px-2.5 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#D4D4D4] group-hover:border-[#383838]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#8A2BE2]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
