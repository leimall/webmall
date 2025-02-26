// utils/axios.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, type AxiosError } from 'axios';
// import { useSettingStore } from '@/store/user';
// import { Toast } from 'react-vant';
import { message } from "antd";
import { useAuthStore } from '@/stores/useUserinfoStroe';
// import { useRouter } from 'next/navigation'

// 创建新的axios实例
const service = axios.create({
  // baseURL: '//localhost:3009/api/web',
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api/web',
  timeout: 100000,
});

// 添加一个请求拦截器
service.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const { token, user } = useAuthStore.getState();
      if (token) config.headers['x-token'] = token;
      if (user?.userId) config.headers['x-user-id'] = user.userId;
    }
    config.headers['Content-Type'] = 'application/json';

    // message.loading({
    //   content: 'Loading...',
    //   duration: 0, // 一直存在
    // });
    return config;
  },  (error: AxiosError) => {
    message.error({
      content: '请求错误，请稍后再试',
      duration: 5,
    });
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      if (data.code === 0) {
        // 接口请求结果正确
        return data;
      } else {
        return Promise.reject({ code: data.code, message: data.message });
      }
    }
  },
  (error: AxiosError) => {
    // const router = useRouter()
    const { response } = error;
    const { clearAuth } = useAuthStore.getState();
    if (JSON.stringify(error).includes('Network Error')) {
      message.error({
        content: '网络超时',
        duration: 5,
      });
    } else if (response && response.status === 401) {
      message.error({
        content: '未授权，请重新登录',
        duration: 5,
      });
      clearAuth();
      // router.push('/auth/signin');
    } else {
      message.error({
        content: `请求错误，状态码：${response?.status}`,
        duration: 5,
      });
    }
    return Promise.reject(error);
  }
);

export default service;
