import { url } from "inspector";
import Link from "next/link";
import { TbTax } from "react-icons/tb";


export default function Title({ title, url }: { title: string, url: string }) {
  return (
    <div className="flex items-center justify-between"><div>
      <span className="flex items-center gap-2.5 font-medium text-dark">
        <TbTax className="text-xl text-primary-main" />
        Limited Time Offer</span>
      <div>
        <Link rel="stylesheet" href={url}>
          <h2 className="font-semibold text-2xl xl:text-heading-5 text-dark relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300">{title}</h2>
        </Link>
      </div>
    </div>
      <Link rel="stylesheet" href={url}>
        <div className="inline-flex font-medium text-custom-sm border-bg-200 text-primary-400 py-1.5 px-4 md:py-2.5 md:px-7  rounded border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:bg-primary-400">View All</div>
      </Link>
    </div>
  )
}