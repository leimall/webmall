import { getCategoryList } from '@/apis/category';
import type { ProductComment } from '@/types/product_comment';
import type { Product, ProductDetail } from '@/types/products';
import type { ResponseData, ResponsePageList  } from '@/types/respones'
import request from '@/utils/request'
type ProductDetailResponse = ResponseData<ProductDetail>;
type productResponse = ResponseData<Product[]>;
type ProductCommentListResponse = ResponsePageList<ProductComment[]>;

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

export const getProductByComment = (data: any): Promise<ProductCommentListResponse> => {
  return request({
    url: `/product/comment`,
    method: 'get',
    params: data
  })
}