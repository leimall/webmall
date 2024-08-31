"use client";

const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-background-back1 text-back1 after:first:last:px-8 py-12">
      <div className="px-4 md:px-8 2xl:px-0 relative mx-auto max-w-c1440 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10">

        <div>
          <div className="flex md:justify-between md:flex-row flex-col md:place-items-end">
            <div className="p-12 md:p-0">
              <a href='/'><img src="/images/logo/logo.png" alt="logo" className='md:w-44 w-full' /></a>
            </div>

            <ul className="flex justify-center py-8  md:pt-4 space-x-5">
              <li>
                <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-12 h-12 md:w-8 md:h-8" viewBox="0 0 512 512">
                    <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                    <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-12 h-12 md:w-8 md:h-8" viewBox="0 0 176 176">
                    <g data-name="Layer 2">
                      <rect width="176" height="176" fill="#0077b5" data-original="#0077b5" rx="24" />
                      <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-12 h-12 md:w-8 md:h-8" viewBox="0 0 24 24">
                    <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fd5" />
                      <stop offset=".5" stopColor="#ff543e" />
                      <stop offset="1" stopColor="#c837ab" />
                    </linearGradient>
                    <path fill="url(#a)" d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" data-original="url(#a)" />
                    <path fill="#fff" d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" data-original="#ffffff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-12 h-12 md:w-8 md:h-8" viewBox="0 0 1227 1227">
                    <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
                    <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
                  </svg>
                </a>
              </li>
            </ul>

          </div>

          <div className="md:pt-12">
            <div className="bg-white flex px-1 py-1 rounded-full text-left">
              <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-[15px]" />
              <button type='button'
                className="bg-[#31135e] text-white text-[15px] rounded-full px-5 py-2 tracking-wide">Subscribe</button>
            </div>
          </div>

        </div>



        <div className="md:pl-20">
          <h4 className="text-fta-primary-800 font-semibold text-lg relative max-sm:cursor-pointer">Platforms <svg
            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
            className="sm:hidden absolute right-0 top-1 fill-back1" viewBox="0 0 24 24">
            <path
              d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
              data-name="16" data-original="#000000"></path>
          </svg>
          </h4>
          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Hubspot</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Integration Services</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Marketing Glossar</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>UIPath</a>
            </li>
          </ul>
        </div>

        <div className="md:pl-20">
          <h4 className="text-fta-primary-800 font-semibold text-lg relative max-sm:cursor-pointer">Company <svg
            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
            className="sm:hidden absolute right-0 top-1 fill-back1" viewBox="0 0 24 24">
            <path
              d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
              data-name="16" data-original="#000000"></path>
          </svg>
          </h4>

          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>About us</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Careers</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Blog</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Portfolio</a>
            </li>
            <li>
              <a href='/' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Events</a>
            </li>
          </ul>
        </div>

      </div>

      <hr className="my-10 border-fta-background-300" />

      <div className="px-4 md:px-8 2xl:px-0 relative mx-auto max-w-c1440 flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a href='/terms' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Terms of Service</a>
          </li>
          <li>
            <a href='/privacy' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Privacy Policy</a>
          </li>
          <li>
            <a href='/cookie' className='hover:text-fta-primary-800 text-fta-primary-700 text-sm'>Cookie Policy</a>
          </li>
        </ul>

        <p className='text-fta-primary-700 text-sm md:ml-auto'>Copyright © 2024<a href='https://ftanails.com/'
          target='_blank' className="hover:underline mx-1">FTAnails</a>All Rights Reserved.</p>
      </div>

    </footer>
  )
};

export default Footer;
