import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, EnquiryItem } from '../types';

interface QuoteContextType {
  enquiryItems: EnquiryItem[];
  addToEnquiry: (product: Product, weight: string, quantity: number) => void;
  removeFromEnquiry: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearEnquiry: () => void;
  isBasketOpen: boolean;
  setIsBasketOpen: (open: boolean) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  // Load enquiry basket on mount
  useEffect(() => {
    const saved = localStorage.getItem('apreeltree_enquiry');
    if (saved) {
      try {
        setEnquiryItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse basket items', e);
      }
    }
  }, []);

  // Save to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('apreeltree_enquiry', JSON.stringify(enquiryItems));
  }, [enquiryItems]);

  const addToEnquiry = (product: Product, weight: string, quantity: number) => {
    setEnquiryItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, selectedWeight: weight, quantity }];
    });
    // Automatically open drawer when item is added
    setIsBasketOpen(true);
  };

  const removeFromEnquiry = (productId: string, weight: string) => {
    setEnquiryItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedWeight === weight))
    );
  };

  const updateQuantity = (productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId, weight);
      return;
    }
    setEnquiryItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedWeight === weight
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearEnquiry = () => {
    setEnquiryItems([]);
  };

  return (
    <QuoteContext.Provider
      value={{
        enquiryItems,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        isBasketOpen,
        setIsBasketOpen,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
