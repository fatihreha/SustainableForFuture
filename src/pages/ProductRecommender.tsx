import React, { useState, useEffect } from 'react';

// Array containing all product types
const PRODUCT_TYPES = [
  'accessories',
  'art',
  'automotive',
  'baby',
  'bath',
  'beauty',
  'bedding',
  'beverage',
  'books',
  'cleaning',
  'clothing',
  'device',
  'detergent',
  'fitness',
  'food',
  'garden',
  'health',
  'home',
  'home decor',
  'kitchen',
  'lighting',
  'music',
  'office',
  'outdoor',
  'party',
  'pet',
  'personal care',
  'seasonal',
  'sports',
  'stationery',
  'storage',
  'tech',
  'toys',
  'transportation',
  'travel'
];

// Array containing all features
const FEATURES = [
  'absorbent',
  'acid-free',
  'adjustable',
  'antioxidant',
  'automatic',
  'BPA-free',
  'breathable',
  'caffeine-free',
  'certified',
  'chemical-free',
  'comfortable',
  'compostable',
  'convenient',
  'cruelty-free',
  'digital',
  'durable',
  'eco-friendly',
  'energy-boosting',
  'energy-efficient',
  'ergonomic',
  'ethical',
  'exfoliating',
  'fair-trade',
  'fresh',
  'gentle',
  'gluten-free',
  'handmade',
  'healthy',
  'hypoallergenic',
  'insulated',
  'lightweight',
  'local',
  'long-lasting',
  'low-carbon',
  'maintenance-free',
  'natural',
  'non-toxic',
  'organic',
  'ocean-friendly',
  'plastic-free',
  'portable',
  'probiotic',
  'protein-rich',
  'pure',
  'raw',
  'recyclable',
  'recycled',
  'refillable',
  'relaxing',
  'reusable',
  'safe',
  'shade-grown',
  'smart',
  'soft',
  'solar-powered',
  'sugar-free',
  'sulfite-free',
  'sustainable',
  'tree-free',
  'unique',
  'unprocessed',
  'UV-protection',
  'vegan',
  'warm',
  'water-resistant',
  'water-saving',
  'waterproof',
  'weatherproof',
  'zero-waste'
];

