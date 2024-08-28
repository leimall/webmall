'use client'

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Drawer, Dropdown, Menu, type MenuProps } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import CartIcon from "@/components/Common/CartIcon";
import { usePathStore } from '@/stores/usePathStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { token, user, clearAuth } = useAuthStore();
  const { setRedirectPath } = usePathStore();
  
  const showDrawer = () => {
    setOpen(true);
    toggleMenu();
  };

  const onClose = () => {
    setOpen(false);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    clearAuth()
    router.push("/");
  }

  const handleCartClick = () => {
    if (!token) {
      if (window.location.pathname !== '/auth/signin') {
        setRedirectPath(window.location.pathname);
      }
      router.push('/auth/signin');
    } else  {
      router.push('/cart')
    }
  }
  const items: MenuProps['items'] = [{
    key: "profile",
    label: (
      <Link href="/myself/profile">Profile</Link>
    )
  }, {
    key: "orders",
    label: (
      <Link href="/myself/orders">Orders</Link>
    )
  }, {
    key: "addresses",
    label: (
      <Link href="/myself/address">Address</Link>
    )
  }, {
    key: "singout",
    label: (
      <div onClick={signout}>Sign Out</div>
    )
  }]


  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="mx-auto max-w-c-1440 flex flex-wrap justify-between align-middle items-center gap-2 w-full">
        <Link href="/">
          <div className='flex justify-center text-fta-primary-500 items-end'>
            <Image src="/images/logo/hlogo.png" alt="logo" width={48} height={48} />
            <span className='text-lg'>F</span>inger
            <span className='text-lg'>T</span>ip
            <span className='text-lg'>A</span>rtistry
          </div>
        </Link>

        <div className="hidden w-1/2 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:z-50 transition-transform duration-300 transform lg:flex lg:ml-14 lg:gap-x-5">
          <div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-fta-primary-500 focus-within:bg-transparent">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <div className='w-0 lg:w-68 md:w-48'></div>

        <div className="flex items-center lg:ml-auto max-lg:w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <div onClick={handleCartClick} className="text-2xl font-bold text-fta-primary-400 pl-0 pr-4 md:px-4">
              <CartIcon />
            </div>
          </Suspense>
          <div className='px-1 md:px-4'>|</div>
          {user ? (
            <Dropdown className='cursor-pointer' menu={{ items }} placement="bottom" trigger={['click']} arrow>
              <div className='pr-1 md:px-4'>
                {user.headerImg ? (
                  <Avatar src={user.headerImg} size={32} />) : (
                  <Avatar size={32} style={{ backgroundColor: '#8d1a25' }}>
                    {user.userName.charAt(0).toUpperCase()}
                  </Avatar>
                )}
              </div>
            </Dropdown>
          ) : (
            <Link href="/auth/signin">
              <div className="text-sm md:text-md font-bold text-fta-primary-400 pr-1 md:px-4">
                Sign in
              </div>
            </Link>
          )}
          <div onClick={showDrawer} className="lg:hidden text-3xl font-bold ml-auto">
            <MenuUnfoldOutlined />
          </div>
        </div>

        <div className="lg:hidden lg:w-96 w-full lg:pt-0 pt-2">
          <div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-fta-primary-500 focus-within:bg-transparent">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <Drawer title="FingerTipArtistry" placement={"left"} closable={false} onClose={onClose} open={open} width={280} key={"left"} footer="https://ftanails.com">
          <button id="toggleClose" onClick={onClose} className="fixed top-4 right-4 z-[1001] rounded-full bg-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>
          {user ? (
            <>
              <div className='fixed top-0 left-52 z-[1001] p-3'>
                {user.headerImg ? (
                  <Avatar src={user.headerImg} size={32} shape="square" />) : (
                  <Avatar size={32} shape="square" style={{ backgroundColor: '#8d1a25' }}>
                    {user.userName.charAt(0).toUpperCase()}
                  </Avatar>

                )}
              </div>
              <Link href="/myself/profile">
                <div className='border-b text-lg border-gray-200 pb-4 mb-4'>
                  Profile
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <div className='border-b text-lg border-gray-200 pb-4 mb-4'>
                  Sign in
                </div>
              </Link>
              <Link href="/auth/signup">
                <div className='border-b text-lg border-gray-200 pb-4 mb-4'>
                  Sign up
                </div>
              </Link>
            </>
          )}
        </Drawer>
      </div>
    </header>
  );
}
