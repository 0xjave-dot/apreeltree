import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const QuoteBasket: React.FC = () => {
  const {
    enquiryItems,
    isBasketOpen,
    setIsBasketOpen,
    updateQuantity,
    removeFromEnquiry,
  } = useQuote();

  const navigate = useNavigate();

  const totalItemsCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckoutRedirect = () => {
    setIsBasketOpen(false);
    navigate('/quote');
  };

  // 1. Bottom quick-bar (if items present but drawer is closed)
  const showBottomBar = totalItemsCount > 0 && !isBasketOpen;

  return (
    <>
      {/* PERSISTENT BOTTOM BAR */}
      {showBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1A3728] text-[#F5EFE0] px-4 py-4 md:py-5 shadow-2xl z-40 transition-transform transform translate-y-0 flex items-center justify-between border-t border-[#C9A84C]/25 max-w-lg mx-auto sm:rounded-t-2xl mb-0 sm:mb-2 border-x sm:border-t">
          <div className="flex items-center space-x-3">
            <div className="bg-[#C2673A] p-2 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-[#F5EFE0]" />
            </div>
            <div>
              <p className="font-serif font-black text-sm md:text-base tracking-wide">
                Enquiry Basket ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
              </p>
              <p className="text-xs text-[#F5EFE0]/70">
                Ready to request bulk shipping rates
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsBasketOpen(true)}
            className="bg-[#C9A84C] text-[#1A3728] font-sans font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center space-x-1.5 shadow hover:bg-[#C9A84C]/90 hover:scale-[1.03] transition-all cursor-pointer"
          >
            <span>View & Submit</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* FLOATING DRAWER PANEL (when open) */}
      {isBasketOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsBasketOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md bg-[#F5EFE0] shadow-2xl flex flex-col h-full border-l border-[#1A3728]/10">
              
              {/* Drawer Header */}
              <div className="px-6 py-6 bg-[#1A3728] text-[#F5EFE0] flex items-center justify-between border-b border-[#C9A84C]/25">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5 text-[#C9A84C]" />
                  <h2 className="font-serif font-black text-xl tracking-wide">Your Enquiry</h2>
                </div>
                <button
                  onClick={() => setIsBasketOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-[#F5EFE0] transition-colors"
                  aria-label="Close Drawer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {enquiryItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="bg-[#1A3728]/5 p-6 rounded-full text-[#1A3728]/35">
                      <ShoppingBag className="h-12 w-12" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-lg text-[#1A3728]">Your basket is empty</p>
                      <p className="text-xs text-[#6B6B6B] mt-1 max-w-xs px-4">
                        Browse our premium Nigerian export foodstuffs and click "Add to Enquiry" to build your bulk request list.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsBasketOpen(false);
                        navigate('/products');
                      }}
                      className="bg-[#1A3728] text-[#F5EFE0] px-5 py-2.5 rounded-full font-serif font-semibold text-xs tracking-wide shadow"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-[#1A3728]/10">
                    {enquiryItems.map((item, idx) => (
                      <div key={`${item.product.id}-${item.selectedWeight}`} className="py-4 flex space-x-3 first:pt-0">
                        {/* Img */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-16 w-16 object-cover rounded-lg border border-[#1A3728]/10"
                        />
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#C2673A]/10 text-[#C2673A] text-[9px] font-bold uppercase tracking-wider mb-1">
                            {item.product.category}
                          </span>
                          <h4 className="font-serif font-black text-sm text-[#1A3728] truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-[#6B6B6B] mt-0.5">
                            Pack size: <span className="font-semibold text-[#1A3728]">{item.selectedWeight}</span>
                          </p>
                          
                          {/* Controls (Qty / Delete) */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-[#1A3728]/20 rounded-lg overflow-hidden bg-white">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity - 1)}
                                className="p-1 px-2.5 hover:bg-[#1A3728]/5 text-[#1A3728]"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 text-xs font-bold text-[#1A3728] select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity + 1)}
                                className="p-1 px-2.5 hover:bg-[#1A3728]/5 text-[#1A3728]"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeFromEnquiry(item.product.id, item.selectedWeight)}
                              className="text-[#6B6B6B] hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                              aria-label="Delete item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {enquiryItems.length > 0 && (
                <div className="border-t border-[#1A3728]/10 bg-white p-6 space-y-4">
                  <div className="text-xs text-[#6B6B6B] leading-relaxed">
                    💡 <span className="font-semibold text-[#1A3728]">Bulk Export Notice:</span> Proforma quotes contain shipping tariffs configured dynamically per weight threshold. Sourced directly and NAFDAC cleared.
                  </div>
                  <button
                    onClick={handleCheckoutRedirect}
                    className="w-full bg-[#1A3728] hover:bg-[#1A3728]/95 text-[#F5EFE0] py-3.5 rounded-xl font-serif font-bold text-center flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <span>Proceed to Request Quote</span>
                    <ArrowRight className="h-4 w-4 text-[#C9A84C]" />
                  </button>
                  <button
                    onClick={() => setIsBasketOpen(false)}
                    className="w-full text-center text-xs font-semibold text-[#6B6B6B] hover:text-[#1A3728] pt-1"
                  >
                    Continue Browsing
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};
