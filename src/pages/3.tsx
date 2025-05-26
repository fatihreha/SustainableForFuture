import React, { useEffect } from 'react';

const Goal3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#4C9F38'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">GOOD HEALTH AND WELL-BEING</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#4CAF50', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ENSURE HEALTHY LIVES AND PROMOTE WELL-BEING FOR ALL AT ALL AGES.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Ensuring healthy lives and promoting well-being at all ages is essential to sustainable development. Currently, the world is facing a global health crisis unlike any other — COVID-19 is spreading human suffering, destabilizing the global economy and upending the lives of billions of people around the globe. Before the pandemic, major progress was made in improving the health of millions of people. Significant strides were made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality.
        </p>
      </div>
    </div>
  );
};

export default Goal3; 