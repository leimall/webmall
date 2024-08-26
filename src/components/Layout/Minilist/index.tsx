import ItemPage from "./item";

export default function MiniPage() {



  return (
    <div>
      <div className="font-sans px-4 py-8">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Top Products</h2>
        <div className="mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {
              Array.from({ length: 12 }).map((_, index) => (
              <ItemPage key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}