import React from 'react';
const Goal5 = () => (
  <div className="relative w-full">
    <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#B32A17'}}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">GENDER EQUALITY</h1>
    </div>
    <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#FF3A21', opacity: 0.75, zIndex: 0}} />
    <div className="relative z-10 flex flex-col items-center w-full pt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        ACHIEVE GENDER EQUALITY AND EMPOWER ALL WOMEN AND GIRLS.
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
        Gender bias is undermining our social fabric and devalues all of us. It is not just a human rights issue; it is a tremendous waste of the world's human potential. By denying women equal rights, we deny half the population a chance to live life at its fullest. Political, economic and social equality for women will benefit all the world's citizens. Together we can eradicate prejudice and work for equal rights and respect for all.
      </p>
    </div>
  </div>
);
export default Goal5; 