import React from 'react';

const DeliveryDetails: React.FC = () => {
  return (
    <div className="detailLeft p-4 bg-gray-100">
      <div className="border-l-4 border-gray-300 pl-4">
        <div className="timeline">
          <dl>
            <dt className="text-base font-semibold text-gray-800">2024-10-09</dt>
            <dd className="flex items-start my-6">
              <p className="timePoint text-xs text-gray-500 mr-4 min-w-[100px]">13:31:46 [GMT-04]</p>
              <div className="cz_c mr-3">
                <img src="/static/img/LM40.png" alt="" className="w-10 h-10 rounded-full shadow-lg" />
              </div>
              <div className="cz_r flex-grow">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h6 className="font-bold inline-block text-gray-700">[ON CA Toronto]</h6>
                  <h6 className="inline-block ml-2 text-gray-800">Item Delivered</h6>
                  <span
                    id="receipt"
                    className="cursor-pointer text-blue-600 hover:underline ml-2 text-sm"
                  >
                    View Delivery Confirmation
                  </span>
                </div>
              </div>
            </dd>

            <dt className="text-base font-semibold text-gray-800">2024-10-08</dt>
            <dd className="flex items-start my-6">
              <p className="timePoint text-xs text-gray-500 mr-4 min-w-[100px]">22:34:14 [GMT-04]</p>
              <div className="cz_c mr-3">
                <img src="/static/img/timeline_none.png" alt="" className="w-10 h-10 rounded-full shadow-lg" />
              </div>
              <div className="cz_r flex-grow">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h6 className="font-bold inline-block text-gray-700">[ON CA Toronto]</h6>
                  <h6 className="inline-block ml-2 text-gray-800">In Delivery</h6>
                </div>
              </div>
            </dd>

            {/* 其他时间点 */}
            <dd className="flex items-start my-6">
              <p className="timePoint text-xs text-gray-500 mr-4 min-w-[100px]">20:03:54 [GMT-04]</p>
              <div className="cz_c mr-3">
                <img src="/static/img/timeline_none.png" alt="" className="w-10 h-10 rounded-full shadow-lg" />
              </div>
              <div className="cz_r flex-grow">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h6 className="font-bold inline-block text-gray-700">[ON CA Toronto]</h6>
                  <h6 className="inline-block ml-2 text-gray-800">Wait for Driver Pickup</h6>
                </div>
              </div>
            </dd>

            {/* 后续时间点的代码结构相同 */}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
