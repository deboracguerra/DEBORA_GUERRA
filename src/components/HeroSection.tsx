import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { 
  Github, 
  Linkedin,
  Mail, 
  Sparkles, 
  ArrowRight, 
  Database, 
  Code2, 
  Award, 
  Camera,
  MapPin,
  Flame
} from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  profileImage: string;
  onOpenImageModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  profileImage,
  onOpenImageModal,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#1E1E1E] overflow-hidden"
    >
      {/* Editorial Decorative Grid Background */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      {/* Subtle Purple Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8A2BE2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Tag */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2D2D2D] text-[11px] font-mono-code uppercase tracking-wider text-[#D1D1D1]"
          >
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-pulse shadow-[0_0_8px_#8A2BE2]" />
            <span>{t.hero.statusBadge}</span>
          </div>

          <span className="hidden sm:inline-block text-[#444444] text-xs">/</span>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#8E8E8E] font-mono-code">
            <MapPin className="w-3.5 h-3.5 text-[#8A2BE2]" />
            <span>São Paulo, Brasil • UTC-3</span>
          </div>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Profile Image with Vibrant Purple Circle Background */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* THE STRATEGIC VIBRANT ELECTRIC PURPLE CIRCLE */}
              <div
                id="hero-purple-circle"
                className="absolute inset-0 rounded-full bg-[#8A2BE2] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 blur-[1px] opacity-95 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_60px_rgba(138,43,226,0.5)]"
                aria-hidden="true"
              />

              {/* Secondary Outer Subtle Ring */}
              <div 
                className="absolute inset-0 rounded-full border border-white/20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 scale-105 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Profile Image Element (id="profile-img" as requested) */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-[#1A1A1A] bg-[#121212] shadow-2xl">
                <img
                  src="1000000145.jpg"
                  alt="Débora Guerra"
                  id="profile-img"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to generated image asset if needed
                    (e.currentTarget as HTMLImageElement).src = profileImage || '/src/assets/images/debora_guerra_attached_1786646652816.jpg';
                  }}
                />

                {/* Subtle Image Overlay / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Interactive Change Photo Hover Button */}
                <button
                  type="button"
                  id="btn-edit-photo"
                  onClick={onOpenImageModal}
                  className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-[#0D0D0D]/90 border border-white/20 text-white hover:bg-[#8A2BE2] hover:border-[#8A2BE2] transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg"
                  title={t.hero.editPhotoTooltip}
                  aria-label={t.hero.editPhotoTooltip}
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Badge 1: Data + AI */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-2 sm:-left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2D2D2D] shadow-xl">
                <Database className="w-4 h-4 text-[#8A2BE2]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#888888] uppercase">Focus</span>
                  <span className="text-xs font-bold text-white tracking-wide">Data & Python</span>
                </div>
              </div>

              {/* Floating Badge 2: Emmy & Global Experience */}
              <div className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2D2D2D] shadow-xl">
                <Award className="w-4 h-4 text-[#E5A93C]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#888888] uppercase">Experience</span>
                  <span className="text-xs font-bold text-white tracking-wide">Netflix / Emmy</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Typography, Titles, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Title Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.greeting}</span>
              </div>

              <h1
                id="hero-name-title"
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight text-white leading-none uppercase"
              >
                DÉBORA GUERRA
              </h1>

              <div
                id="hero-subtitle"
                className="inline-block pt-1 text-sm sm:text-base font-bold font-mono-code tracking-wider text-[#9B51E0] bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 px-3 py-1 rounded"
              >
                {t.hero.subtitle}
              </div>
            </div>

            {/* Bio Description (Editable / Fully semantic) */}
            <p
              id="hero-bio-text"
              className="text-[#B5B5B5] text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
            >
              {t.hero.bio}
            </p>

            {/* CTAs Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary CTA: Acessar Meu GitHub */}
              <a
                href="https://github.com/deboracguerra"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-github"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#8A2BE2] hover:bg-[#7822c9] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] group"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'pt' ? 'Acessar Meu GitHub' : 'Access My GitHub'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/d%C3%A9bora-guerra-534b80a6/"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-linkedin"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#181818] hover:bg-[#222222] border border-[#333333] hover:border-[#8A2BE2] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-[#8A2BE2]" />
                <span>LinkedIn</span>
              </a>

              {/* Tertiary CTA: Contato */}
              <a
                href="mailto:deboracguerra@gmail.com"
                id="cta-hero-contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#181818] hover:bg-[#222222] border border-[#333333] hover:border-[#8A2BE2] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#8A2BE2]" />
                <span>{language === 'pt' ? 'Contato' : 'Contact'}</span>
              </a>
            </div>

            {/* Editorial Quick Numbers Ticker / Highlights */}
            <div
              id="hero-stats-grid"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 w-full border-t border-[#202020]"
            >
              <div className="bg-[#121212] border border-[#222222] p-3 rounded-lg hover:border-[#8A2BE2]/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black font-display text-white">
                  {t.hero.statsYears}
                </div>
                <div className="text-[11px] text-[#888888] font-mono-code uppercase mt-0.5">
                  {t.hero.statsYearsLabel}
                </div>
              </div>

              <div className="bg-[#121212] border border-[#222222] p-3 rounded-lg hover:border-[#8A2BE2]/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black font-display text-[#8A2BE2]">
                  {t.hero.statsHours}
                </div>
                <div className="text-[11px] text-[#888888] font-mono-code uppercase mt-0.5">
                  {t.hero.statsHoursLabel}
                </div>
              </div>

              <div className="bg-[#121212] border border-[#222222] p-3 rounded-lg hover:border-[#8A2BE2]/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black font-display text-white">
                  {t.hero.statsCert}
                </div>
                <div className="text-[11px] text-[#888888] font-mono-code uppercase mt-0.5">
                  {t.hero.statsCertLabel}
                </div>
              </div>

              <div className="bg-[#121212] border border-[#222222] p-3 rounded-lg hover:border-[#8A2BE2]/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black font-display text-[#8A2BE2]">
                  {t.hero.statsProjects}
                </div>
                <div className="text-[11px] text-[#888888] font-mono-code uppercase mt-0.5">
                  {t.hero.statsProjectsLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
