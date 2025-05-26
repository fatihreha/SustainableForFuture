import React, { useEffect } from 'react';

const Goal6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#26BDE2'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">CLEAN WATER AND SANITATION</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#26BDE2', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ENSURE AVAILABILITY AND SUSTAINABLE MANAGEMENT OF WATER AND SANITATION FOR ALL.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Clean, accessible water for all is an essential part of the world we want to live in. There is sufficient fresh water on the planet to achieve this. But due to bad economics or poor infrastructure, every year millions of people, most of them children, die from diseases associated with inadequate water supply, sanitation and hygiene. Water scarcity, poor water quality and inadequate sanitation negatively impact food security, livelihood choices and educational opportunities for poor families across the world.
        </p>
      </div>
    </div>
  );
};

export default Goal6; 