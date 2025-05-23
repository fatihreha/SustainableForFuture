import React from 'react';

const Goal2 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#B8861A'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">ZERO HUNGER</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#DDA63A', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        END HUNGER, ACHIEVE FOOD SECURITY AND IMPROVED NUTRITION AND PROMOTE SUSTAINABLE AGRICULTURE.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        Hunger is the leading cause of death in the world. Our planet has provided us with tremendous resources, but unequal access and inefficient handling leaves millions of people malnourished. If we promote sustainable agriculture with modern technologies and fair distribution systems, we can sustain the whole world's population and make sure that nobody will ever suffer from hunger again.
      </p>
    </div>
  </div>
);

export default Goal2; 