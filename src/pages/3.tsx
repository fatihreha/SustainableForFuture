import React from 'react';

const Goal3 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#357A2A'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">GOOD HEALTH AND WELL-BEING</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#4C9F38', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        ENSURE HEALTHY LIVES AND PROMOTE WELL-BEING FOR ALL AT ALL AGES.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        Over the last 15 years, the number of childhood deaths has been cut in half. This proves that it is possible to win the fight against almost every disease. Still, we are spending an astonishing amount of money and resources on treating illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health promotes healthy lifestyles, preventive measures and modern, efficient healthcare for everyone.
      </p>
    </div>
  </div>
);

export default Goal3; 