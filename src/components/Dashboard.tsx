// src/components/Dashboard.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './Main_Content';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
