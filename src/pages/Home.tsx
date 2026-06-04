import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Scale, Anchor, ArrowLeftRight, CheckCircle2, Star, Send } from 'lucide-react';
import { productsList } from '../data/products';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Slices first 6 products for a featured products strip
  const featuredProducts = productsList.filter(p => p.popular).slice(0, 6);

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hi Apreeltree! I am interested in placing a bulk order of premium Nigerian foodstuffs.");
    window.open(`https://wa.me/2348032938472?text=${text}`, '_blank');
  };

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-[#1A3728]/10 bg-[#F5EFE0]">
        <div className="absolute inset-0 bg-[radial-gradient(#1a3728_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              <div className="text-[#C2673A] font-serif italic text-xl">Premium Nigerian Exports</div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black leading-[0.9] text-[#1A3728] tracking-tighter">
                NIGERIA’S FINEST,<br/>
                <span className="italic text-[#C2673A]">TO YOUR TABLE.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#6B6B6B] max-w-lg leading-relaxed font-sans">
                Bulk export of authentic, pure-grade Nigerian foodstuffs to Europe and the USA. Sourced completely fresh, certified clean, and shipped right.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products"
                  className="bg-[#1A3728] hover:bg-[#C2673A] text-white px-8 py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-md inline-flex items-center space-x-2"
                >
                  <span>Browse Catalog</span>
                  <ArrowRight className="h-4 w-4 text-[#C9A84C]" />
                </Link>
                
                <Link
                  to="/quote"
                  className="border-2 border-[#1A3728] text-[#1A3728] hover:bg-[#1A3728]/5 px-8 py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Right Graphics/Feature Column with beautiful Nigerian foods texture card */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-10">
              <div className="relative z-10 w-full max-w-sm sm:max-w-md">
                <div className="bg-white p-3 rounded-sm shadow-2xl rotate-2 border border-[#1A3728]/15">
                  <div className="aspect-square bg-[#1A3728] overflow-hidden flex flex-col items-center justify-center text-white relative p-6">
                    <div className="absolute inset-0 bg-[#F5EFE0]/5 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                      <span className="text-[110px] text-outline-gold opacity-15 font-serif font-black tracking-widest block rotate-12">OFADA</span>
                    </div>
                    
                    <div className="z-20 text-center space-y-4">
                      <div className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-bold font-sans">Featured Item Sourcing</div>
                      <div className="text-3xl font-serif font-black text-[#F5EFE0] tracking-tight leading-none px-2">
                        Stone-free Ofada Rice
                      </div>
                      <div className="text-[#F5EFE0]/70 text-[11px] font-sans">Sourced: Nigeria</div>
                      <div className="pt-2">
                        <Link 
                          to="/products/ofada-rice" 
                          className="inline-block bg-[#C2673A] text-[#F5EFE0] hover:bg-white hover:text-[#1A3728] text-[10px] uppercase font-bold tracking-widest py-1.5 px-4 rounded-sm transition-colors"
                        >
                          View Specs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] text-[#1A3728] p-4 rounded-full w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center text-center text-[10px] font-sans font-bold leading-tight uppercase border-4 border-[#1A3728] rotate-[-12deg] shadow-lg">
                  NAFDAC<br/>Certified<br/>Organic
                </div>
              </div>
            </div>

          </div>

          {/* Trust Strip */}
          <div className="mt-16 bg-white border border-[#1A3728]/10 py-6 px-4 sm:px-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 sm:gap-12">
              <div className="flex flex-col text-left">
                <span className="text-2xl font-serif font-black text-[#1A3728]">14</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#6B6B6B]">Countries Served</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-neutral-200" />
              <div className="flex flex-col text-left">
                <span className="text-2xl font-serif font-black text-[#1A3728]">500+</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#6B6B6B]">Bulk Orders</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-neutral-200" />
              <div className="flex flex-col text-left">
                <span className="text-2xl font-serif font-black text-[#1A3728]">100%</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#6B6B6B]">Customs Clearance</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1A3728]/5 flex items-center justify-center text-[#1A3728] font-bold shrink-0 text-sm">✓</div>
              <p className="text-[10px] font-bold text-[#1A3728] uppercase tracking-wider max-w-[170px] leading-tight text-left">
                Sourcing Excellence from the Heart of West Africa
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED PRODUCTS STRIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-3">
              <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block">CURATED EXPORTS</span>
              <h2 className="font-serif font-black text-3xl md:text-5xl text-[#1A3728]">
                Export Staples Sourced Daily
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 text-[#C2673A] hover:text-[#1A3728] transition-colors font-sans font-bold text-sm tracking-wide flex items-center space-x-1.5"
            >
              <span>View Full Catalog (23 Products)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Horizontal scroll container with fade hints */}
          <div className="relative">
            <div className="overflow-x-auto no-scrollbar pb-6 flex space-x-6 scroll-smooth snap-x snap-mandatory">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  className="w-72 md:w-80 shrink-0 snap-start bg-[#F5EFE0]/40 rounded-3xl border border-[#1A3728]/10 p-4 hover:border-[#C9A84C]/60 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Img frame */}
                    <div className="h-48 md:h-52 w-full overflow-hidden rounded-2xl relative bg-[#1A3728]/5">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#1A3728] text-[#F5EFE0] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {p.category}
                      </span>
                    </div>

                    <div className="mt-4 space-y-1.5 text-left">
                      <h3 className="font-serif font-black text-lg text-[#1A3728]">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#6B6B6B] flex items-center space-x-1">
                        <span className="text-amber-600">📍</span>
                        <span>{p.origin}</span>
                      </p>
                      <p className="text-xs text-[#1A3728]/80 leading-relaxed line-clamp-2 pt-1 font-sans">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#1A3728]/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#6B6B6B] block uppercase tracking-wider font-semibold">STARTING AT</span>
                      <span className="font-serif font-bold text-sm text-[#C2673A]">
                        ₦{p.basePrice.toLocaleString()} / kg
                      </span>
                    </div>
                    <Link
                      to={`/products/${p.slug}`}
                      className="bg-[#1A3728] hover:bg-[#C2673A] text-white p-2 rounded-full transition-colors"
                      aria-label={`View details of ${p.name}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              <span className="w-8 h-1 bg-[#1A3728] rounded-full" />
              <span className="w-2 h-1 bg-[#1A3728]/25 rounded-full" />
              <span className="w-2 h-1 bg-[#1A3728]/25 rounded-full" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 bg-[#F5EFE0] border-t border-b border-[#1A3728]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block">OUR PROCESS</span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-[#1A3728]">
              Seamless Export Logistics
            </h2>
            <p className="text-sm font-sans text-[#6B6B6B]">
              Shipping agricultural items out of West Africa can be complicated. We take full charge of compliance so your shipment clears safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#1A3728] text-[#C9A84C] h-12 w-12 rounded-2xl flex items-center justify-center font-serif font-bold text-lg">
                1
              </div>
              <h3 className="font-serif font-black text-xl text-[#1A3728]">
                Place Your Enquiry
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                Review our pricing matrix and catalog, build your basket of desired items and weights, then submit your request directly to our team.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#1A3728] text-[#C9A84C] h-12 w-12 rounded-2xl flex items-center justify-center font-serif font-bold text-lg">
                2
              </div>
              <h3 className="font-serif font-black text-xl text-[#1A3728]">
                Source & Process
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                We handle premium farm extraction, oven-drying, and custom vacuum packaging. perishables are cleaned and prepared for export under sterile conditions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#1A3728] text-[#C9A84C] h-12 w-12 rounded-2xl flex items-center justify-center font-serif font-bold text-lg">
                3
              </div>
              <h3 className="font-serif font-black text-xl text-[#1A3728]">
                Documented Shipping
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                We organize all export manifests (Phytosanitary Certificates, Custom declarations) and ship by your preferred Air or Ocean channels.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center space-x-2 bg-[#C2673A] hover:bg-[#C2673A]/90 text-[#F5EFE0] px-6 py-3 rounded-full font-serif font-semibold text-sm tracking-wide transition-all shadow"
            >
              <span>Read Full step-by-step Logistics</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. ABOUT & TRUST HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block">TRUSTED AFRICAN SUPPLY CHAIN</span>
              <h2 className="font-serif font-black text-3xl md:text-5xl text-[#1A3728] leading-tight">
                Empowering Stores and Kitchens Worldwide
              </h2>
              <div className="space-y-4 text-sm text-[#6B6B6B] leading-relaxed font-sans">
                <p>
                  Apreeltree Food Export Limited operates out of Ibadan, Oyo State, supplying authentic premium-grade agricultural products to international grocers, restaurants, and wholesale importers.
                </p>
                <p>
                  Our trade system is structured around complete transparency: from exact farm origin logs to direct custom clearable packaging standards, making commercial African imports simple and repeatable.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-[#1A3728]/10 p-4 rounded-2xl">
                  <span className="font-serif font-black text-2xl text-[#C2673A] block">RC 1792842</span>
                  <span className="text-xs text-[#6B6B6B]">CAC Government Registered</span>
                </div>
                <div className="border border-[#1A3728]/10 p-4 rounded-2xl">
                  <span className="font-serif font-black text-2xl text-[#C2673A] block">24 Hours</span>
                  <span className="text-xs text-[#6B6B6B]">Proforma Invoice Response</span>
                </div>
              </div>
            </div>

            {/* Right Badges / Image gallery highlights */}
            <div className="lg:col-span-6">
              <div className="bg-[#F5EFE0]/40 rounded-3xl p-6 border border-[#1A3728]/10 space-y-6">
                <p className="font-serif font-bold text-center text-lg text-[#1A3728]">
                  Licensed Regulatory Compliance
                </p>
                
                <div className="space-y-4 font-sans text-xs">
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-2xl border border-[#1A3728]/5 shadow-sm">
                    <span className="text-lg">🇳🇬</span>
                    <div className="text-left">
                      <p className="font-bold text-[#1A3728]">NEPC Export License Holder</p>
                      <p className="text-[#6B6B6B]">Registered with the Nigerian Export Promotion Council for legally backed grain and oil shipments.</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-white rounded-2xl border border-[#1A3728]/5 shadow-sm">
                    <span className="text-lg">🔬</span>
                    <div className="text-left">
                      <p className="font-bold text-[#1A3728]">NAFDAC Inspected & Cleared</p>
                      <p className="text-[#6B6B6B]">Subjected to standard laboratory assessments to assure dry compliance and zero toxic molds.</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-white rounded-2xl border border-[#1A3728]/5 shadow-sm">
                    <span className="text-lg">📋</span>
                    <div className="text-left">
                      <p className="font-bold text-[#1A3728]">Phytosanitary Certification</p>
                      <p className="text-[#6B6B6B]">Provided on all plant based shipments in conformity with European Union and United States FDA criteria.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <Link to="/about" className="text-xs text-[#C2673A] hover:text-[#1A3728] font-bold tracking-wide underline">
                    Learn more about our certifications
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-[#F5EFE0] border-t border-[#1A3728]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">GLOBAL IMPORTER REVIEWS</span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-[#1A3728]">
              Consistently Fresh & Custom Cleared
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 flex flex-col justify-between space-y-6 shadow-sm">
              <p className="text-sm font-sans text-[#6B6B6B] italic leading-relaxed">
                "The premium dehulled Egusi was a huge hit for our retail shoppers in Manchester. It arrived clean, sorted, vacuum packed, and with all customs clearance paperwork already labeled. Excellent business!"
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#1A3728]/5">
                <span className="text-3xl">🇬🇧</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A3728]">Lagos Kitchen</h4>
                  <p className="text-[11px] text-[#6B6B6B] font-sans">Wholesaler – Manchester, UK</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 flex flex-col justify-between space-y-6 shadow-sm">
              <p className="text-sm font-sans text-[#6B6B6B] italic leading-relaxed">
                "Finding high quality, FFA-compliant red palm oil in Houston had been a nightmare. Apreeltree’s Grade-A oil preserves that rich, earthy forest creaminess with zero sediment or bad additives."
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#1A3728]/5">
                <span className="text-3xl">🇺🇸</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A3728]">Chef Yemi A.</h4>
                  <p className="text-[11px] text-[#6B6B6B] font-sans">Eko Catering – Houston, Texas</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 flex flex-col justify-between space-y-6 shadow-sm">
              <p className="text-sm font-sans text-[#6B6B6B] italic leading-relaxed">
                "The kiln-dried smoked catfish is exceptional. There was zero dust on arrival and moisture limits were exceptionally low. It reconstituted beautiful in our stocks. Will make this a monthly contract."
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#1A3728]/5">
                <span className="text-3xl">🇩🇪</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A3728]">Afro-German Bulk Mart</h4>
                  <p className="text-[11px] text-[#6B6B6B] font-sans">Distributor – Frankfurt, Germany</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-[#C2673A] text-[#F5EFE0] py-16 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[#1A3728]/15 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-serif font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Ready to place a bulk export order?<br />Let's coordinate on WhatsApp.
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F5EFE0]/80 max-w-xl mx-auto leading-relaxed">
            Message our sales desk directly. We configure pricing tiers, shipping schedules (air/sea freight), and clear out NAFDAC export documentation on demand.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleWhatsAppChat}
              className="bg-[#1A3728] hover:bg-white hover:text-[#1A3728] text-white px-8 py-3.5 rounded-full font-serif font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
            <Link
              to="/quote"
              className="border border-[#F5EFE0]/40 hover:bg-[#F5EFE0]/15 text-[#F5EFE0] px-8 py-3.5 rounded-full font-serif font-bold text-sm tracking-wide transition-all"
            >
              Request Custom Quote Form
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
