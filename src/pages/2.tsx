import React, { useEffect } from 'react';

const Goal2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#DDA63A'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">ZERO HUNGER</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#DDAA33', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          END HUNGER, ACHIEVE FOOD SECURITY AND IMPROVED NUTRITION AND PROMOTE SUSTAINABLE AGRICULTURE.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          It is time to rethink how we grow, share and consume our food. If done right, agriculture, forestry and fisheries can provide nutritious food for all and generate decent incomes, while supporting people-centered rural development and protecting the environment. Right now, our soils, freshwater, oceans, forests and biodiversity are being rapidly degraded. Climate change is putting even more pressure on the resources we depend on, increasing risks associated with disasters such as droughts and floods.
        </p>
      </div>
    </div>
  );
};

export default Goal2; 