'use client'

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Drawer, Dropdown, type MenuProps } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import CartIcon from "@/components/Common/CartIcon";
import { usePathStore } from '@/stores/usePathStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useCartStore } from '@/stores/useCartStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Category } from '@/types/category';
import useMenuStore from '@/stores/useMenuStore';

export default function Header() {
  const [list, setList] = useState<Category[]>([]);
  const { fetchCategories, categories } = useMenuStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setList(categories);
    }
  }, [categories]);

  const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { token, user, clearAuth } = useAuthStore();
  const { clearCart } = useCartStore();
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
    clearCart()
    router.push("/");
  }

  const handleCartClick = () => {
    if (!token) {
      if (window.location.pathname !== '/auth/signin') {
        setRedirectPath(window.location.pathname);
      }
      router.push('/auth/signin');
    } else {
      router.push('/cart')
    }
  }
  const items: MenuProps['items'] = [{
    key: "profile",
    label: (
      <Link href="/profile/myself">Profile</Link>
    )
  }, {
    key: "orders",
    label: (
      <Link href="/profile/orders">Orders</Link>
    )
  }, {
    key: "addresses",
    label: (
      <Link href="/profile/address">Address</Link>
    )
  }, {
    key: "singout",
    label: (
      <div onClick={signout}>Sign Out</div>
    )
  }]


  return (
    <header className="border-b py-4 px-4 sm:px-10 bg-background-back1 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="mx-auto max-w-c-1440 flex flex-wrap justify-between align-middle items-center gap-2 w-full">
        <div onClick={showDrawer} className="lg:hidden text-3xl font-bold">
          <MenuUnfoldOutlined />
        </div>
        <Link href="/">
          <div className='flex justify-center text-primary-500 items-end'>
            <Image src="/images/logo/hlogo.png" alt="logo" width={48} height={48} />
            <span className='text-md md:text-xl'>F</span>inger
            <span className='text-md md:text-xl'>T</span>ip
            <span className='text-md md:text-xl'>A</span>rtistry
          </div>
        </Link>

        <div className="hidden w-1/2 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:z-50 transition-transform duration-300 transform lg:flex lg:ml-14 lg:gap-x-5">
          <div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-primary-500 focus-within:bg-transparent">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <div className='w-0 lg:w-68 md:w-48'></div>

        <div className="flex items-center lg:ml-auto max-lg:w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <div onClick={handleCartClick} className="text-2xl font-bold text-primary-400 pl-0 pr-4 md:px-4">
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
              <div className="text-sm md:text-md font-bold text-primary-400 pr-1 md:px-4">
                Sign in
              </div>
            </Link>
          )}
        </div>

        <div className="lg:hidden lg:w-96 w-full lg:pt-0 pt-2">
          <div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-primary-500 focus-within:bg-transparent">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <Drawer title="FingerTipArtistry" placement={"left"} closable={false} onClose={onClose} open={open} width={280} key={"left"} footer="https://ftanails.com">
          <div id="toggleClose" onClick={onClose} className="fixed w-8 h-8 top-4 right-8 cursor-pointer bg-white z-[2222] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-2 w-4 items-center  bg-white text-black" viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-14.072-18.752-32.142-18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
          <Link href="/">
            <div className='border-b text-md border-gray-200 pb-4 mb-4'>
              Home
            </div>
          </Link>
          {list && list.length > 0 ? (
            list.map((mainCategory) => (
              <div key={mainCategory.ID}>
                <div className='border-b text-md border-gray-200 pb-4 mb-4'>
                    {mainCategory.title_en}
                </div>
                {mainCategory.children && mainCategory.children.map((subCategory) => (
                  <Link key={subCategory.ID} href={`/category/${subCategory.url}`}>
                    <div className='border-b text-sm border-gray-200 pb-2 mb-2 pl-4'>
                      {subCategory.title_en}
                    </div>
                  </Link>
                ))}
              </div>
            ))
          ) : (
            <div>No categories available</div>
          )}
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
              <Link href="/profile/myself">
                <div className='border-b text-md border-gray-200 pb-4 mb-4'>
                  Profile
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <div className='border-b text-md border-gray-200 pb-4 mb-4'>
                  Sign in
                </div>
              </Link>
              <Link href="/auth/signup">
                <div className='border-b text-md border-gray-200 pb-4 mb-4'>
                  Sign up
                </div>
              </Link>
            </>
          )}

        </Drawer>
      </div>
      <div className="hidden md:block">
        <div className='mx-auto max-w-c-1280 flex flex-wrap gap-12 items-center justify-center mt-4 text-sm font-bold'>
          <Link href="/">
            <div className=' text-primary-500'>
              Home
            </div>
          </Link>
          {list && list.length > 0 ? (
            list.map((mainCategory) => (
              <div key={mainCategory.ID} className="relative group">
                <Link href={`/category/${mainCategory.url}`}>
                  <div className=' text-primary-500'>
                    {mainCategory.title_en}
                  </div>
                </Link>
                {mainCategory.children && mainCategory.children.length > 0 && (
                  <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 w-52">
                    {mainCategory.children.map((subCategory) => (
                      <Link key={subCategory.ID} href={`/category/${subCategory.url}`}>
                        <div className='text-sm text-primary-500 p-3 hover:bg-gray-100'>
                          {subCategory.title_en}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className='text-sm'>No categories available</div>
          )}

          <Link href="/document/faq">
            <div className=' text-primary-500'>
              FAQ
            </div>
          </Link>
          <Link href="/document/about">
            <div className=' text-primary-500'>
              About us
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}