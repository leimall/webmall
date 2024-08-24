import type { ProductDetail } from '@/types/products';
import type { ResponseData  } from '@/types/respones'
import request from '@/utils/request'
type ProductDetailResponse = ResponseData<ProductDetail>;

export const getProductList = () => {
  return request({
    url: '/product/lastest',
    method: 'get'
  })
}


export const getProductDetail = (id: string): Promise<ProductDetailResponse> => {
  return request({
    url: `/product/detail/${id}`,
    method: 'get'
  })
}