const PRODUCTS = [
  {
    name: 'Organic Vegetables',
    type: 'food',
    features: ['organic', 'local', 'chemical-free', 'sustainable', 'fresh'],
    price: 8,
  },
  {
    name: 'Plant-based Meat',
    type: 'food',
    features: ['vegan', 'sustainable', 'protein-rich', 'low-carbon', 'healthy'],
    price: 12,
  },
  {
    name: 'Fair Trade Chocolate',
    type: 'food',
    features: ['fair-trade', 'organic', 'sustainable', 'ethical', 'vegan'],
    price: 6,
  },
  {
    name: 'Bulk Grains',
    type: 'food',
    features: ['zero-waste', 'sustainable', 'affordable', 'healthy', 'local'],
    price: 4,
  },
  {
    name: 'Raw Nuts',
    type: 'food',
    features: ['organic', 'sustainable', 'healthy', 'protein-rich', 'natural'],
    price: 10,
  },
  {
    name: 'Sustainable Seafood',
    type: 'food',
    features: ['sustainable', 'ocean-friendly', 'fresh', 'healthy', 'certified'],
    price: 15,
  },
  {
    name: 'Organic Tea',
    type: 'beverage',
    features: ['organic', 'fair-trade', 'sustainable', 'natural', 'healthy'],
    price: 7,
  },
  {
    name: 'Fair Trade Coffee',
    type: 'beverage',
    features: ['fair-trade', 'organic', 'sustainable', 'ethical', 'fresh'],
    price: 9,
  },
  {
    name: 'Fruit-infused Water',
    type: 'beverage',
    features: ['natural', 'sugar-free', 'healthy', 'refreshing', 'sustainable'],
    price: 5,
  },
  {
    name: 'Kombucha',
    type: 'beverage',
    features: ['probiotic', 'natural', 'sugar-free', 'healthy', 'sustainable'],
    price: 6,
  },
  {
    name: 'Plant-based Milk',
    type: 'beverage',
    features: ['vegan', 'sustainable', 'dairy-free', 'healthy', 'natural'],
    price: 4,
  },
  {
    name: 'Sugar-free Juice',
    type: 'beverage',
    features: ['sugar-free', 'natural', 'healthy', 'sustainable', 'fresh'],
    price: 5,
  },
  {
    name: 'Herbal Infusion',
    type: 'beverage',
    features: ['natural', 'organic', 'sustainable', 'healthy', 'caffeine-free'],
    price: 6,
  },
  {
    name: 'Low-carbon Wine',
    type: 'beverage',
    features: ['sustainable', 'organic', 'low-carbon', 'natural', 'local'],
    price: 18,
  },
  {
    name: 'Locally Brewed Beer',
    type: 'beverage',
    features: ['local', 'sustainable', 'craft', 'natural', 'fresh'],
    price: 8,
  },
  {
    name: 'Bottled Water in Glass',
    type: 'beverage',
    features: ['sustainable', 'recyclable', 'pure', 'natural', 'plastic-free'],
    price: 3,
  },
  {
    name: 'Eco Laundry Detergent',
    type: 'detergent',
    features: ['vegan', 'biodegradable', 'local', 'plastic-free', 'chemical-free'],
    price: 12,
  },
  {
    name: 'Organic Cotton T-Shirt',
    type: 'clothing',
    features: ['vegan', 'recyclable', 'fair-trade', 'organic', 'water-saving'],
    price: 25,
  },
  {
    name: 'Solar Power Bank',
    type: 'device',
    features: ['energy efficient', 'recyclable', 'solar-powered', 'long-lasting', 'durable'],
    price: 40,
  },
  {
    name: 'Bamboo Toothbrush',
    type: 'device',
    features: ['biodegradable', 'local', 'plastic-free', 'natural', 'compostable'],
    price: 4,
  },
  {
    name: 'Recycled Paper Notebook',
    type: 'stationery',
    features: ['recyclable', 'local', 'tree-free', 'acid-free', 'sustainable'],
    price: 6,
  },
  {
    name: 'Hemp Backpack',
    type: 'clothing',
    features: ['vegan', 'biodegradable', 'durable', 'water-resistant', 'sustainable'],
    price: 45,
  },
  {
    name: 'LED Solar Garden Lights',
    type: 'device',
    features: ['energy efficient', 'solar-powered', 'waterproof', 'long-lasting', 'automatic'],
    price: 35,
  },
  {
    name: 'Beeswax Food Wraps',
    type: 'kitchen',
    features: ['biodegradable', 'reusable', 'natural', 'plastic-free', 'sustainable'],
    price: 15,
  },
  {
    name: 'Stainless Steel Water Bottle',
    type: 'kitchen',
    features: ['recyclable', 'durable', 'reusable', 'BPA-free', 'insulated'],
    price: 20,
  },
  {
    name: 'Organic Shampoo Bar',
    type: 'personal care',
    features: ['vegan', 'biodegradable', 'plastic-free', 'natural', 'chemical-free'],
    price: 8,
  },
  {
    name: 'Bamboo Cutlery Set',
    type: 'kitchen',
    features: ['biodegradable', 'reusable', 'lightweight', 'natural', 'sustainable'],
    price: 12,
  },
  {
    name: 'Recycled Glass Vase',
    type: 'home decor',
    features: ['recyclable', 'durable', 'handmade', 'unique', 'sustainable'],
    price: 30,
  },
  {
    name: 'Organic Cotton Bed Sheets',
    type: 'home',
    features: ['organic', 'fair-trade', 'chemical-free', 'breathable', 'sustainable'],
    price: 65,
  },
  {
    name: 'Solar Phone Charger',
    type: 'device',
    features: ['solar-powered', 'portable', 'waterproof', 'durable', 'energy efficient'],
    price: 50,
  },
  {
    name: 'Natural Loofah Sponge',
    type: 'personal care',
    features: ['biodegradable', 'natural', 'reusable', 'exfoliating', 'sustainable'],
    price: 5,
  },
  {
    name: 'Recycled Plastic Rugs',
    type: 'home',
    features: ['recycled', 'durable', 'water-resistant', 'easy-clean', 'sustainable'],
    price: 55,
  },
  {
    name: 'Organic Herbal Tea Set',
    type: 'kitchen',
    features: ['organic', 'fair-trade', 'natural', 'sustainable', 'local'],
    price: 25,
  },
  {
    name: 'Bamboo Flooring',
    type: 'home',
    features: ['sustainable', 'durable', 'renewable', 'natural', 'water-resistant'],
    price: 120,
  },
  {
    name: 'Solar Garden Watering System',
    type: 'garden',
    features: ['solar-powered', 'water-saving', 'automatic', 'smart', 'sustainable'],
    price: 85,
  },
  {
    name: 'Recycled Denim Jacket',
    type: 'clothing',
    features: ['recycled', 'durable', 'water-saving', 'sustainable', 'unique'],
    price: 75,
  },
  {
    name: 'Natural Deodorant',
    type: 'personal care',
    features: ['natural', 'chemical-free', 'vegan', 'plastic-free', 'sustainable'],
    price: 10,
  },
  {
    name: 'Bamboo Laptop Stand',
    type: 'device',
    features: ['sustainable', 'ergonomic', 'durable', 'adjustable', 'natural'],
    price: 35,
  },
  {
    name: 'Organic Cotton Towels',
    type: 'home',
    features: ['organic', 'chemical-free', 'absorbent', 'sustainable', 'soft'],
    price: 28,
  },
  {
    name: 'Solar-Powered Security Camera',
    type: 'device',
    features: ['solar-powered', 'wireless', 'smart', 'weatherproof', 'sustainable'],
    price: 95,
  },
  {
    name: 'Recycled Glass Jewelry',
    type: 'accessories',
    features: ['recycled', 'unique', 'handmade', 'sustainable', 'durable'],
    price: 45,
  },
  {
    name: 'Organic Quinoa',
    type: 'food',
    features: ['organic', 'fair-trade', 'gluten-free', 'protein-rich', 'sustainable'],
    price: 8,
  },
  {
    name: 'Local Honey',
    type: 'food',
    features: ['local', 'natural', 'raw', 'unprocessed', 'sustainable'],
    price: 12,
  },
  {
    name: 'Organic Green Tea',
    type: 'beverage',
    features: ['organic', 'fair-trade', 'antioxidant', 'natural', 'sustainable'],
    price: 6,
  },
  {
    name: 'Recycled Glass Water Filter',
    type: 'kitchen',
    features: ['recyclable', 'durable', 'water-saving', 'chemical-free', 'sustainable'],
    price: 45,
  },
  {
    name: 'Bamboo Bike',
    type: 'transportation',
    features: ['sustainable', 'durable', 'lightweight', 'natural', 'eco-friendly'],
    price: 850,
  },
  {
    name: 'Organic Cotton Yoga Mat',
    type: 'fitness',
    features: ['organic', 'natural', 'non-toxic', 'biodegradable', 'sustainable'],
    price: 35,
  },
  {
    name: 'Solar-Powered Backpack',
    type: 'accessories',
    features: ['solar-powered', 'waterproof', 'durable', 'portable', 'sustainable'],
    price: 120,
  },
  {
    name: 'Organic Dark Chocolate',
    type: 'food',
    features: ['organic', 'fair-trade', 'vegan', 'sugar-free', 'sustainable'],
    price: 7,
  },
  {
    name: 'Recycled Plastic Outdoor Furniture',
    type: 'garden',
    features: ['recycled', 'weatherproof', 'durable', 'maintenance-free', 'sustainable'],
    price: 250,
  },
  {
    name: 'Bamboo Speaker',
    type: 'device',
    features: ['sustainable', 'natural', 'waterproof', 'portable', 'energy-efficient'],
    price: 65,
  },
  {
    name: 'Organic Wine',
    type: 'beverage',
    features: ['organic', 'natural', 'sulfite-free', 'vegan', 'sustainable'],
    price: 28,
  },
  {
    name: 'Electric Scooter',
    type: 'transportation',
    features: ['energy-efficient', 'portable', 'eco-friendly', 'smart', 'sustainable'],
    price: 450,
  },
  {
    name: 'Organic Protein Powder',
    type: 'food',
    features: ['organic', 'vegan', 'gluten-free', 'natural', 'sustainable'],
    price: 32,
  },
  {
    name: 'Solar-Powered Watch',
    type: 'accessories',
    features: ['solar-powered', 'waterproof', 'durable', 'smart', 'sustainable'],
    price: 180,
  },
  {
    name: 'Bamboo Keyboard',
    type: 'device',
    features: ['sustainable', 'ergonomic', 'durable', 'natural', 'recyclable'],
    price: 85,
  },
  {
    name: 'Organic Coffee Beans',
    type: 'beverage',
    features: ['organic', 'fair-trade', 'shade-grown', 'natural', 'sustainable'],
    price: 15,
  },
  {
    name: 'Recycled Plastic Surfboard',
    type: 'sports',
    features: ['recycled', 'durable', 'waterproof', 'lightweight', 'sustainable'],
    price: 350,
  },
  {
    name: 'Organic Face Mask',
    type: 'personal care',
    features: ['organic', 'natural', 'reusable', 'biodegradable', 'sustainable'],
    price: 18,
  },
  {
    name: 'Solar-Powered Tent',
    type: 'outdoor',
    features: ['solar-powered', 'waterproof', 'portable', 'durable', 'sustainable'],
    price: 280,
  },
  {
    name: 'Bamboo Sunglasses',
    type: 'accessories',
    features: ['sustainable', 'natural', 'UV-protection', 'lightweight', 'durable'],
    price: 45,
  },
  {
    name: 'Organic Granola',
    type: 'food',
    features: ['organic', 'vegan', 'gluten-free', 'natural', 'sustainable'],
    price: 9,
  },
  {
    name: 'Recycled Plastic Kayak',
    type: 'sports',
    features: ['recycled', 'durable', 'waterproof', 'lightweight', 'sustainable'],
    price: 420,
  },
  {
    name: 'Solar-Powered Cooler',
    type: 'outdoor',
    features: ['solar-powered', 'portable', 'energy-efficient', 'durable', 'sustainable'],
    price: 150,
  },
  {
    name: 'Organic Cotton Socks',
    type: 'clothing',
    features: ['organic', 'natural', 'breathable', 'durable', 'sustainable'],
    price: 12,
  },
  {
    name: 'Bamboo Skateboard',
    type: 'sports',
    features: ['sustainable', 'durable', 'lightweight', 'natural', 'eco-friendly'],
    price: 95,
  },
  {
    name: 'Natural Makeup Kit',
    type: 'beauty',
    features: ['vegan', 'chemical-free', 'natural', 'sustainable', 'cruelty-free'],
    price: 45,
  },
  {
    name: 'Organic Lipstick',
    type: 'beauty',
    features: ['organic', 'vegan', 'natural', 'chemical-free', 'sustainable'],
    price: 18,
  },
  {
    name: 'Natural Face Serum',
    type: 'beauty',
    features: ['natural', 'organic', 'chemical-free', 'sustainable', 'vegan'],
    price: 32,
  },
  {
    name: 'Organic Baby Clothes Set',
    type: 'baby',
    features: ['organic', 'chemical-free', 'sustainable', 'safe', 'natural'],
    price: 35,
  },
  {
    name: 'Natural Baby Shampoo',
    type: 'baby',
    features: ['natural', 'chemical-free', 'organic', 'sustainable', 'gentle'],
    price: 12,
  },
  {
    name: 'Wooden Baby Toys',
    type: 'baby',
    features: ['natural', 'sustainable', 'chemical-free', 'safe', 'durable'],
    price: 25,
  },
  {
    name: 'Natural Pet Food',
    type: 'pet',
    features: ['natural', 'sustainable', 'chemical-free', 'organic', 'healthy'],
    price: 25,
  },
  {
    name: 'Eco-Friendly Cat Litter',
    type: 'pet',
    features: ['biodegradable', 'natural', 'sustainable', 'chemical-free', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Natural Pet Shampoo',
    type: 'pet',
    features: ['natural', 'chemical-free', 'organic', 'sustainable', 'gentle'],
    price: 15,
  },
  {
    name: 'Recycled Paper Notebook Set',
    type: 'office',
    features: ['recyclable', 'tree-free', 'sustainable', 'acid-free', 'eco-friendly'],
    price: 15,
  },
  {
    name: 'Bamboo Desk Organizer',
    type: 'office',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'Recycled Paper Clips',
    type: 'office',
    features: ['recycled', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 8,
  },
  {
    name: 'Natural Paint Set',
    type: 'art',
    features: ['natural', 'chemical-free', 'sustainable', 'non-toxic', 'eco-friendly'],
    price: 30,
  },
  {
    name: 'Recycled Canvas',
    type: 'art',
    features: ['recycled', 'sustainable', 'durable', 'natural', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Natural Brushes',
    type: 'art',
    features: ['natural', 'sustainable', 'chemical-free', 'durable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Bamboo Flute',
    type: 'music',
    features: ['sustainable', 'natural', 'handmade', 'durable', 'eco-friendly'],
    price: 55,
  },
  {
    name: 'Recycled Guitar',
    type: 'music',
    features: ['recycled', 'sustainable', 'durable', 'handmade', 'eco-friendly'],
    price: 280,
  },
  {
    name: 'Natural Drum Set',
    type: 'music',
    features: ['natural', 'sustainable', 'handmade', 'durable', 'eco-friendly'],
    price: 450,
  },
  {
    name: 'E-Book Reader',
    type: 'books',
    features: ['tree-free', 'sustainable', 'digital', 'energy-efficient', 'long-lasting'],
    price: 120,
  },
  {
    name: 'Recycled Paper Books',
    type: 'books',
    features: ['recycled', 'sustainable', 'tree-free', 'eco-friendly', 'natural'],
    price: 18,
  },
  {
    name: 'Digital Magazine Subscription',
    type: 'books',
    features: ['digital', 'tree-free', 'sustainable', 'eco-friendly', 'convenient'],
    price: 25,
  },
  {
    name: 'Wooden Toy Set',
    type: 'toys',
    features: ['natural', 'sustainable', 'chemical-free', 'durable', 'safe'],
    price: 40,
  },
  {
    name: 'Recycled Plastic Building Blocks',
    type: 'toys',
    features: ['recycled', 'sustainable', 'durable', 'safe', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Natural Rubber Ball',
    type: 'toys',
    features: ['natural', 'sustainable', 'chemical-free', 'durable', 'safe'],
    price: 12,
  },
  {
    name: 'Organic Herbal Supplements',
    type: 'health',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'healthy'],
    price: 28,
  },
  {
    name: 'Natural Vitamins',
    type: 'health',
    features: ['natural', 'organic', 'sustainable', 'chemical-free', 'healthy'],
    price: 22,
  },
  {
    name: 'Organic Protein Bars',
    type: 'health',
    features: ['organic', 'natural', 'sustainable', 'healthy', 'vegan'],
    price: 15,
  },
  {
    name: 'Natural Laundry Detergent',
    type: 'cleaning',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Eco-Friendly Dish Soap',
    type: 'cleaning',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'eco-friendly'],
    price: 12,
  },
  {
    name: 'Natural All-Purpose Cleaner',
    type: 'cleaning',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'eco-friendly'],
    price: 15,
  },
  {
    name: 'Bamboo Storage Boxes',
    type: 'storage',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Recycled Plastic Bins',
    type: 'storage',
    features: ['recycled', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 25,
  },
  {
    name: 'Natural Fiber Baskets',
    type: 'storage',
    features: ['natural', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'LED Solar Light',
    type: 'lighting',
    features: ['energy-efficient', 'solar-powered', 'sustainable', 'long-lasting', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Bamboo Lamp',
    type: 'lighting',
    features: ['sustainable', 'natural', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 55,
  },
  {
    name: 'Recycled Glass Chandelier',
    type: 'lighting',
    features: ['recycled', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 120,
  },
  {
    name: 'Natural Bath Set',
    type: 'bath',
    features: ['natural', 'chemical-free', 'sustainable', 'organic', 'eco-friendly'],
    price: 32,
  },
  {
    name: 'Bamboo Bath Mat',
    type: 'bath',
    features: ['sustainable', 'natural', 'durable', 'water-resistant', 'eco-friendly'],
    price: 25,
  },
  {
    name: 'Organic Cotton Towels',
    type: 'bath',
    features: ['organic', 'natural', 'sustainable', 'chemical-free', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'Organic Bedding Set',
    type: 'bedding',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'breathable'],
    price: 85,
  },
  {
    name: 'Natural Latex Pillow',
    type: 'bedding',
    features: ['natural', 'sustainable', 'chemical-free', 'hypoallergenic', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Organic Wool Blanket',
    type: 'bedding',
    features: ['organic', 'natural', 'sustainable', 'chemical-free', 'warm'],
    price: 65,
  },
  {
    name: 'Solar Garden Tools',
    type: 'garden',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 65,
  },
  {
    name: 'Bamboo Garden Stakes',
    type: 'garden',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Natural Fertilizer',
    type: 'garden',
    features: ['natural', 'organic', 'sustainable', 'chemical-free', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Biodegradable Party Set',
    type: 'party',
    features: ['biodegradable', 'sustainable', 'compostable', 'eco-friendly', 'natural'],
    price: 25,
  },
  {
    name: 'Recycled Paper Decorations',
    type: 'party',
    features: ['recycled', 'sustainable', 'reusable', 'eco-friendly', 'natural'],
    price: 18,
  },
  {
    name: 'Natural Party Favors',
    type: 'party',
    features: ['natural', 'sustainable', 'biodegradable', 'eco-friendly', 'chemical-free'],
    price: 15,
  },
  {
    name: 'Recycled Travel Backpack',
    type: 'travel',
    features: ['recycled', 'sustainable', 'durable', 'waterproof', 'eco-friendly'],
    price: 75,
  },
  {
    name: 'Bamboo Travel Set',
    type: 'travel',
    features: ['sustainable', 'natural', 'durable', 'lightweight', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Natural Travel Toiletries',
    type: 'travel',
    features: ['natural', 'sustainable', 'chemical-free', 'compact', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'Solar Car Charger',
    type: 'automotive',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'portable', 'eco-friendly'],
    price: 95,
  },
  {
    name: 'Eco-Friendly Car Wash',
    type: 'automotive',
    features: ['natural', 'sustainable', 'chemical-free', 'biodegradable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Recycled Tire Products',
    type: 'automotive',
    features: ['recycled', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Bamboo Phone Case',
    type: 'tech',
    features: ['sustainable', 'natural', 'durable', 'biodegradable', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Solar Power Bank',
    type: 'tech',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'portable', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Recycled Laptop Bag',
    type: 'tech',
    features: ['recycled', 'sustainable', 'durable', 'waterproof', 'eco-friendly'],
    price: 55,
  },
  {
    name: 'Natural Holiday Decorations',
    type: 'seasonal',
    features: ['natural', 'sustainable', 'reusable', 'eco-friendly', 'biodegradable'],
    price: 35,
  },
  {
    name: 'Organic Wreath',
    type: 'seasonal',
    features: ['organic', 'natural', 'sustainable', 'biodegradable', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Recycled Gift Wrap',
    type: 'seasonal',
    features: ['recycled', 'sustainable', 'reusable', 'eco-friendly', 'natural'],
    price: 15,
  },
  {
    name: 'Organic Mixed Nuts',
    type: 'food',
    features: ['organic', 'protein-rich', 'sustainable', 'healthy', 'natural'],
    price: 15,
  },
  {
    name: 'Plant-based Protein Powder',
    type: 'food',
    features: ['vegan', 'protein-rich', 'sustainable', 'gluten-free', 'organic'],
    price: 35,
  },
  {
    name: 'Organic Dried Fruits',
    type: 'food',
    features: ['organic', 'natural', 'sugar-free', 'sustainable', 'healthy'],
    price: 12,
  },
  {
    name: 'Organic Matcha Powder',
    type: 'beverage',
    features: ['organic', 'antioxidant', 'sustainable', 'natural', 'energy-boosting'],
    price: 25,
  },
  {
    name: 'Cold-Pressed Juice',
    type: 'beverage',
    features: ['organic', 'raw', 'natural', 'sustainable', 'healthy'],
    price: 8,
  },
  {
    name: 'Herbal Tea Collection',
    type: 'beverage',
    features: ['organic', 'natural', 'caffeine-free', 'sustainable', 'healthy'],
    price: 18,
  },
  {
    name: 'Recycled Polyester Jacket',
    type: 'clothing',
    features: ['recycled', 'water-resistant', 'durable', 'sustainable', 'weatherproof'],
    price: 85,
  },
  {
    name: 'Organic Cotton Socks Pack',
    type: 'clothing',
    features: ['organic', 'natural', 'breathable', 'sustainable', 'comfortable'],
    price: 15,
  },
  {
    name: 'Hemp T-Shirt',
    type: 'clothing',
    features: ['natural', 'durable', 'sustainable', 'breathable', 'chemical-free'],
    price: 35,
  },
  {
    name: 'Solar-Powered Headphones',
    type: 'device',
    features: ['solar-powered', 'wireless', 'sustainable', 'energy-efficient', 'portable'],
    price: 120,
  },
  {
    name: 'Bamboo Wireless Mouse',
    type: 'device',
    features: ['sustainable', 'ergonomic', 'wireless', 'natural', 'durable'],
    price: 45,
  },
  {
    name: 'Solar-Powered Calculator',
    type: 'device',
    features: ['solar-powered', 'energy-efficient', 'sustainable', 'durable', 'portable'],
    price: 15,
  },
  {
    name: 'Natural Face Mask Set',
    type: 'beauty',
    features: ['natural', 'organic', 'chemical-free', 'sustainable', 'reusable'],
    price: 28,
  },
  {
    name: 'Organic Hair Care Kit',
    type: 'beauty',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'vegan'],
    price: 45,
  },
  {
    name: 'Natural Body Scrub',
    type: 'beauty',
    features: ['natural', 'organic', 'exfoliating', 'sustainable', 'chemical-free'],
    price: 22,
  },
  {
    name: 'Organic Baby Food Set',
    type: 'baby',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'healthy'],
    price: 32,
  },
  {
    name: 'Natural Baby Wipes',
    type: 'baby',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'gentle'],
    price: 15,
  },
  {
    name: 'Organic Baby Blanket',
    type: 'baby',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'soft'],
    price: 35,
  },
  {
    name: 'Natural Pet Treats',
    type: 'pet',
    features: ['natural', 'organic', 'chemical-free', 'sustainable', 'healthy'],
    price: 18,
  },
  {
    name: 'Eco-Friendly Pet Bed',
    type: 'pet',
    features: ['sustainable', 'natural', 'chemical-free', 'durable', 'comfortable'],
    price: 45,
  },
  {
    name: 'Natural Pet Grooming Kit',
    type: 'pet',
    features: ['natural', 'chemical-free', 'sustainable', 'gentle', 'reusable'],
    price: 32,
  },
  {
    name: 'Bamboo Desk Set',
    type: 'office',
    features: ['sustainable', 'natural', 'durable', 'ergonomic', 'eco-friendly'],
    price: 55,
  },
  {
    name: 'Recycled Paper Sticky Notes',
    type: 'office',
    features: ['recycled', 'sustainable', 'tree-free', 'acid-free', 'eco-friendly'],
    price: 8,
  },
  {
    name: 'Bamboo Pen Set',
    type: 'office',
    features: ['sustainable', 'natural', 'durable', 'refillable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Natural Paint Brushes Set',
    type: 'art',
    features: ['natural', 'sustainable', 'chemical-free', 'durable', 'eco-friendly'],
    price: 25,
  },
  {
    name: 'Recycled Paper Sketchbook',
    type: 'art',
    features: ['recycled', 'sustainable', 'tree-free', 'acid-free', 'eco-friendly'],
    price: 15,
  },
  {
    name: 'Natural Clay Set',
    type: 'art',
    features: ['natural', 'sustainable', 'chemical-free', 'biodegradable', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Bamboo Ukulele',
    type: 'music',
    features: ['sustainable', 'natural', 'handmade', 'durable', 'eco-friendly'],
    price: 75,
  },
  {
    name: 'Recycled Drum Sticks',
    type: 'music',
    features: ['recycled', 'sustainable', 'durable', 'natural', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Natural Wood Tambourine',
    type: 'music',
    features: ['natural', 'sustainable', 'handmade', 'durable', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Digital Book Reader Case',
    type: 'books',
    features: ['sustainable', 'durable', 'protective', 'natural', 'eco-friendly'],
    price: 25,
  },
  {
    name: 'Recycled Paper Bookmarks',
    type: 'books',
    features: ['recycled', 'sustainable', 'tree-free', 'durable', 'eco-friendly'],
    price: 8,
  },
  {
    name: 'Bamboo Book Stand',
    type: 'books',
    features: ['sustainable', 'natural', 'durable', 'ergonomic', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Wooden Building Blocks Set',
    type: 'toys',
    features: ['natural', 'sustainable', 'chemical-free', 'durable', 'safe'],
    price: 45,
  },
  {
    name: 'Organic Cotton Stuffed Animal',
    type: 'toys',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'safe'],
    price: 28,
  },
  {
    name: 'Bamboo Toy Car',
    type: 'toys',
    features: ['sustainable', 'natural', 'chemical-free', 'durable', 'safe'],
    price: 18,
  },
  {
    name: 'Natural Sleep Aid',
    type: 'health',
    features: ['natural', 'organic', 'chemical-free', 'sustainable', 'healthy'],
    price: 25,
  },
  {
    name: 'Organic Multivitamin',
    type: 'health',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'healthy'],
    price: 35,
  },
  {
    name: 'Natural Energy Supplement',
    type: 'health',
    features: ['natural', 'organic', 'sustainable', 'healthy', 'energy-boosting'],
    price: 28,
  },
  {
    name: 'Natural Glass Cleaner',
    type: 'cleaning',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'eco-friendly'],
    price: 12,
  },
  {
    name: 'Organic Laundry Detergent',
    type: 'cleaning',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Natural Floor Cleaner',
    type: 'cleaning',
    features: ['natural', 'chemical-free', 'biodegradable', 'sustainable', 'eco-friendly'],
    price: 15,
  },
  {
    name: 'Bamboo Drawer Organizer',
    type: 'storage',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'Recycled Plastic Storage Box',
    type: 'storage',
    features: ['recycled', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Natural Fiber Storage Baskets',
    type: 'storage',
    features: ['natural', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Bamboo Table Lamp',
    type: 'lighting',
    features: ['sustainable', 'natural', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Solar-Powered Wall Light',
    type: 'lighting',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 65,
  },
  {
    name: 'Recycled Glass Pendant Light',
    type: 'lighting',
    features: ['recycled', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 85,
  },
  {
    name: 'Natural Bath Salts',
    type: 'bath',
    features: ['natural', 'organic', 'chemical-free', 'sustainable', 'relaxing'],
    price: 18,
  },
  {
    name: 'Bamboo Bath Caddy',
    type: 'bath',
    features: ['sustainable', 'natural', 'durable', 'water-resistant', 'eco-friendly'],
    price: 32,
  },
  {
    name: 'Organic Cotton Bath Robe',
    type: 'bath',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'comfortable'],
    price: 45,
  },
  {
    name: 'Organic Cotton Duvet Cover',
    type: 'bedding',
    features: ['organic', 'natural', 'chemical-free', 'sustainable', 'breathable'],
    price: 65,
  },
  {
    name: 'Natural Latex Mattress Topper',
    type: 'bedding',
    features: ['natural', 'sustainable', 'chemical-free', 'hypoallergenic', 'comfortable'],
    price: 120,
  },
  {
    name: 'Organic Wool Duvet',
    type: 'bedding',
    features: ['organic', 'natural', 'sustainable', 'chemical-free', 'warm'],
    price: 95,
  },
  {
    name: 'Bamboo Garden Tools Set',
    type: 'garden',
    features: ['sustainable', 'natural', 'durable', 'ergonomic', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Natural Pest Control Spray',
    type: 'garden',
    features: ['natural', 'chemical-free', 'sustainable', 'eco-friendly', 'safe'],
    price: 18,
  },
  {
    name: 'Solar-Powered Garden Fountain',
    type: 'garden',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 85,
  },
  {
    name: 'Bamboo Party Plates Set',
    type: 'party',
    features: ['sustainable', 'natural', 'biodegradable', 'compostable', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Recycled Paper Party Decorations',
    type: 'party',
    features: ['recycled', 'sustainable', 'reusable', 'eco-friendly', 'natural'],
    price: 18,
  },
  {
    name: 'Natural Party Favor Bags',
    type: 'party',
    features: ['natural', 'sustainable', 'biodegradable', 'reusable', 'eco-friendly'],
    price: 15,
  },
  {
    name: 'Bamboo Travel Cutlery Set',
    type: 'travel',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 18,
  },
  {
    name: 'Recycled Travel Toiletry Bag',
    type: 'travel',
    features: ['recycled', 'sustainable', 'durable', 'water-resistant', 'eco-friendly'],
    price: 25,
  },
  {
    name: 'Solar-Powered Travel Charger',
    type: 'travel',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'portable', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Eco-Friendly Car Air Freshener',
    type: 'automotive',
    features: ['natural', 'sustainable', 'chemical-free', 'long-lasting', 'eco-friendly'],
    price: 12,
  },
  {
    name: 'Bamboo Car Organizer',
    type: 'automotive',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 28,
  },
  {
    name: 'Solar-Powered Car Battery Maintainer',
    type: 'automotive',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'durable', 'eco-friendly'],
    price: 65,
  },
  {
    name: 'Bamboo Laptop Stand',
    type: 'tech',
    features: ['sustainable', 'natural', 'ergonomic', 'durable', 'eco-friendly'],
    price: 35,
  },
  {
    name: 'Recycled Plastic Tech Organizer',
    type: 'tech',
    features: ['recycled', 'sustainable', 'durable', 'reusable', 'eco-friendly'],
    price: 22,
  },
  {
    name: 'Solar-Powered Bluetooth Speaker',
    type: 'tech',
    features: ['solar-powered', 'sustainable', 'energy-efficient', 'portable', 'eco-friendly'],
    price: 85,
  },
  {
    name: 'Natural Holiday Wreath',
    type: 'seasonal',
    features: ['natural', 'sustainable', 'biodegradable', 'reusable', 'eco-friendly'],
    price: 45,
  },
  {
    name: 'Recycled Paper Gift Tags',
    type: 'seasonal',
    features: ['recycled', 'sustainable', 'reusable', 'eco-friendly', 'natural'],
    price: 8,
  },
  {
    name: 'Bamboo Holiday Ornaments',
    type: 'seasonal',
    features: ['sustainable', 'natural', 'durable', 'reusable', 'eco-friendly'],
    price: 22,
  }
];

const ProductRecommender = () => {
  const [inputs, setInputs] = useState({
    type: '',
    features: [] as string[],
    minPrice: '',
    maxPrice: '',
  });
  const [priceRange, setPriceRange] = useState({
    min: 1,
    max: 1000,
    currentMin: 1,
    currentMax: 1000
  });
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);
  const RATE_LIMIT_MS = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (e.target.name === 'features') {
      const select = e.target as HTMLSelectElement;
      const selectedOptions = Array.from(select.selectedOptions).map(option => option.value);
      setInputs(prev => ({ ...prev, features: selectedOptions }));
    } else {
      setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = parseInt(value);
    
    setPriceRange(prev => {
      const newRange = { ...prev };
      if (name === 'minPrice') {
        newRange.currentMin = Math.min(newValue, prev.currentMax - 10);
      } else {
        newRange.currentMax = Math.max(newValue, prev.currentMin + 10);
      }
      return newRange;
    });

    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Check rate limiting
    const now = Date.now();
    if (now - lastRequestTime < RATE_LIMIT_MS) {
      setError('Please wait a moment before making another request.');
      setLoading(false);
      return;
    }
    setLastRequestTime(now);

    // Filter products based on user input
    const featuresArr = inputs.features.map(f => f.trim().toLowerCase()).filter(Boolean);
    const filtered = PRODUCTS.filter(p => {
      const typeMatch = !inputs.type || p.type.toLowerCase().includes(inputs.type.toLowerCase());
      const priceMatch = (!inputs.minPrice || p.price >= Number(inputs.minPrice)) && (!inputs.maxPrice || p.price <= Number(inputs.maxPrice));
      const featuresMatch = featuresArr.every(f => p.features.includes(f));
      return typeMatch && priceMatch && featuresMatch;
    });

    // Get OpenAI descriptions for each product
    try {
      const described = await Promise.all(filtered.map(async (prod) => {
        const desc = await getOpenAIDescription(prod);
        return { ...prod, description: desc };
      }));
      setResults(described);
    } catch (err) {
      setError('Failed to get product descriptions. Please try again later.');
    }
    setLoading(false);
  };

  async function getOpenAIDescription(product: any) {
    const prompt = `You are a sustainability expert. Write a short, friendly environmental impact description (max 2 sentences) for this product, based on its features: ${product.name}, features: ${product.features.join(', ')}.`;
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a sustainability expert.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 60,
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        if (res.status === 429) {
          throw new Error('Rate limit exceeded. Please try again in a few moments.');
        } else if (res.status === 401) {
          throw new Error('Invalid API key. Please check your configuration.');
        } else if (res.status === 402) {
          throw new Error('Payment required. Please check your OpenAI account billing.');
        } else {
          throw new Error(`API Error: ${errorData?.error?.message || res.statusText}`);
        }
      }
      
      const data = await res.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('No content in API response');
      }
      
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return `This ${product.type} is eco-friendly with features: ${product.features.join(', ')}.`;
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background image and overlay */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/sustainable-product.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-xl w-full bg-gray-50 bg-opacity-90 rounded-lg shadow-lg p-8 z-10 mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-2 text-green-900 flex items-center gap-2">
          <span role="img" aria-label="cart">🛒</span> Sustainable Product Recommender
        </h1>
        <p className="mb-6 text-gray-700">
          Get eco-friendly product suggestions tailored to your needs. Filter by type, features, and price. Each product comes with an AI-generated environmental impact description!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Product Type</label>
            <select 
              name="type" 
              value={inputs.type} 
              onChange={handleChange} 
              className="w-full border rounded px-3 py-2 bg-white"
            >
              <option value="">Select a product type</option>
              {PRODUCT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block font-medium mb-1">Priority Features</label>
            <select 
              name="features" 
              value={inputs.features}
              onChange={handleChange} 
              className="w-full border rounded px-3 py-2 bg-white"
              multiple
              size={5}
            >
              {FEATURES.map((feature) => (
                <option key={feature} value={feature}>
                  {feature.charAt(0).toUpperCase() + feature.slice(1)}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple features</p>
          </div>
          
          <div className="space-y-4">
            <label className="block font-medium">Price Range ($)</label>
            <div className="relative pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">${priceRange.currentMin}</span>
                <span className="text-sm text-gray-600">${priceRange.currentMax}</span>
              </div>
              <div className="relative h-2">
                <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
                <div 
                  className="absolute h-2 bg-green-600 rounded-full"
                  style={{
                    left: `${((priceRange.currentMin - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
                    right: `${100 - ((priceRange.currentMax - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`
                  }}
                ></div>
                <input
                  type="range"
                  name="minPrice"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={priceRange.currentMin}
                  onChange={handlePriceChange}
                  className="absolute w-full h-2 opacity-0 cursor-pointer"
                />
                <input
                  type="range"
                  name="maxPrice"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={priceRange.currentMax}
                  onChange={handlePriceChange}
                  className="absolute w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800 transition" 
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Recommendations'}
          </button>
        </form>

        {error && <div className="text-red-600 mt-4">{error}</div>}
        
        {results.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recommended Products</h2>
            <ul className="space-y-4">
              {results.map((prod, i) => (
                <li key={i} className="bg-white rounded shadow p-4">
                  <div className="font-bold text-green-800">{prod.name}</div>
                  <div className="text-gray-700 text-sm mb-1">Features: {prod.features.join(', ')}</div>
                  <div className="text-gray-700 text-sm mb-1">Price: ${prod.price}</div>
                  <div className="text-gray-900 mt-2 italic">{prod.description}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {results.length === 0 && !loading && (
          <div className="mt-8 text-gray-500 text-center">No products found. Try different filters.</div>
        )}
      </div>
    </div>
  );
};

export default ProductRecommender; 