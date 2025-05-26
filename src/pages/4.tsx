import React, { useEffect } from 'react';

const Goal4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#C5192D'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">QUALITY EDUCATION</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#C72B2B', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ENSURE INCLUSIVE AND EQUITABLE QUALITY EDUCATION AND PROMOTE LIFELONG LEARNING OPPORTUNITIES FOR ALL.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Obtaining a quality education is the foundation to improving people's lives and sustainable development. Major progress has been made towards increasing access to education at all levels and increasing enrollment rates in schools, particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals.
        </p>
      </div>
    </div>
  );
};

export default Goal4; 