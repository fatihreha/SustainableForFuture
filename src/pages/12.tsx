import React, { useEffect } from 'react';

const Goal12 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#BF8B2E'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">RESPONSIBLE CONSUMPTION AND PRODUCTION</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#BF8B2E', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ENSURE SUSTAINABLE CONSUMPTION AND PRODUCTION PATTERNS.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Achieving economic growth and sustainable development requires that we urgently reduce our ecological footprint by changing the way we produce and consume goods and resources. Agriculture is the biggest user of water worldwide, and irrigation now claims close to 70 percent of all freshwater for human use. The efficient management of our shared natural resources, and the way we dispose of toxic waste and pollutants, are important targets to achieve this goal.
        </p>
      </div>
    </div>
  );
};

export default Goal12; 