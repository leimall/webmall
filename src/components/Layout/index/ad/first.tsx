'use client'


export default function First() {
  return (
    <div className="bg-[url(/images/banner/banner.png)] bg-cover bg-center py-4 md:py-16">
      <div className="relative mx-auto max-w-c-1440 justify-between align-items:flex-end px-2 md:px-8 md:py-4 2xl:px-0">
        <div className="grid grid-cols-4 gap-1 md:gap-4 text-bg-200 min-h-full">
          <div className="col-span-2 col-start-3 md:col-start-4 mb-16 text-sm md:text-3xl md:pb-4 md:font-bold" >
            <div className="md:pb-2 font-amer">
              Fingertip Artistry
            </div>
            <div className="md:pb-2 font-amer">where nails tell stories</div>
          </div>
          <div className="col-span-4 md:col-span-2 text-sm md:text-3xl md:font-bold">
            <div className="md:pb-2 font-amer">Beauty is not just about how it looks.</div>
            <div className="md:pb-2 font-amer">It's about what it says.</div>
            <div className="md:pb-2 font-amer">And we're here to help your fingertips speak.</div>
          </div>
        </div>
      </div>
    </div>
  )
}