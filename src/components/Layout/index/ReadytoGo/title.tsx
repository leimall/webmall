import Link from "next/link";
import { TbTax } from "react-icons/tb";


export default function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between"><div>
      <span className="flex items-center md:gap-2 gap-1 md:font-medium text-sm text-dark">
        <TbTax className="md:text-xl text-md text-primary-main " />
        Limited Time Offer</span>
      <Link rel="stylesheet" href={`/readytogo?query=${title}`}>
        <h1 className="font-semibold md:text-xl text-md xl:text-heading-5 text-dark relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300">Ready To Go</h1>
      </Link>
    </div>
      <Link rel="stylesheet" href={`/readytogo?query=${title}`}>
        <div className="inline-flex font-medium text-custom-sm border-bg-200 text-primary-400 py-1.5 px-4 md:py-2.5 md:px-7  rounded border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:bg-primary-400">View All</div>
      </Link>
    </div>
  )
}