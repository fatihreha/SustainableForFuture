import React from 'react';

const OurStory = () => {
  return (
    <div className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background image and white overlay */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/together.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-white bg-opacity-80" />
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h1>
        <div className="prose prose-lg">
          <p className="text-xl font-semibold text-gray-600 mb-6">
            It all began in a SUST301 classroom, where two friends embarked on a journey that would change their perspective on sustainable development forever. As we delved deeper into the United Nations' Sustainable Development Goals, we realized that these weren't just abstract concepts – they were a roadmap to a better world.
          </p>
          <p className="text-xl font-semibold text-gray-600 mb-6">
            What started as a class project quickly evolved into a passion. We saw the potential to create something meaningful, something that could make the SDGs more accessible and engaging for everyone. The idea was simple yet powerful: create a platform that would not only educate but also inspire action.
          </p>
          <p className="text-xl font-semibold text-gray-600 mb-6">
            Our journey wasn't without challenges. We spent countless hours researching, designing, and developing. Each goal became a story, each target a mission. We wanted to make sure that anyone who visited our platform would leave with a better understanding of how they could contribute to these global goals.
          </p>
          <p className="text-xl font-semibold text-gray-600 mb-6">
            Today, we're proud to present this platform as a testament to our commitment to sustainable development. It's not just a project anymore – it's a movement. A movement that we hope will inspire others to join us in creating a more sustainable and equitable world.
          </p>
          <p className="text-xl font-semibold text-gray-600">
            This is our story, but it's just the beginning. Join us as we continue to grow, learn, and make a difference together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory; 