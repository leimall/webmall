"use client";
import { getCaptcha, signUp } from "@/apis/auth";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [data, setData] = useState<{ picPath?: string } | null>(null);
  const [userName, setUsername] = useState("");
  const [captchaId, setCaptchaId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    if (!userName) {
      message.error("User name is required");
      return false;
    }
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
      setLoading(true);
      try {
        const response = await signUp({ userName,email, password, captcha, captchaId });
        message.success("Signed up successfully");
        router.push("/auth/signin"); // Redirect to home page or any other page
        setLoading(false);
      } catch (error) {
        message.error("Please check your email or password and enter the correct captcha!");
        setCaptcha(""); // Reset captcha on failed login
        fetchCaptcha(); // Refresh captcha on failed login
        setLoading(false);
      }
    };
  };


	return (
		<>
			{/* <!-- ===== SignUp Form Start ===== --> */}
			<section className="py-4 md:py-20">
				<div className="font-[sans-serif] relative">
					<div className="relative m-4">
						<form className="bg-white max-w-xl w-full mx-auto border border-gray-300 p-4 md:p-16 rounded-md" onSubmit={handleSubmit}>
							<div className="mb-8">
								<h3 className="text-gray-800 text-3xl font-bold text-center">Create account</h3>
							</div>

							<div>
								<label className="text-gray-800 text-xs block mb-2">Your Name</label>
								<div className="relative flex items-center">
                <input
										name="userName"
										type="text"
										required
										value={userName}
										onChange={(e) => setUsername(e.target.value)}
										className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
										placeholder="Enter your name"
									/>
									<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
										<circle cx="10" cy="7" r="6" data-original="#000000"></circle>
										<path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
									</svg>
								</div>
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
										className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
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
										className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
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
											className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
											placeholder="Enter captcha"
										/>
									</div>
									<div className="pl-4" onClick={fetchCaptcha} style={{ cursor: 'pointer' }}>
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
									className="h-4 w-4 shrink-0 rounded bg-primary-500"
								/>
								<label className="ml-3 block text-sm">
                  I accept the  <Link className="text-primary-400 hover:text-primary-500" href={"/document/terms"}>Terms of Service</Link> and <Link className="text-primary-400 hover:text-primary-500" href={"/document/privacy"}>Privacy Policy</Link>. 
                </label>
							</div>

							<div className="mt-8">
              <button type="submit" className={`w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-primary-500 hover:bg-primary-400 focus:outline-none transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Loading...' : 'Register'}
								</button>
								<p className="text-gray-800 text-sm mt-8 text-center">Already have an account?
									<Link href="/auth/signin">
									 <span className="text-primary-400 font-semibold hover:underline ml-1">Sign in here</span>
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>

			</section>
			{/* <!-- ===== SignUp Form End ===== --> */}
		</>
	);
}