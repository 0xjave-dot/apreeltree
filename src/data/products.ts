import { Product } from '../types';

export const productsList: Product[] = [
  // --- GRAINS ---
  {
    id: 'prod-ofada-rice',
    name: 'Ofada Rice (Unpolished)',
    slug: 'ofada-rice',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Highly aromatic, short-grain, indigenous heritage rice known for its distinct earthy flavor and high nutritional value. Gently unpolished to retain essential fibers.',
    cookingStory: 'Ofada Rice is the star of celebratory traditional Nigerian feasts. Grown in the volcanic soils of southwestern Nigeria, it is traditionally served in green Uma leaves alongside the iconic spicy Ayamase stew, evoking deep nostalgia and local culinary pride.',
    weightOptions: ['2kg', '5kg', '10kg', '25kg', '50kg'],
    basePrice: 15000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 15000 },
      { quantity: '6–20 kg', pricePerKg: 13500 },
      { quantity: '21–50 kg', pricePerKg: 12000 },
      { quantity: '50kg+', pricePerKg: 11000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'NAFDAC Export Permit', 'Health Certificate'],
    image: 'https://humblesagefood.com/wp-content/uploads/2024/05/Ofada-rice.jpeg',
    shelfLife: '12 months. Store in a cool, dry, pest-free area.',
    packagingType: 'Earthy premium woven food-grade hessian sacks with internal humidity-barrier liners.',
    popular: true
  },
  {
    id: 'prod-honey-beans',
    name: 'Ewa Oloyin (Brown Honey Beans)',
    slug: 'brown-beans-oloyin',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Premium sweet brown beans, highly sought-after for its natural sugary undertone and fast-cooking tender texture. Excellent for cooking whole, boiling, or blending.',
    cookingStory: 'Oloyin, which translates literally to "the honey beans," is highly prized across West Africa. It forms the base of comforting dishes like Gbegiri soup, crisp deep-fried Akara, or steam-cooked Moin-Moin puddings.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 8500,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 8500 },
      { quantity: '6–20 kg', pricePerKg: 8000 },
      { quantity: '21–50 kg', pricePerKg: 7500 },
      { quantity: '50kg+', pricePerKg: 7000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Health Certificate'],
    image: 'https://www.neogric.com/wp-content/uploads/2025/04/Neogric-Honey-Beans-Oloyin-2.jpg',
    shelfLife: '18 months when kept in hermetic export storage tanks.',
    packagingType: 'Heavy weight double-sewn gas-barrier bags (PICS bags) to prevent moisture ingress.',
    popular: true
  },
  {
    id: 'prod-guinea-corn',
    name: 'Guinea Corn ',
    slug: 'guinea-corn',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Nutrient-rich, ancient reddish whole sorghum grains. Gluten-free grain sourced fresh from local small-holder farms, rich in iron, fiber, and primary proteins.',
    cookingStory: 'In Northern Nigeria, Guinea Corn is harvested from tall majestic stalks and stone-ground into visual flours to produce "Kun Gyada" (a sweet peanut-infused porridge) or "Ogi Baba", a standard weaning cereal for babies.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 7000,
    bulkPricing: [
      { quantity: '1–20 kg', pricePerKg: 7000 },
      { quantity: '21–50 kg', pricePerKg: 6500 },
      { quantity: '50kg+', pricePerKg: 5800 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://www.foodlocker.com.ng/public/product/guinea%20corn.png',
    shelfLife: '24 months in clean storage.',
    packagingType: 'Reinforced dual-ply woven polypropylene bags.',
    popular: false
  },
  {
    id: 'prod-millet',
    name: ' Millet ',
    slug: 'pearl-millet',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Traditional organic  Millet , carefully sun-dried and winnowed. Ideal for producing wholesome flatbreads, porridges, and health foods.',
    cookingStory: 'Millet is one of Africa’s oldest domestic grains, legendary for its drought resilience. Spiced with ginger and cloves, it is fermented to brew Fura da Nono, a beloved, creamy street food of the West African grasslands.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 6500,
    bulkPricing: [
      { quantity: '1–20 kg', pricePerKg: 6500 },
      { quantity: '21–50 kg', pricePerKg: 6000 },
      { quantity: '50kg+', pricePerKg: 5400 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://www.supermart.ng/cdn/shop/files/MILE249.jpg?v=1689075229',
    shelfLife: '24 months.',
    packagingType: 'Heavy duty polypropylene bags.',
    popular: false
  },

  // --- CONDIMENTS ---
  {
    id: 'prod-egusi',
    name: 'Premium Egusi (Melon Seeds)',
    slug: 'egusi-seeds',
    category: 'Condiments',
    origin: 'Nigeria',
    description: 'Hand-peeled, golden-cream melon seeds of the highest grade. Extremely rich in natural oils, proteins, and vitamins. Dehulled and thoroughly sorted to eliminate shells.',
    cookingStory: 'Egusi soup is a cultural bridge spanning across almost all tribes of Nigeria. Grated or ground, its protein clusters thicken rich vegetable soups, pan-roasted to provide a savory, nutty depth that is unmatched.',
    weightOptions: ['1kg', '5kg', '10kg', '25kg'],
    basePrice: 14000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 14000 },
      { quantity: '6–20 kg', pricePerKg: 13000 },
      { quantity: '21–50 kg', pricePerKg: 12200 },
      { quantity: '50kg+', pricePerKg: 11500 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'NAFDAC Export License'],
    image: 'https://sokokuu.africa/images/detailed/9/WhatsApp_Image_2021-01-06_at_1.16.38_PM.jpeg',
    shelfLife: '8 months (refrigerated after opening to sustain natural oils).',
    packagingType: 'Optimal vacuum-sealed high-barrier transparent food pouches to preserve oils and prevent rancidity.',
    popular: true
  },
  {
    id: 'prod-ogbono',
    name: 'Ogbono Seeds',
    slug: 'ogbono-seeds',
    category: 'Condiments',
    origin: 'Nigeria',
    description: 'Wild-harvested, bush mango seeds (dika nuts), naturally sun-dried to yield an outstanding, mucilaginous "draw" consistency in soups. Graded for pure, earthy notes.',
    cookingStory: 'Gathered deep within the primeval rainforests of Cross River, Ogbono harvesting is an art passed down generations. Ground seeds swell exponentially when heated with warm oil, forming the viscous, savory base that marries flawlessly with swallows.',
    weightOptions: ['1kg', '5kg', '10kg', '20kg'],
    basePrice: 22000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 22000 },
      { quantity: '6–20 kg', pricePerKg: 20500 },
      { quantity: '21–50 kg', pricePerKg: 19500 },
      { quantity: '50kg+', pricePerKg: 18500 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Health Certificate'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmECAvAufTznmqCvAnsYuIaFnmwiLv_wo_XHXhFkRaiYprl_pDIC2H8av&s=10',
    shelfLife: '12 months (keep away from light and dampness).',
    packagingType: 'Sealed moisture-resistant thick silver packaging bags or clear vacuum-packs.',
    popular: true
  },
  {
    id: 'prod-crayfish',
    name: 'Sun-dried Crayfish',
    slug: 'crayfish-whole',
    category: 'Condiments',
    origin: 'Nigeria',
    description: 'Thoroughly dry-cleaned and sun-dried whole marine crayfish. Sourced from coastal estuaries and wind-sorted to guarantee maximum purity, clean texture, and intense umami.',
    cookingStory: 'Oron crayfish is legendary across Nigerian kitchens as the ultimate flavor pack. It provides that essential marine-umami profile that forms the backbone of traditional Jollof rice, soups, and daily cooking.',
    weightOptions: ['1kg', '5kg', '10kg', '20kg'],
    basePrice: 16000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 16000 },
      { quantity: '6–20 kg', pricePerKg: 14800 },
      { quantity: '21–50 kg', pricePerKg: 13800 },
      { quantity: '50kg+', pricePerKg: 12800 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Veterinary Certificate'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLdG2tiLA-9DQRlSKJLAGPLhP7yEi8QEwXvAsoc7sLfAOjFNhvKc_qc8&s=10',
    shelfLife: '6 months in dry storage, extendable up to 12 months if frozen.',
    packagingType: 'Hermetically heat-sealed multi-layered laminate film packs to preserve aroma.',
    popular: true
  },
  {
    id: 'prod-iru',
    name: 'Dried Iru (Locust Beans)',
    slug: 'dried-iru',
    category: 'Condiments',
    origin: 'Nigeria',
    description: 'Traditional fermented African locust beans (Parkia biglobosa), salted and slowly sun-dried. Imbues dishes with an intense, pungent, cheese-like umami depth.',
    cookingStory: 'Iru represents classical Yoruba culinary fermentation at its finest. Boiling the stubborn seeds of the locust bean tree, boiling again, fermenting in woven hampers, and salting produces a legendary compound essential for Efo Riro and Ayamase.',
    weightOptions: ['0.5kg', '1kg', '5kg', '10kg'],
    basePrice: 12000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 12000 },
      { quantity: '6–20 kg', pricePerKg: 11000 },
      { quantity: '21kg+', pricePerKg: 10000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4B0dAK0EHcDIBx03nGKSrCP2ZJFf1WpKMrgBTBaosUTvI7tiAstvM5VR&s=10',
    shelfLife: '12 months under airtight dry storage.',
    packagingType: 'Rigid airless vacuum bags with moisture absorbents.',
    popular: false
  },
  {
    id: 'prod-uziza-leaves',
    name: 'Dried Uziza Leaves',
    slug: 'uziza-leaves',
    category: 'Condiments',
    origin: 'Nigeria',
    description: 'Dried leaves of the West African Piper Guineense plant. Provides a distinctive hot, peppery, and highly aromatic flavor to coastal dishes and soups.',
    cookingStory: 'Uziza is prized for its culinary heat and curative warmth. It is historically served in nourishing Pepper Soups to mothers post-childbirth for bodily recovery.',
    weightOptions: ['0.5kg', '1kg', '5kg'],
    basePrice: 9500,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 9500 },
      { quantity: '6kg+', pricePerKg: 8500 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://humblesagefood.com/wp-content/uploads/2024/05/utazi-leaf-1.jpg',
    shelfLife: '12 months.',
    packagingType: 'Puncture-proof resealable zip stand pouches.',
    popular: false
  },

  // --- SMOKED FISH ---
  {
    id: 'prod-smoked-catfish',
    name: 'Oven-Dried Smoked Catfish',
    slug: 'smoked-catfish',
    category: 'Smoked Fish',
    origin: 'Nigeria',
    description: 'Aquacultured freshwater catfish, curled, brined, and slowly wood-smoked. Completely dry and crisp, packing a rich smoky aroma with zero sand or bitterness.',
    cookingStory: 'The smell of hot catfish drying over hardwood coals is a signature scent of lagoon-side Lagos. This product is prepared under strictly hygienic, export-compliant indoor smoking chambers, ensuring zero carcinogens or carbon residue.',
    weightOptions: ['1kg', '3kg', '5kg', '10kg', '25kg'],
    basePrice: 18500,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 18500 },
      { quantity: '6–20 kg', pricePerKg: 17200 },
      { quantity: '21–50 kg', pricePerKg: 16000 },
      { quantity: '50kg+', pricePerKg: 15000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Veterinary Export Health Permit'],
    image: 'https://img2.tradewheel.com/uploads/images/products/9/7/0212147001641383127-sweet-oven-dried-cat.jpeg.webp',
    shelfLife: '6 months in dry storage (will resist mold due to ultra-low moisture processing).',
    packagingType: 'Rigid export cartons containing individual vacuum-sealed fish pieces to avoid crushing.',
    popular: true
  },


  // --- DRY MEAT ---
  {
    id: 'prod-kilishi',
    name: 'Kilishi',
    slug: 'kaduna-kilishi',
    category: 'Dry Meat',
    origin: 'Nigeria',
    description: 'Classic artisanal Nigerian beef jerky. Wafer-thin slices of prime beef, lightly sun-dried, coated in an rich paste of groundnut, spicy peppers, and spices, then fire-roasted.',
    cookingStory: 'Kilishi is a legendary delicacy from Hausa-land. Our recipes rely on master-dryers who slice hand-selected lean beef to translucent sheets, then sun-dry and open-fire roasted to produce a rich spicy meat snapping texture.',
    weightOptions: ['0.5kg', '1kg', '5kg', '10kg'],
    basePrice: 25000,
    bulkPricing: [
      { quantity: '0.5–2 kg', pricePerKg: 25000 },
      { quantity: '3–10 kg', pricePerKg: 23500 },
      { quantity: '10kg+', pricePerKg: 22000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Veterinary Certificate'],
    image: 'https://www.supermart.ng/cdn/shop/files/sprnw1785.jpg?v=1688740547',
    shelfLife: '12 months (moisture-free shelf stability).',
    packagingType: 'Premium vacuum pack with greaseproof liners and oxygen absorbers.',
    popular: true
  },


  // --- SPICES ---
  {
    id: 'prod-cameroon-pepper',
    name: ' Yellow Cameroon Pepper',
    slug: 'cameroon-pepper',
    category: 'Spices',
    origin: 'Nigeria',
    description: 'Dried yellow habanero peppers, ground to a fine, pungent powder. Famous for its intense, distinct sharp heat combined with a rich, smoky aroma.',
    cookingStory: 'Cameroon pepper (also known as "black pepper" despite being a yellow habanero variety) gets its specific depth from smoke-drying over woodland fires on the humid Gulf of Guinea borders. Perfect for seasoning catfish and meats.',
    weightOptions: ['1kg', '5kg', '10kg', '25kg'],
    basePrice: 13000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 13000 },
      { quantity: '6–20 kg', pricePerKg: 12000 },
      { quantity: '21kg+', pricePerKg: 11000 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoT1P9eMOknTLOoLvYKPvOFyd-FjpA9UeLSSJnXDhfBIMG9KlXl8zcwPe&s=10',
    shelfLife: '24 months, store in airtight opaque jars.',
    packagingType: 'High barrier zip-lock foil bags to preserve visual yellow color and volatile capsicum oils.',
    popular: true
  },
  {
    id: 'prod-suya-spice',
    name: 'Authentic Suya Spice (Yaji)',
    slug: 'suya-spice-yaji',
    category: 'Spices',
    origin: 'Nigeria',
    description: 'Pre-blended northern hot spice. Masterful ratio of ground ginger, roasted groundnuts (Kulikuli), dried red chilies, garlic, and wild spices.',
    cookingStory: 'Yaji is blended by northern "Mai Suya" masters whose guilds are hereditary. It balances oiliness of culinary meats with sharp capsicum and groundnut proteins, adding that instantly recognizable peppery zing.',
    weightOptions: ['1kg', '5kg', '10kg'],
    basePrice: 11500,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 11500 },
      { quantity: '6–20 kg', pricePerKg: 10500 },
      { quantity: '21kg+', pricePerKg: 9500 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerG-KqCdS1WqLaLb8oTUmifd_odt94okn9uePXtZBlielB0xqWXZTipaK&s=10',
    shelfLife: '18 months.',
    packagingType: 'Food-safe stand-up laminates with a seal zipper.',
    popular: true
  },


  // --- OILS ---
  {
    id: 'prod-palm-oil',
    name: 'Grade-A Premium Red Palm Oil',
    slug: 'red-palm-oil',
    category: 'Oils',
    origin: 'Nigeria',
    description: 'Unrefined, cold-pressed premium red palm oil. Extremely low FFA (Free Fatty Acid) content, featuring a deep crimson color and rich, fresh taste with absolutely zero added coloring or chemicals.',
    cookingStory: 'Derived from wild oil palms of Southern Nigeria, this palm oil is extracted under temperature-controlled hydraulic presses to avoid scorching. Perfect for traditional stews, bean dishes, and rich indigenous sauces.',
    weightOptions: ['5L', '10L', '25L', '200L Drum'],
    basePrice: 7500, // per L starting
    bulkPricing: [
      { quantity: '1–5 L', pricePerKg: 7500 },
      { quantity: '6–25 L', pricePerKg: 7000 },
      { quantity: '26–100 L', pricePerKg: 6400 },
      { quantity: '100L+', pricePerKg: 5800 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Standard Organization of Nigeria (SON) Certification'],
    image: 'https://wigmorewholesale.com/image/wkseller/5428/56ebfed3-105e-490e-8a00-33ce56c887ab.jpeg',
    shelfLife: '24 months in a dark, sealed container.',
    packagingType: 'Heavy-duty food-grade HDPE jerrycans with pressure-sealed caps and childproof safety locks (also bulk metal drums for large orders).',
    popular: true
  },


  // --- SWALLOWS ---
  {
    id: 'prod-white-garri',
    name: 'Ijebu Garri',
    slug: 'white-garri-ijebu',
    category: 'Swallows',
    origin: 'Nigeria',
    description: 'Legendary crispy, fine-grained white cassava flour. Acclaimed for its distinctive, sharp, refreshing sour tang and immediate, clean swelling capability when mixed with boiling water.',
    cookingStory: 'Ijebu Garri is an absolute royalty in Nigerian culture. Squeezed of water and fermented over days in sacks, it is fried dry in wide shallow pans. Loved both as a solid swallow ("Eba") or soaked in cold water with sugar, milk, and roasted groundnuts for a hot afternoon snack.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 6000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 6000 },
      { quantity: '6–20 kg', pricePerKg: 5500 },
      { quantity: '21–50 kg', pricePerKg: 5000 },
      { quantity: '50kg+', pricePerKg: 4500 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Standard Organization of Nigeria (SON)'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-op_nXrVJDhCAdWP_CmooayAYSDvaoLtpqqApEBmqyGRYOyhC9IMqYk&s=10',
    shelfLife: '18 months when stored in completely dry warehouse environments.',
    packagingType: 'Moisture-proof laminated woven polypropylene bag with security seal stitching.',
    popular: true
  },
  {
    id: 'prod-yellow-garri',
    name: 'Yellow Garri ',
    slug: 'yellow-garri-edo',
    category: 'Swallows',
    origin: 'Nigeria',
    description: 'Soft-textured yellow cassava grains, fried with a touch of organic red palm oil during the dehydration stage. Less sour than Ijebu Garri, popular for making classical soft Eba.',
    cookingStory: 'Edo and Delta families excel in producing this smooth, palm-oil enriched Garri. The addition of nutritious red palm oil softens the starch acidity and infuses a subtle local color and fragrance into Eba.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 6500,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 6500 },
      { quantity: '6–20 kg', pricePerKg: 6000 },
      { quantity: '21–50 kg', pricePerKg: 5400 },
      { quantity: '50kg+', pricePerKg: 4900 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xt0Swkqr3URiBX9wY1s0fDIHav2LoFCxHWoSkF-RW50lz1YPOqQcslA&s=10',
    shelfLife: '12 months under dry warehouse storage.',
    packagingType: 'Sealed woven polypropylene bag with high barrier liners.',
    popular: false
  },
  {
    id: 'prod-yam-flour',
    name: 'Yam Flour (Amala)',
    slug: 'yam-flour-Amala',
    category: 'Swallows',
    origin: 'Nigeria',
    description: 'Dry light-brown flour processed from peeled, parboiled, and carefully sun-dried white yams. The ultimate ingredient for whipping up soft, fluffy Amala Dudu.',
    cookingStory: 'Amala Dudu is a culinary masterpiece of western Oyo. Traditional yam slices turn brown as they sun-dry, which are then milled to fine powder. Whipped in hot boiling water, it develops a deep brown color and soft elastic pull, eaten with Ewedu and Gbegiri.',
    weightOptions: ['5kg', '10kg', '25kg', '50kg'],
    basePrice: 11000,
    bulkPricing: [
      { quantity: '1–5 kg', pricePerKg: 11000 },
      { quantity: '6–20 kg', pricePerKg: 10200 },
      { quantity: '21–50 kg', pricePerKg: 9500 },
      { quantity: '50kg+', pricePerKg: 8900 }
    ],
    certifications: ['Phytosanitary Certificate', 'Certificate of Origin', 'Standard Organization of Nigeria (SON)'],
    image: 'https://www.foodlocker.com.ng/public/product/imageedit_30_5432476129.png',
    shelfLife: '18 months.',
    packagingType: 'Laminated moisture resistant food packaging with double bottom stitching.',
    popular: true
  }
];
