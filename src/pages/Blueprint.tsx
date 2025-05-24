import React, { useEffect } from 'react';

const Blueprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background image */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/under.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Blue transparent overlay */}
        <div className="absolute inset-0 bg-blue-200" style={{opacity: 0.35}} />
      </div>
      <img 
        src="/images/blueprint.jpg" 
        alt="Blueprint for a Better World" 
        className="rounded-lg shadow-lg max-w-full h-auto mb-8 mt-4 z-10"
      />
    </div>
  );
};

export default Blueprint; 