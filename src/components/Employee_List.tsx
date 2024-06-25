// src/components/EmployeeList.tsx
import React from 'react';

const EmployeeList: React.FC = () => {
  const employees = [
    { name: 'Darrell Steward', id: '#E3041', email: 'darrellste@mail.com', role: 'Sr. Project Manager', status: 'Active' },
    { name: 'Wade Warren', id: '#E3042', email: 'wadewarr@mail.com', role: 'Jr. Developer', status: 'Active' },
    { name: 'Jerome Bell', id: '#E3043', email: 'jeromebell@mail.com', role: 'Sr. Human Resources', status: 'Active' },
    { name: 'Marvin McKinney', id: '#E3043', email: 'marvinmck@mail.com', role: 'Sr. Developer', status: 'Active' },
    { name: 'Brooklyn Simmons', id: '#E3044', email: 'brooklynsimm@mail.com', role: 'Sr. Product Designer', status: 'Active' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Employees</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Employee Name</th>
            <th className="text-left">Employment ID</th>
            <th className="text-left">Email</th>
            <th className="text-left">Role</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
