import { data } from 'tailwindcss/defaultTheme';
import type { Response  } from '@/types/respones'
import type { Order, OrderType} from '@/types/stores/orders';
import request from '@/utils/request'
type orderResponse = Response;


// export const getProductCart = (id: string): Promise<ProductDetailResponse> => {
//   return request({
//     url: `/product/cart/${id}`,
//     method: 'get'
//   })
// }

export const createOrderForDB = (data: Order): Promise<orderResponse> => {
  return request({
    url: '/orders/create',
    method: 'post',
    data
  })
}

export const getOrderId = (): Promise<orderResponse> => {
  return request({
    url: '/orders/orderid',
    method: 'get'
  })
}

export const updateOrderInfo = (data: OrderType): Promise<orderResponse> => {
  return request({
    url: '/orders/update',
    method: 'post',
    data
  })
}

export const getOneOrderById = (id: string): Promise<orderResponse> => {
  return request({
    url: `/orders/${id}`,
    method: 'get'
  })
}

export const getMyselfOrder = (data: any): Promise<orderResponse> => {
  return request({
    url: '/orders/myself',
    method: 'get',
    params: data
  })
}
