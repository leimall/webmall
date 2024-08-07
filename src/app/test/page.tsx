'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Drawer, type DrawerProps, type RadioChangeEvent } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import type button from 'antd/es/button';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const [islogin, setLogin] = useState(false);
	const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

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

	const onLogin = () => {
		setLogin(true);
	};

	return (
		<header className="flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">

			<div className="mx-auto max-w-c-1440 flex flex-wrap justify-between items-center gap-2 w-full">

				<Link href="/">
					<div className='flex justify-center items-end'>
						<Image src="/images/logo/hlogo.png" alt="logo" width={48} height={48} />
						<span>F</span>inger
						<span>T</span>ip
						<span>A</span>rtistry
					</div>
				</Link>


				<div id="collapseMenu"
					className="hidden max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:z-50 transition-transform duration-300 transform lg:flex lg:ml-14 lg:gap-x-5">
					<ul className="lg:flex max-lg:space-y-8 max-lg:p-6">
						<li className="max-lg:border-b max-lg:py-3 px-3">
							<a href="/" className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]">
								Home
							</a>
						</li>
						<li className="max-lg:border-b max-lg:py-3 px-3">
							<a href="/" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
								Team
							</a>
						</li>
						<li className="max-lg:border-b max-lg:py-3 px-3">
							<a href="/" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
								Feature
							</a>
						</li>
						<li className="max-lg:border-b max-lg:py-3 px-3">
							<a href="/" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
								Blog
							</a>
						</li>
						<li className="max-lg:border-b max-lg:py-3 px-3">
							<a href="/" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
								About
							</a>
						</li>
					</ul>
				</div>

				<div className='w-0 lg:w-68 md:w-48'>
				</div>


				<div className="flex items-center lg:ml-auto max-lg:w-full">
					<div className="text-3xl font-bold text-fta-primary-400 px-2 md:px-4">
						<Link href="/cart">
							<ShoppingCartOutlined />
						</Link>
					</div>

					{
						islogin ? (
							<div className='px-2 md:px-4'>
								<Avatar size={32}  style={{ backgroundColor: '#8d1a25' }}>
								R
								</Avatar>
							</div>
						) : (
							<div onClick={onLogin} className="text-md font-bold text-fta-primary-400 px-2 md:px-4">
								Sign in
							</div>
						)
					}


					<button id="toggleOpen" onClick={showDrawer} className="lg:hidden ml-auto">
						<svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>

				<div className="flex lg:w-96 w-full">
					<div className="flex w-full max-xl:w-full bg-gray-100 px-3 py-2 rounded outline outline-transparent focus-within:outline-fta-primary-500 focus-within:bg-transparent">
						<input
							type="text"
							placeholder="Search something..."
							className="w-full text-sm bg-transparent rounded outline-none pr-2"
						/>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
							<path
								d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
							></path>
						</svg>
					</div>
				</div>



				<Drawer
					title="FingerTipArtistry"
					placement={"left"}
					closable={false}
					onClose={onClose}
					open={open}
					width={280}
					key={"left"}
					footer="https://ftanails.com"
				>
					<button
						id="toggleClose"
						onClick={onClose}
						className="fixed top-4 right-4 z-[1001] rounded-full bg-white p-3">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
							<path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
							<path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
						</svg>
					</button>

					{
						islogin ? (
							<div className='fixed top-0 left-52 z-[1001] p-3'>
								<Avatar size={32}  style={{ backgroundColor: '#8d1a25' }}>
								R
								</Avatar>
							</div>
						) : (
							<>
					<div onClick={onLogin} className='border-b text-lg border-gray-200 pb-4 mb-4'>
						Sign in
					</div>
					<div onClick={onLogin} className='border-b text-lg border-gray-200 pb-4 mb-4'>
						Sign up
					</div>
							</>
						)
					}

				</Drawer>




			</div>
		</header>
	);
};


