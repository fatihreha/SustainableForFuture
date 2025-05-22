
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GoalProps {
  id: number;
  title: string;
  color: string;
  icon?: string;
  description: string;
}

const GlobalGoalCard: React.FC<GoalProps> = ({ id, title, color, icon, description }) => {
  return (
    <Link to={`/goals/${id}`} className="block group">
      <Card 
        className={`h-full flex flex-col overflow-hidden border-0 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
        style={{ backgroundColor: color }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold mr-2">{id}</span>
              {icon && <img src={icon} alt="" className="w-8 h-8" />}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          
          <p className="text-white/80 text-sm flex-grow">
            {description}
          </p>
          
          <div className="mt-4 flex justify-end text-white">
            <span className="inline-flex items-center text-sm font-medium group-hover:underline">
              Learn More <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GlobalGoalCard;
