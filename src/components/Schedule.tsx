import React from 'react';

type Event = {
  time: string;
  description: string;
  day: number;
};

const events: Event[] = [
  { time: '10 AM', description: 'Onboarding Session', day: 1 },
  { time: '11 AM', description: 'Monthly Performance Review', day: 2 },
  { time: '12 PM', description: 'Lunch break', day: 1 },
  { time: '1 PM', description: 'Town Hall Meeting', day: 1 },
  { time: '3 PM', description: 'Recruitment Strategy', day: 1 },
  // Add more events as needed
];

const Schedule: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Schedule</h2>
      <div className="grid grid-cols-5 gap-2">
        {['MON 20', 'TUE 21', 'WED 22', 'THU 23', 'FRI 24'].map((day, index) => (
          <div key={index} className="text-center">
            <p className="font-semibold mb-2">{day}</p>
            {events.filter(event => event.day === index + 1).map((event, idx) => (
              <div key={idx} className="bg-blue-100 p-2 mb-2 rounded">
                <p className="text-sm">{event.time}</p>
                <p className="text-xs">{event.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
