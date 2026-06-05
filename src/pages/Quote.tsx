import React, { useState, useEffect } from 'react';
import { useQuote } from '../context/QuoteContext';
import { ShieldCheck, Mail, Phone, CornerDownRight, Plane, Anchor, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Quote: React.FC = () => {
  const { enquiryItems, clearEnquiry, updateQuantity, removeFromEnquiry } = useQuote();

  // Form states
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('United Kingdom');
  const [shippingPreference, setShippingPreference] = useState('Air Freight');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('Google Search');
  
  // Custom manual products textarea
  const [manualProducts, setManualProducts] = useState('');

  // Submit states
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    'United Kingdom',
    'United States',
    'Canada',
    'Germany',
    'Netherlands',
    'France',
    'Italy',
    'Spain',
    'Sweden',
    'Norway',
    'Ireland',
    'Belgium',
    'Finland',
    'Switzerland',
    'Other'
  ];

  // Pre-fills a description of items if they had them in their basket
  const basketSummaryText = enquiryItems
    .map((item) => `• ${item.product.name} (${item.selectedWeight}) - Qty: ${item.quantity}`)
    .join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !whatsAppNumber) {
      alert('Please fill out all required fields (*)');
      return;
    }

    // Assemble the WhatsApp message summary
    let itemsSection = '';
    if (enquiryItems.length > 0) {
      itemsSection = `--- BASKET ITEMS ---\n${basketSummaryText}\n`;
    }
    if (manualProducts.trim()) {
      itemsSection += `--- ADDITIONAL REQUESTS ---\n${manualProducts}\n`;
    }
    if (!itemsSection) {
      itemsSection = `--- REQUESTED ITEMS ---\n(No items selected in basket. General wholesale catalog inquiry.)\n`;
    }

    const message = `Hi Apreeltree! I would like to request a bulk export quote.

--- CLIENT DETAIL ---
Name: ${fullName}
Business: ${businessName || 'Regular Importer'}
Email: ${email}
WhatsApp: ${whatsAppNumber}
Destination: ${destinationCountry}
Shipping: ${shippingPreference}

${itemsSection}
--- ADDITIONAL NOTES ---
${additionalNotes || 'None'}
Ref: Heard via ${hearAboutUs}`;

    // Construct wa.me link
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348188007303?text=${encodedMessage}`;

    // Trigger state
    setIsSubmitted(true);
    
    // Smooth redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      // Save order state and clear context
      clearEnquiry();
    }, 1500);
  };

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-12 pb-10 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans"> PRICING </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            Request a Bulk Quote
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Submit your wholesale parameters. Our logistics coordinators compile a formal proforma shipping estimate and pricing sheets within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div className="bg-white border border-[#1A3728]/10 p-12 rounded-3xl text-center shadow-xl max-w-2xl mx-auto space-y-6">
            <div className="bg-emerald-100 h-16 w-16 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
                Enquiry Compiled!
              </h2>
              <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
                Opening WhatsApp to securely transfer your quote dataset directly to our sales manager. Thank you for placing your trust in Apreeltree.
              </p>
            </div>
            <div className="text-xs text-[#6B6B6B] italic font-sans animate-pulse">
              Redirecting to wa.me chat client... Click "View Catalogue" if window does not open automatically.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left/Center Form Columns */}
            <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl border border-[#1A3728]/10 shadow-sm text-left">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5 animate-fade-in">
                    <label className="text-xs font-bold text-[#1A3728] block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chinedu Okafor"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Business / Store Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Texas Afro-Grocers Inc."
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="example@yourdomain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">WhatsApp Number (with country code) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7911 123456"
                      value={whatsAppNumber}
                      onChange={(e) => setWhatsAppNumber(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Logistics Preferences Dropdown Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Destination Country *</label>
                    <select
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">How did you hear about us?</label>
                    <select
                      value={hearAboutUs}
                      onChange={(e) => setHearAboutUs(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    >
                      <option value="Google Search">Google Search</option>
                      <option value="Instagram / Social media">Instagram / Social media</option>
                      <option value="Word of mouth / Friend">Word of mouth / Friend referral</option>
                      <option value="YouTube Showcase">YouTube Showcase</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Shipping Radio preferences */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-[#1A3728] block">Preferred Freight Method</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label className="bg-[#F5EFE0]/30 border border-[#1A3728]/15 p-4 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-[#F5EFE0]/50 transition-colors">
                      <input
                        type="radio"
                        name="freight"
                        value="Air Freight"
                        checked={shippingPreference === 'Air Freight'}
                        onChange={(e) => setShippingPreference(e.target.value)}
                        className="text-[#C2673A] focus:ring-[#C2673A]"
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold block text-[#1A3728]">Air Cargo</span>
                        <span className="text-[10px] text-[#6B6B6B] block">3-7 days transit (smaller loads)</span>
                      </div>
                    </label>

                    <label className="bg-[#F5EFE0]/30 border border-[#1A3728]/15 p-4 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-[#F5EFE0]/50 transition-colors">
                      <input
                        type="radio"
                        name="freight"
                        value="Sea Freight"
                        checked={shippingPreference === 'Sea Freight'}
                        onChange={(e) => setShippingPreference(e.target.value)}
                        className="text-[#C2673A] focus:ring-[#C2673A]"
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold block text-[#1A3728]">Ocean Cargo</span>
                        <span className="text-[10px] text-[#6B6B6B] block">4-8 weeks transit (wholesale scale)</span>
                      </div>
                    </label>

                    <label className="bg-[#F5EFE0]/30 border border-[#1A3728]/15 p-4 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-[#F5EFE0]/50 transition-colors">
                      <input
                        type="radio"
                        name="freight"
                        value="Not Sure Yet"
                        checked={shippingPreference === 'Not Sure Yet'}
                        onChange={(e) => setShippingPreference(e.target.value)}
                        className="text-[#C2673A] focus:ring-[#C2673A]"
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold block text-[#1A3728]">Not Sure Yet</span>
                        <span className="text-[10px] text-[#6B6B6B] block">Logistics advice needed</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* BASKET ITEMS SECTION BLOCK */}
                {enquiryItems.length > 0 && (
                  <div className="bg-[#1A3728]/5 border border-[#1A3728]/10 p-5 rounded-2xl text-left space-y-3">
                    <p className="font-serif font-black text-sm text-[#1A3728]">
                      Selected Basket Products list:
                    </p>
                    <div className="divide-y divide-[#1A3728]/10 text-xs text-[#1A3728] max-h-48 overflow-y-auto">
                      {enquiryItems.map((item) => (
                        <div key={`${item.product.id}-${item.selectedWeight}`} className="py-2.5 flex justify-between items-center bg-white/20 px-3 rounded-lg mt-1">
                          <div>
                            <span className="font-semibold block">{item.product.name} ({item.selectedWeight})</span>
                            <span className="text-[10px] text-[#6B6B6B]">Pack price starting ₦{item.product.basePrice.toLocaleString()} / kg</span>
                          </div>
                          <span className="bg-[#C2673A] text-white px-2.5 py-1 rounded-lg font-bold">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MANUAL/ADDITIONAL PRODUCTS AREA */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#1A3728] block">Products Required Specification list</label>
                    <span className="text-[10px] text-[#6B6B6B] font-medium leading-none">Separate by commas or rows</span>
                  </div>
                  <textarea
                    rows={4}
                    value={manualProducts}
                    onChange={(e) => setManualProducts(e.target.value)}
                    placeholder="e.g. 100 kg Ijebu Fine White Garri, 50 Liters Palm Oil, 20 kg Dried Catfish. Feel free to list other traditional items not represented in our primary catalog."
                    className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                  />
                </div>

                {/* ADDITIONAL NOTES TEXTAREA */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1A3728] block">Logistics Requirements & Additional Notes</label>
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Add specific delivery deadlines, port requirements, packaging instructions, or custom certifications needed for smooth arrival at your receiving bays."
                    className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1A3728] hover:bg-[#C2673A] text-white font-serif font-black text-sm tracking-wide uppercase py-4.5 rounded-2xl shadow transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5.5 w-5.5 text-[#C9A84C]" />
                    <span>Compile & Submit via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#6B6B6B] text-center mt-3 font-sans">
                    💡 Clicking compiles the list data securely, opens a WhatsApp tab prefilled, and transfers the data directly to our sales coordinator. No personal cookie tracking.
                  </p>
                </div>

              </form>

            </div>

            {/* Sidebar Columns (Why Apreeltree?) */}
            <div className="lg:col-span-4 text-left space-y-6">
              
              <div className="bg-[#1A3728] text-[#F5EFE0] p-6 md:p-8 rounded-3xl border border-[#C9A84C]/25 space-y-6 shadow-md">
                <p className="font-serif font-black text-xl text-[#C9A84C]">
                  Why Import with Apreeltree?
                </p>
                
                <div className="space-y-4 text-xs font-sans text-[#F5EFE0]/80">
                  <div className="flex items-start space-x-2">
                    <div className="bg-[#C2673A] text-white h-5 w-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] mt-0.5">✓</div>
                    <div>
                      <p className="font-bold text-[#F5EFE0] mb-0.5">Customs Success Guarantees</p>
                      <p>Full plant phytosanitary licensing, NAFDAC laboratory clears, and origin stamps provided dynamically.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="bg-[#C2673A] text-white h-5 w-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] mt-0.5">✓</div>
                    <div>
                      <p className="font-bold text-[#F5EFE0] mb-0.5">Sterile Dry Sorting</p>
                      <p>Sieved of all dirt and stones. Kiln smoked and packaged with humidity regulators to resist mold development in transit.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="bg-[#C2673A] text-white h-5 w-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] mt-0.5">✓</div>
                    <div>
                      <p className="font-bold text-[#F5EFE0] mb-0.5">Diaspora Sourcing experts</p>
                      <p>We source directly from agricultural hubs across Kwara, Edo, and Enugu. Fair trade that supports local farmers.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#F5EFE0]/15 pt-4 space-y-2 text-xs">
                  <p className="font-bold text-[#C9A84C]">Export Service Hotline:</p>
                  <p className="flex items-center text-[#F5EFE0]/70">
                    <Phone className="h-4 w-4 text-[#C2673A] shrink-0 mr-1.5" />
                    <span>+234 (0) 8188007303</span>
                  </p>
                  <p className="flex items-center text-[#F5EFE0]/70Data font-mono text-[11px] leading-relaxed">
                    <Mail className="h-4 w-4 text-[#C2673A] shrink-0 mr-1.5" />
                    <span className="font-sans">exports@apreeltree.com</span>
                  </p>
                </div>
              </div>

              {/* Regulatory Logos representation */}
              <div className="border border-[#1A3728]/15 bg-white/45 p-6 rounded-3xl space-y-3">
                <p className="font-serif font-bold text-xs text-[#1D1D1D] tracking-wider uppercase block">
                  AUTHORIZED TRADING PORTAL
                </p>
                <p className="text-[11px] leading-relaxed text-[#6B6B6B] font-sans">
                  Apreeltree Food Export Limited carries registered trade permits with the Corporate Affairs Commission (Reg RC 1792842).
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};
export default Quote;
