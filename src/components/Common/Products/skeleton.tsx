import { Card } from "antd"

const ProductSkeleton = () => (
  <Card className="w-full xl:w-1/2 lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-4">
    <div className="bg-gray-300 h-48 w-full mb-4 rounded"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-8 bg-gray-300 rounded w-full"></div>
  </Card>
)

export default ProductSkeleton