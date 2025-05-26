import React, { useEffect } from 'react';

const Goal5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#FF3A21'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">GENDER EQUALITY</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#ED4135', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          ACHIEVE GENDER EQUALITY AND EMPOWER ALL WOMEN AND GIRLS.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world. There has been progress over the last decades: More girls are going to school, fewer girls are forced into early marriage, more women are serving in parliament and positions of leadership, and laws are being reformed to advance gender equality. Despite these gains, many challenges remain.
        </p>
      </div>
    </div>
  );
};

export default Goal5; 