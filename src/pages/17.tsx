import React, { useEffect } from 'react';

const Goal17 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center h-40" style={{backgroundColor: '#19486A'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">PARTNERSHIPS FOR THE GOALS</h1>
      </div>
      <div className="fixed inset-0 w-full h-full" style={{backgroundColor: '#19486A', opacity: 0.75, zIndex: 0}} />
      <div className="relative z-10 flex flex-col items-center w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          STRENGTHEN THE MEANS OF IMPLEMENTATION AND REVITALIZE THE GLOBAL PARTNERSHIP FOR SUSTAINABLE DEVELOPMENT.
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl text-center px-4">
          The SDGs can only be realized with strong global partnerships and cooperation. Official Development Assistance remained steady but below target, at US$147 billion in 2017. While humanitarian crises brought on by conflict or natural disasters continue to demand more financial resources and aid. Many countries also require Official Development Assistance to encourage growth and trade. The world is more interconnected than ever. Improving access to technology and knowledge is an important way to share ideas and foster innovation. Coordinating policies to help developing countries manage their debt, as well as promoting investment for the least developed, is vital for sustainable growth and development.
        </p>
      </div>
    </div>
  );
};

export default Goal17; 