import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Plane, ArrowRight, ShieldAlert, Check, HelpCircle, Package, Award } from 'lucide-react';

export const Shipping: React.FC = () => {
  const destinations = [
    { name: 'United Kingdom', code: 'gb' },
    { name: 'United States', code: 'us' },
    { name: 'Canada', code: 'ca' },
    { name: 'Germany', code: 'de' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'France', code: 'fr' },
    { name: 'Italy', code: 'it' },
    { name: 'Spain', code: 'es' },
    { name: 'Sweden', code: 'se' },
    { name: 'Norway', code: 'no' },
    { name: 'Ireland', code: 'ie' },
    { name: 'Belgium', code: 'be' }
  ];

  const packages = [
    {
      category: 'Grains & Seeds (Ofada, Beans, Egusi)',
      std: 'Packed in double-walled gas barrier inner liners, heat sealed, then placed within thick woven structural hessian export sacks.'
    },
    {
      category: 'Perishable Spices & Flours',
      std: 'Fully vacuum-sealed in highly protective transparent plastic pouches to secure essential scent oils and prevent moisture spoilage.'
    },
    {
      category: 'Smoked Seafood & Meat (Catfish, Kilishi)',
      std: 'Oven-Dried to under 7% moisture, separately vacuum-wrapped, then organized into reinforced layered box cartons with oxygen absorbers.'
    },
    {
      category: 'Unrefined Oils (Palm & Kernel)',
      std: 'Hydraulically poured into brand-new HDPE pressure-sealed spill-proof jerrycans, locked with tamper-evident child safety caps.'
    }
  ];

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-24">
      
      {/* HEADER banner */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-16 pb-12 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">
            GLOBAL NETWORKS & CARGO
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            We Ship to 12 Countries and Counting
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Wholesale, bulk, and restaurant-ready delivery loops. We transport our certified agricultural foodstuffs to logistics ports and hubs across Europe and North America.
          </p>
        </div>
      </section>

      {/* DETAILED CARGO FLAGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-left">
        <div className="bg-white/40 border border-[#1A3728]/10 p-6 md:p-10 rounded-sm">
          <p className="font-serif font-black text-xl text-[#1A3728] mb-8 text-center sm:text-left">
            Active Shipping Routes
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="bg-white hover:border-[#C2673A] border-2 border-[#1A3728]/10 rounded-sm p-5 flex flex-col items-center justify-between text-center shadow-sm hover:shadow transition-all relative overflow-hidden group"
              >
                <div className="w-16 h-10 rounded-sm border border-[#1A3728]/10 overflow-hidden shadow-sm bg-neutral-100 flex items-center justify-center mb-3">
                  <img
                    src={`https://flagcdn.com/w80/${dest.code}.png`}
                    alt={`${dest.name} National Flag`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <span className="font-serif font-bold text-xs text-[#1A3728] tracking-tight">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIR VS SEA COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Comparison Table */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
              Air Freight vs. Ocean Freight
            </h2>
            <div className="bg-white rounded-3xl border border-[#1A3728]/10 overflow-hidden shadow-sm">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="bg-[#1A3728] text-[#F5EFE0] font-serif text-sm">
                    <th className="py-4 px-6">Freight Standard</th>
                    <th className="py-4 px-6 flex items-center space-x-1">
                      <Plane className="h-4 w-4 text-[#C9A84C]" />
                      <span>Air Freight</span>
                    </th>
                    <th className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <Anchor className="h-4 w-4 text-[#C9A84C]" />
                        <span>Sea Freight</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A3728]/5 text-[#1C1C1C]">
                  <tr>
                    <td className="py-4 px-6 font-bold text-xs text-[#6B6B6B] uppercase tracking-wider">Best Suited For</td>
                    <td className="py-4 px-6 font-medium">Small to Medium batches (5 – 100 kg)</td>
                    <td className="py-4 px-6 font-medium">Large pallet/container loads (100 kg – 10+ Tons)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-xs text-[#6B6B6B] uppercase tracking-wider">Est. Transit Duration</td>
                    <td className="py-4 px-6 font-semibold text-emerald-700">3 – 7 Working Days</td>
                    <td className="py-4 px-6 font-semibold text-amber-700">4 – 8 Calendar Weeks</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-xs text-[#6B6B6B] uppercase tracking-wider">Tariff Estimate</td>
                    <td className="py-4 px-6">Higher per Kg (Speed priority)</td>
                    <td className="py-4 px-6 font-medium">Highly economical at scale volume</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-xs text-[#6B6B6B] uppercase tracking-wider">Customs Paperwork</td>
                    <td className="py-4 px-6 flex items-center text-emerald-800 font-medium">
                      <Check className="h-4 w-4 text-emerald-600 mr-1 shrink-0" />
                      <span>Provided</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-emerald-800 font-medium">
                        <Check className="h-4 w-4 text-emerald-600 mr-1 shrink-0" />
                        <span>Provided</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Minimum Ordering Quantities notes */}
            <div className="border border-[#1A3728]/15 bg-white/45 p-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] text-[#C2673A] block uppercase tracking-wider font-extrabold">AIR SHIPPING MOQ</span>
                <p className="font-serif font-bold text-lg text-[#1A3728]">5 Kilograms (11 lbs)</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">Perfect for exploratory orders for diaspora microstore operators looking to sample our quality.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#C2673A] block uppercase tracking-wider font-extrabold">SEA CARGO MOQ</span>
                <p className="font-serif font-bold text-lg text-[#1A3728]">100 Kilograms (220 lbs)</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">Sustained bulk margins. Ideal for restaurant networks and established grocery importers requiring constant supply loops.</p>
              </div>
            </div>
          </div>

          {/* Side drawer note: Customs standard notes */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
              Paperwork & Customs
            </h2>
            <div className="bg-[#1A3728] text-[#F5EFE0] p-6.5 rounded-3xl border border-[#C9A84C]/25 space-y-4">
              <div className="bg-[#C2673A] h-11 w-11 rounded-xl flex items-center justify-center text-white">
                <ShieldAlert className="h-5.5 w-5.5" />
              </div>
              <p className="font-serif font-bold text-lg text-[#C9A84C]">
                Import & Export Clearances
              </p>
              <p className="text-xs font-sans text-[#F5EFE0]/80 leading-relaxed">
                We handle and process all regulatory export documentation from the Nigerian end, including NAFDAC licenses, Veterinary Certificates, and Phytosanitary Certificates.
              </p>
              <p className="text-xs font-sans text-[#F5EFE0]/80 leading-relaxed border-t border-[#F5EFE0]/15 pt-3">
                Your receiving shipping agent or licensed national customs broker supervises destination import clearance fees at your port of arrival. We are constantly available to coordinate and advise.
              </p>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="w-full bg-[#C9A84C] hover:bg-[#F5EFE0] hover:text-[#1A3728] text-[#1A3728] py-3 rounded-xl font-serif font-bold text-xs uppercase tracking-wide flex items-center justify-center space-x-1.5 transition-all shadow-md cursor-pointer text-center block"
                >
                  <span>Request Shipping Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGING STANDARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-left">
        <div className="space-y-3 mb-10 text-center sm:text-left">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">SAFEGUARDING GRADE VALUES</span>
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
            Premium Export Packaging Integrity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#1A3728]/10 text-left space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="bg-[#F5EFE0] h-10 w-10 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-[#C2673A]" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1A3728]">
                  {p.category}
                </h4>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                  {p.std}
                </p>
              </div>
              <div className="pt-3 border-t border-[#1A3728]/5 flex items-center text-[10px] text-emerald-700 font-bold uppercase font-sans">
                <Award className="h-4 w-4 mr-1 shrink-0" />
                <span>NAFDAC Sealed Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
export default Shipping;
