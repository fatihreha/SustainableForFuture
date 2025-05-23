import React from 'react';
const Goal15 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#3A6B1A'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">LIFE ON LAND</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#56C02B', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        PROTECT, RESTORE AND PROMOTE SUSTAINABLE USE OF TERRESTRIAL ECOSYSTEMS, SUSTAINABLY MANAGE FORESTS, COMBAT DESERTIFICATION, AND HALT AND REVERSE LAND DEGRADATION AND HALT BIODIVERSITY LOSS.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        A flourishing life on land is the foundation for our life on this planet. We are all part of the planet's ecosystem and we have caused severe damage to it through deforestation, loss of natural habitats and land degradation. Promoting a sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the key to our own survival.
      </p>
    </div>
  </div>
);
export default Goal15; 