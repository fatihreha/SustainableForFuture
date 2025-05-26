import React, { useEffect } from 'react';

const Goal10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#DD1367'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">REDUCED INEQUALITIES</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#DD1367', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          REDUCE INEQUALITY WITHIN AND AMONG COUNTRIES.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          The international community has made significant strides towards lifting people out of poverty. The most vulnerable nations – the least developed countries, the landlocked developing countries and the small island developing states – continue to make inroads into poverty reduction. However, inequality still persists and large disparities remain in access to health and education services and other assets.
        </p>
      </div>
    </div>
  );
};

export default Goal10; 