import React from 'react';

const DeliveryDetails: React.FC = () => {
  const clickReceipt = () => {}
  return (
    <div className="detailLeft p-4">
      <div>
        <div className="czhaodl">
          <dl>
            <dt className="text-lg font-semibold">2024-10-09</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">13:31:46 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/LM40.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="font-bold inline-block">[ON CA Toronto]</h6>
                  <h6 className="inline-block">Item Delivered</h6>
                  <span
                    id="receipt"
                    className="cursor-pointer text-blue-500 hover:underline ml-2"
                    onClick={() => clickReceipt()}
                  >
                    View Delivery Confirmation
                  </span>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-08</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">22:34:14 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="font-bold inline-block">[ON CA Toronto]</h6>
                  <h6 className="inline-block">In Delivery</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">20:03:54 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="font-bold inline-block">[ON CA Toronto]</h6>
                  <h6 className="inline-block">Wait for Driver Pickup</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">18:14:15 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="font-bold inline-block">[ON CA Toronto]</h6>
                  <h6 className="inline-block">Wait for Driver Pickup</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">13:38:09 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="font-bold inline-block">[ON CA Toronto]</h6>
                  <h6 className="inline-block">Arrived at Sort Facility</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-07</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">17:31:41 [GMT-05]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/LH40.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Batch delivery to carrier</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-06</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">14:19:00 [GMT-04]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">The goods have been picked up at the destination port</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">11:02:00 [GMT-05]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">International shipment release - Import</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">11:02:00 [GMT-05]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Pick up by local carrier at destination port</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-05</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">11:37:00 [GMT-05]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/LH30.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Port of destination - Arrival</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-04</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">15:44:00 [GMT+08]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/LH20.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Port of departure - Departure</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-10-02</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">09:54:09 [GMT+08]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Arrived at domestic terminal station</h6>
                </div>
              </div>
            </dd>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">07:21:46 [GMT+08]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/timeline_none.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Pick up by local carrier at origin</h6>
                </div>
              </div>
            </dd>
            <dt className="text-lg font-semibold">2024-09-29</dt>
            <dd className="clearfix flex items-start my-4">
              <p className="timePoint text-sm text-gray-600 mr-4">15:24:06 [GMT+08]</p>
              <div className="cz_c mr-2">
                <img src="/static/img/LH30.png" alt="" className="w-8 h-8" />
              </div>
              <div className="cz_r flex-grow">
                <div>
                  <h6 className="inline-block">Local carrier pick up at origin</h6>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
