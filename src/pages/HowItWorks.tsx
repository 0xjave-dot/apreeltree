import React from 'react';
import { Link } from 'react-router-dom';
import { Send, FileText, SearchCheck, Box, FileSpreadsheet, Anchor, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Send,
      title: 'You Send an Enquiry',
      desc: 'Fill out our digital quote request form or send us a quick text on WhatsApp with your list of foodstuffs, quantities, and preferred destination ports.'
    },
    {
      num: '02',
      icon: FileText,
      title: 'We Send You a Proforma Invoice',
      desc: 'Within 24 working hours, you receive a detailed, formal commercial quote breakdown listing product wholesale rates, custom packaging fees, and accurate sea/air freight parameters.'
    },
    {
      num: '03',
      icon: SearchCheck,
      title: 'Sourcing & Quality Checking',
      desc: 'We extract and source directly from registered small-holder cooperatives. Every batch is visually inspected and dried under clean environments to eliminate dirt, sand, or moisture concerns.'
    },
    {
      num: '04',
      icon: Box,
      title: 'Safe Processing & Packaging',
      desc: 'Products are sorted, milled or packaged into thick export-grade, moisture-barrier materials. Perishables and spices are vacuum-sealed, while grains are double-sacked to protect against temperature shifts.'
    },
    {
      num: '05',
      icon: FileSpreadsheet,
      title: 'Prepare Export Documentation',
      desc: 'Our legal agents prepare complete export compliance manifests: Packing Lists, Phytosanitary Certification, Certificates of Origin, custom declarations, and NAFDAC export clearances.'
    },
    {
      num: '06',
      icon: Anchor,
      title: 'International Shipping & Clearance',
      desc: 'Your bulk shipment is processed out of Ibadan and loaded via Air Cargo or Sea Freight. We provide immediate tracking reference codes and advise you or your customs agents until the goods arrive at your doorstep.'
    }
  ];

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-24">
      
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-16 pb-12 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">
            LOGISTICS MAP & PIPELINE
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            From African Farms to Your Front Door
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            We have perfected our sourcing and customs licensing to establish a robust, reliable logistics channel from the heart of Nigeria to distributors, grocery marts, and households worldwide.
          </p>
        </div>
      </section>

      {/* 6 STATE TIMELINE (alternating layout) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative">
        {/* Center line decoration for desktop layout */}
        <div className="absolute left-1/2 top-4 bottom-12 w-0.5 bg-[#1A3728]/10 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row items-stretch md:justify-between gap-8 md:gap-0 relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Step Card */}
                <div className="w-full md:w-[45%] text-left">
                  <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 shadow-sm relative group hover:border-[#C2673A] transition-all">
                    
                    {/* Corner Number */}
                    <span className="absolute top-6 right-6 font-serif font-black text-4xl text-[#C9A84C]/50">
                      {step.num}
                    </span>

                    <div className="bg-[#1A3728] text-white h-12 w-12 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6 text-[#C9A84C]" />
                    </div>

                    <h3 className="font-serif font-black text-xl text-[#1A3728] mb-3">
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Center Point Indicator */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 h-8 w-8 rounded-full bg-[#1A3728] border-4 border-[#F5EFE0] hidden md:flex items-center justify-center text-xs text-[#C9A84C] font-bold shadow">
                  <span>•</span>
                </div>

                {/* Empty block to pad the structure */}
                <div className="w-full md:w-[45%] hidden md:block" />

              </div>
            );
          })}
        </div>
      </section>

      {/* SUMMARY OUTCOME / CTA at bottom */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#1A3728] text-[#F5EFE0] p-8 md:p-12 rounded-3xl text-center space-y-6 border border-[#C9A84C]/35 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F5EFE0]/5 mix-blend-overlay pointer-events-none" />
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#F5EFE0]">
            Begin Your Sourcing Journey Today
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F5EFE0]/80 max-w-xl mx-auto leading-relaxed">
            Fill out our bulk quote request sheet to calculate air cargo or ocean shipping rates for your specified business location. Our team responds within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="bg-[#C2673A] hover:bg-[#C2673A]/90 hover:scale-[1.02] text-[#F5EFE0] px-8 py-3.5 rounded-full font-serif font-bold text-sm tracking-wide transition-all shadow-md inline-flex items-center space-x-2"
            >
              <span>Start Your Custom Order</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default HowItWorks;
