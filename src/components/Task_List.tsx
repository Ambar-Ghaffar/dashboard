import React from 'react';

type Task = {
  id: number;
  title: string;
  due: string;
  members: string[];
  progress: number;
  completed: boolean;
};

const tasks: Task[] = [
  { id: 1, title: 'Create branded collateral', due: 'Oct 30, 2023', members: ['member1', 'member2', 'member3'], progress: 25, completed: false },
  { id: 2, title: 'Develop brand guidelines document', due: 'Nov 04, 2023', members: ['member1', 'member2'], progress: 25, completed: false },
  { id: 3, title: 'Refine UX/UI for product pages', due: 'Nov 10, 2023', members: ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'], progress: 10, completed: false },
  { id: 4, title: 'Collaborate on website redesign', due: 'Oct 23, 2023', members: ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'], progress: 100, completed: true },
  { id: 5, title: 'Conduct A/B testing on homepage', due: 'Oct 23, 2023', members: ['member1', 'member2'], progress: 100, completed: true },
  { id: 6, title: 'Develop social media graphics', due: 'Oct 30, 2023', members: ['member1', 'member2', 'member3', 'member4', 'member5'], progress: 100, completed: true },
  { id: 7, title: 'Finalize logo variations', due: 'Nov 04, 2023', members: ['member1', 'member2', 'member3'], progress: 100, completed: true },
];

const TaskList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Today's task</h2> {/* Reduced font size */}
        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">+</button> {/* Reduced button size */}
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-sm">TASK</th> {/* Reduced font size */}
            <th className="py-2 text-sm">DUE</th> {/* Reduced font size */}
            <th className="py-2 text-sm">MEMBER</th> {/* Reduced font size */}
            <th className="py-2 text-sm">PROGRESS</th> {/* Reduced font size */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className="border-t" key={task.id}>
              <td className="py-2 flex items-center text-sm"> {/* Reduced font size */}
                <input type="checkbox" className="mr-2" checked={task.completed} />
                {task.title}
              </td>
              <td className="py-2 text-sm">{task.due}</td> {/* Reduced font size */}
              <td className="py-2">
                <div className="flex -space-x-2">
                  {task.members.map((member, index) => (
                    <img key={index} className="w-6 h-6 rounded-full" src={`https://via.placeholder.com/150?text=${member}`} alt="" />
                  ))}
                </div>
              </td>
              <td className="py-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
