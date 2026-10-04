import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenAppointment: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointment }) => {
  const whatsappUrl = `https://wa.me/919488023328?text=${encodeURIComponent(
    'Hello Neithal Ayurveda, I would like to enquire about booking a consultation.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-neithal-green-950 text-neithal-cream-50 border-t border-neithal-gold-500/30 shadow-2xl sm:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 h-16 divide-x divide-white/10 items-center">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-neithal-cream-100 hover:text-neithal-gold-400 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-neithal-gold-400" />
          <span className="text-[10px] font-medium tracking-wide">WhatsApp</span>
        </a>

        {/* Direct Call */}
        <a
          href="tel:+919488023328"
          className="flex flex-col items-center justify-center gap-1 text-neithal-cream-100 hover:text-neithal-gold-400 transition-colors"
        >
          <Phone className="w-5 h-5 text-neithal-gold-400" />
          <span className="text-[10px] font-medium tracking-wide">Call Direct</span>
        </a>

        {/* Book Visit */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center gap-1 bg-neithal-gold-500 text-neithal-green-950 font-bold hover:bg-neithal-gold-400 transition-colors h-full"
        >
          <Calendar className="w-5 h-5 text-neithal-green-950" />
          <span className="text-[10px] uppercase tracking-wider font-extrabold">Book Visit</span>
        </button>
      </div>
    </div>
  );
};
