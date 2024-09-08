import type { ProductDetail } from '@/types/products';
import type { ResponseData  } from '@/types/respones'
import request from '@/utils/request'
type ProductDetailResponse = ResponseData<ProductDetail>;


export const getProductCart = (id: string): Promise<ProductDetailResponse> => {
  return request({
    url: `/product/cart/${id}`,
    method: 'get'
  })
}