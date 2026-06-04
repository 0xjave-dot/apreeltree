import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { ScrollToTop } from './components/ScrollToTop';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteBasket } from './components/QuoteBasket';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { HowItWorks } from './pages/HowItWorks';
import { Shipping } from './pages/Shipping';
import { About } from './pages/About';
import { Quote } from './pages/Quote';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen bg-[#F5EFE0] selection:bg-[#C2673A] selection:text-white overflow-x-hidden md:overflow-visible">
          {/* Global Announcement bar */}
          <AnnouncementBar />

          {/* Navigation */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-grow w-full relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/about" element={<About />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route redirection */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Dynamic Interactive Basket overlay trays */}
          <QuoteBasket />

          {/* Floating WhatsApp contact buttons */}
          <FloatingWhatsApp />

          {/* Core Footer */}
          <Footer />
        </div>
      </QuoteProvider>
    </BrowserRouter>
  );
}
