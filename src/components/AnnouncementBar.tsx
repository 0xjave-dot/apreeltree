import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div id="announcement-bar" className="bg-[#C2673A] text-[#F5EFE0] py-2 px-4 text-center text-xs h-9 font-medium tracking-wide flex items-center justify-center space-x-2 relative z-50">
      <span>🌍 Now shipping to 14 countries in Europe & USA</span>
      <span className="opacity-55">|</span>
      <span>🚢 Air & Sea Freight Available</span>
      <span className="opacity-55">|</span>
      <span>WhatsApp Support: +234 (0) 8188007303</span>
    </div>
  );
};
