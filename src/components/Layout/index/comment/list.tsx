import { Rate } from "antd"

export const SimpleCard_V2 = () => {
  const title = "Lorem ipsum dolor"
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!"
  return (
    <div>
      <div>
        <div className="border border-bg-200 relative shadow-md shadow-orange-950 rounded-xl bg-bg-10">
          <div className="text-start p-6">
            <div className="pb-4">
              <Rate style={{ color: '#FFB553FF' }} disabled defaultValue={5} />
            </div>
            <h3 className="text-lg mb-1 font-bold text-primary-700">
              {title}
            </h3>
            <p className="text-primary-500 pb-6">
              {description}
            </p>
            <div className="flex justify-start items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://img.ftanails.com/01.jpg" alt="" />
              </div>
              <div>
                <div className="font-medium text-primary-700">Jeon sss</div>
                <div className="text-gray-500 text-sm">08/12/23</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default SimpleCard_V2