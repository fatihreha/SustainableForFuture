import React, { useState } from 'react';

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
  }
];

const ProductRecommender = () => {
  const [inputs, setInputs] = useState({
    type: '',
    features: '',
    minPrice: '',
    maxPrice: '',
  });
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);
  const RATE_LIMIT_MS = 1000; // 1 second between requests

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
    const featuresArr = inputs.features.split(',').map(f => f.trim().toLowerCase()).filter(Boolean);
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
      {/* Background image and overlay for the whole page */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/sustainable-product.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
      </div>
      {/* Main Content */}
      <div className="relative max-w-xl w-full bg-gray-50 bg-opacity-90 rounded-lg shadow-lg p-8 z-10 mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-2 text-green-900 flex items-center gap-2"><span role="img" aria-label="cart">🛒</span> Sustainable Product Recommender</h1>
        <p className="mb-6 text-gray-700">Get eco-friendly product suggestions tailored to your needs. Filter by type, features, and price. Each product comes with an AI-generated environmental impact description!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Product type</label>
            <input type="text" name="type" value={inputs.type} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="e.g. detergent, clothing, device" />
          </div>
          <div>
            <label className="block font-medium mb-1">Priority features <span className="text-xs text-gray-500">(comma separated)</span></label>
            <input type="text" name="features" value={inputs.features} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="e.g. vegan, recyclable, local" />
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Min price ($)</label>
              <input type="number" name="minPrice" value={inputs.minPrice} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">Max price ($)</label>
              <input type="number" name="maxPrice" value={inputs.maxPrice} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" />
            </div>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800 transition" disabled={loading}>{loading ? 'Loading...' : 'Get Recommendations'}</button>
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