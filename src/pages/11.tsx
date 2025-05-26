import React, { useEffect } from 'react';

const Goal11 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#FD9D24'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">SUSTAINABLE CITIES AND COMMUNITIES</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#FD9D24', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          MAKE CITIES AND HUMAN SETTLEMENTS INCLUSIVE, SAFE, RESILIENT AND SUSTAINABLE.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          The world's population is constantly increasing. To accommodate everyone, we need to build modern, sustainable cities. For all of us to survive and prosper, we need new, intelligent urban planning that creates safe, affordable and resilient cities with green and culturally inspiring living conditions. Cities are hubs for ideas, commerce, culture, science, productivity, social development and much more. At their best, cities have enabled people to advance socially and economically.
        </p>
      </div>
    </div>
  );
};

export default Goal11; 