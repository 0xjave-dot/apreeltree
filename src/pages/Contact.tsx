import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out all contact fields');
      return;
    }

    const textPayload = `Hi Apreeltree! I am contacting you from the website contact page.
Name: ${name}
Email: ${email}
Message: ${message}`;

    const encoded = encodeURIComponent(textPayload);
    const url = `https://wa.me/2348188007303?text=${encoded}`;

    setIsSent(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setName('');
      setEmail('');
      setMessage('');
      setIsSent(false);
    }, 1200);
  };

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-16 pb-12 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">
            GET IN TOUCH • IBADAN HEADQUARTERS
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            Connect With Our Sourcing Hub
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Have questions about NAFDAC certifications, target freight weights, custom products not on the catalog, or delivery timelines? Reach out to our Ibadan export office right away.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
                Ibadan Office Coordinates
              </h2>
              
              <div className="space-y-6 font-sans">
                
                {/* Addr */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1A3728] text-white p-3 rounded-2xl shrink-0">
                    <MapPin className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A3728] mb-0.5">Physical HQ Address</h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-sm">
                      Plot 45, Alao Akala Expressway, Akobo, Ibadan, Oyo State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1A3728] text-white p-3 rounded-2xl shrink-0">
                    <Mail className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A3728] mb-0.5">Email Communications</h4>
                    <p className="text-xs text-indigo-900 font-medium">
                      <a href="mailto:exports@apreeltree.com" className="hover:underline">exports@apreeltree.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1A3728] text-white p-3 rounded-2xl shrink-0">
                    <Phone className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A3728] mb-0.5">Export Desk Hotline (WhatsApp)</h4>
                    <p className="text-xs text-[#6B6B6B] font-bold">
                      +234 (0) 8188007303
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#s-[#1A3728]]/5 bg-[#1A3728]/5 p-3 rounded-2xl shrink-0">
                    <Clock className="h-5 w-5 text-[#C2673A]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A3728] mb-0.5">Operating Sourcing Hours</h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      Monday – Friday: 08:00 AM – 06:00 PM (GMT +1)<br />
                      Sunday Sourcing Intake: 10:00 AM – 04:00 PM (GMT +1)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Custom Aesthetic Embedded Google Map Frame */}
            <div className="bg-white p-4 rounded-3xl border border-[#1A3728]/10 h-72 relative overflow-hidden">
              <iframe
                title="Google Maps Ibadan Location Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.111425103444!2d3.92138!3d7.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b92b67fa9ad%3A0xb35a0ce8f33f63b6!2sAkobo%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1620000000000"
                width="100%"
                height="100%"
                className="border-0 rounded-2xl filter grayscale opacity-85 hover:grayscale-0 transition-all"
                allowFullScreen={false}
                loading="lazy"
              />
              <span className="absolute bottom-6 right-6 bg-[#1D3629] text-[10px] text-white px-2.5 py-1 rounded shadow select-none font-bold">
                🗺️ Akobo, Ibadan, Oyo State
              </span>
            </div>

          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-3xl border border-[#1A3728]/10 shadow-sm text-left flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
                  Direct Message Sourcing Office
                </h2>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                  Use this form to submit generic requests or express questions. Sourcing agents automatically process this compiled payload to wa.me instantly.
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-8 rounded-2xl text-center space-y-3 animate-pulse">
                  <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto" />
                  <p className="font-serif font-black text-lg">Message Formatted!</p>
                  <p className="text-xs text-emerald-900 leading-relaxed max-w-sm mx-auto">
                    A WhatsApp tab is spinning up containing your name, email, and message body. Opening wa.me platform now...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alaba Sanya"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3.5 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="example@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3.5 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A3728] block">Message Detail</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Please write down whatever queries or specific requests you have here. e.g. custom container booking schedules, multi-port drops, packaging brand stamps on raw materials, etc."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#F5EFE0]/30 border border-[#1A3728]/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2673A] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1A3728] hover:bg-[#C2673A] text-white font-serif font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4 text-[#C9A84C]" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-[#1A3728]/5 text-xs text-[#6B6B6B] leading-relaxed bg-[#F5EFE0]/30 p-4 rounded-2xl mt-4 font-sans text-center md:text-left">
              💬 <span className="font-bold text-[#1A3728]">Fast Response Desk:</span> We monitor communications round the clock. For urgent wholesale pallet routing, please text us on WhatsApp directly at +2348188007303.
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
export default Contact;
