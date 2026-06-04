import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent("Hi Apreeltree! I would like to inquire about bulk ordering authentic Nigerian foodstuffs.");
    window.open(`https://wa.me/2348032938472?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#1A3728] text-[#F5EFE0] pt-16 pb-8 border-t border-[#F5EFE0]/10 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-[#F5EFE0]/10">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#F5EFE0]/25 shadow-sm bg-white flex items-center justify-center shrink-0">
                <img
                  src="https://scontent-los4-1.cdninstagram.com/v/t51.82787-19/616612815_17842740282680836_9113106517141774474_n.jpg?_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI0LkMzIn0%3D&_nc_ohc=4Wckyo1Qh0MQ7kNvwGCTrJG&_nc_oc=Adov9QzotIDDjGvDrMmVoitHG3CfYjO5x_c-gliAX5NpgWpsNFmaIG4SN3r8e99yfAU&_nc_zt=24&_nc_ht=scontent-los4-1.cdninstagram.com&_nc_gid=FhcM6TYR34eAF-yu_TxNHw&_nc_ss=7baaf&oh=00_Af9lqqih16f28xZ6KSB6LaV2nbhw_gtf2JmEcltWeG5K0A&oe=6A27B32B"
                  alt="Apreeltree brand logo"
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-[#C9A84C]">
                APREELTREE
              </span>
            </div>
            <p className="text-[#F5EFE0]/70 text-sm leading-relaxed max-w-sm">
              Bulk export of premium, authentic Nigerian foodstuffs to Europe and the USA. Sourced with integrity, processed professionally, and certified for seamless customs clearance.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#F5EFE0]/10 text-[#C9A84C] text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded">
                NEPC REGISTERED: NEPC/EX/0082729
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold tracking-wider text-base mb-6">EXPLORE</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/products" className="text-[#F5EFE0]/70 hover:text-white flex items-center transition-colors">
                  <span>Product Catalog</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-[#F5EFE0]/70 hover:text-white flex items-center transition-colors">
                  <span>How We Source & Ship</span>
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-[#F5EFE0]/70 hover:text-white flex items-center transition-colors">
                  <span>Shipping Destinations</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F5EFE0]/70 hover:text-white flex items-center transition-colors">
                  <span>Our Story & Mission</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#F5EFE0]/70 hover:text-[#C9A84C] font-semibold transition-colors">
                  <span>Request a Bulk Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold tracking-wider text-base mb-6">IBADAN HEADQUARTERS</h3>
            <ul className="space-y-4 text-sm text-[#F5EFE0]/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#C2673A] shrink-0 mt-0.5" />
                <span>Plot 45, Alao Akala Expressway, Akobo, Ibadan, Oyo State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#C2673A] shrink-0" />
                <a href="mailto:exports@apreeltree.com" className="hover:text-white">exports@apreeltree.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#C2673A] shrink-0" />
                <button onClick={handleWhatsAppRedirect} className="hover:text-white text-left transition-colors">
                  +234 (0) 8188007303
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance Logos Column */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold tracking-wider text-base mb-6">CERTIFIED COMPLIANCE</h3>
            <p className="text-xs text-[#F5EFE0]/60 mb-4 leading-relaxed">
              Every shipment is processed and cleared alongside authorized governmental authorities to ensure risk-free clearance:
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-[#F5EFE0]/5 rounded px-2.5 py-1.5 border border-[#F5EFE0]/10 flex flex-col items-center">
                <span className="font-bold text-[10px] text-white">CAC</span>
                <span className="text-[8px] text-[#F5EFE0]/40">RC 1792842</span>
              </div>
              <div className="bg-[#F5EFE0]/5 rounded px-2.5 py-1.5 border border-[#F5EFE0]/10 flex flex-col items-center">
                <span className="font-bold text-[10px] text-[#C9A84C]">NAFDAC</span>
                <span className="text-[8px] text-[#F5EFE0]/40">Export Certify</span>
              </div>
              <div className="bg-[#F5EFE0]/5 rounded px-2.5 py-1.5 border border-[#F5EFE0]/10 flex flex-col items-center">
                <span className="font-bold text-[10px] text-emerald-400">NEPC</span>
                <span className="text-[8px] text-[#F5EFE0]/40">Licensed</span>
              </div>
            </div>
            
            <div className="pt-6 flex space-x-4">
              <a href="https://instagram.com/apreeltree" target="_blank" rel="noreferrer" className="text-[#F5EFE0]/70 hover:text-[#C2673A] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <button onClick={handleWhatsAppRedirect} className="text-[#F5EFE0]/70 hover:text-[#C2673A] transition-colors" aria-label="WhatsApp">
                <Globe className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F5EFE0]/50 gap-4">
          <div>
            &copy; {currentYear} Apreeltree Food Export Limited. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/shipping" className="hover:text-white">Export Terms</Link>
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <a onClick={handleWhatsAppRedirect} className="hover:text-white cursor-pointer">Support Chat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
