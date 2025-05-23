import React from 'react';
import Navbar from '@/components/Navbar';
import GlobalGoalCard from '@/components/GlobalGoalCard';
import { Button } from '@/components/ui/button';
import { globalGoals } from '@/data/goals';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-16 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Global Goals for Sustainable Development
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              17 goals to transform our world by 2030. The sustainable development goals address the global challenges we face, including poverty, inequality, climate change, and peace and justice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Learn About The Goals
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Take Action
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {globalGoals.map((goal) => (
                <div 
                  key={goal.id} 
                  className="aspect-square rounded-md flex items-center justify-center text-white font-bold text-center p-1 text-xs sm:text-sm md:text-base" 
                  style={{ backgroundColor: goal.color, minHeight: '60px', minWidth: '60px' }}
                >
                  <span>{goal.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What are the Sustainable Development Goals?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="People discussing SDGs" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">A Blueprint for a Better World</h3>
              <p className="text-gray-700 mb-6">
                These 17 Goals build on the successes of the Millennium Development Goals, while including new areas such as climate change, economic inequality, innovation, sustainable consumption, peace and justice, among other priorities.
              </p>
              <p className="text-gray-700 mb-6">
                The goals are interconnected – often the key to success on one will involve tackling issues more commonly associated with another.
              </p>
              <Button className="flex items-center gap-2">
                Read More <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore All 17 Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each goal has specific targets to be achieved by 2030. Click on a goal to learn more about it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {globalGoals.map((goal) => (
              <GlobalGoalCard 
                key={goal.id}
                id={goal.id}
                title={goal.title}
                description={goal.shortDescription}
                color={goal.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Together we can build a better world. Take action today to help achieve the Sustainable Development Goals by 2030.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Involved
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">The Goals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Take Action</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Individuals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Companies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Governments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Publications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Media Library</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Global Goals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
