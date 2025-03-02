"use client";
import { Divider, message } from "antd";
import { getCaptcha, signIn } from "@/apis/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useUserinfoStroe"
import { useCartStore } from "@/stores/useCartStore";

export default function Signin() {
  const { fetchCartItems } = useCartStore();
  const [data, setData] = useState<{ picPath?: string; captchaId: string } | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setAuth, returnUrl, clearReturnUrl } = useAuthStore();
  // cons

  const fetchCaptcha = async (): Promise<void> => {
    try {
      const response = await getCaptcha();
      setData(response.data);
    } catch (error) {
      message.error("Failed to fetch captcha");
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const validateFields = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      message.error("Email is required");
      return false;
    }
    if (!emailPattern.test(email)) {
      message.error("Invalid email format");
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
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSigin();
  };

  const handleSigin = async () => {
    if (validateFields()) {
      setLoading(true);
      try {
        const response = await signIn({ email, password, captcha, captchaId: data?.captchaId || "" });
        const { token, user } = response.data;
        setAuth(token, user);
        fetchCartItems();
        message.success("Signed in successfully");
        if (returnUrl) {
          router.push(returnUrl);
          clearReturnUrl();
        }
        router.push("/");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error("Please check your email or password and enter the correct captcha!");
        setCaptcha(""); // Reset captcha on failed login
        fetchCaptcha(); // Refresh captcha on failed login
      }
    }
  };

  return (
    <section className="py-4 md:py-20">
      <div className="relative m-4">
        <form className="bg-white max-w-xl w-full mx-auto shadow-md p-4 md:p-16 rounded-2xl" onSubmit={handleSubmit}>
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-bold text-center">Sign in</h3>
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Email</label>
            <input
              name="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
              placeholder="Enter email"
            />
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Password</label>
            <input
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Captcha</label>
            <div className="flex items-center justify-between">
            <input
              name="captcha"
              type="text"
              required
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="w-2/3 bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary-400 px-2 py-3 outline-none"
              placeholder="Enter captcha"
            />
            {data?.picPath ? (
              <Image
                src={data.picPath}
                alt="Captcha"
                width={140}
                height={60}
                className="h-12 object-cover cursor-pointer"
                onClick={fetchCaptcha}
              />
            ) : (
              <button className="text-primary-500 border p-2 border-primary-400" onClick={fetchCaptcha}>Refresh Captcha</button>
            )}
            </div>
          </div>

          <div className="mt-8">
            <button type="submit" className={`w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-primary-500 hover:bg-primary-400 focus:outline-none transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Loading...' : 'Sign in'}
            </button>
          </div>

          <div className="pt-10">
            <Divider><span className="text-gray-800 text-sm mt-8 text-center"> New to FTAnails? </span></Divider>
            <Link href="/auth/signup">
              <p className="border-2 border-bg-200 p-1 rounded-md text-primary-400 text-center font-semibold hover:underline ml-1">Create your FTAnails account</p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}