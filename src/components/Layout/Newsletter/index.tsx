import Title from "@/components/Common/Title";



export default function Newsletter() {


  return (
    <div className="py-8">
      <Title title="Newsletter" />
      <div className="bg-gray-100 pt-8 rounded shadow sm:px-10 px-6 py-12 font-[sans-serif]">
      <div className="max-w-3xl">
        <p className="text-gray-900 text-sm mt-6">Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our community today!</p>
        
        <div className="max-w-md bg-purple-500 text-slate-900 rounded flex p-1 text-left mt-12">
          <input type='email' placeholder='Enter your email' className="w-full text-gray-800 placeholder-gray-500 outline-none bg-transparent text-sm px-4 py-3" />
          <button type='button'
            className="bg-gray-700 hover:bg-gray-800 transition-all text-slate-900font-semibold tracking-wide text-sm rounded px-6 py-3">Subscribe</button>
        </div>
      </div>
    </div>
    </div>
  )
}  