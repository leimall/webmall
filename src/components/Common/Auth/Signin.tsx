"use client";
import { Divider, message } from "antd";
import { getCaptcha, signIn } from "@/apis/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useUserinfoStroe"

export default function Signin() {
  const [data, setData] = useState<{ picPath?: string } | null>(null);
  const [captchaId, setCaptchaId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const fetchCaptcha = async () => {
    try {
      const response = await getCaptcha();
      setData(response.data);
      setCaptchaId(response.data.captchaId);
    } catch (error) {
      message.error("Failed to fetch captcha");
    }
  };

  useEffect(() => {
    fetchCaptcha()
  }, []);

  const validateFields = () => {
    if (!email) {
      message.error("Email is required");
      return false;
    }
    if (!password) {
      message.error("Password is required");
      return false;
    }
    if (!captcha) {
      message.error("Captcha is required");
      return false;
    }
    if(!rememberMe) {
      message.error("I agree to the terms and conditions is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields() && rememberMe ) {
      try {
        const response = await signIn({ email, password, captcha, captchaId });
        const { token, user } = response.data;
      setAuth(token, user); // 保存token和用户信息到Zustand
      message.success("Signed in successfully");
        router.push("/"); // Redirect to home page or any other page
      } catch (error) {
        message.error(" to sign in");
        setCaptcha(""); // Reset captcha on failed login
        fetchCaptcha(); // Refresh captcha on failed login

      }
    };
  };


  return (
    <>
      <section className="py-4 md:py-20">
        <div className="font-[sans-serif] relative">
          <div className="relative m-4">
            <form className="bg-white max-w-xl w-full mx-auto shadow-md p-4 md:p-16 rounded-2xl">
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-bold text-center">Sign in</h3>
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                <input
										name="email"
										type="text"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none"
										placeholder="Enter email"
									/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                <input
										name="password"
										type="password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none"
										placeholder="Enter password"
									/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Captcha</label>
                <div className="flex justify-between items-center">
                  <div className="w-2/3 relative flex items-center">
                  <input
											name="captcha"
											type="text"
											required
											value={captcha}
											onChange={(e) => setCaptcha(e.target.value)}
											className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none"
											placeholder="Enter captcha"
										/>
                  </div>
                  <div className="pl-4 cursor-pointer" onClick={fetchCaptcha}>
                    {data?.picPath && <Image src={data.picPath} alt="Captcha" width={140} height={60} />}
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-8">
              <input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									className="h-4 w-4 shrink-0 rounded bg-fta-primary-500"
								/>
                <label className="ml-3 block text-sm">
                  I accept the <a href="/" className="text-fta-primary-400 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>

              <div className="mt-8">
                <button type="button" className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-fta-primary-500 hover:bg-fta-primary-400 focus:outline-none transition-all" onClick={handleSubmit}>
                  Sign in
                </button>
              </div>
              <div className="pt-10">
                <Divider><span className="text-gray-800 text-sm mt-8 text-center"> New to FTAnails? </span></Divider>
                <Link href="/auth/signup">
                  <p className="border-2 border-fta-background-200 p-1 rounded-md text-fta-primary-400 text-center font-semibold hover:underline ml-1 border-spacing-1">Create your FTAnails account</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
}