import React, { useEffect } from 'react';

const Goal16 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#00689D'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">PEACE, JUSTICE AND STRONG INSTITUTIONS</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#00689D', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          PROMOTE PEACEFUL AND INCLUSIVE SOCIETIES FOR SUSTAINABLE DEVELOPMENT, PROVIDE ACCESS TO JUSTICE FOR ALL AND BUILD EFFECTIVE, ACCOUNTABLE AND INCLUSIVE INSTITUTIONS AT ALL LEVELS.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          We cannot hope for sustainable development without peace, stability, human rights and effective governance, based on the rule of law. Yet our world is increasingly divided. Some regions enjoy peace, security and prosperity, while others fall into seemingly endless cycles of conflict and violence. This is not inevitable and must be addressed. Armed violence and insecurity have a destructive impact on a country's development, affecting economic growth, and often resulting in grievances that last for generations. Sexual violence, crime, exploitation and torture are also prevalent where there is conflict, or no rule of law, and countries must take measures to protect those who are most at risk.
        </p>
      </div>
    </div>
  );
};

export default Goal16; 