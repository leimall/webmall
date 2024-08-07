import Image from "next/image";
import Link from "next/link";
type Banner = {
	imageUrl: string,
	title: string,
	description: string,
}
export default function BannerInIndex({ banners }: { banners: Banner[] }) {

	return (
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
					<img src="/images/banner/banner2.jpg" className="w-full h-full object-cover shrink-0" alt={"banner"} />
				</div>
			</div>
		</div>
	)
}