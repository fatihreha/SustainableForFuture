import React from 'react';
import { Link } from 'react-router-dom';
import GlobalGoalCard from '@/components/GlobalGoalCard';
import { Button } from '@/components/ui/button';
import { globalGoals } from '@/data/goals';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background image and overlay for the whole page */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/children.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
      </div>
      {/* Main Content */}
      <section className="p-0 m-0 text-white relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto pt-8 py-16 md:py-20 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Global Goals for Sustainable Development
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              17 goals to transform our world by 2030. The sustainable development goals address the global challenges we face, including poverty, inequality, climate change, and peace and justice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => navigate('/goals')}>
                Learn About The Goals
              </Button>
              <Button size="lg" className="bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition" onClick={() => navigate('/chatbot')}>
                Take Action
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {globalGoals.map((goal) => (
                <div
                  key={goal.id}
                  className="w-32 h-32 min-w-[120px] min-h-[120px] aspect-square rounded-md flex flex-col items-center justify-center text-white font-bold text-center p-2 text-sm md:text-base"
                  style={{ backgroundColor: goal.color }}
                >
                  {goal.icon && (
                    <img
                      src={goal.icon}
                      alt={goal.title}
                      className={`object-contain mb-2 ${goal.id === 8 || goal.id === 9 ? 'w-12 h-12' : 'w-16 h-16'}`}
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  <span className="leading-tight mt-1">{goal.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white z-10 relative">
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
                src="/images/people-discussing-sdgs.jpg" 
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
              <Button 
                className="flex items-center gap-2"
                onClick={() => navigate('/blueprint')}
              >
                Read More <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 z-10 relative">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-900 bg-opacity-75 text-white z-10 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
            Together we can build a better world. Take action today to help achieve the Sustainable Development Goals by 2030.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" onClick={() => window.open('https://turkiye.un.org/tr/sdgs?afd_azwaf_tok=eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0dXJraXllLnVuLm9yZyIsImV4cCI6MTc0ODEwNTM1NSwiaWF0IjoxNzQ4MTA1MzQ1LCJpc3MiOiJ0aWVyMS03Y2Y0NDg1ZDQ2LXJweGpiIiwic3ViIjoiODUuMTAwLjcwLjM0IiwiZGF0YSI6eyJ0eXBlIjoiaXNzdWVkIiwicmVmIjoiMjAyNTA1MjRUMTY0OTA1Wi0xN2NmNDQ4NWQ0NnJweGpiaEMxRlJBZXUxYzAwMDAwMDFlZzAwMDAwMDAwMDN2OHoiLCJiIjoiaUh4VVZMdHdXMUlKSlZXWjZYZjBUVkFscklSOXhlX0JpSVNWdkEtT2wtdyIsImgiOiJyNFNzZGtfN2x5S1ZsT0F1Z2ZRR1htNW42LWVrbXYyeEZzWTEyTURDb0xNIn19.qkM40vSw8xrI15pVar0N7roA2HFwjt3pwM8fDc_kOSRW54MMneUcDclLRlWlxGFZWv9zwlGl1GfmtonECt9krBQHXpee4ure3a_MVqPTDwfoVACDFoQICD-tejf5Rf3sLTOi8QCVR-AlnBEeSSwgp467vTtmOjUIkmNbzJ-78TAmQHr6Ml2I6CWOxzJ13XqOBCsYBpkVXQsmTh7H0qaE5On_noMKd9XhnuIiHkqkZFoZGzvRjK13_BOfwuaiN_hSorteQr1i3AQyrKV7LBoWWT751TLfmLZ8SNBOtElJFDJRB-avkH5WFjm2CWnTXCxrkvOouUTqUk6zQDwUKpaPfQ.WF3obl2IDtqgvMFRqVdYkD5s', '_blank')}>
            Get Involved
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/goals" className="text-gray-600 hover:text-gray-900">The Goals</Link></li>
                <li><Link to="/our-story" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
                <li><Link to="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Take Action</h3>
              <ul className="space-y-2">
                <li>
                  <Button 
                    className="bg-green-900 text-white hover:bg-green-800 transition" 
                    variant="default" 
                    onClick={() => navigate('/chatbot')}
                  >
                    Take Action
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Actual</h3>
              <ul className="space-y-2">
                <li><a href="https://www.un.org/sustainabledevelopment/news/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">News</a></li>
                <li><a href="https://www.un.org/en/academic-impact/page/publications" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Publications</a></li>
                <li><Link to="/media-library" className="text-gray-600 hover:text-gray-900">Media Library</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="/partners" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Sustainable for Future. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

<style>
{`
.flip-card {
  perspective: 800px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flip-card-back {
  transform: rotateY(180deg);
}
`}
</style>
