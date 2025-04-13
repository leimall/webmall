import Link from "next/link";
import { TbTax } from "react-icons/tb";


export default function Title({ title }: { title: string }) {
  return (
    <div className="mt- flex items-center justify-between"><div>
      <span className="flex items-center gap-2.5 font-medium text-dark">
        <TbTax className="text-xl text-primary-main" />
        Limited Time Offer</span>
      <Link rel="stylesheet" href="/usanotax">
        <h2 className="font-semibold text-2xl xl:text-heading-5 text-dark">USA No Tax</h2>
      </Link>
    </div>
      <Link rel="stylesheet" href="/usanotax">
        <div className="inline-flex font-medium text-custom-sm py-1.5 px-4 md:py-2.5 md:px-7  rounded border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:bg-primary-400">View All</div>
      </Link>
    </div>
  )
}