// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b p-4 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">Good morning, Dean!</h1>
        <span>Monthly Overview</span>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ New entry</button>
      </div>
    </header>
  );
};

export default Header;
