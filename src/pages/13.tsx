import React, { useEffect } from 'react';

const Goal13 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#3F7E44'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">CLIMATE ACTION</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#3F7E44', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          TAKE URGENT ACTION TO COMBAT CLIMATE CHANGE AND ITS IMPACTS.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Climate change is now affecting every country on every continent. It is disrupting national economies and affecting lives, costing people, communities and countries dearly today and even more tomorrow. People are experiencing the significant impacts of climate change, which include changing weather patterns, rising sea level, and more extreme weather events. The greenhouse gas emissions from human activities are driving climate change and continue to rise.
        </p>
      </div>
    </div>
  );
};

export default Goal13; 