import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Eye, ArrowRight, CornerRightDown } from 'lucide-react';
import { productsList } from '../data/products';
import { Product } from '../types';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Grains',
    'Condiments',
    'Smoked Fish',
    'Dry Meat',
    'Spices',
    'Oils',
    'Swallows'
  ];

  // Filters the product list based on category & search terms
  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="grain-overlay bg-[#F5EFE0] min-h-screen pb-20">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-[#1A3728]/5 to-transparent pt-12 pb-10 border-b border-[#1A3728]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#C2673A] text-xs font-bold uppercase tracking-widest block font-sans">WHOLESALE EXPORTS CATALOG</span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#1A3728] leading-[1.1] tracking-tight">
            Premium Nigerian Pantry
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Choose from our pristine selection of traditional grains, dried sea products, slow-wood-smoked fish, jerky, pure palm extracts, and swallow starches. Sourced directly from local hub cooperatives across Nigeria.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* FILTERS & SEARCH ROW */}
        <div className="bg-white p-4 rounded-3xl border border-[#1A3728]/10 shadow-sm space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-6 sticky top-20 z-20">
          
          {/* Categories Horizontal Scroll */}
          <div className="overflow-x-auto no-scrollbar flex space-x-2 py-1 scroll-smooth shrink-0 max-w-full lg:max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-2xl text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A3728] text-[#F5EFE0] shadow-sm'
                    : 'bg-[#F5EFE0]/50 text-[#1A3728] hover:bg-[#1A3728]/5 border border-[#1A3728]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#6B6B6B]/75">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search product, state origin, or taste..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5EFE0]/40 pl-9 pr-4 py-2.5 rounded-2xl text-xs font-sans font-medium text-[#1C1C1C] placeholder-[#6B6B6B]/60 border border-[#1A3728]/10 Focus:outline-none focus:ring-1 focus:ring-[#C2673A] transition-all bg-white"
            />
          </div>

        </div>

        {/* STATS STRIP / INFO BOX */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-[#6B6B6B] px-4 gap-2 border-b border-[#1A3728]/5 pb-4">
          <p className="font-medium flex items-center">
            <CornerRightDown className="h-3 w-3 mr-1 text-[#C2673A]" />
            Showing {filteredProducts.length} premium export items
          </p>
          <p className="font-sans italic">
            * Wholesale prices shown are base NGN starting values. USD exchange conversion on invoice request.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white/40 border border-[#1A3728]/10 rounded-3xl mt-6">
            <p className="font-serif font-bold text-xl text-[#1A3728]">No Products Match Your Filter</p>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
              We couldn't locate any export items fitting category "{selectedCategory}" with search term "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#1A3728] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#C2673A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#1A3728]/10 p-5 hover:border-[#C9A84C] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Square Image container with grain overlay background and zoom */}
                  <div className="h-64 sm:h-56 md:h-64 w-full overflow-hidden rounded-2xl relative bg-[#1A3728]/5 border border-[#1A3728]/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#1C1C1C]/5 opacity-10 pointer-events-none mix-blend-overlay" />
                    
                    {/* Category pill */}
                    <span className="absolute top-3 left-3 bg-[#C2673A] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest leading-none shadow">
                      {product.category}
                    </span>
                    
                    {/* Bulk check overlay */}
                    {product.popular && (
                      <span className="absolute top-3 right-3 bg-[#C9A84C] text-[#1A3728] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest leading-none shadow">
                        Popular Export
                      </span>
                    )}
                  </div>

                  {/* Body textual tags */}
                  <div className="mt-5 text-left space-y-2">
                    <h3 className="font-serif font-black text-xl text-[#1A3728] group-hover:text-[#C2673A] transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-1.5 text-xs text-[#6B6B6B] font-sans">
                      <MapPin className="h-3.5 w-3.5 text-[#C2673A] shrink-0" />
                      <span>{product.origin}</span>
                    </div>
                    
                    <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-3 font-sans pt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer and dynamic Add links */}
                <div className="mt-6 pt-4 border-t border-[#1A3728]/10 flex flex-col space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-[#6B6B6B] uppercase tracking-wider font-semibold block">STARTING PRICING</span>
                      <span className="font-serif font-bold text-base text-[#C2673A]">
                        ₦{product.basePrice.toLocaleString()} <span className="font-sans text-xs text-[#6B6B6B] font-normal">/ kg equivalent</span>
                      </span>
                    </div>
                    <span className="text-[10px] bg-[#1A3728]/5 text-[#1A3728] px-2 py-1 rounded font-bold font-sans">
                      {product.weightOptions[0]} min size
                    </span>
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="w-full bg-[#1A3728] group-hover:bg-[#C2673A] text-white py-3 px-4 rounded-xl font-serif font-bold text-center text-xs tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm hover:scale-[1.01]"
                  >
                    <Eye className="h-4 w-4 text-[#C9A84C]" />
                    <span>View Product Details & Story</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
export default Products;
