import React from 'react';
import { Steps, Timeline, Card } from 'antd';
import { CheckCircleOutlined, EnvironmentOutlined, CarOutlined, HomeOutlined } from '@ant-design/icons';
import CustomTimeline from '@/components/UI/TimeLine';



const { Step } = Steps;

interface TrackingEvent {
  date: string;
  status: string;
  location: string;
}

interface TrackingData {
  trackingNumber: string;
  lastMileTracking: string;
  orderNumber: string;
  latestStatus: string;
  deliveryDate: string;
  events: TrackingEvent[];
}

interface TrackingComponentProps {
  data: TrackingData;
}

const TrackingComponent: React.FC<TrackingComponentProps> = ({ data }) => {
  return (
    <Card className="md:backdrop:p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      {/* 物流概要信息 */}
      <div className="flex md:flex-row flex-col justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">{data.trackingNumber}</h2>
          <p className="text-gray-500">Order ID: {data.orderNumber}</p>
          <p className="text-gray-500">Date: {data.deliveryDate}</p>
        </div>
        <div className="bg-green-500 mt-2 md:mt-0 text-white px-3 py-1 rounded-full">
          {data.latestStatus}
        </div>
      </div>

      {/* 物流进度条 */}
      <Steps current={4} progressDot direction="horizontal" className="mb-8">
        <Step title="取货" icon={<HomeOutlined />} />
        <Step title="离开起始地" icon={<EnvironmentOutlined />} />
        <Step title="到达目的地" icon={<CarOutlined />} />
        <Step title="当地配送" icon={<CarOutlined />} />
        <Step title="已送达" icon={<CheckCircleOutlined />} />
      </Steps>

      {/* 详细物流信息 */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:gap-4">
        <div className="col-span-3">
          {/* <Timeline mode="left">
            {data.events.map((event, index) => (
              <Timeline.Item
                key={index}
                color={index === 0 ? 'green' : 'gray'}
                label={<span className="text-gray-600">{event.date}</span>}
              >
                <div className="text-base font-medium">{event.status}</div>
                <div className="text-sm text-gray-500">{event.location}</div>
              </Timeline.Item>
            ))}
          </Timeline> */}

          <CustomTimeline events={data.events} />
        </div>
        <div>
          <div className="col-span-1 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Delivery Information</h3>
            <p className="text-gray-600">Last Mile Tracking</p>
            <p className="text-gray-800">{data.lastMileTracking}</p>
            <p className="mt-4 text-gray-600">Order ID</p>
            <p className="text-gray-800">{data.orderNumber}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrackingComponent;