import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Title({ title }: { title: string }) {
  return (
    <div className="mt-7 flex items-center justify-between">
      <div>
        <span className="flex items-center gap-2.5 font-medium text-dark">
          <IoBagHandleOutline className="text-xl text-primary-main" />
          This Month</span>
        <Link rel="stylesheet" href={`/search?tag=${title}`}>
          <h2 className="font-semibold text-2xl xl:text-heading-5 text-dark">{title}</h2>
        </Link>
      </div>
      <Link rel="stylesheet" href={`/search?tag=${title}`}>
        <div className="inline-flex border-bg-200 font-medium text-custom-sm py-1.5 px-4 md:py-2.5 md:px-7 rounded border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:bg-primary-400">View All</div>
      </Link>
    </div>
  )
}