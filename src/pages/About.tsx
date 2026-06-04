import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Eye, ArrowRight, Stamp, Users, Landmark } from 'lucide-react';
import { productsList } from '../data/products';

export const About: React.FC = () => {
  const galleryProducts = productsList.slice(0, 6);

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-24">
      
      {/* 1. HERO STORY HEADER */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-16 pb-12 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">
            
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            Bringing Nigeria’s Best Delicacies to the World
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            
          </p>
        </div>
      </section>

      {/* 2. BRAND NARRATIVE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left space-y-8 font-sans text-[#1A3728]/90 text-sm leading-relaxed">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#1A3728]/10 space-y-6">
          <p className="font-serif font-black text-2xl text-[#1A3728]">
            Sourcing with Complete Structural Integrity
          </p>
          <p>
            For too long, African food imports in Europe and the United States have struggled with inconsistent quality: sand-cluttered spices, damp mold-prone smoked fish, rancid-cooking palm oils, and unpredictable customs clearance failures at foreign shipping ports.
          </p>
          <p>
            Apreeltree was born to eliminate these compromises. We act as a professional, standardized export channel that acts as the boots on the ground in local Nigerian fields. We inspect and verify the entire lifecycle: sourcing raw seeds and tubers, supervising oven dehydration, vacuum-sealing perishables, and processing rigorous laboratory checks.
          </p>
          <p>
            Whether supplying specialized restaurant groups, African grocery retailers, or global distributors, we execute our logistics loops with the modern precision that commercial cargo expects. When you import via Apreeltree, you aren’t just receiving foodstuffs—you are trading with transparent export partners.
          </p>
        </div>
      </section>

      {/* 3. BRAND VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-left">
        <div className="space-y-3 text-center sm:text-left mb-10">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">OPERATIONAL PILLARS</span>
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
            Values Sourced with Integrity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4">
            <div className="bg-[#1A3728]/5 text-[#C2673A] h-12 w-12 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-[#C2673A]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A3728]">
              Quality First & Always
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
              Zero sandbox levels. Zero mold compromises. We use clinical laboratory sorting parameters to prepare foodstuffs that clear international FDA and EPA standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4">
            <div className="bg-[#1A3728]/5 text-[#C2673A] h-12 w-12 rounded-2xl flex items-center justify-center">
              <Eye className="h-6 w-6 text-[#C2673A]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A3728]">
              Transparent Sourcing
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
              We track exact farm cooperative logs from Kwara, Edo, and Akwa-Ibom, securing fair pricing structures that empower primary Nigerian small-holder growers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#1A3728]/10 text-left space-y-4">
            <div className="bg-[#1A3728]/5 text-[#C2673A] h-12 w-12 rounded-2xl flex items-center justify-center">
              <HeartHandshake className="h-6 w-6 text-[#C2673A]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A3728]">
              Absolute Reliability
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
              Guaranteed proforma billing inside 24 hours, direct cargo manifest assembly, and prompt transit reporting. We do not hide behind vague logistical excuses.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-left">
        <div className="bg-[#1A3728] text-[#F5EFE0] p-10 rounded-3xl border border-[#C9A84C]/35 relative overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-[#F5EFE0]/5 mix-blend-overlay pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#C9A84C] text-[10px] uppercase font-black tracking-wider block">COMPLIANT CORPORATE FOOTPRINT</span>
              <h3 className="font-serif font-black text-2xl tracking-tight text-[#F5EFE0]">
                Registered & Regulated Trade Entity
              </h3>
              <p className="text-xs text-[#F5EFE0]/80 leading-relaxed font-sans">
                Apreeltree is registered with full backing in Nigeria with the CAC (Corporate Affairs Commission) and actively licensed under NEPC to export raw agricultural products overseas.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-[#F5EFE0]/10 p-5 rounded-2xl border border-[#F5EFE0]/5">
                <Users className="h-6 w-6 text-[#C9A84C] mx-auto mb-2" />
                <span className="block font-serif font-bold text-sm text-[#F5EFE0]">CAC REGISTER</span>
                <span className="block text-[10px] text-[#C9A84C] font-mono mt-0.5">RC 1792842</span>
              </div>
              <div className="bg-[#F5EFE0]/10 p-5 rounded-2xl border border-[#F5EFE0]/5">
                <Stamp className="h-6 w-6 text-[#C9A84C] mx-auto mb-2" />
                <span className="block font-serif font-bold text-sm text-[#F5EFE0]">NEPC LICENSE</span>
                <span className="block text-[10px] text-[#C9A84C] font-mono mt-0.5">EX/0082729</span>
              </div>
              <div className="bg-[#F5EFE0]/10 p-5 rounded-2xl border border-[#F5EFE0]/5">
                <Landmark className="h-6 w-6 text-[#C9A84C] mx-auto mb-2" />
                <span className="block font-serif font-bold text-sm text-[#F5EFE0]">NAFDAC EXPORT</span>
                <span className="block text-[10px] text-[#C9A84C] font-sans mt-0.5">Grade-A Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHIPMENT GALLERY MAS0NRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-left">
        <div className="space-y-2 text-center sm:text-left mb-10">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">GALLERY REPORTE</span>
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
            Sourcing & Logistics Sights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-3 border border-[#1A3728]/10 group hover:shadow-lg transition-shadow">
              <div className="h-60 w-full overflow-hidden rounded-2xl bg-[#1A3728]/5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-[12px] text-[#1A3728] font-semibold px-1 font-sans text-left">
                  📦 {product.name}
                </p>
                <p className="text-[11px] text-[#6B6B6B] font-medium px-1 font-sans text-left">
                  {product.category} · {product.origin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#C2673A] text-white p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1A3728]/15 mix-blend-multiply" />
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#F5EFE0]">
            Partner With a Transparent Trade Entity
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F5EFE0]/80 max-w-xl mx-auto leading-relaxed">
            Reach out to establish a reliable grocery import supply contract or restaurant franchise pipeline. Sourced clean, shipped fast.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="bg-[#1A3728] hover:bg-white hover:text-[#1A3728] text-white px-8 py-3.5 rounded-full font-serif font-bold text-sm tracking-wide transition-all shadow inline-flex items-center space-x-2"
            >
              <span>Request Wholesale Setup</span>
              <ArrowRight className="h-4 w-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default About;
