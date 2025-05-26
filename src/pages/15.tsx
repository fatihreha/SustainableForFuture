import React, { useEffect } from 'react';

const Goal15 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#56C02B'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">LIFE ON LAND</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#56C02B', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          PROTECT, RESTORE AND PROMOTE SUSTAINABLE USE OF TERRESTRIAL ECOSYSTEMS, SUSTAINABLY MANAGE FORESTS, COMBAT DESERTIFICATION, AND HALT AND REVERSE LAND DEGRADATION AND HALT BIODIVERSITY LOSS.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Forests cover 30.7 per cent of the Earth's surface and, in addition to providing food security and shelter, they are key to combating climate change, protecting biodiversity and the homes of the indigenous population. Thirteen million hectares of forests are being lost every year while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares. Deforestation and desertification – caused by human activities and climate change – pose major challenges to sustainable development and have affected the lives and livelihoods of millions of people in the fight against poverty.
        </p>
      </div>
    </div>
  );
};

export default Goal15; 