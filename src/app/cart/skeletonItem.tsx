import { Flex, Divider, Form, Radio, Skeleton, Space, Switch, Select } from 'antd';

export default function SkeletonItem() {
    return (
      <div className="md:col-span-2 rounded-md">
        <div className="items-center gap-4">
          <div className="md:col-span-2 flex items-center gap-2">
            <div className="w-32 h-32 shrink-0 border rounded bg-white">
            <Skeleton.Image active={true} />
            </div>

            <div className='w-full ml-0 md:ml-4'>
              <div className="flex-1">
                <h3 className="text-md font-bold text-gray-800 truncate">
                    <Skeleton.Input active={true} />
                </h3>
                <div className="text-sm py-1">
                  <span className='fill-gray-400 flex items-center justify-between'>
                    <div>
                    <Skeleton.Input active={true} />
                    </div>
                    <div>
                      <Skeleton.Input active={true} />
                    </div>
                  </span>

                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex justify-center items-end font-sans">
                <Skeleton.Input active={true} /> 
                  <div className="flex items-center">
                    <div className="text-gray-800 text-md font-bold"> <Skeleton.Input active={true} /></div>
                    <div className="text-red-600 text-sm font-bold px-2">
                    <Skeleton.Input active={true} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}