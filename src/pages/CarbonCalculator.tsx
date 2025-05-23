import React, { useState } from 'react';

const AVERAGE_CO2E = 4000; // Example average in kg CO2e

const suggestions = [
  'Use public transportation or carpool when possible.',
  'Reduce meat consumption and try plant-based meals.',
  'Switch to energy-efficient appliances.',
  'Fly less or choose direct flights.',
  'Improve home insulation to save energy.'
];

const homeTypes = [
  { label: 'Single House', value: 1.2 },
  { label: 'Apartment', value: 1.0 },
  { label: 'Shared Flat', value: 0.8 },
];

function calculateCO2e({ carKm, electricity, meat, flights, homeType }) {
  // Simple estimation formulas (for demo purposes)
  const car = Number(carKm) * 0.21 * 52; // 0.21 kg/km, 52 weeks
  const elec = Number(electricity) * 0.475 * 12; // 0.475 kg/kWh, 12 months
  const meatKg = Number(meat) * 7 * 52 * 0.027; // 7 meals/week, 0.027 kg/meal
  const flight = Number(flights) * 250; // 250 kg/flight (short-medium haul)
  const home = 500 * (Number(homeType) || 1); // Home type multiplier
  return Math.round(car + elec + meatKg + flight + home);
}

const CarbonCalculator = () => {
  const [inputs, setInputs] = useState({
    carKm: '',
    electricity: '',
    meat: '',
    flights: '',
    homeType: homeTypes[0].value,
  });
  const [result, setResult] = useState<number|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateCO2e(inputs));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background image and overlay for the whole page */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/carbon-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
      </div>
      {/* Main Content */}
      <div className="relative max-w-xl w-full bg-gray-50 rounded-lg shadow-lg p-8 z-10 mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-2 text-green-900 flex items-center gap-2"><span className="text-3xl font-bold">🌍</span> <span className="font-bold">Carbon Footprint Calculator</span></h1>
        <p className="mb-6 text-gray-700">Calculate your annual carbon emissions based on your daily habits and compare with the average. Get tips to reduce your footprint!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Car usage (km per week)</label>
            <input type="number" name="carKm" value={inputs.carKm} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" placeholder="e.g. 100" />
          </div>
          <div>
            <label className="block font-medium mb-1">Electricity usage (kWh per month)</label>
            <input type="number" name="electricity" value={inputs.electricity} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" placeholder="e.g. 200" />
          </div>
          <div>
            <label className="block font-medium mb-1">Meat consumption (meals per week)</label>
            <input type="number" name="meat" value={inputs.meat} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" placeholder="e.g. 7" />
          </div>
          <div>
            <label className="block font-medium mb-1">Flights per year</label>
            <input type="number" name="flights" value={inputs.flights} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" placeholder="e.g. 2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Home type</label>
            <select name="homeType" value={inputs.homeType} onChange={handleChange} className="w-full border rounded px-3 py-2">
              {homeTypes.map((h) => (
                <option key={h.label} value={h.value}>{h.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800 transition">Calculate</button>
        </form>
        {result !== null && (
          <div className="mt-8 bg-white rounded-lg p-6 shadow text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Your Annual Carbon Footprint</h2>
            <p className="text-3xl font-bold mb-2">{result} kg CO₂e</p>
            <p className="mb-2 text-gray-700">National/Global average: <span className="font-semibold">{AVERAGE_CO2E} kg CO₂e</span></p>
            <p className={result > AVERAGE_CO2E ? 'text-red-600 font-semibold' : 'text-green-700 font-semibold'}>
              {result > AVERAGE_CO2E ? 'Above average' : 'Below average'}
            </p>
            <div className="mt-4 text-left">
              <h3 className="font-bold mb-1">Suggestions to reduce your footprint:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {suggestions.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator; 