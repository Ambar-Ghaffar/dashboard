import React from 'react';

type Stat = {
  title: string;
  value: number;
  percentage: number;
  trend: 'up' | 'down';
};

const stats: Stat[] = [
  { title: 'Total employee', value: 234, percentage: 5, trend: 'up' },
  { title: 'New employee', value: 42, percentage: 5, trend: 'up' },
  { title: 'Resigned employee', value: 12, percentage: 2, trend: 'up' },
  { title: 'Job applicants', value: 367, percentage: 10, trend: 'up' },
];

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-sm font-semibold">{stat.title}</h3>
          <p className="text-xl font-bold">{stat.value}</p>
          <p className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {stat.trend === 'up' ? '↑' : '↓'} {stat.percentage}% last month
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
