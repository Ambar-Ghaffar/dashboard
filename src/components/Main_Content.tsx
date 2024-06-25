// src/components/MainContent.tsx
import React from 'react';
import StatsOverview from './StatsOverview';
import TaskList from './Task_List';
import Schedule from './Schedule';
import EmployeeList from './Employee_List';

const MainContent: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
    <StatsOverview />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <TaskList />
      <Schedule />
      <div className="bg-gray-100 p-8 min-h-screen">
      <EmployeeList/>
      </div>
    </div>
  </div>
  );
};

export default MainContent;
