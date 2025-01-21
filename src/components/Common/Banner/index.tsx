import Image from "next/image";
import { Carousel } from 'antd';
import Link from "next/link";
type Banner = {
  imageUrl: string,
  title: string,
  description: string,
}


export default function BannerInIndex({ banners }: { banners: Banner[] }) {

  return (
    <Carousel autoplay dotPosition="bottom" className="w-full">
      <div>
        <div className="relative w-full h-auto bg-fta-primary-50 flex flex-col md:flex-row">
          <div className="w-full font-[sans-serif]">
            <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
              <div className="p-8">
                <h1 className="sm:text-4xl text-2xl font-bold text-fta-blake">Readymadeui <span className="text-fta-primary-300">Jumbotron Design</span></h1>
                <p className="mt-4 text-sm text-fta-blake1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
                  tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
                  ultrices, non consequat mauris tincidunt.</p>
                <p className="mt-2 text-sm text-fta-blake1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
                  tempus blandit, metus mi consectetur nibh.</p>
                <Link href="/auth/signup">
                  <button type="button"
                    className="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-fta-primary-300 hover:bg-fta-primary-500">Sign Up</button>
                </Link>
              </div>
              <img
                src="/images/banner/banner2.webp"
                alt="banner"
                width={1920}
                height={947}
                className="w-full h-full object-cover shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-auto bg-background-back flex flex-col md:flex-row">
          <div className="w-full font-[sans-serif]">
            <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
              <div>
                <img src="https://images.dms.pub/product/uploads/662626495256072192/BgSub_IMG_1560.png" className="w-full h-full object-cover shrink-0" alt={"banner"} />
              </div>
              <div className="p-16">
                <div className="slider-inner equal-element">
                  <div className="slider-infor">
                    <h5 className="text-2xl font-bold text-background-back5 px-8">
                      New Arrivals!
                    </h5>
                    <h3 className="text-4xl font-bold text-black px-8 py-4">
                      leaves plant <br />
                      In Water
                    </h3>
                    <div className="text-lg text-black px-8 pb-12">
                      Price from:
                      <span className="text-3xl pl-4 font-bold text-fta-primary-300">
                        $75.00
                      </span>
                    </div>
                    <a href="#" className="mx-8 px-8 py-2 rounded-md text-white text-sm tracking-wider border-none outline-none bg-fta-primary-300 hover:bg-fta-primary-500 hover:text-white">Shop now</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
