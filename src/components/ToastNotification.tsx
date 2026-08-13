import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastNotificationProps {
  message: string | null;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="toast-notification-banner"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#141414] border border-[#8A2BE2] text-white text-xs font-mono-code shadow-[0_0_25px_rgba(138,43,226,0.4)] animate-in slide-in-from-bottom-5 duration-300"
    >
      <CheckCircle2 className="w-4 h-4 text-[#8A2BE2]" />
      <span>{message}</span>
    </div>
  );
};
