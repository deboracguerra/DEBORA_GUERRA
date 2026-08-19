import React, { useState } from 'react';
import { Language, TechSkill } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TECH_SKILLS } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Workflow, 
  Cloud, 
  GitBranch, 
  BarChart3, 
  FileSpreadsheet,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'data' | 'cloud' | 'tools'>('all');
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#8A2BE2]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#8A2BE2]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#8A2BE2]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#8A2BE2]" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-[#8A2BE2]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#8A2BE2]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-[#8A2BE2]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#8A2BE2]" />;
    }
  };

  const filteredSkills = TECH_SKILLS.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-[#0D0D0D] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1E1E1E]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.skills.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div
            id="skills-filter-container"
            className="flex flex-wrap items-center gap-2 bg-[#141414] p-1.5 rounded-lg border border-[#262626]"
          >
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#8A2BE2] text-white shadow-[0_0_12px_rgba(138,43,226,0.4)]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {t.skills.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('data')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'data'
                  ? 'bg-[#8A2BE2] text-white shadow-[0_0_12px_rgba(138,43,226,0.4)]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {t.skills.filterData}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('cloud')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'cloud'
                  ? 'bg-[#8A2BE2] text-white shadow-[0_0_12px_rgba(138,43,226,0.4)]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {t.skills.filterCloud}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('tools')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'tools'
                  ? 'bg-[#8A2BE2] text-white shadow-[0_0_12px_rgba(138,43,226,0.4)]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {t.skills.filterTools}
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="group relative bg-[#121212] hover:bg-[#161616] border border-[#222222] hover:border-[#8A2BE2]/60 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(138,43,226,0.15)]"
            >
              {/* Header inside Card */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#8A2BE2]/40 group-hover:bg-[#8A2BE2]/10 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#8A2BE2] bg-[#8A2BE2]/10 px-2 py-0.5 rounded border border-[#8A2BE2]/20">
                      {language === 'pt' ? skill.categoryLabelPt : skill.categoryLabelEn}
                    </span>
                    <span className="text-[10px] font-mono-code text-[#666666] mt-1">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white tracking-wide mb-2 group-hover:text-[#8A2BE2] transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {language === 'pt' ? skill.descriptionPt : skill.descriptionEn}
                </p>
              </div>

              {/* Tools Pill List */}
              <div className="pt-4 border-t border-[#1C1C1C]">
                <div className="text-[10px] font-mono-code text-[#777777] uppercase mb-2">
                  {language === 'pt' ? 'Módulos & Tecnologias:' : 'Modules & Technologies:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#181818] border border-[#2B2B2B] text-[#D0D0D0] group-hover:border-[#383838]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-10 p-4 rounded-lg bg-[#121212] border border-[#222222] flex items-center gap-3">
          <div className="p-2 rounded-md bg-[#8A2BE2]/10 text-[#8A2BE2]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-xs text-[#8E8E8E] font-mono-code">
            {t.skills.techStackNote}
          </p>
        </div>
      </div>
    </section>
  );
};
