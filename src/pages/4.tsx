import React from 'react';

const Goal4 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#8B1420'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">QUALITY EDUCATION</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#C5192D', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        ENSURE INCLUSIVE AND EQUITABLE QUALITY EDUCATION AND PROMOTE LIFELONG LEARNING OPPORTUNITIES FOR ALL.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        Education liberates the intellect, unlocks the imagination and is fundamental for self-respect. It is the key to prosperity and opens a world of opportunities, making it possible for each of us to contribute to a progressive, healthy society. Learning benefits every human being and should be available to all.
      </p>
    </div>
  </div>
);

export default Goal4; 