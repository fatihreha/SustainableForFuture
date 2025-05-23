import React from 'react';
const Goal6 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#0A6B8A'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">CLEAN WATER AND SANITATION</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#26BDE2', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        ENSURE AVAILABILITY AND SUSTAINABLE MANAGEMENT OF WATER AND SANITATION FOR ALL.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        One in three people live without sanitation. This is causing unnecessary disease and death. Although huge strides have been made with access to clean drinking water, lack of sanitation is undermining these advances. If we provide affordable equipment and education in hygiene practices, we can stop this senseless suffering and loss of life.
      </p>
    </div>
  </div>
);
export default Goal6; 