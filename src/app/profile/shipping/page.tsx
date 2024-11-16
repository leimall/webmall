'use client'
import TrackingComponent from '@/components/Layout/shipping/tracking';

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

const sampleTrackingData: TrackingData = {
  trackingNumber: 'UL834491520508984880',
  lastMileTracking: 'UL834491520508984880',
  orderNumber: '20240927001',
  latestStatus: '已送达',
  deliveryDate: '2024-10-09',
  events: [
    { date: '2024-10-09 13:31:46 [GMT-04]', status: 'Item Delivered', location: '[ON CA Toronto]' },
    { date: '2024-10-08 22:34:14 [GMT-04]', status: 'In Delivery', location: '[ON CA Toronto]' },
    { date: '2024-10-08 20:03:54 [GMT-04]', status: 'Wait for Driver Pickup', location: '[ON CA Toronto]' },
    { date: '2024-10-07 17:31:41 [GMT-05]', status: 'Batch delivery to carrier', location: '[Destination Port]' },
    { date: '2024-10-04 15:44:00 [GMT+08]', status: 'Port of departure - Departure', location: '[Departure Port]' },
    { date: '2024-09-27 10:55:53 [GMT+08]', status: 'Order processed by shipper', location: '[Shipper Facility]' },
  ],
};

export default function TrackingPage() {
  return (
    <div className="p-6 ">
      <TrackingComponent data={sampleTrackingData} />
    </div>
  );
}
