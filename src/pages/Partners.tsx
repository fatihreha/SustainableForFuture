import React, { useEffect } from 'react';

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: "Fatih Reha Dişçi",
      role: "Project Lead",
      linkedin: "https://www.linkedin.com/in/fatihrehadisci/"
    },
    {
      name: "Alp Kaya",
      role: "Development Lead",
      linkedin: "#"
    },
    {
      name: "Ebru Tomris Aydoğan",
      role: "SUST301 Course Coordinator",
      linkedin: "https://www.linkedin.com/in/ebru-tomris-aydo%C4%9Fan-bba662252"
    },
    {
      name: "Barış Gencer Baykan",
      role: "SUST301 Course Coordinator",
      linkedin: "https://www.linkedin.com/in/barisgencerbaykan"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{partner.name}</h2>
              <p className="text-gray-600 mb-4">{partner.role}</p>
              <a
                href={partner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View LinkedIn Profile
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners; 