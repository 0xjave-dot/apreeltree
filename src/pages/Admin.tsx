import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { productsList } from '../data/products';
import { Eye, EyeOff, Trash2, Plus, Edit, Upload, X } from 'lucide-react';

const ADMIN_PASSWORD = 'apreeltree2024';
const STORAGE_KEY = 'apreeltree_products';
const STORAGE_KEY_EDITS = 'apreeltree_product_edits';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [products, setProducts] = useState<Product[]>(productsList);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'Grains' as const,
    origin: 'Nigeria',
    description: '',
    cookingStory: '',
    weightOptions: '2kg,5kg,10kg,25kg,50kg',
    basePrice: '',
    certifications: '',
    image: '',
    shelfLife: '',
    packagingType: '',
    popular: false,
    bulkPricing: '1–5 kg|15000,6–20 kg|13500,21–50 kg|12000,50kg+|11000'
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const edits = localStorage.getItem(STORAGE_KEY_EDITS);
    let allProducts = [...productsList];

    if (edits) {
      try {
        const editedProducts = JSON.parse(edits);
        allProducts = allProducts.map(p => {
          const edited = editedProducts.find((e: Product) => e.id === p.id);
          return edited || p;
        });
      } catch (e) {
        console.error('Failed to load product edits:', e);
      }
    }

    if (stored) {
      try {
        const storedProducts = JSON.parse(stored);
        allProducts = [...allProducts, ...storedProducts];
      } catch (e) {
        console.error('Failed to load stored products:', e);
      }
    }

    setProducts(allProducts);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      category: 'Grains',
      origin: 'Nigeria',
      description: '',
      cookingStory: '',
      weightOptions: '2kg,5kg,10kg,25kg,50kg',
      basePrice: '',
      certifications: '',
      image: '',
      shelfLife: '',
      packagingType: '',
      popular: false,
      bulkPricing: '1–5 kg|15000,6–20 kg|13500,21–50 kg|12000,50kg+|11000'
    });
    setEditingId(null);
    setImagePreview('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData(prev => ({ ...prev, image: base64 }));
        setImagePreview(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProduct = (product: Product) => {
    setFormData({
      name: product.name,
      slug: product.slug,
      category: product.category,
      origin: product.origin,
      description: product.description,
      cookingStory: product.cookingStory,
      weightOptions: product.weightOptions.join(','),
      basePrice: product.basePrice.toString(),
      certifications: product.certifications.join(','),
      image: product.image,
      shelfLife: product.shelfLife,
      packagingType: product.packagingType,
      popular: product.popular || false,
      bulkPricing: product.bulkPricing.map(bp => `${bp.quantity}|${bp.pricePerKg}`).join(',')
    });
    setImagePreview(product.image);
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const bulkPricingLines = formData.bulkPricing.split(',').map(line => {
      const [quantity, price] = line.trim().split('|');
      return { quantity: quantity.trim(), pricePerKg: parseInt(price.trim()) };
    });

    if (editingId) {
      const updatedProduct: Product = {
        id: editingId,
        name: formData.name,
        slug: formData.slug,
        category: formData.category,
        origin: formData.origin,
        description: formData.description,
        cookingStory: formData.cookingStory,
        weightOptions: formData.weightOptions.split(',').map(w => w.trim()),
        basePrice: parseInt(formData.basePrice),
        bulkPricing: bulkPricingLines,
        certifications: formData.certifications.split(',').map(c => c.trim()),
        image: formData.image,
        shelfLife: formData.shelfLife,
        packagingType: formData.packagingType,
        popular: formData.popular
      };

      const updatedProducts = products.map(p => p.id === editingId ? updatedProduct : p);
      setProducts(updatedProducts);

      const isDefaultProduct = productsList.some(p => p.id === editingId);
      if (isDefaultProduct) {
        const edits = localStorage.getItem(STORAGE_KEY_EDITS);
        let editedProducts = edits ? JSON.parse(edits) : [];
        editedProducts = editedProducts.filter((p: Product) => p.id !== editingId);
        editedProducts.push(updatedProduct);
        localStorage.setItem(STORAGE_KEY_EDITS, JSON.stringify(editedProducts));
      } else {
        const customProducts = updatedProducts.filter(p => p.id.startsWith('prod-') && p.id !== editingId);
        customProducts.push(updatedProduct);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
      }

      alert('Product updated successfully!');
    } else {
      const newProduct: Product = {
        id: `prod-${Date.now()}`,
        name: formData.name,
        slug: formData.slug,
        category: formData.category,
        origin: formData.origin,
        description: formData.description,
        cookingStory: formData.cookingStory,
        weightOptions: formData.weightOptions.split(',').map(w => w.trim()),
        basePrice: parseInt(formData.basePrice),
        bulkPricing: bulkPricingLines,
        certifications: formData.certifications.split(',').map(c => c.trim()),
        image: formData.image,
        shelfLife: formData.shelfLife,
        packagingType: formData.packagingType,
        popular: formData.popular
      };

      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);

      const customProducts = updatedProducts.filter(p => p.id.startsWith('prod-'));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));

      alert('Product added successfully!');
    }

    resetForm();
    setShowForm(false);
  };

  const handleDeleteProduct = (productId: string) => {
    const isDefaultProduct = productsList.some(p => p.id === productId);
    
    if (isDefaultProduct) {
      alert('Cannot delete default products. You can edit them instead.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);

      const customProducts = updatedProducts.filter(p => p.id.startsWith('prod-'));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F5EFE0] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-[#1A3728]/10">
          <h1 className="text-3xl font-serif font-bold text-[#1A3728] mb-2 text-center">Admin Panel</h1>
          <p className="text-[#1A3728]/60 text-center mb-8">Apreeltree Management Portal</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-[#1A3728] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A3728]/50 hover:text-[#1A3728]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A3728] hover:bg-[#C2673A] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5EFE0] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#1A3728]">Admin Dashboard</h1>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setShowForm(false);
              resetForm();
            }}
            className="bg-[#C2673A] hover:bg-[#1A3728] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-[#1A3728]/10">
          <button
            onClick={() => {
              if (showForm && !editingId) {
                setShowForm(false);
              } else if (!showForm) {
                resetForm();
                setShowForm(true);
              }
            }}
            className="flex items-center gap-2 bg-[#1A3728] hover:bg-[#C2673A] text-white font-semibold py-2 px-6 rounded-lg transition-colors mb-6"
          >
            <Plus className="h-5 w-5" />
            {showForm && !editingId ? 'Cancel' : 'Add New Product'}
          </button>

          {editingId && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex justify-between items-center">
              <span className="text-blue-900 font-semibold">Editing product...</span>
              <button
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Cancel Edit
              </button>
            </div>
          )}

          {showForm && (
            <form onSubmit={handleSaveProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., ofada-rice"
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                >
                  <option>Grains</option>
                  <option>Condiments</option>
                  <option>Smoked Fish</option>
                  <option>Dry Meat</option>
                  <option>Spices</option>
                  <option>Oils</option>
                  <option>Swallows</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Origin</label>
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A] h-24"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Cooking Story *</label>
                <textarea
                  name="cookingStory"
                  value={formData.cookingStory}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A] h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Weight Options</label>
                <input
                  type="text"
                  name="weightOptions"
                  value={formData.weightOptions}
                  onChange={handleInputChange}
                  placeholder="e.g., 2kg,5kg,10kg,25kg,50kg"
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Base Price *</label>
                <input
                  type="number"
                  name="basePrice"
                  value={formData.basePrice}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Bulk Pricing</label>
                <textarea
                  name="bulkPricing"
                  value={formData.bulkPricing}
                  onChange={handleInputChange}
                  placeholder="e.g., 1–5 kg|15000,6–20 kg|13500"
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A] h-16"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Certifications</label>
                <input
                  type="text"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  placeholder="e.g., Phytosanitary Certificate,Certificate of Origin"
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Product Image *</label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-[#1A3728]/20 rounded-lg cursor-pointer hover:border-[#C2673A] transition-colors">
                      <div className="flex flex-col items-center">
                        <Upload className="h-6 w-6 text-[#1A3728]/50 mb-2" />
                        <span className="text-sm font-semibold text-[#1A3728]">Click to upload image</span>
                        <span className="text-xs text-[#1A3728]/50">PNG, JPG, or GIF</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        required={!formData.image}
                      />
                    </label>
                  </div>
                  {imagePreview && (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-32 w-32 object-cover rounded-lg border border-[#1A3728]/10"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, image: '' }));
                          setImagePreview('');
                        }}
                        className="absolute -top-2 -right-2 bg-[#C2673A] hover:bg-[#1A3728] text-white rounded-full p-1 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Shelf Life *</label>
                <input
                  type="text"
                  name="shelfLife"
                  value={formData.shelfLife}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 12 months. Store in cool, dry area."
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1A3728] mb-2">Packaging Type *</label>
                <input
                  type="text"
                  name="packagingType"
                  value={formData.packagingType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#1A3728]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2673A]"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="popular"
                  checked={formData.popular}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#C2673A] border-[#1A3728]/20 rounded"
                />
                <label className="ml-2 text-sm font-semibold text-[#1A3728]">Mark as Popular</label>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-[#C2673A] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {editingId ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#1A3728]/10">
          <h2 className="text-2xl font-serif font-bold text-[#1A3728] mb-6">All Products ({products.length})</h2>
          <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
            {products.map(product => (
              <div key={product.id} className="flex justify-between items-center p-4 border border-[#1A3728]/10 rounded-lg hover:bg-[#F5EFE0]/50">
                <div>
                  <h3 className="font-semibold text-[#1A3728]">{product.name}</h3>
                  <p className="text-sm text-[#1A3728]/60">{product.category} • {product.slug}</p>
                  <div className="flex gap-2 mt-1">
                    {product.id.startsWith('prod-') && (
                      <span className="inline-block text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Custom</span>
                    )}
                    {productsList.some(p => p.id === product.id) && (
                      <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Default</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="text-[#1A3728] hover:bg-[#1A3728]/10 p-2 rounded transition-colors"
                    title="Edit product"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  {product.id.startsWith('prod-') && (
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-[#C2673A] hover:bg-[#C2673A]/10 p-2 rounded transition-colors"
                      title="Delete custom product"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
