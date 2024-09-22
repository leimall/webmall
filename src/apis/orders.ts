import type { Response  } from '@/types/respones'
import type { Order } from '@/types/stores/orders';
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

export const getOrderId = () => {
  return request({
    url: '/orders/orderid',
    method: 'get'
  })
}