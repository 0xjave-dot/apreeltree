export interface BulkPricing {
  quantity: string;
  pricePerKg: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Grains' | 'Condiments' | 'Smoked Fish' | 'Dry Meat' | 'Spices' | 'Oils' | 'Swallows';
  origin: string;
  description: string;
  cookingStory: string;
  weightOptions: string[]; // e.g. ["1kg", "5kg", "10kg", "25kg", "50kg"]
  basePrice: number; // base price for the starting weight
  bulkPricing: BulkPricing[];
  certifications: string[];
  image: string;
  shelfLife: string;
  packagingType: string;
  popular?: boolean;
}

export interface EnquiryItem {
  product: Product;
  selectedWeight: string;
  quantity: number;
}
