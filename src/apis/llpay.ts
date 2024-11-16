import type { ReqCreateOrderType, ApiResponse } from '@/types/llpay/createOrder'
import request from '@/utils/request'
export const getLLPayToken = () => {
  return request({
    url: '/llpay/token',
    method: 'get'
  })
}



export const 	postCreatLLPayOrder = (data:ReqCreateOrderType): Promise<ApiResponse> => {
  return request({
    url: '/llpay/payment',
    method: 'post',
    data 
  })
}