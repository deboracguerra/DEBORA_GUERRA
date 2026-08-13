import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DEFAULT_PROFILE_IMAGE } from '../data/portfolioData';
import { X, Image as ImageIcon, RotateCcw, Check, Upload, Link as LinkIcon, FileImage } from 'lucide-react';

interface ImageCustomizerModalProps {
  isOpen: boolean;
  currentImage: string;
  language: Language;
  onClose: () => void;
  onUpdateImage: (newUrl: string) => void;
}

export const ImageCustomizerModal: React.FC<ImageCustomizerModalProps> = ({
  isOpen,
  currentImage,
  language,
  onClose,
  onUpdateImage,
}) => {
  const [inputUrl, setInputUrl] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert(language === 'pt' ? 'Por favor selecione um arquivo de imagem válido.' : 'Please select a valid image file.');
      return;
    }
    setSelectedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onUpdateImage(e.target.result as string);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleSubmitUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onUpdateImage(inputUrl.trim());
      onClose();
    }
  };

  const handleReset = () => {
    onUpdateImage(DEFAULT_PROFILE_IMAGE);
    onClose();
  };

  return (
    <div
      id="image-customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="image-customizer-modal-box"
        className="relative w-full max-w-lg bg-[#141414] border border-[#2D2D2D] rounded-2xl shadow-2xl p-6 space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-[#1F1F1F] text-[#888888] hover:text-white hover:bg-[#2A2A2A] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A2BE2] uppercase">
            <ImageIcon className="w-4 h-4" />
            <span>{t.imageModal.title}</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            {language === 'pt' ? 'Atualizar Foto de Perfil' : 'Update Profile Photo'}
          </h3>
          <p className="text-xs text-[#999999]">
            {t.imageModal.description}
          </p>
        </div>

        {/* Current Image Preview */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8A2BE2] shrink-0 bg-black shadow-[0_0_12px_rgba(138,43,226,0.3)]">
            <img
              src={currentImage}
              alt="Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-xs font-mono-code">
            <span className="text-[#888888]">
              {language === 'pt' ? 'Foto Atual em Uso:' : 'Current Active Photo:'}
            </span>
            <span className="text-white truncate max-w-[240px] font-medium">
              {currentImage === DEFAULT_PROFILE_IMAGE
                ? (language === 'pt' ? 'Foto Oficial Débora Guerra' : 'Official Débora Guerra Portrait')
                : (currentImage.startsWith('data:') ? 'Arquivo Local Selecionado' : currentImage)}
            </span>
          </div>
        </div>

        {/* Option 1: File Upload (Drag & Drop + File Input) */}
        <div className="space-y-2">
          <label className="text-xs font-mono-code text-[#CCCCCC] flex items-center gap-1.5">
            <Upload className="w-3.5 h-3.5 text-[#8A2BE2]" />
            <span>{t.imageModal.fileUploadLabel}</span>
          </label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-200 ${
              dragOver
                ? 'border-[#8A2BE2] bg-[#8A2BE2]/10'
                : 'border-[#333333] hover:border-[#8A2BE2]/60 bg-[#191919] hover:bg-[#1C1C1C]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-[#8A2BE2]">
                <FileImage className="w-5 h-5" />
              </div>
              <div className="text-xs font-medium text-white">
                {selectedFileName || (language === 'pt' ? 'Clique para escolher ou arraste sua foto aqui' : 'Click to select or drag your photo here')}
              </div>
              <p className="text-[11px] text-[#777777] font-mono-code">
                {t.imageModal.fileUploadHelp}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-[#555555] font-mono-code">
          <div className="flex-1 h-px bg-[#262626]" />
          <span>{language === 'pt' ? 'OU' : 'OR'}</span>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Option 2: Custom URL Input Form */}
        <form onSubmit={handleSubmitUrl} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono-code text-[#CCCCCC] flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-[#8A2BE2]" />
              <span>{t.imageModal.urlInputLabel}</span>
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder={t.imageModal.urlPlaceholder}
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#333333] focus:border-[#8A2BE2] text-white text-xs font-mono-code focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputUrl.trim()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#8A2BE2] hover:bg-[#7822c9] disabled:opacity-40 text-white text-xs font-bold font-mono-code uppercase tracking-wider transition-colors shrink-0"
              >
                <Check className="w-4 h-4" />
                <span>{t.imageModal.useUrlButton}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#222222]">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#333333] text-xs font-mono-code text-[#AAAAAA] hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.imageModal.resetButton}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg bg-transparent text-xs text-[#888888] hover:text-white transition-colors"
            >
              {t.imageModal.closeButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

