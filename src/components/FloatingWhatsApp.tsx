import React from 'react';
import { Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleRedirect = () => {
    const text = encodeURIComponent("Hi Apreeltree! I'd like to enquire about a bulk order of authentic Nigerian food items.");
    window.open(`https://wa.me/2348188007303?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Decorative tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A3728] text-[#F5EFE0] text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none whitespace-nowrap border border-[#F5EFE0]/10">
        Bulk inquiries on WhatsApp
      </span>
      
      {/* Redundant pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping -z-10 group-hover:bg-[#C2673A]/25" />

      {/* Primary button */}
      <button
        onClick={handleRedirect}
        className="h-14 w-14 bg-emerald-600 hover:bg-[#C2673A] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Inquire on WhatsApp"
      >
        <Send className="h-6 w-6 ml-0.5" />
      </button>
    </div>
  );
};
