import React from 'react';
const Goal10 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#8B0E4B'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">REDUCED INEQUALITY</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#DD1367', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        REDUCE INEQUALITY WITHIN AND AMONG COUNTRIES.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        Too much of the world's wealth is held by a very small group of people. This often leads to financial and social discrimination. In order for nations to flourish, equality and prosperity must be available to everyone – regardless of gender, race, religious beliefs or economic status. When every individual is self sufficient, the entire world prospers.
      </p>
    </div>
  </div>
);
export default Goal10; 