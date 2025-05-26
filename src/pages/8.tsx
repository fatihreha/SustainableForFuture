import React, { useEffect } from 'react';

const Goal8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#A21942'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">DECENT WORK AND ECONOMIC GROWTH</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#A21942', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          PROMOTE SUSTAINED, INCLUSIVE AND SUSTAINABLE ECONOMIC GROWTH, FULL AND PRODUCTIVE EMPLOYMENT AND DECENT WORK FOR ALL.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Roughly half the world's population still lives on the equivalent of about US$2 a day. And in too many places, having a job doesn't guarantee the ability to escape from poverty. This slow and uneven progress requires us to rethink and retool our economic and social policies aimed at eradicating poverty. A continued lack of decent work opportunities, insufficient investments and under-consumption lead to an erosion of the basic social contract underlying democratic societies: that all must share in progress.
        </p>
      </div>
    </div>
  );
};

export default Goal8; 