import React, { useEffect } from 'react';

const images = [
  '/images/coil1.jpg',
  '/images/coil2.jpg',
  '/images/coil3.jpg',
  '/images/coil4.jpg',
  '/images/coil5.jpg',
];

const description = `Yeditepe University Faculty of Economics and Administrative Sciences collaborated with Lomonosov MSUBS in the COIL Climate Workshop held on April 30, 2025. Using the En-ROADS simulator, students explored the effects of human actions on climate change. The COIL Workshop on Climate Simulation was led by Assoc. Prof. Barış Gençer Baykan and Assoc. Prof. Ebru Tomris Aydoǧan.\n\nParticipants proposed policies that limited the temperature increase to +2°C. The workshop emphasized the role of sustainability, innovation, and good governance in tackling the climate crisis.🌍`;

const MediaLibrary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background image and cream overlay */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/yeditepe.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(255, 251, 235, 0.7)'}} />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Media Library</h1>
        <p className="text-xl font-semibold text-gray-700 mb-8 whitespace-pre-line">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`COIL Climate Workshop ${idx + 1}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary; 