import React from 'react';

// 定义数据结构
interface TrackingEvent {
  date: string;
  status: string;
  location: string;
}

interface TimelineProps {
  events: TrackingEvent[];
}

const CustomTimeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative border-l-4 border-green-500 ml-4">
      {events.map((event, index) => (
        <div key={index} className="mb-8 ml-6">
          {/* 圆点和连接线 */}
          <span
            className={`absolute left-[-1.25rem] flex items-center justify-center w-6 h-6 rounded-full 
              ${index === 0 ? 'bg-green-500' : 'bg-gray-400'}`}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </span>
          {/* 时间和地点 */}
          <div className="text-gray-500 text-sm mb-1">{event.date}</div>
          <div className="text-base font-semibold">{event.status}</div>
          <div className="text-sm text-gray-600">{event.location}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomTimeline;