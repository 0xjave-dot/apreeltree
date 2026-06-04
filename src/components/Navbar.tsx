import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Send } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const Navbar: React.FC = () => {
  const { enquiryItems, setIsBasketOpen } = useQuote();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const totalItemsCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const links = [
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'About', path: '/about' },
    { name: 'Get a Quote', path: '/quote' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent("Hi Apreeltree! I would like to inquire about bulk ordering authentic Nigerian foodstuffs.");
    window.open(`https://wa.me/2348032938472?text=${text}`, '_blank');
  };

  return (
    <nav className="sticky top-0 bg-[#F5EFE0]/95 backdrop-blur-md border-b border-[#1A3728]/10 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1A3728]/10 shadow-sm shrink-0 bg-white flex items-center justify-center">
              <img
                src="https://scontent-los4-1.cdninstagram.com/v/t51.82787-19/616612815_17842740282680836_9113106517141774474_n.jpg?_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI0LkMzIn0%3D&_nc_ohc=4Wckyo1Qh0MQ7kNvwGCTrJG&_nc_oc=Adov9QzotIDDjGvDrMmVoitHG3CfYjO5x_c-gliAX5NpgWpsNFmaIG4SN3r8e99yfAU&_nc_zt=24&_nc_ht=scontent-los4-1.cdninstagram.com&_nc_gid=FhcM6TYR34eAF-yu_TxNHw&_nc_ss=7baaf&oh=00_Af9lqqih16f28xZ6KSB6LaV2nbhw_gtf2JmEcltWeG5K0A&oe=6A27B32B"
                alt="Apreeltree brand logo"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-serif font-black text-2xl tracking-tight text-[#1A3728]">
              APREELTREE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium transition-colors hover:text-[#C2673A] ${
                    isActive ? 'text-[#C2673A] border-b-2 border-[#C2673A] pb-1' : 'text-[#1A3728]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Quote Basket Trigger */}
            <button
              onClick={() => setIsBasketOpen(true)}
              className="relative p-2.5 text-[#1A3728] hover:text-[#C2673A] transition-colors rounded-full hover:bg-[#1A3728]/5"
              aria-label="View Enquiry Basket"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C2673A] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp pill */}
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-[#C2673A] text-[#F5EFE0] px-5 py-2.5 rounded-full font-serif font-medium tracking-wide text-sm shadow-md hover:bg-[#C2673A]/90 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>WhatsApp Export</span>
            </button>
          </div>

          {/* Mobile elements */}
          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={() => setIsBasketOpen(true)}
              className="relative p-2 text-[#1A3728] hover:text-[#C2673A]"
            >
              <ShoppingBag className="h-5.5 w-5.5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C2673A] text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#1A3728] hover:text-[#C2673A] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1A3728]/10 bg-[#F5EFE0] shadow-inner py-4 space-y-2 px-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                  isActive ? 'bg-[#1A3728] text-[#F5EFE0]' : 'text-[#1A3728] hover:bg-[#1A3728]/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-[#1A3728]/10 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppRedirect();
              }}
              className="w-full bg-[#C2673A] text-[#F5EFE0] py-3 rounded-full font-serif font-medium text-center shadow-md flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
