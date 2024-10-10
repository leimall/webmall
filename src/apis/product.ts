import { getCategoryList } from '@/apis/category';
import type { Product, ProductDetail } from '@/types/products';
import type { ResponseData  } from '@/types/respones'
import request from '@/utils/request'
type ProductDetailResponse = ResponseData<ProductDetail>;
type productResponse = ResponseData<Product[]>;

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

export const getProductByCategory = (id: string): Promise<productResponse> => {
  return request({
    url: `/product/category/${id}`,
    method: 'get'
  })
}