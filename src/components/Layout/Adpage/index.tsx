'use client'


export default function Adpage() {
  return (
    <div className="bg-primary-50 my-8">
      <div className="relative mx-auto max-w-c-1440 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">

        <div className="flex space-between md:justify-between flex-col md:flex-row items-center md:max-h-[375px] overflow-hidden">
          <div className="px-2 md:px-16">
            <h4 className="text-xl md:text-3xl font-bold text-primary-500 pt-8 py-2 md:pt-0 md:py-4">Celebrate Day Sale!</h4>
            <h3 className="text-2xl md:text-4xl font-bold text-black pb-8 md:pb-12">Save <span className="text-primary-500">25%</span> Of On Al Cars Collection
            </h3>
            <a href="#" className="my-8 text-center py-2 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600">Shop now</a>
          </div>
          {/* <div className="hidden md:block"></div> */}
          <div className="md:h-[375px] relative">
            <img src="https://img.ftanails.com/01.jpg" className="w-full h-full object-cover shrink-0" alt={"banner"} />
          </div>
        </div>

      </div>

    </div>
  )
}