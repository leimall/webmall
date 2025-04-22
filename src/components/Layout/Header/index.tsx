'use client'

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Drawer, Dropdown, type MenuProps } from 'antd';
import { BarsOutlined, CommentOutlined, IdcardOutlined, LogoutOutlined, TeamOutlined, TruckOutlined } from '@ant-design/icons';
import CartIcon from "@/components/Common/CartIcon";
import { usePathStore } from '@/stores/usePathStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useCartStore } from '@/stores/useCartStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Category } from '@/types/category';
import useMenuStore from '@/stores/useMenuStore';

import { FaXmark, FaAngleDown, FaGenderless, FaAngleRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { AiFillProduct, AiOutlineMenuUnfold } from "react-icons/ai";
import { TbTax } from 'react-icons/tb';

export default function Header() {
  const [list, setList] = useState<Category[]>([]);
  const { fetchCategories, categories } = useMenuStore();



  useEffect(() => {
    if (categories.length > 0) {
      setList(categories);
    } else {
      fetchCategories();
    }
  }, [categories]);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { token, user, clearAuth } = useAuthStore();
  const { clearCart } = useCartStore();
  const { setRedirectPath } = usePathStore();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      router.push('/search');
    } else {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSvgClick = () => {
    handleSearch({ preventDefault: () => { } } as React.FormEvent<HTMLFormElement>);
  };

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
    ),
    icon: <BarsOutlined />
  }, {
    key: "orders",
    label: (
      <Link href="/profile/orders">Orders</Link>
    ),
    icon: <TruckOutlined />
  }, {
    key: "addresses",
    label: (
      <Link href="/profile/address">Address</Link>
    ),
    icon: <IdcardOutlined />
  }, {
    key: "singout",
    label: (
      <div onClick={signout}>Sign Out</div>
    ),
    icon: <LogoutOutlined />
  }]

  const gotoUrl = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    router.push(url)
    onClose()
  }


  return (
    <header>
      <div className="py-4 px-4 sm:px-10 bg-bg-50 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="mx-auto max-w-c-1440">
          <div className='flex justify-between align-middle items-center gap-2 w-full'>

            <div className='flex justify-start align-middle items-center gap-2'>
              <AiOutlineMenuUnfold onClick={showDrawer} className="lg:hidden text-4xl" />
              <Link href="/">
                <div className='flex justify-center text-primary-500 items-end md:text-xl font-bold'>
                  <Image src="/images/logo/hlogo.png" alt="logo" width={48} height={48} />
                  <span className='text-md md:text-2xl'>F</span><span>inger</span>
                  <span className='text-md md:text-2xl'>T</span><span>ip</span>
                  <span className='text-md md:text-2xl'>A</span><span>rtistry</span>
                </div>
              </Link>
            </div>
            <div className="hidden transition-transform duration-300 transform lg:flex lg:gap-x-5">
              <form className='w-96 min-w-96' onSubmit={handleSearch}>
                <div className="flex bg-white px-3 py-2 rounded outline outline-white focus-within:outline-primary-500 focus-within:bg-white w-96">
                  <input type="text" placeholder="Search something..." value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} className="text-sm bg-white rounded outline-none pr-2 w-full" />
                  <svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-text-secondary">
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </div>
              </form>
            </div>

            <div className="flex justify-end items-center">
              <Suspense fallback={<div>Loading...</div>}>
                <div onClick={handleCartClick} className="text-2xl font-bold text-primary-400">
                  <CartIcon />
                </div>
              </Suspense>
              <div className='px-2 md:px-4'>|</div>
              {user ? (
                <Dropdown className='cursor-pointer' menu={{ items }} placement="bottomRight" trigger={['click']} arrow>
                  <div>
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
                  <div className="text-sm md:text-md font-bold text-primary-400">
                    Sign in
                  </div>
                </Link>
              )}
            </div>

          </div>


          <div className="lg:hidden lg:w-96 w-full lg:pt-0 pt-2">
            <form onSubmit={handleSearch}>
              <div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-primary-500 focus-within:bg-transparent">
                <input type="text" value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
                <svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
            </form>
          </div>

          <Drawer title="FingerTipArtistry" placement={"left"} closable={false} onClose={onClose} open={open} footer="https://ftanails.com">
            <div id="toggleClose" onClick={onClose} className="fixed w-8 h-8 top-4 right-4 cursor-pointer z-[2222]">
              <FaXmark className='text-2xl text-gray-500' />
            </div>
            <div onClick={(e) => gotoUrl(e, '/')} className='text-primary-500 flex items-center border-b text-md border-bg-200 pb-4 mb-4'>
              <FaHome className='text-primary-500 text-md mr-2' /> Home
            </div>
            <div onClick={(e) => gotoUrl(e, '/search')} className='text-primary-500 flex items-center border-b text-md border-bg-200 pb-4 mb-4'>
              <AiFillProduct className='text-primary-500 text-md mr-2' /> All Products
            </div>
            <div onClick={(e) => gotoUrl(e, '/usanotax')} className='text-primary-500 flex items-center border-b text-md border-bg-200 pb-4 mb-4'>
              <TbTax className='text-primary-500 text-md mr-2' /> Ready to Ship
            </div>
            
            {list && list.length > 0 ? (
              list.map((mainCategory, index) => (
                index === 0 && (
                <div key={"Drawer" + mainCategory.ID}>
                  <h1>{"Drawer" + mainCategory.ID}</h1>
                  <div className='flex items-center border-b text-md border-bg-200 pb-4 mb-4'>
                    <FaAngleDown className='text-primary-500 text-sm mr-2' /> {mainCategory.title_en}
                  </div>
                  {mainCategory.children && mainCategory.children.map((subCategory) => (
                    <div key={"sub" + subCategory.ID} onClick={(e) => gotoUrl(e, `/category/${subCategory.url}`)} className='text-primary-500 flex items-center text-sm pb-2 mb-2 pl-4'>
                      <FaGenderless className='text-primary-500 text-xs mr-2' /> {subCategory.title_en}
                    </div>
                  ))}
                </div>
                )
              ))
            ) : (
              <div>No categories available</div>
            )}
            <div onClick={(e) => gotoUrl(e, '/document/faq')} className='text-primary-500 border-b text-md border-bg-200 pb-4 mb-4'>
              <CommentOutlined className='mr-2' /> FAQ
            </div>
            <div onClick={(e) => gotoUrl(e, '/document/about')} className='flex items-center text-primary-500 border-b border-bg-200 pb-4 mb-4'>
              <TeamOutlined className='mr-2 text-md' /> About Us
            </div>


            {user ? (
              <>
                <div className='fixed top-0 right-14 z-[1001] p-3'>
                  {user.headerImg ? (
                    <Avatar src={user.headerImg} size={32} />) : (
                    <Avatar size={32} style={{ backgroundColor: '#8d1a25' }}>
                      {user.userName.charAt(0).toUpperCase()}
                    </Avatar>

                  )}
                </div>
                <div className='text-primary-500 flex items-center' onClick={signout}>
                  <LogoutOutlined className='mr-2' /> Sign Out</div>
              </>
            ) : (
              <>
                <div onClick={(e) => gotoUrl(e, '/auth/signin')} className='border-b text-md font-b border-bg-200 pb-4 mb-4'>
                  Sign in
                </div>
                <div onClick={(e) => gotoUrl(e, '/auth/signup')} className='border-b text-md border-bg-200 pb-4 mb-4'>
                  Sign up
                </div>
              </>
            )}

          </Drawer>

        </div>

      </div>

      <div className="hidden bg-bg-50 md:block p-4">
        <div className='mx-auto max-w-c-1280 flex flex-wrap gap-12 items-center justify-center  md:text-md md:font-bold font-bold'>
          <Link href="/">
            <div className='text-primary-500 max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
              Home
            </div>
          </Link>
          <Link href="/usanotax">
            <div className='text-primary-500 max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            Ready to Ship
            </div>
          </Link>
          {list && list.length > 0 ? (
            list.map((mainCategory, index) => (
              index === 0 && (
              <div key={mainCategory.ID} className="relative group">
                <div className='text-primary-500 cursor-pointer'>
                  <div className='flex items-center'>
                    <FaAngleRight className='text-primary-500 text-xs mr-1' />{mainCategory.title_en}
                  </div>
                </div>
                {mainCategory.children && mainCategory.children.length > 0 && (
                  <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 w-52">
                    {mainCategory.children.map((subCategory) => (
                      <Link key={subCategory.ID} href={`/category/${subCategory.url}`}>
                        <div className='flex items-center text-md text-primary-500 p-3 hover:bg-gray-100'>
                          <FaGenderless className='text-primary-500 text-xs mr-2' /> {subCategory.title_en}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              )
            ))
          ) : (
            <div className='text-sm text-primary-500'>No categories available</div>
          )}

          <Link href="/document/faq">
            <div className='text-primary-500 max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
              FAQ
            </div>
          </Link>
          <Link href="/document/about">
            <div className='text-primary-500 max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
              About us
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}