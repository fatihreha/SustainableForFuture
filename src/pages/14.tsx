import React, { useEffect } from 'react';

const Goal14 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#0A97D9'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">LIFE BELOW WATER</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#0A97D9', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          CONSERVE AND SUSTAINABLY USE THE OCEANS, SEAS AND MARINE RESOURCES FOR SUSTAINABLE DEVELOPMENT.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          The world's oceans – their temperature, chemistry, currents and life – drive global systems that make the Earth habitable for humankind. Our rainwater, drinking water, weather, climate, coastlines, much of our food, and even the oxygen in the air we breathe, are all ultimately provided and regulated by the sea. Throughout history, oceans and seas have been vital conduits for trade and transportation. Careful management of this essential global resource is a key feature of a sustainable future.
        </p>
      </div>
    </div>
  );
};

export default Goal14; 