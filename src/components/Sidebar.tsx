import React from 'react';
import { FaUser, FaClipboardCheck, FaCalendarAlt, FaClock, FaGift, FaMoneyBill, FaHandHoldingUsd, FaComments, FaCommentAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r">
    <div className="p-4 border-b">
      <div className="bg-gray-100 rounded-lg p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
    </div>
      <nav className="mt-4">
        <ul>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaUser className="mr-2" /> Employee
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaClipboardCheck className="mr-2" /> Onboarding
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaCalendarAlt className="mr-2" /> Leave
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaClock className="mr-2" /> Time tracking
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaGift className="mr-2" /> Rewards
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaMoneyBill className="mr-2" /> Costs
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaHandHoldingUsd className="mr-2" /> Compensation
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaComments className="mr-2" /> Requests
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaCommentAlt className="mr-2" /> Feedback
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
