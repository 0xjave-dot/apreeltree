import React from 'react';

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

      {/* Primary button */}
      <button
        onClick={handleRedirect}
        className="p-2 bg-white rounded-full text-[#25D366] hover:text-[#1A3728] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer animate-pulse"
        aria-label="Inquire on WhatsApp"
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.1 285.8 32 229.4 32 104.3 32 6.7 129.7 6.7 254.7c0 44.8 11.7 88.6 33.9 127.4L0 480l101.3-26.6c37.6 20.6 80.2 31.4 123.4 31.4h.1c125.1 0 222.6-97.7 222.6-217.8 0-56.6-22.2-109.8-62.5-150.5zm-151.5 316.1c-36.2 0-71.7-9.8-102.2-28.4l-7.3-4.3-60.1 15.8 16.1-58.6-4.8-7.7c-20.6-33.5-31.4-72.6-31.4-112.7 0-122.3 100-221.8 223.2-221.8 59.7 0 115.8 23.3 158 65.6 42.3 42.4 65.6 98.8 65.6 158 0 123.2-99.5 223.2-221.8 223.2zm121.2-164c-6.6-3.3-39.2-19.3-45.3-21.5-6.1-2.2-10.5-3.3-14.9 3.3-4.4 6.6-17 21.5-20.8 25.9-3.8 4.4-7.8 4.9-14.4 1.6-36.2-18.1-59.8-31.7-83.7-72.2-6.3-10.9 6.3-10.1 18-33.5 2-4.4 1-8.2-.5-11.5-1.6-3.3-14.9-35.9-20.4-49.2-5.4-12.9-10.9-11.1-14.9-11.3-3.8-.2-8.2-.2-12.5-.2-4.4 0-11.5 1.6-17.5 8.2-6.1 6.6-23.4 22.9-23.4 55.7 0 32.8 24 64.6 27.4 69.1 3.3 4.4 47.4 72.5 114.7 101.6 16 6.9 28.4 11 38.1 14.1 16 4.6 30.5 3.9 42 2.4 12.8-1.7 39.2-16 44.7-31.5 5.4-15.5 5.4-28.8 3.8-31.5-1.6-2.7-6-4.4-12.6-7.7z" />
        </svg>
      </button>
    </div>
  );
};
