import React, { useEffect } from 'react';

const Goal7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#FCC30B'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">AFFORDABLE AND CLEAN ENERGY</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#FDB713', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ENSURE ACCESS TO AFFORDABLE, RELIABLE, SUSTAINABLE AND MODERN ENERGY FOR ALL.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Energy is central to nearly every major challenge and opportunity the world faces today. Be it for jobs, security, climate change, food production or increasing incomes, access to energy for all is essential. Sustainable energy is opportunity – it transforms lives, economies and the planet. UN Secretary-General Ban Ki-moon is leading a Sustainable Energy for All initiative to ensure universal access to modern energy services, improve efficiency and increase use of renewable sources.
        </p>
      </div>
    </div>
  );
};

export default Goal7; 