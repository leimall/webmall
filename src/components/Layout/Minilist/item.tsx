


export default function ItemPage() {
  return (
    <div>
      <div className="bg-white p-3 cursor-pointer shadow rounded hover:scale-[1.03] transition-all">
        <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
            className="h-full w-5/6 mx-auto block object-contain" />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-sm font-bold text-gray-800">French Timex</h3>
          <h4 className="text-base text-blue-600 font-bold mt-2">$95.00</h4>
        </div>
      </div>
    </div>
  )
}