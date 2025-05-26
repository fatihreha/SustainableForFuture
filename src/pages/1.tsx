import React, { useEffect } from 'react';

const Goal1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#B71C2B'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">NO POVERTY</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#E5243B', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          END POVERTY IN ALL ITS FORMS EVERYWHERE.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          Eradicating poverty is not a task of charity, it's an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world's population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life.
        </p>
      </div>
    </div>
  );
};

export default Goal1; 