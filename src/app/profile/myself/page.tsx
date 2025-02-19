"use client"

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { message } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getUserInfo, updateUserInfo } from '@/apis/auth';

export default function ProfilePage() {
  const { user, setUser } = useAuthStore(); // 假设 setUser 是一个用来更新用户信息的函数
  const [userName, setUserName] = useState(user?.userName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  const fetchUserInfo = async () => {
    try {
      const response = await getUserInfo();
    } catch (error) {
      message.error("Failed to fetch captcha");
    }
  };

  useEffect(() => {
    fetchUserInfo()
  }, []);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const updatedUser = {
      userName,
      email,
      phone,
    };

    try {
      const response = await updateUserInfo(updatedUser)
      setUser(response.data);
      message.success('Profile updated successfully.');
    } catch (error) {
      message.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
          <h2 className="pl-3 mb-4 text-center text-2xl font-semibold">Settings</h2>
            <div className="flex text-bold items-center justify-center px-3 py-2.5 font-bold bg-white text-primary-500 border rounded-full border-primary-500">
              Profile
            </div>
            <a href="/profile/orders" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-primary-500 hover:border hover:rounded-full border-primary-500">
              Order
            </a>
            <a href="/profile/address" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-primary-500 hover:border hover:rounded-full border-primary-500">
            Address
            </a>
          </div>
        </div>
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
              <form onSubmit={handleSave} className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar" />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                      Change picture
                    </button>
                    <button type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                      Delete picture
                    </button>
                  </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
