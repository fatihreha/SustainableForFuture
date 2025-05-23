import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Goals = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 z-0" />
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center justify-center relative z-10">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase">THE 17 GOALS</h1>
        </div>
        <div className="md:w-1/2 text-lg text-gray-900 space-y-6">
          <p>We all know that we face big challenges in today's world: poverty, hunger, inequality and climate change are just some of the issues we need to address urgently.</p>
          <p>Big challenges need bold action to overcome them, and that is where the Global Goals come in. They are a plan agreed to by all world leaders to build a greener, fairer, better world by 2030, and we all have a role in achieving them. Get to know each of the Goals and the targets attached to them here.</p>
        </div>
      </div>
    </div>
  );
};

const NoPovertyDetail = () => (
  <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full bg-red-600 text-white">
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center md:text-left leading-tight mb-6 md:mb-0">
        END POVERTY IN ALL ITS FORMS EVERYWHERE.
      </h1>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <p className="text-lg md:text-xl text-white max-w-2xl text-center md:text-left">
        Eradicating poverty is not a task of charity, it's an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world's population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life.
      </p>
    </div>
  </div>
);

export default function GoalsPage() {
  return (
    <Routes>
      <Route path="/" element={<Goals />} />
      <Route path="1" element={<NoPovertyDetail />} />
    </Routes>
  );
} 