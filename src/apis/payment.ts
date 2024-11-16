import type { Response  } from '@/types/respones'
import type { llpayCardType } from '@/types/stores/payment';
import request from '@/utils/request'
type paymentResponse = Response;

export const createPayment = (data: llpayCardType): Promise<paymentResponse> => {
  return request({
    url: '/llpay/payment',
    method: 'post',
    data
  })
}
