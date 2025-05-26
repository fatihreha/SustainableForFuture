import React, { useEffect } from 'react';

const Goal9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#FD6925'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">INDUSTRY, INNOVATION AND INFRASTRUCTURE</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#FD6925', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          BUILD RESILIENT INFRASTRUCTURE, PROMOTE INCLUSIVE AND SUSTAINABLE INDUSTRIALIZATION AND FOSTER INNOVATION.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Investments in infrastructure – transport, irrigation, energy and information and communication technology – are crucial to achieving sustainable development and empowering communities in many countries. It has long been recognized that growth in productivity and incomes, and improvements in health and education outcomes require investment in infrastructure. Manufacturing is an important employer, accounting for around 470 million jobs worldwide in 2009 – or around 16 per cent of the world's workforce of 2.9 billion.
        </p>
      </div>
    </div>
  );
};

export default Goal9; 