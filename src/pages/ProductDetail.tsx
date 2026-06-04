import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingBag, Send, MapPin, Scale, HelpCircle, Archive, Shield, Layers } from 'lucide-react';
import { productsList } from '../data/products';
import { useQuote } from '../context/QuoteContext';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToEnquiry } = useQuote();

  // Find product by slug
  const product = useMemo(() => {
    return productsList.find((p) => p.slug === slug);
  }, [slug]);

  // Fallback state if product not loaded
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedMessage, setAddedMessage] = useState<boolean>(false);

  // Initialize selected weight when product is ready
  React.useEffect(() => {
    if (product && product.weightOptions.length > 0) {
      setSelectedWeight(product.weightOptions[0]);
    }
  }, [product]);

  // Handlers
  if (!product) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="font-serif font-bold text-2xl text-[#1A3728]">Product Not Found</h2>
        <p className="text-sm text-[#6B6B6B]">The product you requested might have been relocated or renamed.</p>
        <Link to="/products" className="inline-block bg-[#1A3728] text-[#F5EFE0] px-6 py-2.5 rounded-full text-xs font-bold leading-none">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Related products (same category or popular, excluding self)
  const relatedProducts = useMemo(() => {
    return productsList
      .filter((p) => p.id !== product.id && (p.category === product.category || p.popular))
      .slice(0, 4);
  }, [product]);

  // Calculates weight details based on selected index
  const activePrice = useMemo(() => {
    // If selectedWeight includes L (litre e.g. red palm oil), parse number
    const parsedKg = parseInt(selectedWeight) || 1;
    return product.basePrice * parsedKg;
  }, [selectedWeight, product]);

  const handleAddToEnquiry = () => {
    addToEnquiry(product, selectedWeight, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const handleWhatsAppQuickChat = () => {
    const text = encodeURIComponent(
      `Hi Apreeltree! I would like to inquire about importing bulk [${product.name}] (Quantity: ${quantity} x ${selectedWeight}) to our warehouse.`
    );
    window.open(`https://wa.me/2348188007303?text=${text}`, '_blank');
  };

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-20">
      
      {/* 1. BREADCRUMBS & BACK NAV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1A3728]/10 pb-4">
          <Link
            to="/products"
            className="text-xs text-[#1A3728] hover:text-[#C2673A] font-bold flex items-center space-x-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Wholesale Catalog</span>
          </Link>
          
          <div className="text-xs text-[#6B6B6B]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1A3728] font-bold">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-[#6B6B6B]/70">{product.name}</span>
          </div>
        </div>
      </div>

      {/* 2. CORE TWO COLUMN DETAIL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-4 rounded-3xl border border-[#1A3728]/10 shadow-sm relative overflow-hidden">
              <div className="h-96 sm:h-[480px] w-full overflow-hidden rounded-2xl relative bg-[#1A3728]/5 border border-[#1A3728]/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                
                {/* Visual labels */}
                <span className="absolute top-4 left-4 bg-[#C2673A] text-white text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {product.category}
                </span>

                <span className="absolute bottom-4 left-4 bg-[#1A3728] text-[#F5EFE0] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#C9A84C]" />
                  <span>Sourced: {product.origin}</span>
                </span>
              </div>
            </div>

            {/* Product Certifications Checklist */}
            <div className="bg-white/50 border border-[#1A3728]/10 p-6 rounded-3xl space-y-4">
              <p className="font-serif font-bold text-sm text-[#1A3728] flex items-center gap-2">
                <Shield className="h-4.5 w-4.5 text-[#C2673A]" />
                <span>Regulatory Export Clearances</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1A3728]/85">
                {product.certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{cert} ✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order panel & Specifications */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-[#C2673A] text-xs font-black uppercase tracking-widest block font-sans">
                ORIGIN GUARANTED • EXPORT CERTIFIED
              </span>
              <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A3728] leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-[#1A3728]/85 font-sans leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing Details */}
            <div className="bg-white p-6 rounded-3xl border border-[#1A3728]/10 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-[#1A3728]/5">
                <div>
                  <span className="text-[10px] text-[#6B6B6B] uppercase font-bold tracking-wider">EST. WEIGHT PRICING</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-serif font-black text-2xl lg:text-3xl text-[#C2673A]">
                      ₦{activePrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#6B6B6B]">
                      per {selectedWeight} pack
                    </span>
                  </div>
                </div>
                
                <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Available for Shipment
                </span>
              </div>

              {/* Weight Options tabs */}
              <div className="space-y-3">
                <label className="text-[10px] text-[#1A3728] uppercase font-black tracking-wider block">
                  Select Package Minimum Weight Threshold:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.weightOptions.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedWeight === weight
                          ? 'bg-[#1A3728] text-white'
                          : 'bg-[#F5EFE0]/50 text-[#1A3728] hover:bg-[#1A3728]/5 border border-[#1A3728]/5'
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#6B6B6B] italic font-sans">
                  * Dynamic wholesale adjustments are configured based on target volume.
                </p>
              </div>

              {/* Quantity input & Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center justify-between border border-[#1A3728]/25 rounded-2xl bg-white px-3 py-2 w-full sm:w-32">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="p-1 px-2.5 hover:bg-[#1A3728]/5 font-serif font-bold text-sm text-[#1A3728]"
                  >
                    -
                  </button>
                  <span className="text-sm font-sans font-black text-[#1A3728]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="p-1 px-2.5 hover:bg-[#1A3728]/5 font-serif font-bold text-sm text-[#1A3728]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToEnquiry}
                  className="flex-1 bg-[#1A3728] hover:bg-[#1A3728]/95 text-[#F5EFE0] py-3.5 px-6 rounded-2xl font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer hover:scale-[1.01] shadow-md"
                >
                  <ShoppingBag className="h-4.5 w-4.5 text-[#C9A84C]" />
                  <span>Add to Enquiry List</span>
                </button>
              </div>

              {/* Added confirmation toast banner inside component */}
              {addedMessage && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3 rounded-xl text-xs flex items-center gap-2 animate-pulse">
                  <span className="text-sm">✓</span>
                  <span>Successfully added to enquiry! Open standard basket drawer at the bottom to proceed.</span>
                </div>
              )}

              {/* Instant WhatsApp Enquiry */}
              <button
                onClick={handleWhatsAppQuickChat}
                className="w-full border border-emerald-600 hover:bg-emerald-50 text-emerald-800 font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-2xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Send className="h-4 w-4 text-emerald-600" />
                <span>Instant WhatsApp Consult</span>
              </button>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
              <div className="border border-[#1A3728]/15 bg-white/45 p-4.5 rounded-2xl text-left space-y-1">
                <span className="text-[10px] text-[#6B6B6B] block uppercase tracking-wider font-semibold">SHELF LIFE MATRIX</span>
                <p className="text-xs text-[#1A3728] font-bold font-sans">{product.shelfLife}</p>
              </div>
              <div className="border border-[#1A3728]/15 bg-white/45 p-4.5 rounded-2xl text-left space-y-1">
                <span className="text-[10px] text-[#6B6B6B] block uppercase tracking-wider font-semibold">EXPORT PACKAGING TYPE</span>
                <p className="text-xs text-[#1A3728] font-bold font-sans">{product.packagingType}</p>
              </div>
            </div>

            {/* Wholesale Pricing Table */}
            <div className="bg-white rounded-3xl border border-[#1A3728]/10 overflow-hidden">
              <div className="bg-[#1A3728] text-[#F5EFE0] px-5 py-3 border-b border-[#C9A84C]/20">
                <p className="font-serif font-black text-sm tracking-wide">
                  Wholesale Tariff / Kg Reference
                </p>
              </div>
              <div className="p-4">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-[#1A3728]/15 text-[#6B6B6B] font-semibold text-[10px] uppercase tracking-wider">
                      <th className="pb-2">Minimum Quantity Ordering</th>
                      <th className="pb-2 text-right">Price per Kg equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A3728]/5 text-[#1A3728]">
                    {product.bulkPricing.map((tier) => (
                      <tr key={tier.quantity}>
                        <td className="py-2.5 font-medium">{tier.quantity} ({parseInt(tier.quantity) > 0 ? `${(parseInt(tier.quantity) * 2.2).toFixed(1)} lbs` : 'Bulk freight'})</td>
                        <td className="py-2.5 text-right font-bold text-[#C2673A]">
                          {tier.pricePerKg === 12000 && product.id === 'prod-ofada-rice' ? '₦12,000' : 
                           tier.pricePerKg === 11000 && product.id === 'prod-ofada-rice' ? '₦11,000' :
                           tier.pricePerKg === 0 || isNaN(tier.pricePerKg) ? 'Consultation quote' : 
                           `₦${tier.pricePerKg.toLocaleString()}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT STORY / CULTURAL SIGNIFICANCE Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left">
        <div className="bg-[#1A3728] text-[#F5EFE0] p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl border border-[#C9A84C]/35">
          <div className="absolute inset-0 bg-[radial-gradient(#C2673A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-wider block">
              OUR CULINARY HERITAGE
            </span>
            <h2 className="font-serif font-black text-2xl md:text-3xl tracking-tight text-[#F5EFE0]">
              The Traditional Food Story of {product.name}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-[#F5EFE0]/85">
              {product.cookingStory}
            </p>
          </div>
        </div>
      </section>

      {/* 4. RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-[#1A3728]/10 pt-16 text-left">
        <div className="space-y-2 mb-8">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-wider block font-sans">COMPLEMENTARY STAPLES</span>
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#1A3728]">
            Related Wholesale Shipments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-[#1A3728]/10 p-4 hover:border-[#C9A84C]"
            >
              <div className="h-40 w-full overflow-hidden rounded-xl bg-[#1A3728]/5 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#C2673A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase leading-none">
                  {p.category}
                </span>
              </div>
              <h3 className="font-serif font-bold text-sm text-[#1A3728] mt-3 truncate">{p.name}</h3>
              <p className="text-[11px] text-[#6B6B6B] font-sans mt-0.5">{p.origin}</p>
              
              <div className="flex justify-between items-center mt-4 pt-2 border-t border-[#1A3728]/5">
                <span className="font-serif font-black text-xs text-[#C2673A]">₦{p.basePrice}/kg</span>
                <Link
                  to={`/products/${p.slug}`}
                  className="text-[#1A3728] hover:text-[#C2673A] text-xs font-bold font-sans flex items-center space-x-0.5"
                >
                  <span>Details</span>
                  <ArrowLeft className="h-3 w-3 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
export default ProductDetail;
